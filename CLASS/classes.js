/* ============================================================
   cafedreamr — the classes, as plain data        classes.js
   ============================================================
   A class is a small branching conversation. The runner
   (CLASS/index.html) walks it. You only write words down here —
   no code needed to add a class, just another entry below.

   ONE NODE
     open: {
       who: "charlotte",                 // nameplate; "" makes it a room line
       say: "text — {name} becomes the player's card name",
       aside: "a small stage direction, shown dim",   // optional
       next: "cup",                      // one onward step...
       choices: [                        // ...or a set of answers
         { text: "both hands", goto: "good" },
         { text: "i'd rather not", goto: "soft", stamp: "said:refused",
           need: { points: 120 },        // gated answers stay visible but locked
           lockedNote: "she waits until you've been here a while" }
       ],
       stamp: "lesson:etiquette",        // stamped once, on arriving here
       end: true                         // last node: pays the class out
     }

   WHEN THE PLAYER JUST SITS THERE (timed happenstance)
     idle: [ { after: 9000,  say: "no rush." },
             { after: 24000, who: "", say: "somewhere below, a cup is set down." },
             { after: 48000, say: "{name}." } ]
     `after` = ms since the choice appeared. Any tier already past is
     skipped, so a long silence shows the whole climb, in order. Omit
     `idle` entirely and the class gets the house lines instead.
     `who: ""` = the room, not the character.

   NEEDS  (what has to be true before a choice works / a room opens)
     need: { points: 200 }
     need: { has: "clue:hans_clue1" }             one exact stamp
     need: { count: { prefix: "clue:", n: 4 } }   any four of them
     need: { quests: ["small-signs"] }            quests from the stamp card

   WHAT THE CARD HEARS
     attend:<class>   arriving        lesson:<class>   finishing
     said:<thing>     an answer, so a later class can remember it
     (stamp:"..." on a node stamps it; classId is filled in by the runner)

   A WHOLE CLASS  (the fields above `nodes`)
     title / spoken      what it is called; `spoken` is what the page shows
     host / hostNote     who is teaching, and the small note by their name
     room                the room's in-world name (shown in the tag line)
     accent              the class's colour — it drives the whole page
     blurb               one line for the corridor picker in CLASS/
     start               the first node id (default "open")
     nameNode            the node id the runner turns into the name prompt
     need                { points | has | count | quests } — while it is unmet
                         the room shows a shut panel instead of starting
     shut                { title, lines } — the shut panel's own copy, so a
                         locked room can refuse in its host's voice
     opens / closes      "HH:MM" local time — the room keeps an hour. outside
                         it the page shows the shut panel (with a live
                         countdown to the next opening) instead of starting;
                         at the hour it opens by itself. omit for a room that
                         is always open. `time` is just the picker's label.
     away                { title, lines } — the shut panel's own copy for a
                         room that is closed until its hour
   ============================================================ */

window.CLASSES = {

/* ------------------------------------------------------------
   the stacks · etiquette · hans
   ------------------------------------------------------------
   The Academy is Hans's, and only Hans's: manners, studied
   daily, because he is a snob about exactly that one subject.
   This replaced charlotte's pocketed "small signs" class (key
   kept — ?id=etiquette and lesson:etiquette stay valid), and it
   is the class his cup counts down to on HANS/index.html.

   the hour — the academy keeps canon hours (LORE/HOURS:
   hans takes the room at 13:00, and lets it go at 15:00, to the
   minute). so the class now keeps the hour too: outside it the
   room is dark, and the page counts down to the next one. hans
   is precise; the door is too.
   ------------------------------------------------------------ */
etiquette: {
  title: "etiquette",
  spoken: "etiquette",
  blurb: "the tea academy \u00b7 13:00\u201315:00",
  time: "13:00",
  opens: "13:00",
  closes: "15:00",
  host: "hans",
  hostNote: "regards a correct cup as a divine right",
  accent: "#6495ed",
  room: "the tea academy",
  start: "open",
  nameNode: "askName",

  away: {
    title: "the room is dark",
    lines: "hans teaches at one o\u2019clock, and hans is precise. the kettle is on, the chairs are straight, and not one of them has been sat in yet. come back at the hour \u2014 he will know if you are late, and he will pretend he did not notice."
  },

  idle: [
    { after: 9000,  say: "take your time. i have already decided what i think of you, and it is not unkind." },
    { after: 24000, who: "", say: "the kettle gives up on being patient." },
    { after: 48000, say: "{name}. the hour is not waiting, even if i am." }
  ],

  nodes: {
    askName: {
      who: "hans",
      say: "before we begin — what shall i call you? i keep a list, and i do not intend to guess.",
      next: "open"
    },

    open: {
      who: "hans",
      say: "{name}. good. sit anywhere — not there, that is where the cat adjudicates. i will not lecture; i have never needed to. this is only a table, but a table has opinions, and an hour is long enough to overhear a few.",
      aside: "he sets the cup down at an exact distance from the edge of the table, and does not appear to notice doing it.",
      next: "cup"
    },

    cup: {
      who: "hans",
      say: "someone hands you a cup. how do you take it?",
      choices: [
        { text: "both hands",                       goto: "cupBoth", stamp: "said:both-hands" },
        { text: "by the handle, little finger out", goto: "cupHandle" },
        { text: "whichever way it comes",           goto: "cupFree" },
        { text: "i honestly don't know",            goto: "cupHonest" }
      ]
    },
    cupBoth: {
      who: "hans",
      say: "ah — and not for the reason you think. both hands says: i am not leaving yet. the cup is only an excuse to stay in the room, and it is the best one anyone has invented.",
      next: "table"
    },
    cupHandle: {
      who: "hans",
      say: "the finger is decorative. the handle is structural. hold the part that is actually holding the tea — that is the whole of my philosophy, and you may have it for free.",
      next: "table"
    },
    cupFree: {
      who: "hans",
      say: "honest. honesty is better than correct on most days, and today is most days. set the cup down when you say something true — that is the entire ceremony.",
      next: "table"
    },
    cupHonest: {
      who: "hans",
      say: "then you are teachable, which is worth more than polished. the polished ones stop listening the moment they get good at it.",
      stamp: "said:teachable",
      next: "table"
    },

    table: {
      who: "hans",
      say: "now. the plates are down and the king has not lifted his fork. before the first bite — where do your hands go?",
      choices: [
        { text: "rested in your lap",        goto: "tableLap" },
        { text: "rested on the table",       goto: "tableTop" },
        { text: "still holding the cutlery", goto: "tableCutlery" }
      ]
    },
    tableLap: {
      who: "hans",
      say: "in your lap, and still. a good table does its own introductions — put nothing in the way. and you are not eating yet; you will know when the room has begun.",
      next: "chair"
    },
    tableTop: {
      who: "hans",
      say: "the wrists may rest. the elbows are an argument, and you were not invited to make one. the first move belongs to whoever outranks the table — it is rarely a secret who that is.",
      next: "chair"
    },
    tableCutlery: {
      who: "hans",
      say: "a held fork is a meal that has started, and this one has not. put it down. let the room go first — the plates will still be there.",
      next: "chair"
    },

    chair: {
      who: "hans",
      say: "second. you are leaving a table. what happens to your chair?",
      choices: [
        { text: "push it in",                 goto: "chairPush" },
        { text: "leave it, someone's paid to", goto: "chairLeave" },
        { text: "ask the table first",        goto: "chairAsk" }
      ]
    },
    chairPush: {
      who: "hans",
      say: "yes. and it is not about the chair. it never is — it is the two seconds in which you think of whoever comes next. you spent them. good.",
      next: "noticing"
    },
    chairLeave: {
      who: "hans",
      say: "you are not wrong — someone is paid to. but names are a currency in this house, and 'someone' always spends badly.",
      next: "noticing"
    },
    chairAsk: {
      who: "hans",
      say: "oh. you will fit in here better than most, and you will never be able to prove it.",
      stamp: "said:asked-the-table",
      next: "noticing"
    },

    noticing: {
      who: "hans",
      say: "last one, and it is the real one. someone tells you something small — a name, a favourite record, a bad week. what do you do with it?",
      choices: [
        { text: "say it back to them",      goto: "nBack" },
        { text: "remember it, say nothing", goto: "nQuiet" },
        { text: "write it down",            goto: "nWrite" },
        { text: "honestly, i forget",       goto: "nForget" },
        { text: "i found something first, in the grid", goto: "nGrid",
          need: { count: { prefix: "clue:", n: 1 } },
          lockedNote: "recover a clue in the mystery grid first" }
      ]
    },
    nBack: {
      who: "hans",
      say: "that is it. that is the whole class. say it back and they will know you were listening — even on the days you were not.",
      stamp: "said:said-it-back",
      next: "close"
    },
    nQuiet: {
      who: "hans",
      say: "the quiet kind. braver than it looks — you have to trust that they will notice. they do. eventually.",
      next: "close"
    },
    nWrite: {
      who: "hans",
      say: "i do that too. the archive is only a very long list of small things people said out loud once.",
      next: "close"
    },
    nForget: {
      who: "hans",
      say: "you will be loved anyway. but by accident, which is a different thing, and it never quite lands the same.",
      next: "close"
    },
    nGrid: {
      who: "hans",
      say: "i heard. you have been in the grid. bring me all four when you have them — the room upstairs only opens for that.",
      stamp: "said:told-hans-about-the-grid",
      next: "close"
    },

    close: {
      who: "hans",
      say: "that is enough for a first hour, {name}. the rest of it is not taught in here — it is noticed out there, when nobody is checking and you do it anyway. go on. the kettle and i will be here.",
      aside: "he looks at the watch. he does not comment on what it says.",
      stamp: "said:noticed-it",
      end: true
    }
  }
},


/* ------------------------------------------------------------
   the amps · band practice · miki
   ------------------------------------------------------------ */
bandpractice: {
  title: "bandpractice",
  spoken: "band practice",
  blurb: "an amp, two twins, and one rule",
  host: "miki",
  hostNote: "turns it up when someone flinches",
  accent: "#ccff00",
  room: "the amps",
  start: "open",
  nameNode: "askName",

  /* she only props the door open for someone who has lasted the first
     hour of the day — the same thing her note at the counter waits on. */
  need: { count: { prefix: "level:", n: 1 } },
  shut: {
    title: "practice hasn't started",
    lines: "miki opens the door for people who have made it through the first hour of the day. clear the first level of the long day and come down."
  },

  idle: [
    { after: 9000, say: "take your time. the amp isn't going anywhere, and neither are the twins." },
    { after: 24000, who: "", say: "something in the wall hums at the same note as the amp." },
    { after: 48000, say: "{name}. you're allowed to be bad at this. we all were, at first." }
  ],

  nodes: {
    askName: {
      who: "miki",
      say: "so — what do i shout when i need you?",
      next: "open"
    },

    open: {
      who: "miki",
      say: "{name}. you came. sit on the case, not the stool — the stool is sylvestre's, and he will know.",
      aside: "she does not look up from the amp. the amp is fine. she is not.",
      next: "hold"
    },

    hold: {
      who: "miki",
      say: "here. hold this.",
      aside: "it is a cable. it is not doing anything. she is watching your hands.",
      next: "grip"
    },

    grip: {
      who: "miki",
      say: "looser. like it's somebody's hand, not a rope. that's the whole trick, by the way — everything in this room is something asleep that you're being loud near.",
      next: "rule"
    },

    rule: {
      who: "miki",
      say: "one rule, and then we play. when it gets too loud for you, you turn it up. that's it. that's the rule.",
      choices: [
        { text: "up it goes",              goto: "up" },
        { text: "what if i'd rather not?", goto: "no" },
        { text: "why?",                    goto: "why" }
      ]
    },
    up: {
      who: "miki",
      say: "good. you'll last here.",
      next: "twins"
    },
    no: {
      who: "miki",
      say: "then you don't, and nobody minds, and the twins will do it for you. that's half of why there are two of them.",
      stamp: "said:left-it-to-the-twins",
      next: "twins"
    },
    why: {
      who: "miki",
      say: "because it's the only way i know to tell the difference between being scared and being quiet. they look the same from the outside.",
      next: "twins"
    },

    twins: {
      who: "miki",
      say: "— listen. that's slay. he and sylvestre have been arguing about a chord that does not exist since before you got here.",
      aside: "behind the wall, a drum says something definite and final. the argument continues.",
      next: "close"
    },

    close: {
      who: "miki",
      say: "that's it. you're in — not the band, don't get excited, but you're in the room. come back when it's four.",
      aside: "she turns something up by one. the room gets louder, and somehow gentler.",
      end: true
    }
  }
},
};
