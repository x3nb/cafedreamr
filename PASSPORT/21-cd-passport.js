/* ============================================================
   cafedreamr — the stamp card        cd-passport.js
   ============================================================
   One small ledger that every page can stamp. Local-only: the
   whole record lives in localStorage["cd_passport"], so it works
   with no account and no server. `CD.cloud` is the seam where an
   account can sync the same record later without touching a
   single call site.

   Include it once per page, before the page's own script:

     <script src="https://www.cafedreamr.art/PASSPORT/cd-passport.js"></script>
     <script>window.CD && CD.boot({page:"vendi"});</script>

   ...and stamp as things happen:

     window.CD && CD.stamp("clue:" + action);   // idempotent
     window.CD && CD.visit("hours");

   The same file also installs the realm's firefly cursor on every
   page that loads it (see the section at the bottom of the file) —
   one shared file, so one upload dresses the whole site.

   ============================================================
   EDIT SURFACE  (below: what things are worth, the ranks, the
   quests, and the doors. Everything else is machinery.)
   ============================================================
   each rule is matched by longest prefix; a call may override
   its own points/label:  CD.stamp("vend:coffee", {p:6})
   add `log:false` to a rule to keep it off the log's record while
   it still counts (points + quests) — that is what arrivals do:
   they are presence, not a thing finished, so they never fill the
   log with "walked into ..." rows.                            */

var RULES = [
  { pre: "clue:",    p: 6,  label: "a clue recovered",           group: "the grid",      accent: "#ccff00" },
  { pre: "tile:",    p: 4,  label: "a portal looked into",       group: "the grid",      accent: "#00e5ff" },
  { pre: "secret:",  p: 25, label: "the sealed door",            group: "the grid",      accent: "#ccff00" },
  { pre: "level:",   p: 15, label: "a level of the long day",    group: "the long day",  accent: "#c0a6ff" },
  { pre: "dossier:", p: 5,  label: "a dossier opened",           group: "the collective", accent: "#ff2d95" },
  { pre: "intel:",   p: 8,  label: "a dossier read",             group: "the collective", accent: "#ffb8d9" },
  { pre: "vend:",    p: 4,  label: "something from the machine", group: "the machine",   accent: "#00e5ff" },
  { pre: "hour:",    p: 2,  label: "an hour watched",            group: "the hours",     accent: "#e6e6fa" },
  { pre: "visit:",   p: 3,  label: "a page walked into",         group: "the realm",     accent: "#fff0f5", log: false },
  { pre: "attend:",  p: 4,  label: "showed up to something",     group: "the academies", accent: "#e0a3c8" },
  { pre: "lesson:",  p: 12, label: "a class finished",           group: "the academies", accent: "#e0a3c8" },
  { pre: "web:drawer", p: 5, label: "a drawer answered",         group: "the web",       accent: "#e0a3c8" },
  { pre: "web:door", p: 10, label: "the sealed door greeted",    group: "the web",       accent: "#ccff00" },
  { pre: "interview:", p: 6, label: "sat in bobby's booth",       group: "the games room", accent: "#ff2d95" },
  { pre: "glitter:", p: 6, label: "the glitter bomb went off",     group: "the games room", accent: "#ccff00" },
  { pre: "quest:",   p: 0,  label: "a quest finished",           group: "quests",        accent: "#ffc861" }
];

/* stamps needed for each name on the card */
var RANKS = [
  { p: 0,   name: "visitor" },
  { p: 70,  name: "regular" },
  { p: 170, name: "barista" },
  { p: 320, name: "keeper of the keys" },
  { p: 600, name: "light-keeper" }
];

/* a step is {id:"vend:mystery"}  — that exact stamp, or
   {prefix:"clue:", n:4}          — n stamps starting with that
   a quest pays its reward and can be the key to a door.        */
var QUESTS = [
  { id: "wander-in",           title: "wander in",            note: "look at three corners of the realm.",           reward: 20, steps: [ { prefix: "visit:", n: 3 } ] },
  { id: "small-signs",         title: "small signs",          note: "recover all four clues hidden in the grid.",    reward: 30, steps: [ { prefix: "clue:", n: 4 } ] },
  { id: "the-sealed-door",     title: "through the door",     note: "four clues open it. nothing else will.",        reward: 40, steps: [ { id: "secret:sealed-door" } ] },
  { id: "meet-five",           title: "five faces",           note: "open five dossiers in the collective.",         reward: 25, steps: [ { prefix: "dossier:", n: 5 } ] },
  { id: "the-whole-collective",title: "the whole collective", note: "open every dossier the deck holds.",            reward: 60, steps: [ { prefix: "dossier:", n: 11 } ] },
  { id: "first-ramp",          title: "the first ramp",       note: "clear one level of the long day.",              reward: 25, steps: [ { prefix: "level:", n: 1 } ] },
  { id: "the-long-day",        title: "the long day",         note: "clear all eight levels.",                       reward: 90, steps: [ { prefix: "level:", n: 8 } ] },
  { id: "a-full-day",          title: "a full day",           note: "watch all twenty-four hours pass.",             reward: 50, steps: [ { prefix: "hour:", n: 24 } ] },
  { id: "from-the-machine",    title: "from the machine",     note: "vend something. anything.",                     reward: 15, steps: [ { prefix: "vend:", n: 1 } ] },
  { id: "the-mystery",         title: "the mystery slot",     note: "vend the one slot with no name.",               reward: 30, steps: [ { id: "vend:mystery" } ] },
  { id: "the-web",             title: "the whole cabinet",    note: "answer every drawer in charlotte's cabinet.",   reward: 45, steps: [ { prefix: "web:drawer", n: 6 } ] },
  { id: "first-class",         title: "the first bell",      note: "sit through a class.",                          reward: 25, steps: [ { prefix: "lesson:", n: 1 } ] },
  { id: "a-term",              title: "a term of three",     note: "sit through three classes.",                     reward: 50, steps: [ { prefix: "lesson:", n: 3 } ] }
];

/* the doors: academies and portals that open on their own once
   the requirement is met. `opens` is the line the card shows
   while they are still shut.                                   */
var DOORS = [
  /* the academy of etiquette — hans's room. the etiquette class's last
     question ("i found something first, in the grid") promises it, so it
     opens on all four grid clues (quest "small-signs"). */
  { id: "academy:etiquette",    kind: "academy", name: "the academy of etiquette",  note: "manners, studied daily, by a snob about exactly that.", opens: "opens when all four clues are recovered.", need: { quests: ["small-signs"] } },
  { id: "academy:quiet-hours",  kind: "academy", name: "the academy of quiet hours", note: "everybody's day, taught from the top.",           opens: "opens for anyone who has watched a whole day.", need: { points: 200, quests: ["a-full-day"] } },
  { id: "academy:the-long-day", kind: "academy", name: "the academy of long days",   note: "ramp drills, milk theory, and the eight hours.",   opens: "opens when all eight levels are cleared.", need: { quests: ["the-long-day"] } },
  { id: "portal:the-back-room", kind: "portal",  name: "the back room",              note: "behind the machine. nobody says what is in there.", opens: "opens once the mystery slot has vended.", need: { quests: ["the-mystery"] } },
  { id: "portal:nine",          kind: "portal",  name: "the ninth hour",             note: "there are eight hours in the day. this is the other one.", opens: "opens at four hundred stamps.", need: { points: 400 } }
];

/* what a page calls itself in the log */
var PAGES = {
  terminal: "the terminal",
  grid:     "the mystery grid",
  hours:    "the hours",
  map:      "the realm map",
  cards:    "the collective",
  vendi:    "the vendi machine",
  menu:     "the menu",
  zine:     "the zine",
  play:     "the long day",
  miki:     "miki's place",
  mixtape:  "miki's mixtape",
  hans:     "the stacks",
  star:     "star's place",
  music:    "spider's music web",
  web:      "the web",
  class:    "a class room",
  card:     "the stamp card",
  games:    "miki's games room",
  jackbox:  "Bobby in the box",
  claw:     "the claw machine",
  drum:     "the drum machine",
  booth:    "bobby's interview booth",
  glitterbomb: "the glitter bomb"
};

/* ============================================================
   machinery below — nothing to edit down here
   ============================================================ */
var CARD_URL = "https://www.cafedreamr.art/PASSPORT/";

var CD = (function () {
  var KEY = "cd_passport";
  var V = 1;
  var REDUCE = false;
  try { REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  var state = null;
  var subs = [];
  var booted = null;

  /* ---------------- the record ---------------- */
  function blank() {
    return { v: V, name: "", points: 0, jellies: 0, events: {}, quests: {}, doors: {}, badges: [], log: [], seen: {}, made: Date.now(), last: Date.now() };
  }
  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return blank();
      var s = JSON.parse(raw);
      if (!s || typeof s !== "object") return blank();
      var b = blank();
      for (var k in b) if (!(k in s)) s[k] = b[k];
      /* the arcade's money used to be called tokens; the jar is the same jar */
      if (!s.jellies && s.tokens) s.jellies = s.tokens;
      if ("tokens" in s) delete s.tokens;
      if (!s.events || typeof s.events !== "object") s.events = {};
      if (!(s.log instanceof Array)) s.log = [];
      if (!(s.badges instanceof Array)) s.badges = [];
      s.v = V;
      return s;
    } catch (e) { return blank(); }
  }
  function write() { CD.cloud.save(state); }
  function lsWrite(s) {
    try { window.localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }
  function touch() { state.last = Date.now(); write(); }

  /* ---------------- the rules ---------------- */
  function ruleFor(id) {
    var best = null;
    for (var i = 0; i < RULES.length; i++) {
      var r = RULES[i];
      if (id.indexOf(r.pre) === 0 && (!best || r.pre.length > best.pre.length)) best = r;
    }
    return best || { pre: "", p: 1, label: id, group: "the realm", accent: "#fff0f5" };
  }
  function count(prefix) {
    var n = 0;
    for (var id in state.events) if (id.indexOf(prefix) === 0) n++;
    return n;
  }

  /* ---------------- quests + doors ---------------- */
  function stepState(st) {
    if (st.id) return { label: st.label || st.id, have: state.events[st.id] ? 1 : 0, need: 1, done: !!state.events[st.id] };
    var have = Math.min(count(st.prefix), st.n);
    return { label: st.label || (have + " / " + st.n + " " + ruleFor(st.prefix).label), have: have, need: st.n, done: have >= st.n };
  }
  function questState(q) {
    var steps = q.steps.map(stepState);
    var done = steps.every(function (s) { return s.done; });
    return { id: q.id, title: q.title, note: q.note, reward: q.reward, steps: steps, complete: done || !!state.quests[q.id], when: state.quests[q.id] || 0 };
  }
  function needMet(need) {
    need = need || {};
    if (need.points && state.points < need.points) return false;
    if (need.quests) for (var i = 0; i < need.quests.length; i++) if (!state.quests[need.quests[i]]) return false;
    if (need.events) for (var j = 0; j < need.events.length; j++) if (!state.events[need.events[j]]) return false;
    if (need.counts) for (var k in need.counts) if (count(k) < need.counts[k]) return false;
    return true;
  }
  function needProgress(need) {
    need = need || {};
    var bits = [], frac = [], ok = true;
    if (need.points) { if (state.points < need.points) ok = false; bits.push(state.points + " / " + need.points + " stamps"); frac.push(Math.min(1, state.points / need.points)); }
    if (need.quests) need.quests.forEach(function (q) {
      var meta = questById(q);
      var have = !!state.quests[q];
      if (!have) ok = false;
      bits.push((meta ? meta.title : q) + (have ? " \u2713" : ""));
      frac.push(have ? 1 : 0);
    });
    if (need.events) need.events.forEach(function (e) { var have = !!state.events[e]; if (!have) ok = false; bits.push(e + (have ? " \u2713" : "")); frac.push(have ? 1 : 0); });
    if (need.counts) for (var k in need.counts) { var h = count(k); if (h < need.counts[k]) ok = false; bits.push(h + " / " + need.counts[k] + " " + ruleFor(k).label); frac.push(Math.min(1, h / need.counts[k])); }
    var pct = frac.length ? Math.round(100 * frac.reduce(function (a, b) { return a + b; }, 0) / frac.length) : 0;
    return { text: bits.join(" \u00b7 "), pct: pct, met: ok };
  }
  function questById(id) { for (var i = 0; i < QUESTS.length; i++) if (QUESTS[i].id === id) return QUESTS[i]; return null; }
  function doorById(id) { for (var i = 0; i < DOORS.length; i++) if (DOORS[i].id === id) return DOORS[i]; return null; }

  function doorState(d) {
    var pr = needProgress(d.need);
    var open = !!state.doors[d.id] || pr.met;
    return { id: d.id, kind: d.kind, name: d.name, note: d.note, opens: d.opens, href: d.href || "", open: open, when: state.doors[d.id] || 0, progress: pr };
  }

  /* run after every change: quests pay out, doors swing open,
     badges are minted. loop until quiet so a quest unlocked by
     another quest still lands this pass.                        */
  function settle(quiet) {
    var changed = true, rounds = 0, now = Date.now(), freshQuests = [], freshDoors = [], freshBadges = [];
    while (changed && rounds++ < 6) {
      changed = false;
      QUESTS.forEach(function (q) {
        if (state.quests[q.id]) return;
        if (questState(q).complete) {
          state.quests[q.id] = now;
          state.points += q.reward;
          state.log.push({ id: "quest:" + q.id, p: q.reward, t: now, label: "quest \u00b7 " + q.title, accent: "#ffc861", group: "quests" });
          if (!state.seen["badge:" + q.id]) { state.seen["badge:" + q.id] = 1; state.badges.push({ id: q.id, name: q.title, note: q.note, t: now }); freshBadges.push(q); }
          freshQuests.push(q);
          changed = true;
        }
      });
      DOORS.forEach(function (d) {
        if (state.doors[d.id]) return;
        if (needMet(d.need)) {
          state.doors[d.id] = now;
          state.log.push({ id: d.id, p: 0, t: now, label: d.name + " opened", accent: d.kind === "academy" ? "#ccff00" : "#00e5ff", group: "doors" });
          freshDoors.push(d);
          changed = true;
        }
      });
    }
    if (state.log.length > 400) state.log = state.log.slice(state.log.length - 400);
    if (!quiet) {
      freshQuests.forEach(function (q) { toast("quest finished \u00b7 " + q.title + "  +" + q.reward, "#ffc861", 3600); });
      freshDoors.forEach(function (d) { toast((d.kind === "academy" ? "an academy opens" : "a door opens") + " \u00b7 " + d.name, d.kind === "academy" ? "#ccff00" : "#00e5ff", 4200); });
    }
    return { quests: freshQuests, doors: freshDoors, badges: freshBadges };
  }

  /* ---------------- the public calls ---------------- */
  function stamp(id, opts) {
    if (!id) return null;
    opts = opts || {};
    var rule = ruleFor(id);
    if (state.events[id] && !opts.again) {
      var st = { id: id, fresh: false, points: rule.p, label: opts.label || rule.label, accent: opts.accent || rule.accent, group: opts.group || rule.group, total: state.points };
      return st;
    }
    var at = Date.now();
    state.events[id] = at;
    state.points += rule.p;
    var inLog = opts.log == null ? rule.log !== false : !!opts.log;
    if (inLog) state.log.push({ id: id, p: rule.p, t: at, label: opts.label || rule.label, accent: opts.accent || rule.accent, group: opts.group || rule.group });
    var settled = settle();
    touch();
    var res = { id: id, fresh: true, points: rule.p, label: opts.label || rule.label, accent: opts.accent || rule.accent, group: opts.group || rule.group, total: state.points, quests: settled.quests, doors: settled.doors, badges: settled.badges };
    if (!opts.quiet && (rule.p || opts.say)) toast((rule.p ? "+" + rule.p + "  " : "") + res.label, res.accent, 2400);
    fire(res);
    return res;
  }
  function visit(page, opts) {
    opts = opts || {};
    if (!opts.label) opts.label = "walked into " + (PAGES[page] || page);
    return stamp("visit:" + page, opts);
  }

  /* jellies: the arcade's own money, and you keep them in a jar. points are
     progress, jellies are spendable — earned in miki's games room, spent at
     the claw machine and changed at the counter. they ride the record, so a
     balance is the same on every page.                                    */
  function jellyLog(n, label, accent, id) {
    state.log.push({ id: id, p: 0, t: Date.now(), label: label, accent: accent, group: "jellies" });
    if (state.log.length > 400) state.log = state.log.slice(state.log.length - 400);
  }
  function award(n, label, opts) {
    opts = opts || {};
    if (!state) state = read();
    n = Math.max(0, Math.round(Number(n) || 0));
    if (!n) return state.jellies || 0;
    state.jellies = (state.jellies || 0) + n;
    jellyLog(n, "+" + n + " jellies" + (label ? " \u00b7 " + label : ""), opts.accent || "#ccff00", opts.id || "jelly:earned");
    touch();
    if (!opts.quiet) toast("+" + n + "  " + (label || "jellies"), opts.accent || "#ccff00", opts.ms || 2400);
    announce();
    return state.jellies;
  }
  function spend(n, label, opts) {
    opts = opts || {};
    if (!state) state = read();
    n = Math.max(0, Math.round(Number(n) || 0));
    if ((state.jellies || 0) < n) return false;
    state.jellies -= n;
    jellyLog(n, "\u2212" + n + " jellies" + (label ? " \u00b7 " + label : ""), opts.accent || "#d8a24a", opts.id || "jelly:spent");
    touch();
    if (!opts.quiet) toast("\u2212" + n + "  " + (label || "jellies"), opts.accent || "#d8a24a", opts.ms || 2400);
    announce();
    return true;
  }

  function fire(res) {
    announce();
    try {
      var ev;
      try { ev = new CustomEvent("cdpass", { detail: res }); } catch (e) { ev = document.createEvent("CustomEvent"); ev.initCustomEvent("cdpass", false, false, res); }
      window.dispatchEvent(ev);
    } catch (e) {}
  }
  function announce() { subs.forEach(function (fn) { try { fn(api); } catch (e) {} }); }

  /* ---------------- what the card shows ---------------- */
  function rank() {
    var r = RANKS[0], next = null;
    for (var i = 0; i < RANKS.length; i++) {
      if (state.points >= RANKS[i].p) r = RANKS[i];
      else { next = RANKS[i]; break; }
    }
    var floor = r.p, ceil = next ? next.p : r.p;
    var pct = next ? Math.max(0, Math.min(100, Math.round(100 * (state.points - floor) / Math.max(1, ceil - floor)))) : 100;
    return { name: r.name, at: r.p, next: next, pct: pct, toNext: next ? next.p - state.points : 0 };
  }
  function quests() { return QUESTS.map(questState); }
  function doors() { return DOORS.map(doorState); }
  function nextDoor() {
    var ds = doors().filter(function (d) { return !d.open; });
    ds.sort(function (a, b) { return b.progress.pct - a.progress.pct; });
    return ds[0] || null;
  }

  /* ---------------- the toast ---------------- */
  function toast(text, accent, ms) {
    if (booted && booted.toast === false) return;
    if (!document.body) return;
    var box = document.getElementById("cdToasts");
    if (!box) {
      box = document.createElement("div");
      box.id = "cdToasts";
      document.body.appendChild(box);
    }
    var el = document.createElement("button");
    el.type = "button";
    el.className = "cd-toast";
    el.style.setProperty("--cd-accent", accent || "#ccff00");
    el.innerHTML = '<span class="dot"></span><span class="tx">' + esc(text) + "</span>";
    el.title = "open the stamp card";
    el.addEventListener("click", function () { window.open(CARD_URL, "_self"); });
    box.appendChild(el);
    while (box.children.length > 4) box.removeChild(box.firstChild);
    var kill = function () {
      el.classList.add("out");
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 420);
    };
    if (!REDUCE) setTimeout(kill, ms || 2400);
    else setTimeout(kill, 1600);
    return el;
  }

  /* ---------------- the terminal strip ---------------- */
  function renderHUD(el) {
    if (typeof el === "string") el = document.getElementById(el);
    if (!el) return;
    var r = rank(), nx = nextDoor();
    el.innerHTML =
      '<div class="cdh-top"><span class="cdh-kick">your stamp card</span><span class="cdh-n">' + state.points + '<i>stamps</i></span></div>' +
      '<div class="cdh-rank">' + esc(state.name ? state.name + " \u00b7 " : "") + esc(r.name) + '</div>' +
      '<div class="cdh-bar"><i style="width:' + r.pct + '%"></i></div>' +
      '<div class="cdh-next">' + (r.next
        ? "<span>" + r.toNext + " more to <b>" + esc(r.next.name) + "</b></span>"
        : "<span>the card is full \u2014 you are a <b>" + esc(r.name) + "</b></span>") +
      (nx ? '<span class="cdh-door">next door: <b>' + esc(nx.name) + "</b> \u00b7 " + nx.progress.pct + "%</span>" : "") +
      ((state.jellies || 0) > 0 ? '<span class="cdh-tok">the arcade \u00b7 <b>' + state.jellies + "</b> jellies</span>" : "") +
      "</div>" +
      '<a class="cdh-open" href="' + CARD_URL + '">open the card &rarr;</a>';
  }

  /* ---------------- the record, in and out ---------------- */
  function exportCode() {
    try { return btoa(unescape(encodeURIComponent(JSON.stringify(state)))); } catch (e) { return ""; }
  }
  function importCode(code) {
    try {
      var s = JSON.parse(decodeURIComponent(escape(atob(String(code || "").replace(/\s+/g, "")))));
      if (!s || typeof s !== "object" || !s.events) return false;
      s.v = V;
      state = s;
      if (!(state.log instanceof Array)) state.log = [];
      if (!(state.badges instanceof Array)) state.badges = [];
      /* an old code exported before the rename still carries `tokens` */
      if (!state.jellies && state.tokens) state.jellies = state.tokens;
      if ("tokens" in state) delete state.tokens;
      settle(true);
      touch(); announce();
      return true;
    } catch (e) { return false; }
  }
  function merge(other) {
    if (!other || !other.events) return false;
    for (var id in other.events) if (!state.events[id]) state.events[id] = other.events[id];
    for (var q in other.quests) if (!state.quests[q]) state.quests[q] = other.quests[q];
    for (var d in other.doors) if (!state.doors[d]) state.doors[d] = other.doors[d];
    if (!state.name && other.name) state.name = other.name;
    if (other.jellies) state.jellies = Math.max(state.jellies || 0, other.jellies);
    recomputePoints();
    settle(true); touch(); announce();
    return true;
  }
  function recomputePoints() {
    var p = 0;
    for (var id in state.events) {
      if (id.indexOf("quest:") === 0) continue;
      p += ruleFor(id).p;
    }
    Object.keys(state.quests).forEach(function (q) { var m = questById(q); if (m) p += m.reward; });
    state.points = p;
  }

  /* ---------------- the old keys, folded in ---------------- */
  function migrate() {
    var did = [];
    function arr(key) {
      try { var v = JSON.parse(window.localStorage.getItem(key) || "[]"); return v instanceof Array ? v : []; } catch (e) { return []; }
    }
    arr("cd_grid_clues").forEach(function (c) { if (!state.events["clue:" + c]) { state.events["clue:" + c] = Date.now(); did.push("clue:" + c); } });
    arr("cd_grid_seen").forEach(function (c) { if (!state.events["tile:" + c]) { state.events["tile:" + c] = Date.now(); did.push("tile:" + c); } });
    arr("cd_play_done").forEach(function (id) { if (!state.events["level:" + id]) { state.events["level:" + id] = Date.now(); did.push("level:" + id); } });
    try {
      if (!state.name) {
        var n = window.localStorage.getItem("cd_play_name");
        if (n) state.name = n;
      }
    } catch (e) {}
    if (did.length) { recomputePoints(); settle(true); }
    return did;
  }

  /* ---------------- boot ---------------- */
  function boot(opts) {
    opts = opts || {};
    if (!state) state = read();
    if (!booted) {
      var fresh = migrate();
      if (fresh.length) recomputePoints();
      settle(true);
      booted = opts;
      if (opts.name) state.name = opts.name;
    }
    style();
    if (opts.page) {
      var firstEver = !Object.keys(state.events).length;
      visit(opts.page);
      if (firstEver) toast("your stamp card is open \u00b7 everything you do here leaves a stamp", "#ccff00", 5200);
    }
    return api;
  }

  /* ---------------- the theme ---------------- */
  function style() {
    if (document.getElementById("cdPassCSS")) return;
    var st = document.createElement("style");
    st.id = "cdPassCSS";
    st.textContent = [
      "#cdToasts{position:fixed;left:14px;bottom:14px;z-index:2147483000;display:flex;flex-direction:column;gap:7px;pointer-events:none}",
      ".cd-toast{pointer-events:auto;display:flex;align-items:center;gap:8px;cursor:pointer;text-align:left;",
      "  background:linear-gradient(180deg,rgba(20,0,32,.94),rgba(11,11,14,.94));border:1px solid color-mix(in srgb,var(--cd-accent,#ccff00) 45%,transparent);",
      "  border-left:3px solid var(--cd-accent,#ccff00);color:#fff0f5;font:11.5px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.03em;",
      "  padding:8px 11px;border-radius:9px;box-shadow:0 6px 22px rgba(0,0,0,.55),0 0 14px color-mix(in srgb,var(--cd-accent,#ccff00) 22%,transparent);",
      "  opacity:0;transform:translateY(8px);animation:cdIn .34s cubic-bezier(.2,.85,.25,1) forwards;max-width:min(300px,72vw)}",
      ".cd-toast .dot{width:6px;height:6px;border-radius:50%;background:var(--cd-accent,#ccff00);box-shadow:0 0 8px var(--cd-accent,#ccff00);flex:0 0 auto}",
      ".cd-toast .tx{flex:1}",
      ".cd-toast.out{animation:cdOut .4s ease forwards}",
      "@keyframes cdIn{to{opacity:1;transform:none}}",
      "@keyframes cdOut{to{opacity:0;transform:translateY(6px)}}",
      ".cdh-top{display:flex;align-items:baseline;justify-content:space-between;gap:10px}",
      ".cdh-kick{font:9px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.17em;text-transform:uppercase;color:#8b83a0}",
      ".cdh-n{font-family:'Bebas Neue','Anton',Impact,sans-serif;font-size:26px;letter-spacing:.04em;color:#ccff00;text-shadow:0 0 14px rgba(204,255,0,.4);line-height:1}",
      ".cdh-n i{font-style:normal;font-size:9px;letter-spacing:.16em;color:#8b83a0;margin-left:4px;text-transform:uppercase}",
      ".cdh-rank{font-family:'Klee One',ui-rounded,system-ui,sans-serif;font-size:12px;color:#fff0f5;margin-top:1px}",
      ".cdh-bar{height:5px;border-radius:3px;background:rgba(255,255,255,.09);overflow:hidden;margin:9px 0 6px}",
      ".cdh-bar i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#ccff00,#00e5ff);box-shadow:0 0 10px rgba(204,255,0,.5)}",
      ".cdh-next{display:flex;flex-direction:column;gap:2px;font:10px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;color:#8b83a0;letter-spacing:.04em}",
      ".cdh-next b{color:#e6e6fa;font-weight:400}",
      ".cdh-door{color:#8b83a0}",
      ".cdh-tok{color:#8b83a0}", ".cdh-tok b{color:#d8a24a}",
      ".cdh-open{display:inline-flex;align-items:center;gap:6px;margin-top:10px;font:10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.13em;text-transform:uppercase;color:#00e5ff;text-decoration:none;border:1px solid rgba(0,229,255,.4);border-radius:22px;padding:7px 13px;background:rgba(0,229,255,.06);transition:.18s}",
      ".cdh-open:hover{color:#ccff00;border-color:rgba(204,255,0,.55);background:rgba(204,255,0,.08)}",
      "@media (prefers-reduced-motion:reduce){.cd-toast{animation:none;opacity:1;transform:none}.cd-toast.out{animation:none;opacity:0}}"
    ].join("");
    (document.head || document.documentElement).appendChild(st);
  }

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* a page reached by pressing "back", or a tab that was switched away from, can
     come back from the back-forward cache instead of reloading — the record in
     memory is then the one from the moment you left it, and a page that shows a
     balance (jellies, points) would show a stale one. re-read on the way in. */
  function resync() {
    if (!state) return;
    state = read();
    announce();
  }
  window.addEventListener("pageshow", resync);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) resync(); });

  window.addEventListener("storage", function (e) {
    if (e.key !== KEY) return;
    state = read();
    announce();
  });

  /* account sync lands here later — same shape, no call sites change */
  var cloud = {
    on: false,
    save: function (s) { if (this.on) { /* later: push s to the signed-in account */ } lsWrite(s); },
    load: function () { return null; }
  };

  var api = {
    __engine: true,
    VERSION: V,
    KEY: KEY,
    boot: boot,
    stamp: stamp,
    visit: visit,
    award: award,
    spend: spend,
    has: function (id) { return !!(state && (state.events[id] || state.doors[id])); },
    count: function (p) { return state ? count(p) : 0; },
    points: function () { return state ? state.points : 0; },
    jellies: function () { return state ? (state.jellies || 0) : 0; },
    rank: function () { return state ? rank() : { name: "visitor", pct: 0, toNext: 0, next: RANKS[1] }; },
    quests: function () { return state ? quests() : QUESTS.map(function (q) { return { id: q.id, title: q.title, note: q.note, reward: q.reward, steps: q.steps.map(function (s) { return { label: s.label || (s.prefix || s.id), have: 0, need: s.n || 1, done: false }; }), complete: false }; }); },
    doors: function () { return state ? doors() : DOORS.map(function (d) { return { id: d.id, kind: d.kind, name: d.name, note: d.note, opens: d.opens, href: d.href || "", open: false, progress: { pct: 0, text: "", met: false } }; }); },
    open: function (id) { return !!(state && (state.doors[id] || (doorById(id) && needMet(doorById(id).need)))); },
    nextDoor: function () { return state ? nextDoor() : null; },
    log: function (n) {
      if (!state) return [];
      var rows = state.log.filter(function (l) { return ruleFor(l.id).log !== false; });
      return n ? rows.slice(-n).reverse() : rows.slice().reverse();
    },
    badges: function () { return state ? state.badges.slice().reverse() : []; },
    name: function (n) {
      if (n === undefined) return state ? state.name : "";
      state.name = String(n || "").slice(0, 24);
      touch(); announce();
      try { window.localStorage.setItem("cd_play_name", state.name); } catch (e) {}
      return state.name;
    },
    export: function () { return state ? exportCode() : ""; },
    import: importCode,
    merge: merge,
    reset: function () { state = blank(); settle(true); touch(); announce(); return true; },
    reload: resync,
    toast: toast,
    renderHUD: renderHUD,
    esc: esc,
    onChange: function (fn) { if (typeof fn === "function") { subs.push(fn); try { fn(api); } catch (e) {} } },
    cloud: cloud,
    rules: RULES,
    labels: { quests: QUESTS, doors: DOORS, ranks: RANKS, pages: PAGES }
  };
  /* the old name for the same jar: a page (or a cached copy of one) that still
     asks for CD.tokens() gets the jelly balance back instead of a crash. */
  api.tokens = api.jellies;
  return api;
})();

window.CD = CD;


/* ============================================================
   the firefly cursor — a site-wide decoration
   ------------------------------------------------------------
   It lives at the bottom of cd-passport.js on purpose: every
   page already loads this one file from the absolute URL, so
   the firefly reaches the whole realm with a single upload and
   no page edits. It is a self-contained IIFE — the ledger above
   never touches it, and it never touches the ledger.
   Rules: only on a real pointer (hover + fine); touch devices
   keep their own behaviour. Honours prefers-reduced-motion (no
   wander, no wake, a calmer glow). Force it anywhere with
   window.__cdFireflyForce = true.
   ============================================================ */
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.__cdFirefly) return;
  var fine = false;
  try { fine = !!(window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches); } catch (e) {}
  if (!fine && !window.__cdFireflyForce) return;
  window.__cdFirefly = true;

  var REDUCE = false;
  try { REDUCE = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) {}

  var HOVER_SEL = 'a,button,input,textarea,select,label,summary,[role="button"],[role="link"],[contenteditable="true"],' +
    ".slot,.ch,.qopt,.chip,.book,.shelf,.orb,.otask,.lev,.tab,.mini,.badge,.door,.cup,.startBtn";

  var layer = null, fly = null, wake = null, css = null, wl = null, wr = null;
  var px = 0, py = 0, fx = 0, fy = 0, placed = false;
  var lastMove = 0, lastMote = 0, lastSpark = 0, last = 0;
  var motes = [];

  function style() {
    if (css) return;
    css = document.createElement("style");
    css.id = "cdFireflyCSS";
    css.textContent = [
      "html.cdff,html.cdff *{cursor:none !important}",
      "#cdFireflyLayer{position:fixed;inset:0;z-index:2147483600;pointer-events:none}",
      "#cdFirefly{position:absolute;left:0;top:0;width:40px;height:40px;margin:-20px 0 0 -20px;will-change:transform;opacity:0;transition:opacity .35s ease}",
      "#cdFirefly.on{opacity:1}",
      "#cdFirefly .halo{position:absolute;inset:0;border-radius:50%;filter:blur(1.1px);",
      "  background:radial-gradient(circle at 50% 58%,rgba(255,231,160,.56) 0%,rgba(255,221,134,.36) 16%,rgba(255,210,114,.21) 32%,rgba(255,202,98,.11) 47%,rgba(255,197,88,.04) 62%,rgba(255,194,84,0) 74%);",
      "  animation:cdffBlink 2.7s ease-in-out infinite}",
      "#cdFirefly .lamp{position:absolute;left:50%;top:58%;width:13px;height:13px;margin:-6.5px 0 0 -6.5px;border-radius:50%;",
      "  background:radial-gradient(circle,rgba(255,248,214,.9) 0%,rgba(255,238,178,.6) 24%,rgba(255,223,142,.34) 48%,rgba(255,211,122,.13) 66%,rgba(255,208,118,0) 82%);",
      "  animation:cdffLamp 2.7s ease-in-out infinite}",
      "#cdFirefly svg{position:absolute;inset:0;overflow:visible;transition:transform .22s cubic-bezier(.2,.8,.3,1)}",
      "#cdFirefly .wing{stroke:rgba(255,250,238,.7);stroke-width:.45;stroke-linejoin:round}",
      "#cdFirefly .body{fill:#322745}",
      "#cdFirefly .head{fill:#322745}",
      "#cdFirefly .ant{fill:none;stroke:rgba(255,246,212,.8);stroke-width:.68;stroke-linecap:round}",
      "#cdFirefly .seg{fill:none;stroke:rgba(255,238,200,.18);stroke-width:.4}",
      "#cdFirefly.hot svg{transform:scale(1.3)}",
      "#cdFirefly.hot .halo{filter:blur(1.1px) brightness(1.35)}",
      "#cdFireflyLayer.reduced #cdFirefly svg{transition:none}",
      "#cdFireflyLayer.reduced .halo{animation:none;opacity:.72}",
      "#cdFireflyLayer.reduced .lamp{animation:none;opacity:.85}",
      ".cdff-mote{position:absolute;left:0;top:0;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;pointer-events:none;",
      "  background:radial-gradient(circle,rgba(255,242,196,.95),rgba(255,206,110,0) 72%);animation:cdffMote var(--dur,.6s) ease-out forwards}",
      "@keyframes cdffBlink{0%,100%{opacity:.48;transform:scale(.9)}44%{opacity:1;transform:scale(1.24)}70%{opacity:.55;transform:scale(1.02)}}",
      "@keyframes cdffLamp{0%,100%{opacity:.5;transform:scale(.9)}44%{opacity:1;transform:scale(1.16)}70%{opacity:.6;transform:scale(1)}}",
      "@keyframes cdffMote{from{opacity:.85;transform:translate3d(0,0,0) scale(1)}to{opacity:0;transform:translate3d(var(--dx,0px),var(--dy,0px),0) scale(.3)}}"
    ].join("");
    document.documentElement.appendChild(css);
  }

  function build() {
    if (layer || !document.body) return false;
    style();
    document.documentElement.classList.add("cdff");
    layer = document.createElement("div");
    layer.id = "cdFireflyLayer";
    if (REDUCE) layer.className = "reduced";
    layer.setAttribute("aria-hidden", "true");
    wake = document.createElement("div");
    wake.id = "cdFireflyWake";
    fly = document.createElement("div");
    fly.id = "cdFirefly";
    fly.setAttribute("aria-hidden", "true");
    fly.innerHTML = '<span class="halo"></span><span class="lamp"></span>' +
      '<svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="cdffWing" x1="1" y1="0" x2="0" y2="0">' +
      '<stop offset="0" stop-color="#fffdf4" stop-opacity=".72"/>' +
      '<stop offset=".34" stop-color="#cdf0ff" stop-opacity=".52"/>' +
      '<stop offset=".68" stop-color="#ffd6f4" stop-opacity=".42"/>' +
      '<stop offset="1" stop-color="#dcc9ff" stop-opacity=".3"/></linearGradient>' +
      '<radialGradient id="cdffCore">' +
      '<stop offset="0" stop-color="#fff8da" stop-opacity=".95"/>' +
      '<stop offset=".45" stop-color="#ffefb2" stop-opacity=".5"/>' +
      '<stop offset="1" stop-color="#ffdf90" stop-opacity="0"/></radialGradient>' +
      '</defs>' +
      '<ellipse class="wing l" fill="url(#cdffWing)" cx="10.75" cy="12.9" rx="5" ry="3.4" transform="rotate(48 16 12.9)"/>' +
      '<ellipse class="wing r" fill="url(#cdffWing)" cx="21.25" cy="12.9" rx="5" ry="3.4" transform="rotate(-48 16 12.9)"/>' +
      '<path class="body" d="M16 11.4 C18.6 12.6 19.0 15.4 18.5 17.8 C18.2 19.7 17.6 21.2 16.4 22.3 C16.15 22.55 15.85 22.55 15.6 22.3 C14.4 21.2 13.8 19.7 13.5 17.8 C13.0 15.4 13.4 12.6 16 11.4 Z"/>' +
      '<path class="ant" d="M15.2 10.4 C13.9 9.2 12.5 8.2 11.1 7.7"/>' +
      '<path class="ant" d="M16.8 10.4 C18.1 9.2 19.5 8.2 20.9 7.7"/>' +
      '<circle class="head" cx="16" cy="11.2" r="1.6"/>' +
      '<path class="seg" d="M14.0 15.9 Q16 16.6 18.0 15.9"/>' +
      '<circle cx="16" cy="18.6" r="2.2" fill="url(#cdffCore)"/>' +
      "</svg>";
    layer.appendChild(wake);
    layer.appendChild(fly);
    document.body.appendChild(layer);
    wl = fly.querySelector(".wing.l");
    wr = fly.querySelector(".wing.r");
    return true;
  }

  function spawn(x, y, dur) {
    if (!wake) return;
    var m = document.createElement("i");
    m.className = "cdff-mote";
    m.style.left = x + "px";
    m.style.top = y + "px";
    var ang = Math.random() * 6.2832, dist = 9 + Math.random() * 24;
    m.style.setProperty("--dx", (Math.cos(ang) * dist).toFixed(1) + "px");
    m.style.setProperty("--dy", (Math.sin(ang) * dist - 7).toFixed(1) + "px");
    m.style.setProperty("--dur", (dur || (420 + Math.random() * 380)) + "ms");
    wake.appendChild(m);
    motes.push(m);
    if (motes.length > 18) { var o = motes.shift(); if (o.parentNode) o.parentNode.removeChild(o); }
    setTimeout(function () {
      if (m.parentNode) m.parentNode.removeChild(m);
      var i = motes.indexOf(m); if (i >= 0) motes.splice(i, 1);
    }, 950);
  }

  function onMove(e) {
    px = e.clientX; py = e.clientY;
    lastMove = performance.now();
    if (!placed) { fx = px; fy = py; placed = true; }
    if (fly && !fly.classList.contains("on")) fly.classList.add("on");
  }

  function frame(now) {
    requestAnimationFrame(frame);
    if (!fly) return;
    var dt = Math.min(48, now - (last || now)) || 16.667; last = now;
    var idle = now - lastMove;
    var a = 1 - Math.pow(REDUCE ? 0.5 : 0.82, dt / 16.667);
    var ox = fx, oy = fy;
    fx += (px - fx) * a; fy += (py - fy) * a;
    var moved = Math.hypot(fx - ox, fy - oy);
    var amp = REDUCE ? 0 : Math.min(2.4 + Math.max(0, (idle - 1300) / 130), 16);
    amp *= 1 / (1 + moved * 0.16);
    var w = now * 0.001;
    var wx = Math.sin(w * 1.31) * amp + Math.sin(w * 0.53 + 1.1) * amp * 0.5;
    var wy = Math.cos(w * 1.72 + 0.6) * amp + Math.sin(w * 0.41 + 2.3) * amp * 0.5;
    fly.style.transform = "translate3d(" + (fx + wx).toFixed(1) + "px," + (fy + wy).toFixed(1) + "px,0)";
    if (wl && wr) {
      var wa = REDUCE ? 48 : 48 + Math.sin(now * 0.001 * (26 + Math.min(14, moved * 3.2))) * 11;
      wl.setAttribute("transform", "rotate(" + wa.toFixed(1) + " 16 12.9)");
      wr.setAttribute("transform", "rotate(" + (-wa).toFixed(1) + " 16 12.9)");
    }
    if (!REDUCE) {
      if (moved > 1.5 && now - lastMote > 26) { spawn(fx + wx, fy + wy); lastMote = now; }
      else if (idle > 1500 && now - lastSpark > 1150) { spawn(fx + wx, fy + wy, 700); lastSpark = now; }
    }
  }

  function bootFirefly() {
    if (!build()) return false;
    px = window.innerWidth / 2; py = window.innerHeight * 0.66;
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", function () { for (var i = 0; i < 5; i++) spawn(fx, fy, 520); }, true);
    document.addEventListener("pointerover", function (e) {
      var t = e.target;
      if (fly) fly.classList.toggle("hot", !!(t && t.closest && t.closest(HOVER_SEL)));
    }, true);
    document.addEventListener("mouseout", function (e) {
      if (fly && !e.relatedTarget && !e.toElement) fly.classList.remove("on");
    });
    requestAnimationFrame(frame);
    return true;
  }

  if (!bootFirefly()) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bootFirefly);
    else document.addEventListener("load", bootFirefly);
  }
})();
