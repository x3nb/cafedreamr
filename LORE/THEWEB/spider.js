/* ============================================================
   charlotte — the white spider of realm 06 (cafedreamr/LORE/THEWEB)
   ------------------------------------------------------------
   a fully procedural svg spider. nothing here is a drawing file:
   every curve is computed, so she can breathe, walk, stir, mend,
   shrink and drop on a thread.

   she is two body lobes pinched at the waist, eight legs built as
   variable-width ribbons (thick at the hip, a bulbous knee, thin
   at the foot), eight dark eyes, a violet bloom on her back and
   spinnerets behind. the bloom is for her name: violette.

   usage
     var sp = CharlotteSpider.create({size:340});
     host.appendChild(sp.el);
     sp.setMode("walk");          // rest | walk | wander | stir | mend | shrink | drop
     sp.step(1/60);               // drive her from your own rAF loop
     sp.stir(1.8);                // she noticed something

   pose is exposed (sp.pose.x / .y / .rot / .scale) so a page can
   move her itself without touching the internals.
   ============================================================ */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";

  var HEAD = { cx: 0, cy: -30, rx: 21, ry: 19 };
  var ABD  = { cx: 0, cy:  30 };
  var VB   = { x: -142, y: -142, w: 284, h: 284 };

  /* one definition per leg: hip angle, foot angle, foot reach, base width,
     knee reach factor, gait phase. right side only — the left is mirrored. */
  var LEGS = [
    { hip: -58, foot: -70, d: 100, w: 5.7, kr: 0.55, ph: 0.72 },
    { hip: -20, foot: -15, d:  96, w: 6.9, kr: 0.55, ph: 0.00 },
    { hip:  18, foot:  25, d:  90, w: 6.3, kr: 0.55, ph: 0.28 },
    { hip:  58, foot:  66, d: 100, w: 7.3, kr: 0.55, ph: 0.55 }
  ];

  var _uid = 0;
  function nextId() { _uid += 1; return "ch" + _uid.toString(36); }
  function el(tag, a) {
    var e = document.createElementNS(NS, tag);
    if (a) { for (var k in a) { if (a[k] !== undefined && a[k] !== null) e.setAttribute(k, a[k]); } }
    return e;
  }
  function r1(n) { return Math.round(n * 10) / 10; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function dir(deg) { var r = deg * Math.PI / 180; return { x: Math.cos(r), y: Math.sin(r) }; }
  function norm(p) { var l = Math.hypot(p.x, p.y) || 1e-6; return { x: p.x / l, y: p.y / l }; }
  function mid(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
  function add(a, b, s) { return { x: a.x + b.x * (s === undefined ? 1 : s), y: a.y + b.y * (s === undefined ? 1 : s) }; }
  function qpt(p0, p1, p2, t) {
    var u = 1 - t;
    return { x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
             y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y };
  }
  /* a point on the cephalothorax rim at a given angle, at radius factor f */
  function rim(deg, f) {
    var r = deg * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
    var k = 1 / Math.sqrt((c / HEAD.rx) * (c / HEAD.rx) + (s / HEAD.ry) * (s / HEAD.ry));
    return { x: HEAD.cx + c * k * f, y: HEAD.cy + s * k * f };
  }
  /* a closed outline around a centreline, of varying width, rounded at the far end */
  function ribbon(pts, widths) {
    var n = pts.length, i, L = [], R = [], N = [];
    for (i = 0; i < n; i++) {
      var a = pts[i > 0 ? i - 1 : 0], b = pts[i < n - 1 ? i + 1 : n - 1];
      var t = norm({ x: b.x - a.x, y: b.y - a.y });
      var nn = { x: -t.y, y: t.x };
      N.push(nn);
      var h = widths[i] * 0.5;
      L.push({ x: pts[i].x + nn.x * h, y: pts[i].y + nn.y * h });
      R.push({ x: pts[i].x - nn.x * h, y: pts[i].y - nn.y * h });
    }
    var d = "M" + r1(L[0].x) + " " + r1(L[0].y);
    for (i = 1; i < n; i++) { d += "L" + r1(L[i].x) + " " + r1(L[i].y); }
    var tip = pts[n - 1], rad = Math.max(widths[n - 1] * 0.5, 0.4);
    var a0 = Math.atan2(N[n - 1].y, N[n - 1].x);
    for (i = 1; i <= 8; i++) {
      var ang = a0 - Math.PI * i / 8;
      d += "L" + r1(tip.x + Math.cos(ang) * rad) + " " + r1(tip.y + Math.sin(ang) * rad);
    }
    for (i = n - 2; i >= 0; i--) { d += "L" + r1(R[i].x) + " " + r1(R[i].y); }
    return d + "Z";
  }
  /* width down the leg, by arc-length fraction, with a bulge at each joint */
  function widthAt(u, base, uk, ua) {
    var w;
    if (u <= uk) { w = lerp(1.0, 0.80, uk > 0 ? u / uk : 0); }
    else if (u <= ua) { w = lerp(0.80, 0.54, (u - uk) / ((ua - uk) || 1)); }
    else { w = lerp(0.54, 0.31, (u - ua) / ((1 - ua) || 1)); }
    var bump = 1 + 0.22 * Math.exp(-Math.pow((u - uk) / 0.075, 2))
                 + 0.12 * Math.exp(-Math.pow((u - ua) / 0.07, 2));
    return base * w * bump;
  }
  /* resample a polyline evenly by arc length; `marks` are raw indices we
     need to keep as fractions of the total length */
  function arcPts(raw, marks, n) {
    var cum = [0], total = 0, i, j = 0;
    for (i = 1; i < raw.length; i++) {
      total += Math.hypot(raw[i].x - raw[i - 1].x, raw[i].y - raw[i - 1].y);
      cum.push(total);
    }
    var out = [];
    for (i = 0; i < n; i++) {
      var target = total * i / (n - 1);
      while (j < cum.length - 2 && cum[j + 1] < target) { j++; }
      var span = cum[j + 1] - cum[j] || 1e-6;
      out.push(mid(raw[j], raw[j + 1], (target - cum[j]) / span));
    }
    return {
      pts: out,
      u: marks.map(function (k) { return total ? cum[Math.min(k, cum.length - 1)] / total : 0; })
    };
  }
  function bowCtrl(a, b, outSign, mag) {
    var m = mid(a, b, 0.5);
    var t = norm({ x: b.x - a.x, y: b.y - a.y });
    var nn = { x: -t.y, y: t.x };
    var outward = { x: m.x - HEAD.cx, y: m.y - HEAD.cy };
    var s = (nn.x * outward.x + nn.y * outward.y) >= 0 ? outSign : -outSign;
    return add(m, nn, s * mag * Math.hypot(b.x - a.x, b.y - a.y));
  }

  function create(opts) {
    opts = opts || {};
    var id = nextId();
    var size = opts.size || 320;
    var hang = !!opts.hang;

    var svg = el("svg", {
      viewBox: VB.x + " " + VB.y + " " + VB.w + " " + VB.h,
      width: size, height: size, role: "img",
      "aria-label": opts.label || "charlotte, a white spider"
    });
    svg.style.overflow = "visible";
    svg.style.display = "block";

    var defs = el("defs");
    defs.innerHTML =
      '<radialGradient id="b' + id + '" cx="32%" cy="12%" r="98%">' +
        '<stop offset="0" stop-color="#ffffff"/><stop offset=".20" stop-color="#fdf9fe"/>' +
        '<stop offset=".52" stop-color="#ecddf4"/><stop offset=".80" stop-color="#cdb5de"/>' +
        '<stop offset="1" stop-color="#a688c2"/></radialGradient>' +
      '<linearGradient id="l' + id + '" x1="0" y1="0" x2=".85" y2="1">' +
        '<stop offset="0" stop-color="#fffbff"/><stop offset=".40" stop-color="#eee0f7"/>' +
        '<stop offset=".78" stop-color="#cfb8e2"/><stop offset="1" stop-color="#a98cc6"/></linearGradient>' +
      '<radialGradient id="g' + id + '" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0" stop-color="#e0a3c8" stop-opacity=".30"/>' +
        '<stop offset=".44" stop-color="#bf40bf" stop-opacity=".085"/>' +
        '<stop offset="1" stop-color="#bf40bf" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="p' + id + '" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0" stop-color="#ffd76a" stop-opacity=".9"/>' +
        '<stop offset=".55" stop-color="#ffd76a" stop-opacity=".22"/>' +
        '<stop offset="1" stop-color="#ffd76a" stop-opacity="0"/></radialGradient>' +
      '<filter id="s' + id + '" x="-45%" y="-45%" width="190%" height="190%">' +
        '<feGaussianBlur stdDeviation="5.2"/></filter>' +
      '<filter id="n' + id + '" x="-70%" y="-70%" width="240%" height="240%">' +
        '<feGaussianBlur stdDeviation="2.4"/></filter>';
    svg.appendChild(defs);

    var root = el("g", hang ? { transform: "rotate(180)" } : null);
    svg.appendChild(root);

    if (hang) {
      root.appendChild(el("path", {
        d: "M0 56 Q 1.6 104 0 152", fill: "none",
        stroke: "rgba(255,255,255,.30)", "stroke-width": 0.9
      }));
    }

    var glow = el("g");
    glow.appendChild(el("circle", { cx: 0, cy: 0, r: 86, fill: "url(#g" + id + ")" }));
    root.appendChild(glow);

    var gLegs = el("g");
    root.appendChild(gLegs);
    var gBody = el("g");
    root.appendChild(gBody);

    /* -------- the silhouette: two lobes, pinched at the waist -------- */
    var BODY =
      "M -7 2 C -20 0, -23 -16, -21 -30 " +
      "C -20 -42, -10 -49.5, 0 -49.5 " +
      "C 10 -49.5, 20 -42, 21 -30 " +
      "C 23 -16, 20 0, 7 2 " +
      "C 15 8, 27 16, 30 30 " +
      "C 34 46, 22 64, 0 65 " +
      "C -22 64, -34 46, -30 30 " +
      "C -27 16, -15 8, -7 2 Z";

    gBody.appendChild(el("path", {
      d: BODY, transform: "translate(2.6 3.6) scale(1.04)", fill: "#170a26",
      opacity: .44, filter: "url(#s" + id + ")"
    }));
    gBody.appendChild(el("path", { d: BODY, fill: "url(#b" + id + ")" }));
    gBody.appendChild(el("path", {
      d: BODY, fill: "none", stroke: "rgba(224,163,200,.52)", "stroke-width": 1.15
    }));
    /* the waist reads as a recess, so the two lobes stay two lobes */
    gBody.appendChild(el("ellipse", {
      cx: 0, cy: 4.5, rx: 12.5, ry: 8.5, fill: "#3d1a5c", opacity: .26,
      filter: "url(#n" + id + ")"
    }));
    gBody.appendChild(el("path", {
      d: "M -9.5 3.2 Q 0 9.6 9.5 3.2", fill: "none", stroke: "rgba(120,80,160,.34)",
      "stroke-width": .9
    }));
    /* a cool wash under the abdomen, left in the light of the room */
    gBody.appendChild(el("ellipse", {
      cx: 3, cy: 44, rx: 19, ry: 13, fill: "#8f6ab5", opacity: .16,
      filter: "url(#n" + id + ")"
    }));

    /* -------- her back: a violet bloom, and her name in it -------- */
    var gBloom = el("g", { transform: "translate(0 30)" });
    for (var p = 0; p < 5; p++) {
      gBloom.appendChild(el("ellipse", {
        cx: 0, cy: 0, rx: 9.4, ry: 5.0, fill: "#e39ccd", opacity: .46,
        stroke: "rgba(146,58,132,.42)", "stroke-width": .7,
        transform: "rotate(" + (-90 + p * 72) + ") translate(8.6 0)"
      }));
    }
    gBloom.appendChild(el("circle", { cx: 0, cy: 0, r: 7.4, fill: "url(#p" + id + ")" }));
    gBloom.appendChild(el("circle", { cx: 0, cy: 0, r: 3.5, fill: "#ffd76a", opacity: .88 }));
    gBloom.appendChild(el("circle", { cx: -1.05, cy: -1.05, r: 1.4, fill: "#fffdf2" }));
    gBloom.appendChild(el("circle", {
      cx: 0, cy: 0, r: 16.5, fill: "none", stroke: "rgba(224,163,200,.34)",
      "stroke-width": .8, "stroke-dasharray": "2 3.4"
    }));
    gBody.appendChild(gBloom);
    /* speckles, so the abdomen is never a flat field */
    [[-13, 20, 1.5], [13, 20, 1.5], [-10.5, 26, 1.15], [10.5, 26, 1.15],
     [-6.5, 45, 1.35], [6.5, 45, 1.35], [0, 50.5, 1.1], [-17, 42, 1.0],
     [17, 42, 1.0]].forEach(function (d) {
      gBody.appendChild(el("circle", { cx: d[0], cy: d[1], r: d[2], fill: "#a482c2", opacity: .42 }));
    });
    gBody.appendChild(el("ellipse", {
      cx: -12, cy: 12, rx: 10, ry: 4.4, fill: "#ffffff", opacity: .34,
      transform: "rotate(-38 -12 12)"
    }));
    /* spinnerets */
    var gSpin = el("g", { transform: "translate(0 62)" });
    gSpin.appendChild(el("ellipse", {
      cx: 0, cy: 0, rx: 4.8, ry: 2.6, fill: "#efe4f6",
      stroke: "rgba(170,140,200,.5)", "stroke-width": .5
    }));
    [-2.1, 0, 2.1].forEach(function (x, i) {
      gSpin.appendChild(el("circle", { cx: x, cy: 1.4, r: i === 1 ? 1.25 : 1, fill: "#bfa6d6" }));
    });
    gBody.appendChild(gSpin);

    /* -------- her face: eight eyes and a small pair of chelicerae -------- */
    gBody.appendChild(el("ellipse", {
      cx: 0, cy: -39, rx: 13.5, ry: 8.5, fill: "#33174c", opacity: .17,
      filter: "url(#n" + id + ")"
    }));
    [[-6.8, -39.5, 5.0], [6.8, -39.5, 5.0],
     [-13.4, -36.2, 2.9], [13.4, -36.2, 2.9],
     [-4.8, -44.2, 2.1], [4.8, -44.2, 2.1],
     [-16.0, -29.4, 2.0], [16.0, -29.4, 2.0]].forEach(function (e, i) {
      var big = i < 2;
      gBody.appendChild(el("circle", { cx: e[0], cy: e[1], r: e[2] + 0.55, fill: "#220d36", opacity: .34 }));
      gBody.appendChild(el("circle", { cx: e[0], cy: e[1], r: e[2], fill: "#301444", opacity: .97 }));
      gBody.appendChild(el("circle", {
        cx: e[0] - e[2] * 0.30, cy: e[1] - e[2] * 0.34, r: e[2] * (big ? .38 : .34),
        fill: "#ffffff", opacity: .95
      }));
      if (big) {
        gBody.appendChild(el("circle", {
          cx: e[0] + e[2] * 0.34, cy: e[1] + e[2] * 0.30, r: e[2] * .16,
          fill: "#ffd9ee", opacity: .8
        }));
      }
    });
    gBody.appendChild(el("path", {
      d: "M -8.6 -30.4 Q 0 -34.6 8.6 -30.4", fill: "none",
      stroke: "rgba(150,110,190,.34)", "stroke-width": .9
    }));
    /* two chelicerae at the very front, each with a small fang reaching
       out — moved clear of the eye rows so they read as mouthparts */
    [-3.9, 3.9].forEach(function (x) {
      gBody.appendChild(el("ellipse", {
        cx: x, cy: -49.6, rx: 2.75, ry: 3.15, fill: "#f7f1fc",
        stroke: "rgba(182,150,212,.66)", "stroke-width": .5,
        transform: "rotate(" + (x < 0 ? -12 : 12) + " " + x + " -49.6)"
      }));
      gBody.appendChild(el("ellipse", {
        cx: x, cy: -48.6, rx: 1.45, ry: 2.1, fill: "#40205a", opacity: .9
      }));
      gBody.appendChild(el("path", {
        d: "M" + (x - 1.15) + " -51.4 Q" + x + " -53.6 " + (x - 0.12) + " -55.8 " +
           "Q" + x + " -53.6 " + (x + 1.15) + " -51.4 Z",
        fill: "#e9dcf5", stroke: "rgba(150,112,196,.55)", "stroke-width": .4
      }));
    });

    /* -------- the eight legs -------- */
    var legs = [];
    LEGS.forEach(function (L, li) {
      [1, -1].forEach(function (side) {
        var hipR = rim(L.hip, 0.94);
        var footR = { x: HEAD.cx + dir(L.foot).x * L.d, y: HEAD.cy + dir(L.foot).y * L.d * 0.98 };
        var fill = el("path", { fill: "url(#l" + id + ")" });
        var line = el("path", { fill: "none", stroke: "#2a1140", "stroke-width": .85, opacity: .30 });
        var gloss = el("path", { fill: "#ffffff", opacity: .40 });
        gLegs.appendChild(fill); gLegs.appendChild(line); gLegs.appendChild(gloss);
        legs.push({
          def: L, side: side,
          hip: { x: hipR.x * side, y: hipR.y },
          rest: { x: footR.x * side, y: footR.y },
          fw: { x: footR.x * side, y: footR.y },
          planted: true, sw: null, phase: L.ph + li * 0.045,
          paths: { fill: fill, line: line, gloss: gloss }
        });
      });
    });

    /* -------- the companion walks: pose, gait, breath -------- */
    var pose = {
      x: 0, y: 0, rot: 0, scale: 1, lift: 0, t: 0, t0: 0,
      mode: "rest", speed: 0, target: null, walkTo: null, until: 0
    };
    var gait = 0;
    var wander = { cd: 1.4, tx: 0, ty: 0 };

    function toLocal(px, py) {
      var dx = px - bx, dy = py - by, s = pose.scale || 1;
      return { x: (dx * cr + dy * sr) / s, y: (-dx * sr + dy * cr) / s };
    }
    function toWorld(px, py) {
      var s = pose.scale;
      return { x: bx + (px * cr - py * sr) * s, y: by + (px * sr + py * cr) * s };
    }
    var bx = 0, by = 0, cr = 1, sr = 0;

    function buildLeg(leg) {
      var local = toLocal(leg.fw.x, leg.fw.y);
      var L = leg.def, side = leg.side, i;
      /* every joint is solved in the right-side frame and the whole limb is
         mirrored at the end, so the two sides come out exact mirrors */
      var hip = rim(L.hip, 0.94);
      var foot = { x: local.x * side, y: local.y };
      var kAng = L.hip * 0.62 + L.foot * 0.38;
      var kneeR = L.kr * L.d;
      var knee = { x: HEAD.cx + dir(kAng).x * kneeR, y: HEAD.cy + dir(kAng).y * kneeR };
      /* the ankle is the last joint — the foot turns down to meet the web */
      var ankle = mid(knee, foot, 0.64);
      ankle = add(ankle, norm({ x: ankle.x - HEAD.cx, y: ankle.y - HEAD.cy }), 3.4);
      /* femur arcs outward, tibia carries on, tarsus turns back in: an S */
      var cF = bowCtrl(hip, knee, 1, 0.15);
      var cT = bowCtrl(knee, ankle, 1, 0.055);
      var cS = bowCtrl(ankle, foot, -1, 0.17);
      var N1 = 12, N2 = 12, N3 = 10;
      var femur = [], tibia = [], tarsus = [];
      for (i = 0; i < N1; i++) { femur.push(qpt(hip, cF, knee, i / (N1 - 1))); }
      for (i = 1; i < N2; i++) { tibia.push(qpt(knee, cT, ankle, i / (N2 - 1))); }
      for (i = 1; i < N3; i++) { tarsus.push(qpt(ankle, cS, foot, i / (N3 - 1))); }
      var raw = femur.concat(tibia, tarsus);
      var re = arcPts(raw, [N1 - 1, N1 + N2 - 2], 36);
      var pts = re.pts, uk = re.u[0], ua = re.u[1];
      var widths = [], glossW = [], glossPts = [];
      for (i = 0; i < pts.length; i++) {
        var u = i / (pts.length - 1);
        var w = widthAt(u, L.w, uk, ua);
        widths.push(w);
        glossW.push(w * 0.34 * Math.pow(Math.sin(Math.PI * u), 0.5));
      }
      /* mirror out into the world, then lay the highlight down the lit side —
         the same side for every leg, so one light sits over the whole web.
         the highlight fades out at both ends so it never caps the leg or
         bands across a joint */
      for (i = 0; i < pts.length; i++) {
        var wp = toWorld(pts[i].x * side, pts[i].y);
        pts[i] = { x: wp.x - bx, y: wp.y - by };
        glossPts.push({ x: pts[i].x - L.w * 0.15, y: pts[i].y - L.w * 0.17 });
      }
      var d = ribbon(pts, widths), gd = ribbon(glossPts, glossW);
      leg.paths.fill.setAttribute("d", d);
      leg.paths.line.setAttribute("d", d);
      leg.paths.gloss.setAttribute("d", gd);
      return d;
    }

    function step(dt) {
      if (!(dt > 0)) { return; }
      pose.t += dt;
      var t = pose.t;
      if (pose.until && t > pose.until) { pose.until = 0; pose.mode = "rest"; }

      if (pose.mode === "walk") { pose.speed = lerp(pose.speed, 40, dt * 6); }
      else if (pose.mode === "wander") { pose.speed = lerp(pose.speed, 17, dt * 4); }
      else { pose.speed = lerp(pose.speed, 0, dt * 9); }

      if (pose.mode === "wander") {
        wander.cd -= dt;
        if (wander.cd <= 0) {
          wander.cd = 5 + Math.random() * 8;
          wander.tx = clamp(pose.x + (Math.random() * 2 - 1) * 46, -44, 44);
          wander.ty = clamp(pose.y + (Math.random() * 2 - 1) * 26, -22, 32);
        }
        pose.target = { x: wander.tx, y: wander.ty };
      } else if (pose.mode === "walk") {
        if (!pose.walkTo) { pose.walkTo = { x: 46, y: 0 }; }
        pose.target = pose.walkTo;
      } else { pose.target = null; }

      if (pose.target) {
        var dx = pose.target.x - pose.x, dy = pose.target.y - pose.y, dist = Math.hypot(dx, dy) || 1e-6;
        if (dist < 2.6) {
          if (pose.mode === "walk") { pose.walkTo = { x: pose.walkTo.x > 0 ? -46 : 46, y: 0 }; }
          else { wander.cd = Math.min(wander.cd, 0.4); }
        } else {
          var v = pose.speed * dt;
          pose.x += dx / dist * v; pose.y += dy / dist * v;
        }
        if (pose.speed > 1) { pose.rot = lerp(pose.rot, clamp(dx * 0.42, -11, 11), dt * 3); }
      } else { pose.rot = lerp(pose.rot, 0, dt * 2); }

      pose.breath = Math.sin(t * 1.45) * 1.05;
      if (pose.mode === "stir") { pose.breath += Math.sin(t * 8.4) * 0.7; pose.rot += Math.sin(t * 7.4) * 0.9; }
      if (pose.mode === "mend") { pose.breath += Math.sin(t * 5.2) * 0.5; pose.rot += Math.sin(t * 2.2) * 1.1; }
      var wantScale = pose.mode === "shrink" ? 0.56 : 1;
      pose.scale = lerp(pose.scale, wantScale, dt * (pose.mode === "shrink" ? 10 : 6));
      if (pose.mode === "drop") {
        var u = clamp((pose.t - pose.t0) / 1.7, 0, 1);
        pose.lift = -64 * Math.pow(1 - u, 3);
      } else { pose.lift = 0; }

      /* she rises on her back legs to look at something, and settles low
         over her work when she mends. her feet stay where they are. */
      var rise = 0;
      if (pose.mode === "stir") { rise = -9 - Math.sin(t * 9) * 1.8; }
      else if (pose.mode === "mend") { rise = 3.5 + Math.sin(t * 2.4) * 1.6; }
      var byFoot = pose.y - pose.lift + pose.breath;
      bx = pose.x; by = byFoot + rise;
      var rad = pose.rot * Math.PI / 180;
      cr = Math.cos(rad); sr = Math.sin(rad);
      var moving = pose.speed > 1.2;
      if (moving) { gait += dt * (pose.speed / 40) * 2.2; }

      legs.forEach(function (leg, i) {
        var hx = leg.rest.x * pose.scale, hy = leg.rest.y * pose.scale;
        var homeX = bx + (hx * cr - hy * sr), homeY = byFoot + (hx * sr + hy * cr);
        var front = i < 4;
        if (pose.mode === "mend") {
          if (front) {
            /* the front two pairs work at a point in front of her, drawing
               silk out and stitching it back, the way she mends a tear */
            var tx = (i % 2 === 0 ? 9.5 : -9.5) + Math.sin(t * 7 + i * 1.9) * 6.5;
            var ty = -102 + Math.cos(t * 6.1 + i * 1.4) * 8;
            var wm = toWorld(tx, ty);
            leg.fw.x = lerp(leg.fw.x, wm.x, 1 - Math.pow(0.004, dt));
            leg.fw.y = lerp(leg.fw.y, wm.y, 1 - Math.pow(0.004, dt));
          } else {
            leg.fw.x = lerp(leg.fw.x, homeX, 1 - Math.pow(0.01, dt));
            leg.fw.y = lerp(leg.fw.y, homeY, 1 - Math.pow(0.01, dt));
          }
          leg.planted = true;
        } else if (pose.mode === "stir") {
          if (i < 2) {
            /* the front pair comes up, held out — something is caught */
            var ws = toWorld(leg.rest.x * 0.52, -134 + Math.sin(t * 10.5 + i * 2) * 5);
            leg.fw.x = lerp(leg.fw.x, ws.x, 1 - Math.pow(0.01, dt));
            leg.fw.y = lerp(leg.fw.y, ws.y, 1 - Math.pow(0.01, dt));
          } else {
            leg.fw.x = lerp(leg.fw.x, homeX, 1 - Math.pow(0.05, dt));
            leg.fw.y = lerp(leg.fw.y, homeY, 1 - Math.pow(0.05, dt));
          }
          leg.planted = true;
        } else if (pose.mode === "drop") {
          /* she rides the thread down as one piece */
          leg.fw.x = homeX; leg.fw.y = homeY; leg.planted = true;
        } else if (pose.mode === "shrink") {
          leg.fw.x = lerp(leg.fw.x, homeX, 1 - Math.pow(0.0005, dt));
          leg.fw.y = lerp(leg.fw.y, homeY, 1 - Math.pow(0.0005, dt));
          leg.planted = true;
        } else if (!moving) {
          leg.fw.x = lerp(leg.fw.x, homeX, 1 - Math.pow(0.0025, dt));
          leg.fw.y = lerp(leg.fw.y, homeY, 1 - Math.pow(0.0025, dt));
          leg.planted = true;
        } else {
          var ph = (((leg.phase + gait) % 1) + 1) % 1;
          if (ph < 0.62) { leg.planted = true; }
          else {
            if (leg.planted) { leg.planted = false; leg.sw = { x: leg.fw.x, y: leg.fw.y }; }
            var e = clamp((ph - 0.62) / 0.38, 0, 1); e = e * e * (3 - 2 * e);
            leg.fw.x = lerp(leg.sw.x, homeX, e);
            leg.fw.y = lerp(leg.sw.y, homeY, e) - Math.sin(e * Math.PI) * 9;
          }
        }
        buildLeg(leg);
      });

      gBody.setAttribute("transform",
        "translate(" + r1(bx) + " " + r1(by) + ") rotate(" + r1(pose.rot) + ") scale(" + pose.scale.toFixed(3) + ")");
      glow.setAttribute("transform", "translate(" + r1(bx) + " " + r1(by) + ")");
    }

    /* settle her into her rest pose immediately, so the very first painted
       frame is correct even if the page never gets an animation frame */
    step(0.0001);

    return {
      el: svg, pose: pose, legs: legs,
      step: step,
      setMode: function (m, o) {
        pose.mode = m;
        pose.t0 = pose.t;
        pose.until = 0;
        if (m === "walk") { pose.walkTo = { x: pose.x > 0 ? -46 : 46, y: 0 }; }
        if (m === "stir" || m === "mend") { pose.until = pose.t + ((o && o.sec) || (m === "stir" ? 1.8 : 3.2)); }
        if (m === "drop") { pose.lift = -64; }
        return this;
      },
      stir: function (sec) { this.setMode("stir", { sec: sec || 1.8 }); return this; },
      moveTo: function (x, y) { pose.mode = "walk"; pose.walkTo = { x: x, y: y }; pose.until = pose.t + 6; return this; },
      at: function (x, y, rot) {
        pose.x = x; pose.y = y; if (rot !== undefined) { pose.rot = rot; }
        return this;
      }
    };
  }

  window.CharlotteSpider = { create: create, viewBox: VB, head: HEAD };
})();
