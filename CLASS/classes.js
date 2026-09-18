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
   ============================================================ */

window.CLASSES = {

/* ------------------------------------------------------------
   the academy of small signs · charlotte
   (key "etiquette" is the room's old name, kept so the URL
   ?id=etiquette and the lesson:etiquette stamp stay valid —
   manners are hans's room, so the room is titled for what it
   actually teaches: noticing.)
   ------------------------------------------------------------ */
etiquette: {
  title: "small signs",
  spoken: "small signs",
  blurb: "four things noticed",
  host: "charlotte",
  hostNote: "keeps the small rituals",
  accent: "#e0a3c8",
  room: "the academy of small signs",
  start: "open",
  nameNode: "askName",

  idle: [
    { after: 9000,  say: "no hurry. this is the one class that cannot be rushed." },
    { after: 24000, who: "", say: "downstairs, the kettle makes a small decision." },
    { after: 48000, say: "{name}. you are allowed to be wrong in here. that is the whole arrangement." }
  ],

  nodes: {
    askName: {
      who: "charlotte",
      say: "before we begin — what should i call you?",
      next: "open"
    },

    open: {
      who: "charlotte",
      say: "{name}. you found it. sit — not that chair, that one is for the cat.",
      aside: "she moves a cup an inch to the right, then moves it back.",
      next: "cup"
    },

    cup: {
      who: "charlotte",
      say: "first thing, and it is not a trick. someone hands you a cup. which hand do you take it with?",
      choices: [
        { text: "both hands",          goto: "cupBoth" },
        { text: "the left, always",    goto: "cupLeft" },
        { text: "whichever one is free", goto: "cupFree" },
        { text: "i honestly don't know", goto: "cupHonest" }
      ]
    },
    cupBoth: {
      who: "charlotte",
      say: "good. both hands says: i have time for you. it is the cheapest kindness there is, and almost nobody spends it.",
      next: "chair"
    },
    cupLeft: {
      who: "charlotte",
      say: "the left is for people who already know you. keep it for them — it stops meaning anything if everyone gets it.",
      next: "chair"
    },
    cupFree: {
      who: "charlotte",
      say: "honest. most people do. but watch your own hands next week. they will tell you who you like before your mouth does.",
      next: "chair"
    },
    cupHonest: {
      who: "charlotte",
      say: "then you are teachable, which is worth more than polite. polite people stop listening as soon as they are good at it.",
      stamp: "said:teachable",
      next: "chair"
    },

    chair: {
      who: "charlotte",
      say: "second. you are leaving a table. what happens to your chair?",
      choices: [
        { text: "push it in",             goto: "chairPush" },
        { text: "leave it, someone's paid to", goto: "chairLeave" },
        { text: "ask the table first",    goto: "chairAsk" }
      ]
    },
    chairPush: {
      who: "charlotte",
      say: "yes. and it is not about the chair. it is the two seconds where you think about whoever comes next.",
      next: "noticing"
    },
    chairLeave: {
      who: "charlotte",
      say: "mm. you are not wrong — someone is paid to. but names are a currency in this place, and 'someone' spends badly.",
      next: "noticing"
    },
    chairAsk: {
      who: "charlotte",
      say: "oh. you will fit in here better than most, and you will never be able to prove it.",
      stamp: "said:asked-the-table",
      next: "noticing"
    },

    noticing: {
      who: "charlotte",
      say: "last one, and it is the real one. someone tells you something small — a name, a favourite record, a bad week. what do you do with it?",
      choices: [
        { text: "say it back to them",       goto: "nBack" },
        { text: "remember it, say nothing",  goto: "nQuiet" },
        { text: "write it down",             goto: "nWrite" },
        { text: "honestly, i forget",        goto: "nForget" },
        { text: "i found something first, in the grid", goto: "nGrid",
          need: { count: { prefix: "clue:", n: 1 } },
          lockedNote: "recover a clue in the mystery grid first" }
      ]
    },
    nBack: {
      who: "charlotte",
      say: "that is it. that is the whole class. say it back and they will know you were listening — even on the days you were not.",
      stamp: "said:said-it-back",
      next: "close"
    },
    nQuiet: {
      who: "charlotte",
      say: "the quiet kind. braver than it looks — you have to trust they will notice. they do. eventually.",
      next: "close"
    },
    nWrite: {
      who: "charlotte",
      say: "hans does that too. the archive is only a very long list of small things people said out loud once.",
      next: "close"
    },
    nForget: {
      who: "charlotte",
      say: "you will be loved anyway. but by accident, which is a different thing, and it never quite lands the same.",
      next: "close"
    },
    nGrid: {
      who: "charlotte",
      say: "i heard. hans has been insufferable about it. bring me all four when you have them — the room upstairs only opens for that.",
      stamp: "said:told-charlotte-about-the-grid",
      next: "close"
    },

    close: {
      who: "charlotte",
      say: "that is enough for today, {name}. the rest of it isn't taught in here — it's noticed, out there. and keep an eye out: hans will be the one to reach out to you next.",
      aside: "she signs the back of your card with one finger, the way you would press a stamp.",
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
}

};
