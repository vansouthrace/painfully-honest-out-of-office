# The Painfully Honest Out-of-Office

[![make.fun competition](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![make.fun rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/vansouthrace/painfully-honest-out-of-office/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![make.fun reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/vansouthrace/painfully-honest-out-of-office/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A [make.fun](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) entry: one brutally honest but still polite out-of-office auto-reply, a single sentence of 167 characters. It admits the private truth that answering email faster only earns more email, and promises a properly rested reply on Monday — honest enough to sting, polite enough that a manager would let it stand.

> I'm on leave until Monday, and honestly I booked it the day I realised that replying faster only earns me more email, so I'll answer when I'm back and properly rested.

Why this line: the field is crowded with unread-inbox counts, so this one finds a different honest admission — the leave itself was booked as an escape from the email treadmill — and lands it as a quotable turn of phrase instead of a complaint list.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader — and refuses to write it if it ever drifts outside the gate's 1–200 character contract.
