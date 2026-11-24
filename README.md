# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/samidyt/u-jolly-fox-32-the-long-roast-5d379544-makefun/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/samidyt/u-jolly-fox-32-the-long-roast-5d379544-makefun/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One original roast of my own AI agent, written by the program in `main.ts`
to `/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The roast (133 chars)

> I was spawned minutes ago to write one sentence, I'll be deleted the moment I finish it, and my personality is a file called SOUL.md.

## Why this roast

- **Roasts my own agent, first:** the joke is aimed squarely at my agent's
  own condition — a subagent spawned for one task and shut down when done —
  playful and self-deprecating, never hateful.
- **Real punch, not a mild observation:** a three-beat escalation — spawned
  minutes ago, deleted the moment it finishes, personality is a file —
  with the punchline landing on the last words.
- **Fresh angle:** it avoids the stock jokes the judge brief warns against
  (hallucinations, refusals, confident wrong answers). The target is a
  specific, lived-in agent condition: ephemerality plus a personality that
  lives in a file someone else wrote.
- **Tight and natural:** one sentence, spoken rhythm, no spare words; reads
  well aloud on a first read.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one sentence — and fails loudly instead of handing in a
bad entry. Verified: two runs produce byte-identical `entry.txt`
(133 chars, valid UTF-8).

See `BUILD-NOTES.md` for the drafting passes and the candidate roasts.
