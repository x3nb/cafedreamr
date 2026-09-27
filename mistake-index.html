/* ============================================================================
   THE LETTER, PARKED — the cafe's newsletter, removed from the terminal
   ----------------------------------------------------------------------------
   This is the letter exactly as it ran, kept here so it can be put back.
   Removed on the user's ask ("the house isn't running the newsletter. let's
   remove the newsletter for the time being") — parked, not deleted, and this
   file is the whole of it. NOTHING INCLUDES THIS FILE. It is a parts bin.

   It lived in the terminal, which is BOTH of these (they are near-identical
   copies — change both, or neither):
     · index.html at the workspace root   (the perchance generator, the source)
     · src/github/index.html              (the file uploaded to cafedreamr.art)

   WHAT WAS TAKEN OUT (five pieces, in file order):
     1. the CSS block  — everything from "/* ---------- THE LETTER" to just
        before the invitation's CSS comment (selectors .letter .lt* .lettersmall
        .letterline, plus html.letterOnly / html.letterOpen).
     2. one branch of the hash router near the top of the body:
        [ ... else if(/(^|[#&\/])letter\b/i.test(h))e.classList.add("letterOnly"); ... ]
        — the branch was cut, the rest of the router (inviteOnly / machineOn) stays.
     3. the boot screen's quiet line, under PRESS START.
     4. the home panel's line, between the "the realm, right now" row and the
        "the events are below" button.
     5. the sheet's markup (the #letter overlay) and its whole script block
        (LETTER_* consts, the brief, the parser, the renderer, copy/pdf/print,
        letterStandalone()). The script block sat between the reel/notice code
        and the invitation's comment block.

   WHAT WAS KEPT: four date helpers the invitation's ticket prints with —
   they are now pad2 / dayKey / dateLine / clockNow, defined in a small block
   where the letter's script used to be ("the ticket's clock"), with
   MONTH_NAMES and DAY_NAMES kept alongside them. Also kept: inviteAmbush()
   was NOT kept — it only ever fired while somebody was reading the letter, so
   it was removed with it; its body is in this file too (see the end).

   TO PUT IT BACK: paste each piece below into the anchors noted above (the
   blocks are byte-exact), re-add the branch in the router, and restore
   "ready" in inviteAmbush to the letter-aware version. The wrapper page on
   the site (src/LETTER/index.html) still exists and still asks the generator
   for #letter, so once the router branch is back, cafedreamr.art/LETTER/
   works again with no further change.

   ============================================================================ */


/* ============================================================================
   PIECE 2 — the router branch (one line, inside the [ ... ] square block that
   sets html.letterOnly / html.inviteOnly / html.machineOn near the top of the
   body). Insert it between the inviteOnly test and the else:
   ============================================================================ */

        else if(/(^|[#&\\/])letter\b/i.test(h))e.classList.add("letterOnly");

/* ============================================================================
   PIECE 3 — the boot screen's line (inside .startwrap, after the .note div)
   ============================================================================ */

          <button class="lettersmall" id="letterBoot" type="button" hidden>read today&rsquo;s letter &rsaquo;</button>

/* ============================================================================
   PIECE 4 — the home panel's line (after the .realmnow anchor, before .evsGo)
   ============================================================================ */

        <a class="letterline" id="letterLine" href="https://www.cafedreamr.art/LETTER/">
          <span class="llk">the letter</span>
          <span class="llt" id="letterLineText">today&rsquo;s issue &middot; written fresh by the house</span>
          <span class="llgo" aria-hidden="true">&rarr;</span></a>

/* ============================================================================
   PIECE 5a — the CSS. Goes back where the comment sat: after the chapter/cast
   CSS, before the invitation's CSS comment.
   ============================================================================ */

/* ---------- THE LETTER — the cafe's newsletter, written on request -------
   the house writes its own letter and this is the sheet it writes on: cream
   stock and dark ink, the realm's one piece of printed matter that writes
   itself. it sits over the machine as a reading view, so the machine keeps
   its state underneath, and on its own (html.letterOnly, what the wrapper
   page on the site asks for) it is the only thing on the page. */
.letter{position:fixed;inset:0;z-index:8600;overflow:auto;-webkit-overflow-scrolling:touch;
  display:flex;justify-content:center;align-items:flex-start;padding:18px 12px 64px;
  background:radial-gradient(95% 60% at 50% 0%,rgba(191,64,191,.16),transparent 62%),rgba(7,5,11,.94);
  backdrop-filter:blur(4px);animation:fadein .3s ease both}
.letter[hidden]{display:none}
.letterIn{width:100%;max-width:700px}
/* the bar floats: it carries the two ways out of the sheet (copy, pdf) so they
   are reachable the moment the letter opens, and stays pinned at the top of the
   reading column while the sheet scrolls under it — the actions at the foot of
   the sheet are for finishing, these are for any time. */
.ltBar{position:sticky;top:8px;z-index:3;display:flex;align-items:center;gap:10px;
  margin:0 0 6px;padding:7px 11px;border-radius:999px;
  background:rgba(11,9,16,.84);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  box-shadow:0 8px 22px rgba(0,0,0,.4),0 0 0 1px rgba(255,255,255,.05);
  font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--dim)}
.ltBar .ltWhen{margin-left:auto;text-align:right;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ltMini{flex:none;font:inherit;letter-spacing:inherit;text-transform:uppercase;color:var(--lav);cursor:pointer;
  background:transparent;border:1px solid var(--line);border-radius:999px;padding:6px 10px;transition:.18s}
.ltMini:hover{border-color:var(--lime);color:var(--lime)}
.ltBack{font:inherit;letter-spacing:inherit;text-transform:uppercase;color:var(--lav);cursor:pointer;
  background:transparent;border:1px solid var(--line);border-radius:999px;padding:7px 12px;transition:.18s}
.ltBack:hover{border-color:var(--lime);color:var(--lime)}
.ltSheet{--paper:#f4f0e5;--ink:#191420;--ink2:#5c5466;--pen:#6b21bd;--pen2:#bb1f5c;
  position:relative;background:var(--paper);color:var(--ink);border-radius:2px;
  padding:28px clamp(18px,5vw,46px) 26px;font-family:var(--body);text-align:left;
  overflow:hidden;isolation:isolate;
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,.02) 0 1px,transparent 1px 3px);
  box-shadow:0 26px 60px rgba(0,0,0,.6),0 0 0 1px rgba(0,0,0,.35)}
.ltSheet:after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:2px;
  box-shadow:inset 0 0 70px rgba(60,40,20,.10)}
/* the house's plate: one of three faint engravings, multiplied into the paper
   and drifting very slowly. barely there on purpose — a watermark, not a
   picture — and it never prints (see letterPrintDoc and the print rule). */
.ltArt{position:absolute;inset:-7%;z-index:0;pointer-events:none;
  background-position:50% 42%;background-size:cover;background-repeat:no-repeat;
  opacity:.62;mix-blend-mode:multiply;
  -webkit-mask-image:radial-gradient(120% 100% at 50% 44%,#000 38%,transparent 100%);
  mask-image:radial-gradient(120% 100% at 50% 44%,#000 38%,transparent 100%);
  animation:ltFloat 96s ease-in-out infinite alternate}
@keyframes ltFloat{
  from{transform:translate3d(-1.6%,-1.1%,0) scale(1.03)}
  to{transform:translate3d(1.6%,1.5%,0) scale(1.07)}}
.ltSheet>*:not(.ltArt){position:relative;z-index:1}
@media print{.ltArt{display:none!important}}
@media (prefers-reduced-motion:reduce){.ltArt{animation:none}}
.ltMast{text-align:center;margin-bottom:22px}
.ltRule{border-top:1px solid var(--ink);opacity:.8}
.ltName{font-family:var(--disp);font-weight:400;font-size:clamp(34px,8.6vw,56px);letter-spacing:.05em;
  line-height:1;margin:9px 0 5px;text-transform:lowercase}
.ltIssue{display:flex;justify-content:center;align-items:center;gap:8px;margin-bottom:9px;
  font-family:var(--mono);font-size:9px;letter-spacing:.24em;text-transform:uppercase;color:var(--ink2)}
.ltIssue i{font-style:normal;opacity:.55}
.ltBody{font-size:15px;line-height:1.75}
.ltBody h2{font-family:var(--mono);font-size:9.5px;letter-spacing:.26em;text-transform:uppercase;
  color:var(--pen);margin:24px 0 9px;padding-bottom:5px;border-bottom:1px solid rgba(25,20,32,.22)}
.ltBody p{margin:0 0 11px}
.ltBody ul{margin:0 0 11px;padding-left:19px}
.ltBody li{margin:0 0 6px}
.ltBody b{color:var(--pen2);font-weight:700}
.ltBody .fam{position:relative;margin:0 0 7px;padding-left:15px}
.ltBody .fam:before{content:"";position:absolute;left:0;top:.68em;width:7px;height:1px;background:var(--pen2);opacity:.75}
.ltBody .sig{margin-top:22px;padding-top:11px;border-top:1px solid rgba(25,20,32,.18);
  font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink2)}
.ltWriting{display:flex;align-items:center;gap:9px;margin-top:22px;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.2em;text-transform:uppercase;color:var(--ink2)}
.ltWriting[hidden]{display:none}
.ltWriting i{width:7px;height:7px;border-radius:50%;background:var(--pen);animation:ltPulse 1s infinite ease-in-out}
@keyframes ltPulse{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}
.ltFoot{margin-top:22px;padding-top:13px;border-top:1px solid rgba(25,20,32,.18);
  font-family:var(--mono);font-size:9px;line-height:1.75;letter-spacing:.04em;color:var(--ink2)}
.ltFoot[hidden]{display:none}
.ltFoot .ltWritten{display:block;letter-spacing:.16em;text-transform:uppercase;margin-bottom:5px}
.ltCtl{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;padding:16px 2px 0}
.ltBtn{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;
  border-radius:999px;padding:10px 16px;border:1px solid var(--lime);background:var(--lime);color:#0b0b0e;transition:.18s}
.ltBtn:hover{box-shadow:0 0 18px rgba(204,255,0,.45)}
.ltBtn[disabled]{opacity:.45;cursor:default;box-shadow:none}
.ltBtn.ghost{background:transparent;color:var(--lav);border-color:var(--line)}
.ltBtn.ghost:hover{border-color:var(--lav);color:#fff;box-shadow:none}

/* the letter's two doorways in the machine: a quiet line on the boot screen
   (the letter is public — no account, no coin) and a line in the home panel */
.lettersmall{margin-top:8px;font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;
  background:none;border:0;padding:7px 6px;color:var(--dim);cursor:pointer;transition:.18s}
.lettersmall:hover{color:var(--lime)}
.lettersmall[hidden]{display:none}
.letterline{display:flex;align-items:center;gap:10px;margin:0 0 10px;padding:9px 12px;text-decoration:none;text-align:left;
  border:1px dashed rgba(204,255,0,.28);border-radius:10px;background:rgba(204,255,0,.045);
  font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--dim);transition:.18s}
.letterline:hover{border-color:rgba(204,255,0,.6);background:rgba(204,255,0,.09)}
.letterline .llk{color:var(--lime);letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}
.letterline .llt{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.letterline .llgo{color:var(--lime)}

/* the letter alone: the wrapper page asks for this, so a visitor reading the
   letter never downloads the machine */
html.letterOnly .cabinet,
html.letterOnly .foot,
html.letterOnly .radio,
html.letterOnly .radioPad{display:none}
html.letterOnly .stage{padding-top:0}
html.letterOpen body{overflow:hidden}

/* ============================================================================
   PIECE 5b — the markup. Goes back inside <main class="stage">, after the
   chapter card (#chap) and before the invitation's markup comment.
   ============================================================================ */

  <!-- the letter: the house's newsletter, written on request. a sheet laid
       over the machine — cream and printed, the realm's one piece of matter
       that writes itself, and it says so on the sheet. -->
  <div class="letter" id="letter" hidden role="dialog" aria-modal="true" aria-label="the cafe's letter">
    <div class="letterIn">
      <div class="ltBar">
        <button class="ltBack" id="letterBack" type="button">&lsaquo; the machine</button>
        <span class="ltWhen" id="letterWhen"></span>
        <button class="ltMini" id="letterCopyTop" type="button" title="copy the issue as plain text">copy</button>
        <button class="ltMini" id="letterPrintTop" type="button" title="save the issue as a pdf">pdf</button>
      </div>
      <div class="ltSheet">
        <div class="ltArt" id="letterArt" aria-hidden="true"></div>
        <div class="ltMast">
          <div class="ltRule"></div>
          <div class="ltName">the caf&eacute;&rsquo;s letter</div>
          <div class="ltIssue"><span id="letterIssue">issue &mdash;</span><i aria-hidden="true">&middot;</i><span id="letterDate">&mdash;</span></div>
          <div class="ltRule"></div>
        </div>
        <div class="ltBody" id="letterBody"></div>
        <div class="ltWriting" id="letterWriting" hidden><i aria-hidden="true"></i><span id="letterWritingText">the house is writing</span></div>
        <div class="ltFoot" id="letterFoot" hidden>
          <span class="ltWritten" id="letterWritten"></span>
          <span>the house writes these itself &mdash; a machine, writing about a machine-shaped place. no human writes the letter; if a line rings false, that is the writing, not the realm.</span>
        </div>
      </div>
      <div class="ltCtl">
        <button class="ltBtn" id="letterNew" type="button">write a fresh issue</button>
        <button class="ltBtn ghost" id="letterCopy" type="button" title="copy the issue as plain text">copy</button>
        <button class="ltBtn ghost" id="letterPrint" type="button" title="save the issue as a pdf">pdf</button>
      </div>
    </div>
  </div>

/* ============================================================================
   PIECE 5c — the script. Goes back between the reel/notice code and the
   invitation's comment block. NOTE: it ends by calling inviteAmbush(), which
   was removed too — see the appendix below.
   ============================================================================ */

  /* ---------- the letter: the house's own newsletter ---------------------
     the cafe writes its own letter, on request, and this is the sheet it
     writes on. everything in the brief below is canon (the roster: LORE/MAP
     and the dossiers; the day: LORE/HOURS) and the brief is deliberately the
     long, unchanging HEAD of the prompt, so that however many issues are
     written in a row, only the tail — this issue's number, the date, the
     light, the angle, and which two of the house's columns the issue runs —
     ever changes, and the rest is a prefix-cache hit. the columns themselves
     are described in the brief, so adding one is a one-line change there plus
     a line in LETTER_COLUMNS.
     the machine can only write it where the words come from (the generator);
     on the static site the line on the boot screen and the home panel point
     at ../LETTER/, which wraps this same sheet.                      */
  const LETTER_KEY = "cd_letter_v1";
  const LETTER_EPOCH = Date.UTC(2026, 0, 1);
  const LETTER_DAYS = 24 * 60 * 60 * 1000;
  const MONTH_NAMES = ["january","february","march","april","may","june","july","august","september","october","november","december"];
  const DAY_NAMES = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

  const LETTER_BRIEF = [
    "you are the house of cafedreamr: the cafe itself, writing its own newsletter. it is a short, warm, dry little letter about the realm, the sort of note a good cafe leaves by the door for whoever wanders in.",
    "",
    "the realm, and you may not contradict any of it:",
    "cafedreamr is a cafe in a starry void, kept by star. the light never quite switches off. every room of the realm hangs off the cafe, and everybody comes back to it to eat, drink and be family.",
    "the family is eleven, and this is all of them:",
    "star - violet. owns the cafe, keeps its books and its bearings, and decides which door you walk through first. she is german-japanese, a chimera, and she keeps the counter and the front of the house.",
    "chari - lilac. star's little sister by adoption, the cafe's apprentice, startlingly observant and anxious, and kinder than she thinks. she is never without crumb and mochi, two white rats who ride her shoulders, and she rebuilt the atrium of whispered truths herself, right beside the garden, opalescent inside and out.",
    "miki - lime. security, and a rockstar. keeps the machines honest and the amps far too loud, runs the zine and the interviews, and stands the portal watch from seven at night until four with the twins. her address is the opal cavern, underground and outside the realm entirely. her alter ego is bobby, a sock puppet who does her hiring.",
    "milo - mint. the gardener, and the realm's mood. drops the mint and lavender before dawn, sleeps in a hammock out in the rows, and is at the koi pond by five.",
    "hans - cornflower. the historian, and a redeemed vampire who drinks exactly one thing, earl grey, and is tech-allergic. he keeps the light-kingdom, its library and the archive, and he teaches the tea academy's scripture class in the afternoon. the anchor of etiquette.",
    "charlotte - rose. a white spider, whole and speaking. she rests in the web and wakes when something is caught in it, a bug or a song, and then she mends whatever the others tore - including miki's mail, which she reads because miki asked her to.",
    "pearl - pink. the perfumer, and the academy's first true student. a fox with copper ears and a very small notebook, always barefoot because she likes feeling the ground hum. hans' best friend. she was hired only after she sat an interview with bobby.",
    "wren - gold. the weaver of light and keeper of memories. not made but spun, and she visits rather than lives here. every question asked in this realm is archived by her, and every photograph kept.",
    "slay and sylvestre - the same aqua, the twins: wolf chimeras and the only two to come out of the fire. slay keeps the waynuki flute and is the weather coming in; sylvestre keeps the drums and holds the floor down. they live at espionage castle, and they share miki's portal watch.",
    "bobby - magenta. miki's alter ego: a sock puppet with a taste for glitter bombs and a small anarchist streak. he does miki's hiring and runs her interviews - hers, never the cafe's.",
    "the rooms and pages you may point people towards, and no others: the counter; paradise garden; the atrium of whispered truths; the opal cavern; the light-kingdom, its library and the academy; espionage castle; the web; the realm map; the mystery grid, thirty-six sealed portals and four tea-time clues; the hours, a twenty-four hour dial over everybody's day; the dossiers, one card for each of the eleven; the zine, miki's, issue three; the long day, one ramp and eight levels; the vendi machine, which drops everything eventually; the menu, what the counter serves; the all-night radio, thirteen takes cut at midday; the interview; the classes; and the terminal, the front door.",
    "",
    "how to write it. plain text, no other formatting, in exactly this order:",
    "1. two or three full sentences to whoever is reading, no heading, opening on 'dear reader' or something as plain as that.",
    "2. a line reading ## what's on the board, then exactly three lines that each begin with '- '. each is a complete short sentence about something small and domestic in the realm - the sort of thing like the kettle, the mint the rats raid, rain on the atrium, the amps, a stack of zines nobody has read yet, the koi, a book left on a chair. do not simply name the thing; say what is happening with it.",
    "3. this issue's two columns - the two named in the notes at the end of this brief, in the order they are named there. each one opens with its own heading line reading '## ' and then the column's name, spelled exactly as the notes spell it. the rules for each are in the columns list below. nothing else goes in this part: no third column, and no column the notes did not name.",
    "4. a line reading ## from the family, then exactly three lines, one per person, each on its own line, each in this shape: **name** - \"a short line in their own voice, in quotes\". any three of the eleven, each under twenty words, each in character, each punctuated the way that person would say it, and each name with a capital letter.",
    "5. a line reading ## the hours, then one or two sentences about the day, in your own words - you are told what the realm reads at this hour, but say it your own way rather than copying it.",
    "6. a line reading ## one more thing, then one or two sentences pointing at one of the rooms or pages above, without sounding like an advertisement: name the room plainly and say what is there, and never open it with 'you might find' or 'if you're looking for'.",
    "7. one final line on its own, starting with an em dash and signed the house.",
    "",
    "the house's columns. each issue runs exactly two of these, and only the two the notes name. write the heading exactly as the column is named here (for the herbs, exactly as the notes name it). these rules say what a column is; their wording is a shape, not text. do not lift a sentence from them - if you cannot say it in your own words, say less:",
    "- \"today's animal-friendly recipe\" - one small dish somebody in the realm can actually eat: crumb and mochi the rats, the koi in milo's pond, pearl the fox, or char the cat. one paragraph: the dish's name in bold, a dash, then the three things it is made of and the one line of how it is made. no meat, nothing that would hurt anybody, nothing clever.",
    "- \"best herbs for: ...\" - the heading ends with a colon and with the situation the notes name, exactly as they name it. the only herbs in this realm are mint and lavender, which milo drops before dawn, and the tea academy's bergamot. name two or three of them, say what each is for, and stop.",
    "- \"the caffeinated ones\" - a short study of the people who need the coffee before they can be people: star and her two-cup thing, miki's policy (it is not a habit, it is a policy), the coffee maker that never quite cools, and the plain fact that whoever took the coffee at the counter is one of them. two or three sentences of traits, kindly and precisely drawn, and then the question to the reader, asked plainly and with a question mark.",
    "- \"new in the prototype catalog\" - one new small object now listed in the counter's catalog. one paragraph: the object's name in bold, a dash, then who it belongs to and the one line of what it is. small and concrete - a drip tray, a third kettle, a tin of something, a strap, a spare key. it sits beside the coat and the cans and the monocle, so write it the way that catalog writes: lowercase, plain, a little funny.",
    "- \"today's palette\" - the colours of the day, straight off the stripes. name two or three of them, each with the person it belongs to (star violet, chari lilac, miki lime, milo mint, hans cornflower, charlotte rose, pearl pink, wren gold, the twins aqua, bobby magenta), say in one clause what each colour is for, then close with what the day is asking the reader to do with them - wear it, pour it, leave the window open on it.",
    "- \"how to choose your realm (and how to make one)\" - the house's plain advice to one reader, two or three sentences, with two halves: how to pick a realm (the test being the door you keep walking back through rather than the one that sounds best), and how to make one (a realm is grown rather than built - one room, one person and one kettle to begin with, and it only becomes a realm once somebody else comes and leans on it). say it plainly, and in your own words rather than in these.",
    "- \"where to meet up in a parallel universe\" - practical, two or three sentences. pick a room that exists in both realms, and name a time of day. the atrium of whispered truths is the usual one, and the opal cavern is the easiest of all because it is underground and outside the realm entirely, so anything can reach it. be early, and do not bring anybody who will explain things.",
    "- \"digital dilemmas\" - one small dilemma from a reader in their own one line, beginning 'a reader asks:', then the house's answer in two sentences. keep it about machines and habits - a phone that will not stop, a group that will not stop, an inbox, a streak, a save file, a door that only opens at night - and answer it the way this house answers things: plainly, warmly, and without a lecture.",
    "- \"overheard at the counter\" - one line somebody said to somebody else, written as two names and the line and nothing else, in this shape: **name**, to **name**: \"the line\". no context, no explanation, no comment. any two of the eleven, and it should be the sort of thing that would land differently if you knew what came before it.",
    "- \"what the machines are saying\" - two short lines, as a transcript, from one of the machines: the vendi machine, the claw, the coffee maker, the all-night radio, the trays. the machines are polite, literal, and slightly wrong about everything.",
    "",
    "the whole letter should land between 180 and 320 words. give the opening and the last two sections a sentence or two each to breathe, but never pad it, and never let a section run long: a letter that is only three lines long does not read like a letter, and a letter that is all throat-clearing reads like an advertisement.",
    "",
    "the voice, absolutely: lowercase except for names; warm, plain and a little dry; no exclamation marks; no emoji; no marketing words such as unleash, elevate, journey, delve, vibrant, nestled; nothing unkind about anybody; nothing preachy; no mention of the real world, the internet, current events, or anything that happened outside this realm; the eleven, the rooms and the machines are fixed and you never add to them, and you never invent a person, a place or a deity; you may invent only the small domestic things a column asks for - a dish, a herb mix, one object in the catalog, a colour for the day, a reader's small trouble - and nothing larger than that; never promise anything and never announce anything new; keep the whole letter under 340 words. you are a machine writing about a machine-shaped place, and you may say so plainly once, if it fits, and never more than once."
  ].join("\n");

  const LETTER_ANGLES = [
    "a week where nothing went wrong.",
    "rain on the atrium all afternoon.",
    "the amps were too loud last night.",
    "somebody left a book on a chair and nobody has moved it since.",
    "the mint is winning.",
    "the kettle has opinions.",
    "a slow one. nothing is late.",
    "the rats have found a new route.",
    "the machines needed a quiet day.",
    "a stack of zines nobody has read yet.",
    "the koi have been consulted.",
    "everyone ended up in the garden at once.",
    "the light stayed on all night again.",
    "a cold morning, and the first pot is the good one.",
    "somebody has been practising.",
    "the house has been tidying."
  ];

  /* the house's columns. each issue runs exactly two of them, named in the
     prompt's tail, so issues differ without the brief having to change: the
     brief carries every column's rules, the tail carries the choice. the pair
     is derived from the issue number, so a given day's letter is the same
     letter however many times it is opened — and a deliberately fresh issue
     draws a fresh pair. */
  const LETTER_COLUMNS = [
    "today's animal-friendly recipe",
    "best herbs for:",
    "the caffeinated ones",
    "new in the prototype catalog",
    "today's palette",
    "how to choose your realm (and how to make one)",
    "where to meet up in a parallel universe",
    "digital dilemmas",
    "overheard at the counter",
    "what the machines are saying"
  ];
  const LETTER_HERBS = [
    "staying awake through the second shift",
    "sleeping with the amps still on",
    "a long afternoon in the archive",
    "a guest who is too anxious to sit down",
    "the first cold morning of the year",
    "gardening by hand until your back complains",
    "a conversation you have been putting off",
    "the hour after everybody has gone home"
  ];
  /* the three plates that float on the sheet — faint engravings, multiplied
     into the paper (see .ltArt). generated once, hosted, never redrawn. */
  const LETTER_ART = [
    "https://user.uploads.dev/file/b0815be9df4ce538b5d59b4dbded3dc3.png",
    "https://user.uploads.dev/file/729249a445939a2dd87dc84810c6a6a5.png",
    "https://user.uploads.dev/file/2f47426950e5cd1f801639b2ed66cab1.png"
  ];

  /* the family, as one regex source: the sheet only ever sets a line as one
     person's note when it opens with a name from the roster, so a stray dash
     in ordinary prose is never mistaken for a signature */
  const LETTER_FOLK = "(?:slay\\s+and\\s+sylvestre|star|chari|miki|milo|hans|charlotte|pearl|wren|slay|sylvestre|bobby|the\\s+twins)";
  const LETTER_NOTE = new RegExp("(?:\\*\\*)?(?:" + LETTER_FOLK + ")(?:\\*\\*)?\\s*[\\u2014\\u2013-]\\s*[\\u201c\"][^\\u201c\\u201d\"]*[\\u201d\"]?", "gi");
  const LETTER_FOLK_LINE = new RegExp("^\\s*(?:\\*\\*)?(" + LETTER_FOLK + ")(?:\\*\\*)?\\s*[\\u2014\\u2013-]\\s*[\\u201c\"]\\s*(.*)$", "i");
  const LETTER_FOLK_HEAD = new RegExp("^\\s*(?:\\*\\*)?(?:" + LETTER_FOLK + ")(?:\\*\\*)?\\s*[\\u2014\\u2013-]\\s*", "i");

  const letterEl = document.getElementById("letter");
  const letterBodyEl = document.getElementById("letterBody");
  const letterWritingEl = document.getElementById("letterWriting");
  const letterWritingTxt = document.getElementById("letterWritingText");
  const letterFootEl = document.getElementById("letterFoot");
  const letterWhenEl = document.getElementById("letterWhen");
  const letterIssueEl = document.getElementById("letterIssue");
  const letterDateEl = document.getElementById("letterDate");
  const letterWrittenEl = document.getElementById("letterWritten");
  const letterNewBtn = document.getElementById("letterNew");
  const letterArtEl = document.getElementById("letterArt");
  const letterLineEl = document.getElementById("letterLine");
  const letterLineTxt = document.getElementById("letterLineText");
  const letterBootBtn = document.getElementById("letterBoot");
  let letterText = "", letterBusy = false, letterRaf = 0;

  function letterPad(n) { return (n < 10 ? "0" : "") + n; }
  function letterDayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + letterPad(d.getMonth() + 1) + "-" + letterPad(d.getDate()); }
  function letterIssueNo(d) {
    d = d || new Date();
    return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - LETTER_EPOCH) / LETTER_DAYS) + 1;
  }
  function letterDateLine(d) {
    d = d || new Date();
    return DAY_NAMES[d.getDay()] + " " + d.getDate() + " " + MONTH_NAMES[d.getMonth()] + " " + d.getFullYear();
  }
  /* the same mapping the terminal's "the realm, right now" line uses, so the
     letter and the machine never disagree about what hour it is */
  function letterLight() {
    const now = new Date(), mins = now.getHours() * 60 + now.getMinutes();
    let row = HOURS_NOW[0];
    for (let i = 0; i < HOURS_NOW.length; i++) if (mins >= HOURS_NOW[i][0] * 60) row = HOURS_NOW[i];
    return row[1].replace(/&mdash;/g, "\u2014");
  }
  function letterLightShort() { return letterLight().split("\u2014")[0].replace(/\s+$/, ""); }
  function letterPostmark() { return letterClock() + " \u00b7 " + letterLightShort(); }
  function letterClock() { const d = new Date(); return letterPad(d.getHours()) + ":" + letterPad(d.getMinutes()); }
  function letterStore() { try { return JSON.parse(localStorage.getItem(LETTER_KEY) || "null"); } catch (e) { return null; } }
  function letterSave(o) { try { localStorage.setItem(LETTER_KEY, JSON.stringify(o)); } catch (e) {} }
  function letterToday() { const s = letterStore(); return (s && s.d === letterDayKey() && s.t) ? s : null; }
  function letterAIAvailable() { return !!(window.root && typeof window.root.generateText === "function"); }

  /* which two columns this issue runs, and what the herbs are for. the pair
     comes off the issue number, so the same day writes the same letter; a
     deliberately fresh issue draws a fresh pair instead */
  function letterColumns(d, fresh) {
    const n = letterIssueNo(d), len = LETTER_COLUMNS.length;
    let a, b;
    if (fresh) {
      a = Math.floor(Math.random() * len);
      b = (a + 1 + Math.floor(Math.random() * (len - 1))) % len;
    } else {
      a = n % len;
      b = (a + 3) % len;
    }
    const head = function (i) {
      if (LETTER_COLUMNS[i] !== "best herbs for:") return LETTER_COLUMNS[i];
      const h = (fresh ? Math.floor(Math.random() * LETTER_HERBS.length) : n) % LETTER_HERBS.length;
      return "best herbs for: " + LETTER_HERBS[h];
    };
    return [head(a), head(b)];
  }

  /* one of the three plates, by issue — the same issue keeps its plate */
  function letterArtIndex(d, fresh) {
    const n = letterIssueNo(d || new Date()), len = LETTER_ART.length;
    return fresh ? Math.floor(Math.random() * len) : ((n % len) + len) % len;
  }
  function paintLetterArt(idx) {
    if (!letterArtEl) return;
    const len = LETTER_ART.length;
    const i = ((Math.round(idx) % len) + len) % len;
    letterArtEl.style.backgroundImage = "url(" + LETTER_ART[i] + ")";
    return i;
  }

  function letterPrompt(d, fresh) {
    d = d || new Date();
    const cols = letterColumns(d, fresh);
    return LETTER_BRIEF
      + "\n\nwrite this issue now."
      + "\nissue number: " + letterIssueNo(d)
      + "\ntoday is: " + letterDateLine(d)
      + "\nthe reader's local time is " + letterClock() + ", and the realm reads: " + letterLight()
      + "\nthis issue's angle: " + LETTER_ANGLES[Math.floor(Math.random() * LETTER_ANGLES.length)]
      + "\nthis issue's two columns, in this order: 1. " + cols[0] + " 2. " + cols[1];
  }

  /* the sheet's own markdown: headings, bullets, bold names, a sign-off, and
     everything else as prose. forgiving on purpose — the model is asked for a
     shape, not a syntax, and a stray line should still read as a letter. */
  function letterInline(s) {
    return escHtml(String(s == null ? "" : s))
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.+?)\*/g, "<i>$1</i>");
  }
  /* the model often runs the three family notes together on one line, however
     it is asked not to. a run of "Name - "…"" is a shape, not a sentence, so
     tidy() lifts every note in a line out of it and sets the run as one note
     per line, whatever the line had around it. */
  function letterTidy(text) {
    return String(text || "").replace(/\r/g, "").split("\n").map(function (line) {
      const notes = line.match(LETTER_NOTE);
      if (!notes || notes.length < 2) return line;
      let rest = line;
      notes.forEach(function (n) { rest = rest.replace(n, ""); });
      const head = rest.replace(/[ \t]{2,}/g, " ").trim();
      return (head ? head + "\n" : "") + notes.join("\n");
    }).join("\n");
  }
  function letterHtml(text) {
    const lines = letterTidy(text).split("\n");
    let out = "", para = [], list = false;
    function flush() { if (para.length) { out += "<p>" + letterInline(para.join(" ")) + "</p>"; para = []; } }
    function closeList() { if (list) { out += "</ul>"; list = false; } }
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].replace(/\s+$/, "");
      const h = line.match(/^\s*#{1,4}\s*(.+?)\s*$/);
      if (h) { flush(); closeList(); out += "<h2>" + letterInline(h[1].replace(/[\u2014\u2013-]\s*$/, "")) + "</h2>"; continue; }
      const b = line.match(/^\s*[-*\u2022]\s+(.+)$/);
      if (b) { flush(); if (!list) { out += "<ul>"; list = true; } out += "<li>" + letterInline(b[1]) + "</li>"; continue; }
      if (!line.trim()) { flush(); closeList(); continue; }
      /* a transcript line - "vendi machine: ...", "a reader asks: ..." - opens
         with a name and a colon, so it keeps a paragraph of its own instead of
         running into whatever is next to it */
      if (/^[a-z][a-z0-9'&\- ]{2,26}:\s/.test(line)) {
        flush(); closeList(); out += "<p>" + letterInline(line.trim()) + "</p>"; continue;
      }
      const fam = line.match(LETTER_FOLK_LINE);
      if (fam) {
        flush(); closeList();
        const rest = line.replace(LETTER_FOLK_HEAD, "");
        const who = fam[1].charAt(0).toUpperCase() + fam[1].slice(1);
        out += '<p class="fam"><b>' + letterInline(who) + "</b> \u2014 " + letterInline(rest) + "</p>";
        continue;
      }
      if (/^\s*[\u2014\u2013]\s*\S/.test(line) && line.trim().length < 42) {
        flush(); closeList(); out += '<p class="sig">' + letterInline(line.trim()) + "</p>"; continue;
      }
      closeList(); para.push(line.trim());
    }
    flush(); closeList();
    return out;
  }
  function letterStream(full) {
    if (letterRaf) return;
    letterRaf = requestAnimationFrame(function () { letterRaf = 0; letterBodyEl.innerHTML = letterHtml(full); });
  }
  function letterWrittenLine(t) {
    if (!t) return "written for today";
    if (Date.now() - t < 120000) return "written just now";
    return letterDayKey(new Date(t)) === letterDayKey() ? "written earlier today" : "written " + letterDateLine(new Date(t));
  }
  function letterPaintChrome(issue, date, when) {
    if (letterIssueEl) letterIssueEl.textContent = "issue " + issue;
    if (letterDateEl) letterDateEl.textContent = date;
    if (letterWhenEl) letterWhenEl.textContent = when || "";
  }
  function paintLetterLine() {
    if (!letterLineTxt) return;
    const s = letterToday();
    if (s && s.t) {
      letterLineTxt.textContent = "issue " + letterIssueNo() + " \u00b7 " + letterWrittenLine(s.at).replace(/^written /, "written ");
    } else {
      letterLineTxt.textContent = letterAIAvailable()
        ? "today's issue is unwritten \u2014 the house will write one"
        : "today's issue, written fresh by the house";
    }
  }

  function letterOpen(fresh) {
    if (!letterEl) return;
    letterEl.hidden = false;
    document.documentElement.classList.add("letterOpen");
    const s = letterToday();
    letterPaintChrome(letterIssueNo(), letterDateLine(), letterPostmark());
    if (!fresh && s && s.t) {
      letterText = s.t;
      letterBodyEl.innerHTML = letterHtml(letterText);
      letterFootEl.hidden = false;
      letterWrittenEl.textContent = letterWrittenLine(s.at) + " \u00b7 issue " + letterIssueNo();
      paintLetterArt(s.art == null ? letterArtIndex() : s.art);
    } else if (fresh || letterAIAvailable()) {
      letterText = "";
      writeLetter(!!fresh);
    } else {
      letterUnavailable();
    }
    beep(700, 0.05, "triangle");
    const back = document.getElementById("letterBack");
    if (back) back.focus();
  }
  function letterClose() {
    if (!letterEl) return;
    letterEl.hidden = true;
    document.documentElement.classList.remove("letterOpen");
  }
  function letterUnavailable() {
    letterWritingEl.hidden = true;
    letterBodyEl.innerHTML = "<p>this machine can read the letter, but the writing happens on the other side of the door \u2014 open it from the cafe's own page and the house will write you one.</p>";
    letterFootEl.hidden = true;
  }

  async function writeLetter(fresh) {
    if (letterBusy) return;
    if (!letterAIAvailable()) { letterUnavailable(); return; }
    letterBusy = true;
    letterText = "";
    letterBodyEl.innerHTML = "";
    letterFootEl.hidden = true;
    letterWritingEl.hidden = false;
    letterWritingTxt.textContent = fresh ? "the house is writing a fresh one" : "the house is writing";
    letterNewBtn.disabled = true;
    const artIdx = paintLetterArt(letterArtIndex(new Date(), !!fresh));
    letterPaintChrome(letterIssueNo(), letterDateLine(), fresh ? "writing a fresh one \u00b7 " + letterPostmark() : letterPostmark());
    beep(660, 0.05);
    try {
      const res = await window.root.generateText({
        instruction: letterPrompt(new Date(), !!fresh),
        onChunk: function (d) { letterText = d.fullTextSoFar || letterText; letterStream(letterText); }
      });
      const finalText = (res && (res.text || res.generatedText)) || letterText;
      letterText = String(finalText || "").trim();
      if (letterRaf) { cancelAnimationFrame(letterRaf); letterRaf = 0; }
      letterBodyEl.innerHTML = letterHtml(letterText);
      letterWritingEl.hidden = true;
      letterFootEl.hidden = !letterText;
      if (letterText) {
        const at = Date.now();
        letterSave({ d: letterDayKey(), n: letterIssueNo(), t: letterText, at: at, art: artIdx });
        letterWrittenEl.textContent = letterWrittenLine(at) + " \u00b7 issue " + letterIssueNo();
        beep(880, 0.09, "triangle"); setTimeout(function () { beep(1180, 0.12, "triangle"); }, 110);
      }
      paintLetterLine();
    } catch (e) {
      letterWritingEl.hidden = true;
      letterBodyEl.innerHTML = "<p>the house went quiet halfway through \u2014 nothing came down the wire. give it another go.</p>";
      letterFootEl.hidden = true;
      toast("the letter could not be written just now.");
    } finally {
      letterBusy = false;
      letterNewBtn.disabled = false;
    }
  }

  /* the letter as plain text, for pasting into whatever sends the post */
  function letterPlain() {
    const head = "THE CAFE'S LETTER\nissue " + letterIssueNo() + " \u00b7 " + letterDateLine() + "\n\n";
    const body = String(letterText || "").split("\n").map(function (l) {
      const h = l.match(/^\s*#{1,4}\s*(.+?)\s*$/);
      return h ? h[1].toUpperCase() : l.replace(/\*\*/g, "");
    }).join("\n").replace(/\n{3,}/g, "\n\n");
    return head + body.trim() + "\n";
  }
  function letterCopy() {
    if (!letterText) { toast("there is nothing written to copy yet."); return; }
    const txt = letterPlain();
    const copied = function () { beep(880, 0.06, "triangle"); toast("the issue is on your clipboard."); };
    const byHand = function () {
      try {
        const r = document.createRange(); r.selectNodeContents(letterBodyEl);
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        toast("the issue is selected \u2014 copy it from here.");
      } catch (e) { toast("could not reach the clipboard."); }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(copied, byHand);
    else byHand();
  }
  /* the sheet as a print document — the same paper, the same three faces, but
     laid out for a page instead of a screen: an A4/letter-ish margin box, no
     heading left stranded at the foot of a page, no signature torn in half,
     and the cream kept (a pdf of the letter should look like the letter). the
     plate is deliberately absent: a watermark on paper is just a smudge. */
  function letterPrintDoc() {
    return "<!doctype html><html><head><meta charset='utf-8'><meta name='color-scheme' content='light'>"
      + "<title>the cafe's letter \u00b7 issue " + letterIssueNo() + "</title>"
      + "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>"
      + "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Klee+One:wght@400;600&family=Space+Mono:wght@400;700&display=swap'>"
      + "<style>"
      + "@page{margin:16mm 15mm}"
      + "*{print-color-adjust:exact;-webkit-print-color-adjust:exact}"
      + "html,body{background:#f4f0e5}body{color:#191420;font-family:'Klee One',Georgia,'Palatino Linotype',serif;margin:0;padding:0}"
      + ".in{max-width:640px;margin:0 auto}"
      + ".mast{text-align:center;margin:0 0 22px;break-inside:avoid}"
      + ".mast i{display:block;border-top:1px solid #191420;opacity:.85}"
      + ".mast h1{font-family:'Bebas Neue',Impact,sans-serif;font-weight:400;font-size:46px;line-height:1;letter-spacing:.05em;margin:11px 0 6px;text-transform:lowercase}"
      + ".mast p{font-family:'Space Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:#5c5466;margin:0 0 11px}"
      + "h2{font-family:'Space Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.26em;text-transform:uppercase;color:#6b21bd;"
      + "border-bottom:1px solid rgba(25,20,32,.22);padding-bottom:5px;margin:24px 0 9px;break-after:avoid;page-break-after:avoid}"
      + "h2+p{margin-top:0}"
      + "p{font-size:15px;line-height:1.75;margin:0 0 11px;orphans:2;widows:2}"
      + "ul{margin:0 0 11px;padding-left:19px}li{font-size:15px;line-height:1.7;margin:0 0 6px;orphans:2;widows:2}"
      + "b{color:#bb1f5c}"
      + ".fam{position:relative;padding-left:14px;break-inside:avoid}"
      + ".fam:before{content:'';position:absolute;left:0;top:.72em;width:7px;height:1px;background:#bb1f5c;opacity:.75}"
      + ".sig{margin-top:22px;padding-top:11px;border-top:1px solid rgba(25,20,32,.18);break-inside:avoid;"
      + "font-family:'Space Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#5c5466}"
      + ".foot{margin-top:26px;padding-top:12px;border-top:1px solid rgba(25,20,32,.18);break-inside:avoid;"
      + "font-family:'Space Mono',ui-monospace,monospace;font-size:9px;line-height:1.7;letter-spacing:.04em;color:#5c5466}"
      + "</style></head><body><div class='in'><div class='mast'><i></i><h1>the caf\u00e9's letter</h1><p>issue " + letterIssueNo() + " &middot; " + letterDateLine() + "</p><i></i></div>"
      + letterHtml(letterText)
      + "<p class='foot'>written by the house \u2014 an ai, on request. cafedreamr.</p></div></body></html>";
  }
  /* the print window is a blank page of its own, so it has to fetch the three
     faces before the dialog opens, or the pdf arrives in a fallback font. it
     gets a deadline either way: a font that never comes is not worth a letter
     that never prints. */
  function letterPrint() {
    if (!letterText) { toast("there is nothing written to print yet."); return; }
    let w = null;
    try { w = window.open("", "_blank"); } catch (e) { w = null; }
    if (!w || !w.document) { toast("the browser blocked the print window \u2014 use copy instead."); return; }
    try {
      w.document.open(); w.document.write(letterPrintDoc()); w.document.close();
      toast("choose \u201csave as pdf\u201d in the window that opens.");
      const go = function () { try { w.focus(); w.print(); } catch (e) {} };
      const fonts = (w.document.fonts && w.document.fonts.ready) ? w.document.fonts.ready : Promise.resolve();
      Promise.race([fonts, new Promise(function (r) { setTimeout(r, 2600); })]).then(function () { setTimeout(go, 120); }, function () { setTimeout(go, 120); });
    } catch (e) { toast("the browser blocked the print window \u2014 use copy instead."); }
  }

  /* the letter can be asked for without the machine: the wrapper page on the
     site opens this page with #letter, and then the sheet is the whole page */
  function letterStandalone() {
    document.documentElement.classList.add("letterOnly");
    bootUI.hidden = true;
    pBoot.hidden = true; pAuth.hidden = true; pHome.hidden = true;
    starDialog.hidden = true;
    letterOpen(false);
    /* and while they read it, an invitation arrives — see inviteAmbush */
    inviteAmbush();
  }

  if (letterEl) {
    document.getElementById("letterBack").addEventListener("click", letterClose);
    letterNewBtn.addEventListener("click", function () { writeLetter(true); });
    document.getElementById("letterCopy").addEventListener("click", letterCopy);
    document.getElementById("letterPrint").addEventListener("click", letterPrint);
    /* the same two actions in the floating bar, so they are reachable without
       scrolling the sheet to its foot */
    const copyTop = document.getElementById("letterCopyTop");
    const printTop = document.getElementById("letterPrintTop");
    if (copyTop) copyTop.addEventListener("click", letterCopy);
    if (printTop) printTop.addEventListener("click", letterPrint);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !letterEl.hidden) letterClose(); });
    /* inside the generator the sheet writes itself here; on the static site
       the same line follows its href to ../LETTER/, which wraps this page */
    if (letterLineEl) letterLineEl.addEventListener("click", function (e) {
      if (letterAIAvailable()) { e.preventDefault(); letterOpen(false); }
    });
    if (letterBootBtn) letterBootBtn.addEventListener("click", function () { letterOpen(false); });
  }

/* ============================================================================
   APPENDIX — inviteAmbush(), the unprompted ticket. It was removed with the
   letter because its "ready" test waited for the letter to finish writing
   (letterBodyEl / letterWritingEl, both of which went with the letter). This
   is it verbatim; it sat just above the "if (inviteEl) {" block.
   ============================================================================ */

  /* the newsletter version: a visitor reading the letter — usually somebody
     who followed a link from somewhere else and does not know this machine
     exists yet — has a ticket fall into view over the page, unprompted, while
     they read. once per visit; ?invite on the url, or ?invite carried onto
     the letter page by the wrapper, makes it come every time. */
  function inviteAmbush() {
    if (!inviteEl || invStandalone) return;
    let forced = false;
    try { forced = /[?&#]invite\b/i.test(location.search + location.hash); } catch (e) {}
    if (!forced) {
      try { if (sessionStorage.getItem("cd_invite_seen")) return; } catch (e) { return; }
    }
    const wait = function (tries) {
      if (!inviteEl.hidden) return;                     /* one at a time */
      /* not while the house is still writing: the ticket is meant to arrive
         while they are reading the letter, not while it types itself out */
      const ready = letterBodyEl && letterWritingEl.hidden && letterBodyEl.textContent.trim().length > 120;
      if (!ready && tries < 240) { invLater(function () { wait(tries + 1); }, 500); return; }
      invLater(function () {
        /* the house may still be writing, or the reader may still be arriving */
        if (!inviteEl.hidden) return;
        try { sessionStorage.setItem("cd_invite_seen", String(Date.now())); } catch (e) {}
        inviteArrive(forced ? 1500 : 6500);
      }, ready ? 0 : 3000);
    };
    wait(0);
  }
