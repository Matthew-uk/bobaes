# Photo manifest

All image paths live in `content/media.ts`; no page references a file directly.
Real photographs come from `public/bobaes-img/` (supplied by the school). The
crest is `public/brand/crest.png` — the supplied `logo.png` with its baked-in
checkerboard background removed. Never recolour or stretch it.

## How to swap a placeholder for a real photo

1. Put the photograph in `public/bobaes-img/`.
2. In `content/media.ts`, change that entry's `src`, set the real `width` and
   `height`, and set `placeholder: false`.
3. Rewrite `alt` so it describes what is actually in the shot.
4. If the slot crops the image, set `position` (CSS object-position) so faces
   stay in frame and phone watermarks fall outside the crop.

**Permission:** every identifiable child needs written parental consent before
their photograph goes on a public website.

## Slots using real photographs

| Slot | File | Used on |
|---|---|---|
| `homeHero` | 3.jpg | Home hero |
| `homeTeaser` | 8.jpg | Home "whole way through", About values |
| `lifeDance` / `lifeScience` / `lifeChoir` / `lifeHomeEconomics` / `lifeExcursion` | 15 / 9 / 4 / 13 / 20 | Home "Life at BOBAES" |
| `aboutStory` | 2.jpg | About hero |
| `aboutChristianFoundation` | 14.jpg | Home pillars, Christian Foundation |
| `aboutSafety` | 8.jpg | Christian Foundation pillars, Book a Tour |
| `facilityClassroom` | 11.jpg | Facilities |
| `facilityScienceLab` | 9.jpg | Facilities |
| `facilityHomeEconomics` | 13.jpg | Facilities |
| `elearningBoard` | 6.jpg | Academics e-learning |
| `levelPreNursery` / `levelNursery` / `levelPrimary` / `levelSecondary` | 14 / 7 / 1 / 5 | Level pages, Academics, How to Apply |
| `examsHero` | 12.jpg | Home exams, Exam Registration |
| `admissionsHero` | 17.jpg | Admissions |
| `admissionsTour` | 2.jpg | Book a Tour |

Deliberately unused: `10.jpg` (dim duplicate of 9), `16.jpg`, `18.jpg`, `19.jpg`
(near-duplicates of 17/20 dominated by a third party's banners).

## Still waiting for a photograph

| Slot | What is needed |
|---|---|
| `levelCreche` | A carer with a baby in the creche. Explicit written consent; handle infants' faces carefully. |
| `aboutPartnership` | A parent–teacher conversation. Two adults, one child if possible. |
| `facilityComputerLab` | The computer laboratory, showing the real number of working machines. |
| `facilityLibrary` | Shelves and reading space. |
| `facilityPlayground` | Equipment and surfacing, ideally in use. |
| `facilitySecurity` | Gate, perimeter or sign-in desk. |
| `staffHead`, `staffPrimary`, `staffSecondary`, `staffEarlyYears`, `staffExams` | 4:5 portraits, natural light, consistent framing. Replace alongside `content/staff.ts`. |

Landscape and wider than you think: most slots crop differently at different
screen widths. Candid beats posed.
