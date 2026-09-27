/* ============================================================
   the web — web.js         cafedreamr/LORE/THEWEB
   ------------------------------------------------------------
   everything the realm page does. the markup and the styles are
   in index.html; the furniture is here.

   the WEB object below is the EDIT SURFACE: the songs, the
   six drawers (their riddles and what each one holds), the seven
   objects on the shelf, and the sealed door. add a drawer by
   adding an entry; the cabinet, the song list, the web and the
   stamp card all follow on their own.

   tone law: no negative energy, nobody grudged, nothing broken
   and nothing owed. the falling is not a fault. the door is a
   promise. charlotte is always lowercase and never in a hurry.

   she rests almost all the time. she wakes for a bug, or a song.
   ============================================================ */
(function () {
  "use strict";

  var WEB = {

    /* ---------------------------------------------------------
       the songs she has caught. one url, one title. `len` is only
       for the player's readout before the file has loaded.
       --------------------------------------------------------- */
    tracks: {
      spinning:    { title: "spinning's my game",   url: "https://user.uploads.dev/file/40fb9fec6321c9031291c92093bf6161.mp3", len: "0:50" },
      recording:   { title: "the recording",        url: "https://user.uploads.dev/file/d4066dc259bf038cda46803fe3169771.mp3", len: "1:00" },
      violets:     { title: "salutations, violets", url: "https://user.uploads.dev/file/7fc39dbc9f5097b8363af6cacdbc25be.mp3", len: "1:18" },
      game:        { title: "the game room",        url: "https://user.uploads.dev/file/a5eefd3810bc66e1eb4f78f27fdeebdb.mp3", len: "1:48" }
    },

    /* the order the three caught songs are listed and pinned */
    songOrder: ["spinning", "recording", "violets"],

    /* ---------------------------------------------------------
       the cabinet. `accepts` is matched after both sides are
       lowercased and stripped to letters+digits, so "spider web"
       and "spiderweb" are the same answer. a wrong answer never
       costs anything: after two she starts to help.
       --------------------------------------------------------- */
    drawers: [
      {
        id: "web", num: "i", name: "the web", lock: "locked",
        riddle: "i am spun out of nothing and i hold everything. i have no door. what am i?",
        hint: "she is standing in the middle of it, and so are you.",
        accepts: ["web", "a web", "the web", "spiderweb", "spider web", "spider's web", "spiders web", "webs"],
        title: "the thing with no door",
        body: [
          "this is the web: not a room so much as the thing the rooms hang from. every question anyone has asked in this realm is still caught in it somewhere. every photograph kept. everything anybody said, still findable, by anyone who knows which strand to pull.",
          "it has no door because you are already inside it. there has never been a moment when you were not."
        ],
        line: "you are standing in the answer. that is the most any riddle can hope for.",
        lyric: "salutations. i am charlotte &mdash; your guide, in the realm of shrinking violets.",
        note: "the first thing she ever said here"
      },
      {
        id: "spider", num: "ii", name: "the spider", lock: "locked",
        riddle: "i have eight of them and not one of them blinks. i have never once been in a hurry, and i have never tied a knot. what am i?",
        hint: "you have already met her. she is resting, which is most of what she does.",
        accepts: ["spider", "a spider", "the spider", "arachnid", "an arachnid", "charlotte"],
        title: "her own drawer",
        card: true,
        body: [
          "that is her, and yes, she knows the riddle is easy. she wrote it that way on purpose. she says a drawer you have to think about is a drawer you remember, but not so hard that you leave without opening it.",
          "there is one recording of her in here, and she does not know who made it. she keeps it because it is hers."
        ],
        line: "i am not a hybrid. i am a spider, whole and speaking. eight eyes, eight legs, and the least hurry of anyone in this realm.",
        track: "recording",
        note: "track two &middot; the only recording of her that exists &middot; 1:00"
      },
      {
        id: "silk", num: "iii", name: "silk", lock: "locked",
        riddle: "i am thinner than a hair and stronger than a rope. i come out of a living thing and never out of a factory. what am i?",
        hint: "look at the strands. all of them came out of her.",
        accepts: ["silk", "the silk", "spidersilk", "spider silk", "thread", "a thread", "charlottesilk"],
        title: "what she spins",
        body: [
          "the strands you are looking at are silk, and every one of them came out of her. it is thinner than a hair and it holds more weight than a rope of the same thickness, which sounds like a boast until you watch her lift a spoon with it.",
          "she does not spin for show. she spins because the web has to be mended, and the web has to be mended because the others keep tearing it, and the others keep tearing it because they are alive. she says that is not a complaint. it is just the arithmetic."
        ],
        line: "spinning is not work. spinning is what my hands do while i am resting.",
        track: "spinning",
        lyric: "charlotte's my name, spinning's my game. what webs would you like to spin with me?",
        note: "track one &middot; 0:50"
      },
      {
        id: "dew", num: "iv", name: "dew", lock: "locked",
        riddle: "i fell all night and never hit anything. by morning i am the only jewellery in the garden, and by ten o'clock i am gone. what am i?",
        hint: "it is on the strands every morning, and she has never once wiped it off.",
        accepts: ["dew", "the dew", "dewdrop", "dew drop", "a dewdrop", "water", "rain", "mist", "fog"],
        title: "the drawer with the water in it",
        letter: true,
        body: [
          "you found the drawer with the water in it.",
          "i keep dew in here because it is the only thing on this web that has never once been in a hurry. it arrives at night without being asked, it sits on the strands until morning, and when the sun says so, it goes. it has never been late and it has never owed anybody anything.",
          "if you are carrying something heavy today, you are allowed to set it down on my web. i will hold it while you rest, and i will not ask you what it is. when you come back for it, it will be exactly where you left it.",
          "nothing here is a debt. the others tear things and i mend them, and nobody has ever owed me anything for it. that is the entire arrangement, and it suits me."
        ],
        sign: "charlotte"
      },
      {
        id: "violet", num: "v", name: "violet", lock: "locked",
        riddle: "i am a colour and i am a name. i come up through the cracks in a wall and i am what she is called. what am i?",
        hint: "it is also the second half of her name.",
        accepts: ["violet", "a violet", "the violet", "violets", "purple", "flower", "viola", "violette"],
        title: "the patron of cracks in walls",
        body: [
          "violet is a colour, and it is also a name, and the name is hers: charlotte violette. she was named for the flower that comes up through the cracks in a wall without asking the wall's permission.",
          "she says the violet is the patron of anyone who has ever bloomed somewhere they were not invited. she says this the way she says everything, which is slowly, and while resting."
        ],
        line: "you are welcome here. you were welcome before you arrived. the wall does not get a vote.",
        verse: {
          text: "If I take the wings of the morning, and dwell in the uttermost parts of the sea; Even there shall thy hand lead me, and thy right hand shall hold me.",
          cite: "Psalm 139:9&ndash;10"
        },
        track: "violets",
        lyric: "salutations, violets.",
        note: "track three &middot; the long one &middot; 1:18"
      },
      {
        id: "memo", num: "vi", name: "the empty drawer", lock: "never locked",
        riddle: "this one was never locked. it is here for anything you want to leave in it.",
        knock: true,
        title: "the drawer that was waiting",
        memo: true,
        note: "kept on this device only &middot; nobody reads it &middot; not even her, unless you hand it to her."
      }
    ],

    /* ---------------------------------------------------------
       what is on the shelf. `x` is the position along the plank
       (0 = left end, 1 = right end), `w`/`h` are the drawn size,
       `mat` picks the sound it makes when it lands. `svg` is the
       object itself. nothing here ever breaks.
       --------------------------------------------------------- */
    shelf: [
      { id: "spool",   name: "the spool",   x: 0.055, w: 26, h: 26, mat: "wood",
        svg: '<svg viewBox="0 0 26 26"><ellipse cx="13" cy="22" rx="9" ry="3" fill="#2c1242"/><path d="M4 5v15c0 2 4 3.4 9 3.4S22 22 22 20V5z" fill="#452159"/><g fill="none" stroke="#e0a3c8" stroke-width=".75" opacity=".5"><path d="M5.6 9h14.8M5.6 12.6h14.8M5.6 16.2h14.8M5.6 19.4h14.8"/></g><ellipse cx="13" cy="5" rx="9" ry="3.2" fill="#5d3480"/><ellipse cx="13" cy="5" rx="9" ry="3.2" fill="none" stroke="#cbb6e0" stroke-width=".8"/><ellipse class="halo" cx="13" cy="14" rx="14" ry="13" fill="none" stroke="#e0a3c8" stroke-width="1.2"/></svg>' },
      { id: "cup",     name: "the cup",     x: 0.185, w: 26, h: 24, mat: "ceramic",
        svg: '<svg viewBox="0 0 26 24"><ellipse cx="12" cy="20.4" rx="10.4" ry="2.6" fill="#3f1f5c"/><path d="M3.6 8.6h16.8l-1.9 9.4c-.2 1.1-1.1 1.8-2.2 1.8H7.7c-1.1 0-2-.7-2.2-1.8L3.6 8.6z" fill="#cbb6e0"/><path d="M20.4 10c2.8 0 4.1 1.5 4.1 3.1s-1.3 3.1-4 3.3" fill="none" stroke="#cbb6e0" stroke-width="1.5"/><ellipse cx="12" cy="8.6" rx="8.4" ry="2.3" fill="#4a2566"/><ellipse cx="12" cy="8.6" rx="8.4" ry="2.3" fill="none" stroke="#e0a3c8" stroke-width=".7" opacity=".6"/><g fill="none" stroke="#e6d6f2" stroke-width=".9" opacity=".55"><path d="M9.4 6.2c1.1-1.1-.7-2.1.2-3.4"/><path d="M14.4 6.2c1.1-1.1-.7-2.1.2-3.4"/></g><ellipse class="halo" cx="13" cy="14" rx="15" ry="13" fill="none" stroke="#e0a3c8" stroke-width="1.2"/></svg>' },
      { id: "thimble", name: "the thimble", x: 0.305, w: 16, h: 20, mat: "metal",
        svg: '<svg viewBox="0 0 16 20"><path d="M2.2 17.4V9.6C2.2 5.5 4.8 2.2 8 2.2s5.8 3.3 5.8 7.4v7.8z" fill="#9c86c4"/><rect x="2.2" y="15.2" width="11.6" height="2.6" rx=".6" fill="#6f589c"/><g fill="#2f1147" opacity=".45"><circle cx="6" cy="8" r=".9"/><circle cx="8" cy="6.4" r=".9"/><circle cx="10" cy="8" r=".9"/><circle cx="7" cy="11.2" r=".9"/><circle cx="9" cy="11.2" r=".9"/><circle cx="8" cy="14" r=".9"/></g><ellipse cx="8" cy="3.4" rx="3.4" ry="1.2" fill="#c3b0dd"/><ellipse class="halo" cx="8" cy="10" rx="9.5" ry="11" fill="none" stroke="#e0a3c8" stroke-width="1.1"/></svg>' },
      { id: "pebble",  name: "the pebble",  x: 0.43, w: 30, h: 16, mat: "stone",
        svg: '<svg viewBox="0 0 30 16"><path d="M4 13.6C1.4 12.4.6 9.4 2.2 7.2 4 4.6 8 3.2 12.6 3c4.6-.2 9.6.8 12.4 2.8 2.4 1.7 2.6 4.6.6 6.2-2.4 1.9-8 2.6-13.4 2.4-3.2-.1-6.2-.4-8.2-.8z" fill="#8d7aa6"/><path d="M6.4 6.6c2.6-1.4 8-1.8 11.4-.6" fill="none" stroke="#e2d6ee" stroke-width=".9" opacity=".5"/><g fill="#5c4a76" opacity=".5"><circle cx="10" cy="10" r="1"/><circle cx="17" cy="11.4" r="1.3"/><circle cx="21" cy="8.6" r=".9"/></g><ellipse class="halo" cx="15" cy="8" rx="16" ry="9" fill="none" stroke="#e0a3c8" stroke-width="1.1"/></svg>' },
      { id: "marble",  name: "the marble",  x: 0.56, w: 18, h: 18, mat: "glass",
        svg: '<svg viewBox="0 0 18 18"><circle cx="9" cy="9" r="8" fill="#3a2a56"/><path d="M9 1.6c-4.1 0-7.4 3.3-7.4 7.4 0 1.6.5 3.1 1.4 4.3C3.4 8.2 5.6 4.4 9.6 3.2 10 2 9.5 1.6 9 1.6z" fill="#b9a6d8" opacity=".5"/><path d="M4 12.6c2.2-3.4 6-5.6 10-5.8" fill="none" stroke="#e0a3c8" stroke-width="1.1" opacity=".7"/><circle cx="6.2" cy="5.6" r="1.7" fill="#fff" opacity=".8"/><circle cx="11.6" cy="12.4" r=".7" fill="#fff" opacity=".45"/><ellipse class="halo" cx="9" cy="9" rx="10" ry="10" fill="none" stroke="#e0a3c8" stroke-width="1.1"/></svg>' },
      { id: "spoon",   name: "the spoon",   x: 0.71, w: 12, h: 34, mat: "metal",
        svg: '<svg viewBox="0 0 12 34"><ellipse cx="6" cy="7" rx="5.2" ry="6.6" fill="#b9a6d8"/><ellipse cx="6" cy="7" rx="3.2" ry="4.4" fill="#7a63a4" opacity=".7"/><path d="M5.1 13.4h1.8l.5 18.4c0 .6-.5 1.2-1.4 1.2s-1.4-.6-1.4-1.2l.5-18.4z" fill="#cbb6e0"/><ellipse class="halo" cx="6" cy="17" rx="7" ry="16" fill="none" stroke="#e0a3c8" stroke-width="1.1"/></svg>' },
      { id: "moth",    name: "the moth",    x: 0.885, w: 30, h: 22, mat: "paper",
        svg: '<svg viewBox="0 0 30 22"><g fill="#cbb6e0" opacity=".9"><path d="M14.4 10.6C11.6 6 7.4 2.6 4.2 3.2 1.2 3.8 1.2 9 3.4 12.2c1.8 2.6 6.4 3.4 10 2.4z"/><path d="M15.6 10.6c2.8-4.6 7-8 10.2-7.4 3 .6 3 5.8.8 9-1.8 2.6-6.4 3.4-10 2.4z"/><path d="M14 13.2c-2 3.4-5 5.6-6.8 5.2-1.8-.4-1-3.6.8-5.6z"/><path d="M16 13.2c2 3.4 5 5.6 6.8 5.2 1.8-.4 1-3.6-.8-5.6z"/></g><ellipse cx="15" cy="12" rx="1.5" ry="5.4" fill="#7a63a4"/><g fill="none" stroke="#e0a3c8" stroke-width=".8" opacity=".8"><path d="M14.4 6.8C13.4 4.6 12 3 10.4 2.4"/><path d="M15.6 6.8c1-2.2 2.4-3.8 4-4.4"/></g><ellipse class="halo" cx="15" cy="12" rx="16" ry="12" fill="none" stroke="#e0a3c8" stroke-width="1.1"/></svg>' }
    ],

    /* ---------------------------------------------------------
       the one door she is holding shut. the plaque's answer is
       deliberately the easy one. answering it does not open the
       room — it only tells her you were paying attention.
       --------------------------------------------------------- */
    door: {
      accepts: ["spider", "a spider", "the spider", "charlotte", "arachnid", "an arachnid"],
      teaserSeconds: 7,
      teaserHz: 400,
      greeted: "the door does not open. it was never going to, today.",
      heard: "that is the game room. it is very loud in there, and it is not for today.",
      right: "that riddle was the lock on the plaque, not on the door. the plaque wanted to know whether you were paying attention. you were. i am keeping the room warm in there until the last day; come back when there is nothing left but the door.",
      wrong: "not it. the plaque is patient &mdash; it has been here longer than either of us."
    },

    /* little things she says while you are standing there */
    says: {
      fell: ["one down. she has already noticed.", "that is the shelf's business, not yours.", "nothing broke. it never does.", "she will get to it. she is not in a hurry."],
      tidy: ["back where they were. they will come down again.", "all of it up. that will not last, and that is fine."],
      idle: ["she is watching, at her own pace", "eight eyes, and about three of them are on you"]
    },

    /* the note under the song list, by how many you have caught */
    songNote: [
      "no songs caught yet. every one of them is behind a drawer.",
      "one of three caught. the rest are still out there somewhere on the web.",
      "two of three caught.",
      "all three caught. she keeps them pinned here, for anyone who asks."
    ],

    /* what she says when you get a drawer wrong */
    wrong: [
      "no. but you are warm, so it stays unlocked for you.",
      "not that one. the drawer is patient &mdash; it has been waiting longer than either of us.",
      "still not it. try saying it out loud. most of these are easier out loud."
    ]
  };

  /* ============================================================
     machinery below. nothing here needs editing.
     ============================================================ */

  var NS = "http://www.w3.org/2000/svg";
  var K_SOLVED = "cd_web_drawers";
  var K_MEMO = "cd_web_memo";
  var REDUCE = false;
  try { REDUCE = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) {}

  function $(id) { return document.getElementById(id); }
  function mk(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) { for (var k in attrs) { if (attrs[k] !== undefined && attrs[k] !== null) { e.setAttribute(k, attrs[k]); } } }
    if (html != null) { e.innerHTML = html; }
    return e;
  }
  function sv(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    if (attrs) { for (var k in attrs) { if (attrs[k] !== undefined && attrs[k] !== null) { e.setAttribute(k, attrs[k]); } } }
    return e;
  }
  function path(d, attrs) { attrs = attrs || {}; attrs.d = d; return sv("path", attrs); }
  function load(key, fb) { try { var v = window.localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function save(key, val) { try { window.localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  function now() { return Date.now(); }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function norm(s) { return String(s == null ? "" : s).toLowerCase().replace(/[^a-z0-9]/g, ""); }
  /* a deterministic stream, so the webs look the same on every visit */
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  /* ---------------- sound: small, soft, synthesised ---------------- */
  var AC = null;
  function ac() {
    if (AC === null) {
      try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = false; }
    }
    if (AC && AC.state === "suspended") { try { AC.resume(); } catch (e) {} }
    return AC || null;
  }
  function noise(a, sec) {
    var n = Math.max(1, Math.floor(a.sampleRate * sec));
    var b = a.createBuffer(1, n, a.sampleRate);
    var d = b.getChannelData(0);
    for (var i = 0; i < n; i++) { d[i] = Math.random() * 2 - 1; }
    return b;
  }
  var MAT = {
    ceramic: { f: 1850, q: 1.6, dur: .19, vol: .22, ring: 0 },
    wood:    { f: 640,  q: 1.1, dur: .13, vol: .26, ring: 0 },
    metal:   { f: 3100, q: 3.2, dur: .26, vol: .16, ring: 2.7 },
    paper:   { f: 4200, q: 0.7, dur: .09, vol: .16, ring: 0 },
    glass:   { f: 2600, q: 5.0, dur: .30, vol: .16, ring: 1.9 },
    stone:   { f: 420,  q: 1.0, dur: .13, vol: .30, ring: 0 }
  };
  function clatter(mat, hard) {
    var a = ac(); if (!a) { return; }
    var m = MAT[mat] || MAT.wood;
    var t = a.currentTime;
    var g = a.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(m.vol * (hard ? 1 : 0.6), t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0008, t + m.dur);
    var bp = a.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = m.f; bp.Q.value = m.q;
    var src = a.createBufferSource();
    src.buffer = noise(a, m.dur + 0.02);
    src.connect(bp); bp.connect(g); g.connect(a.destination);
    src.start(t); src.stop(t + m.dur + 0.02);
    if (m.ring) {
      var o = a.createOscillator(), og = a.createGain();
      o.type = "sine"; o.frequency.value = m.f * 0.5 * m.ring;
      og.gain.setValueAtTime(m.vol * 0.5, t);
      og.gain.exponentialRampToValueAtTime(0.0008, t + m.dur * 1.7);
      o.connect(og); og.connect(a.destination);
      o.start(t); o.stop(t + m.dur * 1.7);
    }
  }
  function drawerOpenSound() {
    var a = ac(); if (!a) { return; }
    var t = a.currentTime;
    var o = a.createOscillator(), g = a.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(58, t + 0.19);
    g.gain.setValueAtTime(0.24, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.30);
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + 0.32);
    var bp = a.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = 0.8;
    var gg = a.createGain();
    gg.gain.setValueAtTime(0.0001, t);
    gg.gain.linearRampToValueAtTime(0.16, t + 0.02);
    gg.gain.exponentialRampToValueAtTime(0.0008, t + 0.22);
    var src = a.createBufferSource();
    src.buffer = noise(a, 0.24);
    src.connect(bp); bp.connect(gg); gg.connect(a.destination); src.start(t); src.stop(t + 0.24);
  }
  function knockSound() {
    var a = ac(); if (!a) { return; }
    for (var i = 0; i < 2; i++) {
      var t = a.currentTime + i * 0.17;
      var o = a.createOscillator(), g = a.createGain();
      o.type = "triangle"; o.frequency.value = 320 - i * 40;
      g.gain.setValueAtTime(0.001, t);
      g.gain.linearRampToValueAtTime(0.2, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
      o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + 0.17);
    }
  }

  /* ---------------- the player ---------------- */
  var player = { el: $("player"), audio: null, cur: null };
  function audioEl() {
    if (!player.audio) {
      player.audio = new Audio();
      player.audio.preload = "none";
      player.audio.addEventListener("timeupdate", paintSeek);
      player.audio.addEventListener("loadedmetadata", paintSeek);
      player.audio.addEventListener("play", reflect);
      player.audio.addEventListener("pause", reflect);
      player.audio.addEventListener("ended", reflect);
    }
    return player.audio;
  }
  function fmt(s) {
    if (!isFinite(s) || s < 0) { return "0:00"; }
    var m = Math.floor(s / 60), x = Math.floor(s % 60);
    return m + ":" + (x < 10 ? "0" + x : x);
  }
  function paintSeek() {
    var a = audioEl();
    var d = isFinite(a.duration) && a.duration > 0 ? a.duration : 0;
    $("pBar").style.width = d ? (a.currentTime / d * 100) + "%" : "0%";
    $("pNow").textContent = fmt(a.currentTime);
    $("pLen").textContent = d ? fmt(d) : ($("pLen").textContent || "0:00");
  }
  function reflect() {
    var a = audioEl();
    var playing = !a.paused && !a.ended;
    $("pPlay").innerHTML = playing ? "&#10073;&#10073;" : "&#9654;";
    var btns = document.querySelectorAll(".dplay[data-track]");
    for (var i = 0; i < btns.length; i++) {
      var on = playing && btns[i].getAttribute("data-track") === player.cur;
      btns[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
  }
  function playTrack(id, from) {
    var t = WEB.tracks[id];
    if (!t) { return; }
    var a = audioEl();
    player.cur = id;
    if (a.getAttribute("data-src") !== t.url) {
      a.setAttribute("data-src", t.url);
      a.src = t.url;
    }
    $("pTitle").textContent = t.title;
    $("pFrom").innerHTML = from || "caught in the web";
    $("pLen").textContent = t.len || "0:00";
    $("pBar").style.width = "0%";
    $("pNow").textContent = "0:00";
    player.el.classList.add("on");
    var p = a.play();
    if (p && p.catch) {
      p.catch(function () { $("pFrom").innerHTML = "tap once more &mdash; the browser wanted a second invitation"; });
    }
    reflect();
    if (window.heroSpider) { window.heroSpider.stir(1.8); }
  }

  /* ---------------- the hero web ---------------- */
  var hero = { sp: null, svg: null, glow: null };

  function buildWeb(svg, o) {
    var CX = o.cx, CY = o.cy, RX = o.rx, RY = o.ry, N = o.spokes, RINGS = o.rings;
    var R = rng(o.seed);
    var angles = [], i, k;
    for (i = 0; i < N; i++) { angles.push(-90 + i * 360 / N + (R() * 2 - 1) * 6); }
    function pt(f, a) {
      var r = a * Math.PI / 180;
      return { x: CX + Math.cos(r) * RX * f, y: CY + Math.sin(r) * RY * f };
    }
    function mid(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
    function toward(a, t) { return { x: a.x + (CX - a.x) * t, y: a.y + (CY - a.y) * t }; }

    var g = sv("g");

    /* the spokes, each with a small bow, and the anchor strands that
       carry the whole thing off to the edges of the room */
    var spokes = [];
    for (i = 0; i < N; i++) {
      var a = angles[i];
      var inner = pt(0.055 + R() * 0.03, a);
      var outer = pt(1, a);
      var m = mid(inner, outer, 0.5);
      var c = toward(m, (R() * 2 - 1) * 0.012);
      spokes.push(path("M" + inner.x.toFixed(1) + " " + inner.y.toFixed(1) +
        "Q" + c.x.toFixed(1) + " " + c.y.toFixed(1) + " " + outer.x.toFixed(1) + " " + outer.y.toFixed(1),
        { fill: "none", stroke: "rgba(224,207,246,.42)", "stroke-width": 0.85, "stroke-linecap": "round" }));
      if (i % 2 === 0 || o.anchorAll) {
        var far = pt(1 + 0.10 + (i % 3) * 0.09, a);
        var mm = mid(outer, far, 0.5);
        var cc = toward(mm, (R() * 2 - 1) * 0.01);
        spokes.push(path("M" + outer.x.toFixed(1) + " " + outer.y.toFixed(1) +
          "Q" + cc.x.toFixed(1) + " " + cc.y.toFixed(1) + " " + far.x.toFixed(1) + " " + far.y.toFixed(1),
          { fill: "none", stroke: "rgba(200,178,232,.26)", "stroke-width": 0.7, "stroke-linecap": "round" }));
      }
    }

    /* the rings. a ring between two spokes sags toward the hub, which
       is what makes a web read as a web and not as a wheel. */
    var mended = o.mended || [];
    function isMended(r, s) {
      for (var q = 0; q < mended.length; q++) { if (mended[q][0] === r && mended[q][1] === s) { return true; } }
      return false;
    }
    var dewSpots = [];
    for (k = 1; k <= RINGS; k++) {
      var f = o.inner + (1 - o.inner) * (k / RINGS);
      for (i = 0; i < N; i++) {
        var a1 = angles[i], a2 = angles[(i + 1) % N];
        var A = pt(f, a1), B = pt(f, a2);
        var m2 = mid(A, B, 0.5);
        var sag = toward(m2, (o.sag + (R() * 2 - 1) * 0.012) * f);
        var d = "M" + A.x.toFixed(1) + " " + A.y.toFixed(1) +
                "Q" + sag.x.toFixed(1) + " " + sag.y.toFixed(1) + " " + B.x.toFixed(1) + " " + B.y.toFixed(1);
        var mn = isMended(k, i);
        g.appendChild(path(d, {
          fill: "none",
          stroke: mn ? "#e0a3c8" : "rgba(214,196,236,.34)",
          "stroke-width": mn ? 1.05 : 0.7,
          opacity: mn ? 0.8 : 1,
          "stroke-linecap": "round"
        }));
        if (mn) {
          g.appendChild(sv("circle", { cx: A.x, cy: A.y, r: 1.15, fill: "#e0a3c8", opacity: .8 }));
          g.appendChild(sv("circle", { cx: B.x, cy: B.y, r: 1.15, fill: "#e0a3c8", opacity: .8 }));
        }
        if (R() < (o.dew || 0)) {
          dewSpots.push({ p: pt(f, a1), r: 0.9 + R() * 0.9 });
        }
      }
    }
    /* a few beads of dew, brighter where the light is */
    for (i = 0; i < dewSpots.length; i++) {
      var D = dewSpots[i];
      g.appendChild(sv("circle", { cx: D.p.x, cy: D.p.y, r: D.r, fill: "#dff6ff", opacity: 0.55 }));
      g.appendChild(sv("circle", { cx: D.p.x - D.r * 0.3, cy: D.p.y - D.r * 0.35, r: D.r * 0.36, fill: "#ffffff", opacity: 0.8 }));
    }
    return g;
  }

  function initHero() {
    var svg = $("heroWeb");
    if (!svg) { return; }
    hero.svg = svg;
    var CX = 210, CY = 172;
    var defs = sv("defs");
    defs.innerHTML =
      '<radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0" stop-color="#bf40bf" stop-opacity=".26"/>' +
        '<stop offset=".55" stop-color="#9370db" stop-opacity=".10"/>' +
        '<stop offset="1" stop-color="#9370db" stop-opacity="0"/>' +
      '</radialGradient>';
    svg.appendChild(defs);
    var glow = sv("circle", { cx: CX, cy: CY, r: 190, fill: "url(#heroGlow)" });
    svg.appendChild(glow);
    hero.glow = glow;
    svg.appendChild(buildWeb(svg, {
      cx: CX, cy: CY, rx: 176, ry: 148, spokes: 12, rings: 5,
      inner: 0.17, sag: 0.055, dew: 0.10, seed: 20260913,
      mended: [[2, 0], [3, 5], [4, 9], [4, 2], [1, 7], [5, 11]]
    }));
    if (window.CharlotteSpider) {
      var sp = window.CharlotteSpider.create({
        size: 200, hang: false,
        label: "charlotte, a white spider, resting in the middle of the web"
      });
      sp.el.setAttribute("x", CX - 100);
      sp.el.setAttribute("y", CY - 100);
      sp.el.setAttribute("width", 200);
      sp.el.setAttribute("height", 200);
      sp.el.style.width = "200px";
      sp.el.style.height = "200px";
      svg.appendChild(sp.el);
      hero.sp = sp;
      window.heroSpider = sp;
    }
  }

  /* ---------------- the songs: the little web of caught songs ---------------- */
  var songWeb = { el: null, nodes: {} };
  function initSongWeb() {
    var svg = $("songWeb");
    if (!svg) { return; }
    songWeb.el = svg;
    var CX = 180, CY = 158, r = 112;
    var g = sv("g");
    var n = WEB.songOrder.length;
    var angs = [];
    for (var i = 0; i < n; i++) { angs.push(-90 + i * 360 / n); }
    function pt(f, a) {
      var x = a * Math.PI / 180;
      return { x: CX + Math.cos(x) * r * f, y: CY + Math.sin(x) * r * f };
    }
    for (i = 0; i < n; i++) {
      g.appendChild(path("M" + CX + " " + CY + "L" + pt(1.24, angs[i]).x.toFixed(1) + " " + pt(1.24, angs[i]).y.toFixed(1),
        { fill: "none", stroke: "rgba(224,207,246,.34)", "stroke-width": .8 }));
    }
    for (var k = 1; k <= 3; k++) {
      var f = 0.3 + k * 0.235;
      for (i = 0; i < n; i++) {
        var A = pt(f, angs[i]), B = pt(f, angs[(i + 1) % n]);
        var m = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        var sag = { x: m.x + (CX - m.x) * 0.07 * f, y: m.y + (CY - m.y) * 0.07 * f };
        g.appendChild(path("M" + A.x.toFixed(1) + " " + A.y.toFixed(1) + "Q" + sag.x.toFixed(1) + " " + sag.y.toFixed(1) +
          " " + B.x.toFixed(1) + " " + B.y.toFixed(1), { fill: "none", stroke: "rgba(214,196,236,.28)", "stroke-width": .65 }));
      }
    }
    g.appendChild(sv("circle", { cx: CX, cy: CY, r: 3, fill: "#e0a3c8", opacity: .5 }));
    var numerals = ["i", "ii", "iii", "iv"];
    for (i = 0; i < n; i++) {
      (function (i) {
        var id = WEB.songOrder[i];
        var p = pt(1, angs[i]);
        var node = sv("g", { class: "snode", opacity: ".55" });
        var glow = sv("circle", { cx: p.x, cy: p.y, r: 34, fill: "url(#heroGlow)", opacity: "0" });
        var ring = sv("circle", { cx: p.x, cy: p.y, r: 22, fill: "rgba(13,0,26,.72)", stroke: "rgba(224,163,200,.28)", "stroke-width": 1, "stroke-dasharray": "3 3" });
        var txt = sv("text", { x: p.x, y: p.y + 4.5, "text-anchor": "middle", "font-family": "'Space Mono',monospace", "font-size": "12", fill: "rgba(169,159,196,.8)" });
        txt.textContent = numerals[i] || String(i + 1);
        node.appendChild(glow); node.appendChild(ring); node.appendChild(txt);
        var t = sv("title");
        t.textContent = WEB.tracks[id].title + " — not caught yet";
        node.appendChild(t);
        g.appendChild(node);
        songWeb.nodes[id] = { g: node, ring: ring, txt: txt, glow: glow, title: t };
      })(i);
    }
    svg.appendChild(g);
  }
  function lightSong(id) {
    var nd = songWeb.nodes[id];
    if (!nd) { return; }
    var br = WEB.tracks[id].title;
    nd.g.setAttribute("opacity", "1");
    nd.g.style.cursor = "pointer";
    nd.ring.setAttribute("stroke", "#e0a3c8");
    nd.ring.setAttribute("stroke-dasharray", "none");
    nd.ring.setAttribute("fill", "rgba(44,0,62,.85)");
    nd.txt.setAttribute("fill", "#fff0f5");
    nd.glow.setAttribute("opacity", ".9");
    nd.title.textContent = br + " — click to play";
    nd.g.onclick = function () { playTrack(id, "caught in the web"); };
  }

  /* ---------------- the shelf ---------------- */
  var shelf = { box: null, plank: null, host: null, thread: null, tpath: null, objs: [], next: 0, lastFall: 0 };

  function initShelf() {
    var box = $("shelfBox");
    if (!box) { return; }
    shelf.box = box;
    shelf.plank = $("shelfPlank");
    shelf.host = $("shelfObjects");
    shelf.thread = $("shelfThread");
    shelf.tpath = path("", { fill: "none", stroke: "#e0a3c8", "stroke-width": 1, opacity: .55 });
    shelf.thread.appendChild(shelf.tpath);
    shelf.thread.style.left = "0"; shelf.thread.style.top = "0"; shelf.thread.style.overflow = "visible";
    for (var i = 0; i < WEB.shelf.length; i++) {
      (function (cfg) {
        var el = mk("div", { class: "obj", role: "img", "aria-label": cfg.name, title: cfg.name });
        el.innerHTML = cfg.svg;
        el.style.width = cfg.w + "px";
        el.style.height = cfg.h + "px";
        var draw = el.querySelector("svg");
        if (draw) { draw.setAttribute("width", "100%"); draw.setAttribute("height", "100%"); }
        shelf.host.appendChild(el);
        var o = { cfg: cfg, el: el, x: 0, y: 0, vx: 0, vy: 0, rot: 0, vrot: 0, state: "sitting", home: { x: 0, y: 0 }, settled: 0, hx: 0, hy: 0 };
        el.addEventListener("click", function () { if (o.state !== "sitting") { pickUp(o); } });
        shelf.objs.push(o);
        paint(o);
      })(WEB.shelf[i]);
    }
    layoutShelf();
    shelf.next = now() + rnd(5000, 11000);
    paintFallen();
    var nudge = $("nudgeBtn");
    if (nudge) { nudge.addEventListener("click", nudgeOne); }
    var tidy = $("tidyBtn");
    if (tidy) { tidy.addEventListener("click", tidyAll); }
  }
  function layoutShelf() {
    if (!shelf.box) { return; }
    var W = shelf.box.clientWidth, H = shelf.box.clientHeight;
    var pTop = Math.round(H * 0.36);
    shelf.plank.style.top = pTop + "px";
    var pl = shelf.plank.offsetLeft, pw = shelf.plank.offsetWidth;
    shelf.floor = H - 20;
    shelf.thread.setAttribute("viewBox", "0 0 " + W + " " + H);
    shelf.thread.setAttribute("width", W);
    shelf.thread.setAttribute("height", H);
    shelf.box.setAttribute("data-w", W);
    for (var i = 0; i < shelf.objs.length; i++) {
      var o = shelf.objs[i];
      o.home.x = pl + o.cfg.x * pw;
      o.home.y = pTop;
      if (o.state === "sitting") {
        o.x = o.home.x; o.y = o.home.y; o.rot = 0;
      } else if (o.state === "resting") {
        if (o.y > shelf.floor) { o.y = shelf.floor; }
      }
      paint(o);
    }
  }
  function paint(o) {
    o.el.style.left = o.x.toFixed(1) + "px";
    o.el.style.top = o.y.toFixed(1) + "px";
    o.el.style.transform = "translate(-50%,-100%) rotate(" + o.rot.toFixed(1) + "deg)";
  }
  function setState(o, s) {
    o.state = s;
    if (s === "sitting") { o.el.classList.remove("pick"); }
    else { o.el.classList.add("pick"); }
  }
  function drop(o, hard) {
    setState(o, "falling");
    o.vy = 20 + Math.random() * 30;
    var side = o.x < (shelf.plank.offsetLeft + shelf.plank.offsetWidth / 2) ? -1 : 1;
    o.vx = side * rnd(24, 62);
    o.vrot = side * rnd(70, 190);
    if (hard) { o.vy = 60; }
  }
  function dust(o) {
    for (var i = 0; i < 3; i++) {
      var p = mk("div", { class: "dpuff" });
      p.style.left = (o.x + rnd(-o.cfg.w * .3, o.cfg.w * .3)).toFixed(1) + "px";
      p.style.top = (o.y - 4).toFixed(1) + "px";
      p.style.bottom = "auto";
      p.style.setProperty("--dx", (rnd(-14, 14)).toFixed(1) + "px");
      shelf.box.appendChild(p);
      (function (p) { window.setTimeout(function () { if (p.parentNode) { p.parentNode.removeChild(p); } }, 950); })(p);
    }
  }
  function sayShelf(list) {
    var el = $("shelfSays");
    if (el) { el.textContent = WEB.says[list][Math.floor(Math.random() * WEB.says[list].length)]; }
  }
  function paintFallen() {
    var el = $("fallNote");
    if (el) {
      el.innerHTML = "things fallen since you arrived: <b>" + shelf.lastFall + "</b> &middot; broken: <i>none, ever</i>";
    }
  }
  function pickUp(o) {
    setState(o, "returning");
    o.vx = 0; o.vy = 0;
    shelf.thread.classList.add("on");
    if (window.heroSpider) { window.heroSpider.stir(1.4); }
  }
  function threadPath(o) {
    var top = o.home.x;
    var ty = o.y - o.cfg.h * 0.55;
    var mx = (top + o.x) / 2 + (o.x - top) * 0.16;
    var my = (ty - 10) / 2;
    shelf.tpath.setAttribute("d", "M" + top.toFixed(1) + " -10 Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + o.x.toFixed(1) + " " + ty.toFixed(1));
  }
  function tickShelf(dt, t) {
    if (!shelf.box) { return; }
    var moving = false, returning = false, i;    for (i = 0; i < shelf.objs.length; i++) {
      var o = shelf.objs[i];
      if (o.state === "falling") {
        moving = true;
        o.vy += 1400 * dt;
        o.x += o.vx * dt;
        o.y += o.vy * dt;
        o.rot += o.vrot * dt;
        if (o.x < 6) { o.x = 6; o.vx = Math.abs(o.vx) * .6; }
        if (o.x > shelf.box.clientWidth - 6) { o.x = shelf.box.clientWidth - 6; o.vx = -Math.abs(o.vx) * .6; }
        if (o.y >= shelf.floor) {
          var impact = o.vy;
          o.y = shelf.floor;
          if (impact > 120) {
            clatter(o.cfg.mat, impact > 500);
            dust(o);
          }
          o.vy = -o.vy * 0.32;
          o.vx *= 0.72;
          o.vrot *= 0.55;
          if (Math.abs(o.vy) < 46) {
            o.vy = 0; o.vx = 0;
            o.rot = Math.abs(o.rot) % 360 > 180 ? 180 : 0;
            setState(o, "resting");
            o.settled = now();
            shelf.lastFall++;
            paintFallen();
            if (Math.random() < 0.7) { sayShelf("fell"); }
          }
        }
      } else if (o.state === "returning") {
        moving = true;
        returning = true;
        var k = 1 - Math.pow(0.02, dt);
        o.x += (o.home.x - o.x) * k;
        o.y += (o.home.y - o.y) * k;
        o.rot += (0 - o.rot) * k;
        threadPath(o);
        if (Math.abs(o.x - o.home.x) < 0.7 && Math.abs(o.y - o.home.y) < 0.7) {
          o.x = o.home.x; o.y = o.home.y; o.rot = 0;
          setState(o, "sitting");
        }
      } else if (o.state === "resting") {
        if (now() - o.settled > 18000) { pickUp(o); returning = true; }
      }
      paint(o);
    }
    /* the thread is drawn while she is lifting anything, and hidden when
       the last thing is home */
    shelf.thread.classList.toggle("on", returning);
    /* every so often the shelf simply loses something. it is not a fault. */
    if (!REDUCE && !moving && t > shelf.next && visible()) {
      var sit = [];
      for (i = 0; i < shelf.objs.length; i++) { if (shelf.objs[i].state === "sitting") { sit.push(shelf.objs[i]); } }
      if (sit.length) { drop(sit[Math.floor(Math.random() * sit.length)], false); }
      shelf.next = t + rnd(6000, 15000);
    }
  }
  function nudgeOne() {
    var sit = [];
    for (var i = 0; i < shelf.objs.length; i++) { if (shelf.objs[i].state === "sitting") { sit.push(shelf.objs[i]); } }
    if (!sit.length) { sayShelf("tidy"); return; }
    drop(sit[Math.floor(Math.random() * sit.length)], true);
    shelf.next = now() + rnd(8000, 16000);
  }
  function tidyAll() {
    var any = false;
    for (var i = 0; i < shelf.objs.length; i++) {
      if (shelf.objs[i].state !== "sitting") { pickUp(shelf.objs[i]); any = true; }
    }
    var el = $("shelfSays");
    if (any) { sayShelf("tidy"); }
    else if (el) { el.textContent = "everything is where it should be. for now."; }
  }
  function visible() {
    if (!shelf.box) { return false; }
    var r = shelf.box.getBoundingClientRect();
    return r.bottom > 40 && r.top < (window.innerHeight || 800) - 40;
  }

  /* ---------------- the drawers ---------------- */
  var drawers = { solved: [], map: {} };

  function cardHTML() {
    return '<div class="didcard"><div class="id">charlotte</div><div class="cc">cc-006 &middot; white spider &middot; she speaks</div>' +
      '<dl>' +
      '<dt>name</dt><dd>charlotte violette</dd>' +
      '<dt>nature</dt><dd>not a hybrid &mdash; a spider, whole and speaking</dd>' +
      '<dt>rests</dt><dd>almost permanently</dd>' +
      '<dt>wakes</dt><dd>for a bug, or a song</dd>' +
      '<dt>then</dt><dd>mending: whatever the others tore, and the realms stitched to each other, and miki\'s mail, read at miki\'s request</dd>' +
      '<dt>her web</dt><dd>the privacy policy. do not poke it.</dd>' +
      '</dl></div>';
  }
  function verseHTML(v) {
    return '<figure class="verse" style="margin:12px 0"><blockquote>' + v.text + '</blockquote><figcaption>' + v.cite + '</figcaption></figure>';
  }
  function playBtn(track, label, note) {
    var t = WEB.tracks[track] || {};
    return '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin-top:11px">' +
      '<button class="dplay" type="button" data-track="' + track + '" data-from="' + label + '" aria-pressed="false">&#9654; play ' + t.title + '</button>' +
      '<span class="dnote inline">' + (note || "") + '</span></div>';
  }
  function innerHTMLFor(d) {
    var out = '<p class="dlabel">' + (d.letter ? "a letter from charlotte" : d.memo ? "left in the drawer" : "inside the drawer") + '</p>';
    if (d.card) { out += cardHTML(); }
    if (d.body) { for (var i = 0; i < d.body.length; i++) { out += "<p>" + d.body[i] + "</p>"; } }
    if (d.verse) { out += verseHTML(d.verse); }
    if (d.lyric) { out += '<div class="dlyrics">' + d.lyric + '</div>'; }
    if (d.track) { out += playBtn(d.track, "drawer " + d.num + " &middot; " + d.name, d.note); }
    else if (d.note) { out += '<p class="dnote">' + d.note + '</p>'; }
    if (d.sign) { out += '<p style="font-family:var(--mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--charlotte);margin:12px 0 0">&mdash; ' + d.sign + '</p>'; }
    if (d.line) { out += '<div class="clvoice" style="margin:13px 0 0"><p>' + d.line + '</p><span>&mdash; charlotte</span></div>'; }
    if (d.memo) {
      out += '<p>she has left the drawer out for you, and a pen with it. whatever goes in here stays on this device and in no other web.</p>' +
        '<textarea class="dmemo" id="memoBox" rows="4" placeholder="anything you want to leave in her drawer&hellip;" aria-label="a note for the empty drawer"></textarea>' +
        '<p class="dnote" id="memoState">saved as you type &middot; on this device only</p>';
    }
    return out;
  }
  function buildCabinet() {
    var host = $("cabinetHost");
    if (!host) { return; }
    for (var i = 0; i < WEB.drawers.length; i++) {
      var d = WEB.drawers[i];
      var art = mk("article", { class: "drawer", "data-id": d.id, id: "drawer-" + d.id });
      var front = mk("div", { class: "dfront" });
      front.appendChild(mk("div", { class: "dhead" },
        '<span class="dnum">' + d.num + '</span><span class="dholder"></span><span class="dlock" data-lock>' + d.lock + '</span>'));
      front.appendChild(mk("p", { class: "driddle" }, d.riddle));
      if (!d.knock) {
        var hint = mk("p", { class: "dhint", hidden: "hidden", "data-hint": "" });
        front.appendChild(hint);
        var form = mk("form", { class: "dask", autocomplete: "off" },
          '<input type="text" placeholder="your answer" aria-label="the answer to this drawer\'s riddle">' +
          '<button type="submit">answer</button>');
        front.appendChild(form);
        front.appendChild(mk("p", { class: "dnote warm", "data-say": "" }));
      } else {
        front.appendChild(mk("p", { class: "dnote warm", "data-say": "" }));
        front.appendChild(mk("button", { class: "sbtn", type: "button", "data-knock": "", style: "margin-top:2px" }, "knock twice"));
      }
      art.appendChild(front);
      var inside = mk("div", { class: "dinside" });
      inside.appendChild(mk("div", { class: "dinner" }, innerHTMLFor(d)));
      art.appendChild(inside);
      host.appendChild(art);

      (function (d, art) {
        var form = art.querySelector("form.dask");
        if (form) {
          form.addEventListener("submit", function (ev) { ev.preventDefault(); tryAnswer(d, art, form.querySelector("input").value); });
        }
        var kn = art.querySelector("[data-knock]");
        if (kn) { kn.addEventListener("click", function () { knock(d, art); }); }
        var dp = art.querySelector(".dplay");
        if (dp) {
          dp.addEventListener("click", function () {
            var a = audioEl();
            if (player.cur === d.track && player.el.classList.contains("on") && !a.paused) { a.pause(); }
            else { playTrack(d.track, "drawer " + d.num + " &middot; " + d.name); }
          });
        }
      })(d, art);
    }
    /* the memo drawer's box (it exists whether or not the drawer is open) */
    var box = $("memoBox");
    if (box) {
      var was = load(K_MEMO, "");
      if (typeof was === "string" && was) { box.value = was; }
      var t = null;
      box.addEventListener("input", function () {
        if (t) { window.clearTimeout(t); }
        t = window.setTimeout(function () {
          save(K_MEMO, box.value);
          var st = $("memoState");
          if (st) { st.textContent = box.value.trim() ? "saved &middot; on this device only &middot; nobody reads it" : "saved as you type &middot; on this device only"; }
        }, 400);
      });
    }
  }
  function openDrawer(d, art, quiet) {
    if (art.classList.contains("open")) { return; }
    art.classList.add("open", "solved");
    /* open it even where the css transition never runs (a hidden tab,
       reduced motion, a printed page): the class does the animation,
       this guarantees the result */
    var ins = art.querySelector(".dinside");
    if (ins) { ins.style.maxHeight = "1600px"; }
    var lk = art.querySelector("[data-lock]");
    if (lk) { lk.textContent = "open"; }
    var ask = art.querySelector(".dask");
    if (ask) { ask.querySelector("button").disabled = true; }
    if (!quiet) {
      drawerOpenSound();
      for (var i = 0; i < 4; i++) {
        var p = mk("div", { class: "dpuff" });
        p.style.left = (20 + Math.random() * 60) + "%";
        p.style.setProperty("--dx", rnd(-10, 10).toFixed(1) + "px");
        art.appendChild(p);
        (function (p) { window.setTimeout(function () { if (p.parentNode) { p.parentNode.removeChild(p); } }, 950); })(p);
      }
      if (window.heroSpider) { window.heroSpider.stir(2.0); }
    }
    if (drawers.solved.indexOf(d.id) < 0) { drawers.solved.push(d.id); save(K_SOLVED, drawers.solved); }
    if (d.track) { lightSong(d.track); renderSongList(); }
    renderCount();
    if (window.CD && CD.stamp) { CD.stamp("web:drawer-" + d.id, { label: "a drawer answered", accent: "#e0a3c8" }); }
  }
  function knock(d, art) {
    knockSound();
    openDrawer(d, art, false);
    var say = art.querySelector("[data-say]");
    if (say) { say.innerHTML = "the drawer slides out on its own, the way a drawer does when it has been waiting."; }
  }
  function tryAnswer(d, art, raw) {
    var say = art.querySelector("[data-say]");
    var hint = art.querySelector("[data-hint]");
    var got = norm(raw);
    if (!got) { return; }
    var ok = false;
    for (var i = 0; i < d.accepts.length; i++) { if (norm(d.accepts[i]) === got) { ok = true; break; } }
    if (ok) {
      openDrawer(d, art, false);
      if (say) { say.className = "dnote happy"; say.innerHTML = "the drawer gives way. there was never much holding it."; }
      return;
    }
    d.tries = (d.tries || 0) + 1;
    art.classList.add("shake");
    window.setTimeout(function () { art.classList.remove("shake"); }, 460);
    if (say) { say.className = "dnote warm"; say.innerHTML = WEB.wrong[Math.min(d.tries - 1, WEB.wrong.length - 1)]; }
    if (d.tries >= 2 && hint) {
      hint.hidden = false;
      hint.innerHTML = "she helps, which she insists is not kindness but efficiency: " + d.hint;
      if (d.tries >= 4) {
        hint.innerHTML += ' <span style="color:var(--charlotte2)">it begins with &ldquo;' + d.accepts[0][0] + '&rdquo;.</span>';
      }
    }
  }
  function renderCount() {
    var el = $("cabCount");
    if (!el) { return; }
    var n = drawers.solved.length, total = WEB.drawers.length;
    el.innerHTML = n >= total ? "all " + total + " open" : n + " of " + total + " open";
  }
  function restoreDrawers() {
    var solved = load(K_SOLVED, []);
    if (!(solved instanceof Array)) { solved = []; }
    for (var i = 0; i < solved.length; i++) {
      var d = WEB.drawers.filter(function (x) { return x.id === solved[i]; })[0];
      var art = $("drawer-" + solved[i]);
      if (d && art) { openDrawer(d, art, true); }
    }
    renderCount();
    renderSongList();
  }

  /* ---------------- the song list ---------------- */
  function renderSongList() {
    var host = $("songList");
    if (!host) { return; }
    host.innerHTML = "";
    var caught = 0;
    for (var i = 0; i < WEB.songOrder.length; i++) {
      var id = WEB.songOrder[i];
      var t = WEB.tracks[id];
      var found = drawers.solved.some(function (sid) {
        var d = WEB.drawers.filter(function (x) { return x.id === sid; })[0];
        return d && d.track === id;
      });
      if (found) { caught++; }
      var row = mk("div", { class: "song " + (found ? "found" : "locked") });
      row.appendChild(mk("span", { class: "sn" }, "0" + (i + 1)));
      var st = mk("div", { class: "st" });
      st.appendChild(mk("b", {}, found ? t.title : "still out there"));
      st.appendChild(mk("span", {}, found ? ("caught &middot; " + (t.len || "")) : "not caught yet &middot; it is behind one of the drawers"));
      row.appendChild(st);
      var sp = mk("div", { class: "sp" });
      if (found) {
        var b = mk("button", { type: "button" }, "play");
        b.addEventListener("click", function (id) {
          return function () {
            var a = audioEl();
            if (player.cur === id && !a.paused) { a.pause(); } else { playTrack(id, "caught in the web"); }
          };
        }(id));
        sp.appendChild(b);
      } else {
        sp.appendChild(mk("span", { class: "snote lk" }, "&mdash;"));
      }
      row.appendChild(sp);
      host.appendChild(row);
    }
    var note = $("songNote");
    if (note) { note.innerHTML = WEB.songNote[Math.min(caught, WEB.songNote.length - 1)]; }
  }

  /* ---------------- the sealed door ---------------- */
  var door = { buf: null, loading: false, sprite: null, layer: null };
  function initDoor() {
    var svg = $("doorSvg");
    if (!svg) { return; }
    var g = sv("g");
    /* the light under it, which is always on */
    var defs = sv("defs");
    defs.innerHTML =
      '<linearGradient id="doorGlow" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#ffd76a" stop-opacity=".0"/>' +
        '<stop offset=".55" stop-color="#ffd76a" stop-opacity=".5"/>' +
        '<stop offset="1" stop-color="#fff3c4" stop-opacity=".85"/></linearGradient>' +
      '<radialGradient id="doorBleed" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0" stop-color="#ffd76a" stop-opacity=".22"/>' +
        '<stop offset="1" stop-color="#ffd76a" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="doorLeaf" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#2a0f3f"/><stop offset="1" stop-color="#150527"/></linearGradient>';
    svg.appendChild(defs);
    g.appendChild(sv("ellipse", { cx: 160, cy: 348, rx: 132, ry: 26, fill: "url(#doorBleed)" }));
    /* the frame */
    var frame = "M52 352V150c0-59 48-107 108-107s108 48 108 107v202Z";
    g.appendChild(path(frame, { fill: "#0b0416", stroke: "rgba(240,217,138,.30)", "stroke-width": 1.4 }));
    var leaf = "M70 352V152c0-50 40-90 90-90s90 40 90 90v200Z";
    g.appendChild(path(leaf, { fill: "url(#doorLeaf)", stroke: "rgba(240,217,138,.22)", "stroke-width": 1 }));
    /* panels */
    g.appendChild(path("M92 190c0-38 30-68 68-68s68 30 68 68v58H92Z", { fill: "rgba(74,38,100,.5)", stroke: "rgba(224,163,200,.16)", "stroke-width": .9 }));
    g.appendChild(path("M92 278h136v50H92Z", { fill: "rgba(74,38,100,.5)", stroke: "rgba(224,163,200,.16)", "stroke-width": .9 }));
    /* the handle and the keyhole — the handle is on the web's side */
    g.appendChild(sv("circle", { cx: 202, cy: 258, r: 7.5, fill: "#3a1a52", stroke: "#f0d98a", "stroke-width": 1.3 }));
    g.appendChild(sv("path", { d: "M202 258c8 0 14 1 18 4", fill: "none", stroke: "#f0d98a", "stroke-width": 2.4, "stroke-linecap": "round" }));
    g.appendChild(sv("circle", { cx: 160, cy: 252, r: 3.4, fill: "#0b0416", stroke: "#f0d98a", "stroke-width": .9 }));
    g.appendChild(path("M160 254l-2.6 8h5.2z", { fill: "#0b0416", stroke: "#f0d98a", "stroke-width": .9 }));
    /* silk stretched across the whole doorway: she is holding it shut */
    var spokes = [[78, 340, 262], [88, 200, 250], [98, 96, 212], [130, 68, 180], [178, 66, 150], [232, 78, 120], [262, 108, 96], [250, 190, 62], [242, 330, 48]];
    var hub = { x: 160, y: 226 };
    var i;
    for (i = 0; i < spokes.length; i++) {
      var s = spokes[i];
      var bend = { x: (s[0] + hub.x) / 2 + (s[0] - hub.x) * .06, y: (s[1] + hub.y) / 2 + (s[1] - hub.y) * .06 };
      g.appendChild(path("M" + s[0] + " " + s[1] + "Q" + bend.x.toFixed(1) + " " + bend.y.toFixed(1) + " " + hub.x + " " + hub.y,
        { fill: "none", stroke: "rgba(224,207,246,.30)", "stroke-width": .75 }));
    }
    for (var k = 1; k <= 3; k++) {
      var f = 0.26 + k * 0.24;
      for (i = 0; i < spokes.length; i++) {
        var A = { x: hub.x + (spokes[i][0] - hub.x) * f, y: hub.y + (spokes[i][1] - hub.y) * f };
        var B = { x: hub.x + (spokes[(i + 1) % spokes.length][0] - hub.x) * f, y: hub.y + (spokes[(i + 1) % spokes.length][1] - hub.y) * f };
        var m = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
        var sag = { x: m.x + (hub.x - m.x) * .09, y: m.y + (hub.y - m.y) * .09 };
        g.appendChild(path("M" + A.x.toFixed(1) + " " + A.y.toFixed(1) + "Q" + sag.x.toFixed(1) + " " + sag.y.toFixed(1) + " " + B.x.toFixed(1) + " " + B.y.toFixed(1),
          { fill: "none", stroke: (k === 2 && i % 4 === 1) ? "#e0a3c8" : "rgba(214,196,236,.26)", "stroke-width": (k === 2 && i % 4 === 1) ? 1 : .65 }));
      }
    }
    /* the spill of lamp-light out from under the door */
    g.appendChild(path("M60 348h200v6H60Z", { fill: "url(#doorGlow)", opacity: ".9" }));
    svg.appendChild(g);
    if (window.CharlotteSpider) {
      var sp = window.CharlotteSpider.create({ size: 96, hang: true, label: "a small spider, resting above the sealed door" });
      sp.el.setAttribute("x", 116);
      sp.el.setAttribute("y", 44);
      sp.el.setAttribute("width", 96);
      sp.el.setAttribute("height", 96);
      sp.el.style.width = "96px";
      sp.el.style.height = "96px";
      svg.appendChild(sp.el);
      door.sprite = sp;
      door.sp = sp;
    }

    var ear = $("earBtn");
    if (ear) { ear.addEventListener("click", tease); }
    var form = $("doorAsk");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var raw = norm(form.querySelector("input").value);
        if (!raw) { return; }
        var ok = WEB.door.accepts.some(function (a) { return norm(a) === raw; });
        var says = $("doorSays");
        if (ok) {
          if (says) { says.innerHTML = WEB.door.right; }
          if (door.sprite) { door.sprite.stir(2.4); }
          if (window.CD && CD.stamp) { CD.stamp("web:door", { label: "the sealed door greeted", accent: "#ccff00" }); }
        } else if (says) {
          says.innerHTML = WEB.door.wrong;
        }
      });
    }
  }
  function tease() {
    var ear = $("earBtn");
    var says = $("doorSays");
    if (door.loading) { return; }
    if (window.CD && CD.stamp) { CD.stamp("web:door", { label: "the sealed door greeted", accent: "#ccff00" }); }
    if (door.sprite) { door.sprite.stir(2.2); }
    if (door.buf) { playTease(); if (says) { says.innerHTML = WEB.door.heard; } return; }
    door.loading = true;
    if (ear) { ear.disabled = true; ear.innerHTML = "&#9834; listening&hellip;"; }
    var done = function () {
      door.loading = false;
      if (ear) { ear.disabled = false; ear.innerHTML = "&#9834; press your ear again"; }
      if (says) { says.innerHTML = WEB.door.heard; }
    };
    window.fetch(WEB.tracks.game.url).then(function (r) {
      if (!r.ok) { throw new Error("http " + r.status); }
      return r.arrayBuffer();
    }).then(function (ab) {
      var a = ac();
      if (!a || !a.decodeAudioData) { throw new Error("no decoder"); }
      a.decodeAudioData(ab, function (buf) {
        door.buf = buf;
        playTease();
        done();
      }, function () { fallbackTease(); done(); });
    }).catch(function () { fallbackTease(); done(); });
  }
  function playTease() {
    var a = ac();
    if (!a || !door.buf) { fallbackTease(); return; }
    var sec = Math.min(WEB.door.teaserSeconds, door.buf.duration);
    var src = a.createBufferSource();
    src.buffer = door.buf;
    var lp = a.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(WEB.door.teaserHz, a.currentTime);
    lp.Q.value = 3.2;
    var g = a.createGain();
    g.gain.setValueAtTime(0.0001, a.currentTime);
    g.gain.linearRampToValueAtTime(0.5, a.currentTime + 0.25);
    src.connect(lp); lp.connect(g); g.connect(a.destination);
    /* the door starts to give, and does not */
    lp.frequency.setValueAtTime(WEB.door.teaserHz, a.currentTime + sec - 2.2);
    lp.frequency.linearRampToValueAtTime(WEB.door.teaserHz * 2.6, a.currentTime + sec - 0.35);
    g.gain.setValueAtTime(0.5, a.currentTime + sec - 0.5);
    g.gain.exponentialRampToValueAtTime(0.0008, a.currentTime + sec);
    src.start(a.currentTime);
    src.stop(a.currentTime + sec + 0.05);
  }
  function fallbackTease() {
    if (!door.fb) {
      door.fb = new Audio(WEB.tracks.game.url);
      door.fb.volume = 0.16;
      door.fb.preload = "none";
    }
    try { door.fb.currentTime = 0; } catch (e) {}
    var p = door.fb.play();
    if (p && p.catch) { p.catch(function () {}); }
    window.setTimeout(function () { try { door.fb.pause(); } catch (e) {} }, WEB.door.teaserSeconds * 1000);
  }

  /* ---------------- motes ---------------- */
  function initMotes() {
    var host = $("motes");
    if (!host || REDUCE) { return; }
    for (var i = 0; i < 14; i++) {
      var m = document.createElement("i");
      m.style.left = (Math.random() * 100).toFixed(2) + "%";
      m.style.top = (-10 - Math.random() * 30).toFixed(1) + "px";
      m.style.animationDuration = (12 + Math.random() * 16).toFixed(1) + "s";
      m.style.animationDelay = (-Math.random() * 24).toFixed(1) + "s";
      var s = Math.random() < .4 ? 3 : 2;
      m.style.width = s + "px"; m.style.height = s + "px";
      host.appendChild(m);
    }
  }

  /* ---------------- the single clock everything runs on ---------------- */
  var clock = { last: 0, acc: 0, wander: 0, mend: 0, say: 0 };
  function tick(dt, t) {
    if (!(dt >= 0)) { dt = 0; }
    dt = Math.min(dt, 0.05);
    if (window.heroSpider) { window.heroSpider.step(dt); }
    if (door.sprite) { door.sprite.step(dt); }
    tickShelf(dt, t || now());
    if (dt > 0 && t > clock.say) {
      var el = $("shelfSays");
      if (el) { el.textContent = WEB.says.idle[Math.floor(Math.random() * WEB.says.idle.length)]; }
      clock.say = t + 26000;
    }
    if (hero.sp && !REDUCE && dt > 0) {
      /* she rests. every so often she walks a little, or mends. */
      if (clock.wander && t > clock.wander) {
        hero.sp.setMode("rest");
        clock.wander = 0;
      }
      if (!clock.wander && t > clock.mend) {
        hero.sp.setMode("mend", { sec: 5 });
        clock.mend = t + rnd(110000, 190000);
      }
      if (!clock.wander && t > clock.nextWander) {
        hero.sp.setMode("wander");
        clock.wander = t + rnd(9000, 15000);
        clock.nextWander = t + rnd(70000, 150000);
      }
    }
  }
  clock.nextWander = now() + 45000;
  clock.mend = now() + 95000;

  var raf = 0;
  function loop(ts) {
    raf = window.requestAnimationFrame(loop);
    var t = ts || now();
    var dt = clock.last ? (t - clock.last) / 1000 : 0;
    clock.last = t;
    tick(dt, t);
  }

  /* ---------------- boots ---------------- */
  function initPlayer() {
    var a = audioEl();
    var play = $("pPlay"), close = $("pClose"), seek = $("pSeek");
    if (play) {
      play.addEventListener("click", function () {
        var el = audioEl();
        if (el.paused) { var p = el.play(); if (p && p.catch) { p.catch(function () {}); } }
        else { el.pause(); }
      });
    }
    if (close) {
      close.addEventListener("click", function () {
        a.pause();
        player.el.classList.remove("on");
        reflect();
      });
    }
    if (seek) {
      seek.addEventListener("click", function (ev) {
        var d = a.duration;
        if (!isFinite(d) || d <= 0) { return; }
        var r = seek.getBoundingClientRect();
        var f = (ev.clientX - r.left) / Math.max(1, r.width);
        a.currentTime = Math.max(0, Math.min(0.995, f)) * d;
        paintSeek();
      });
    }
  }

  function boot() {
    initMotes();
    buildCabinet();
    initHero();
    initSongWeb();
    initShelf();
    initDoor();
    initPlayer();
    restoreDrawers();
    renderCount();
    renderSongList();
    /* one clean frame right away, so the page is correct even if the
       browser never gives us an animation frame */
    tick(0, now());
    if (!raf) { raf = window.requestAnimationFrame(loop); }
    var onResize = function () { layoutShelf(); };
    window.addEventListener("resize", onResize);
    if (window.ResizeObserver && shelf.box) {
      try { new ResizeObserver(onResize).observe(shelf.box); } catch (e) {}
    }
    window.__web = {
      tick: tick, hero: hero.sp, door: door.sprite, shelf: shelf,
      WEB: WEB, drawers: drawers, playTrack: playTrack, openDrawer: openDrawer,
      lightSong: lightSong, drop: drop, pick: pickUp, tickShelf: tickShelf,
      doorBuffer: function () { return !!door.buf; },
      tease: tease
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
