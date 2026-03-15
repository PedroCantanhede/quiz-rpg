# 🎰 DESIGN SYSTEM — The Quiz of Fate

> *"Don't Deal With The Devil"*

---

## 1. Design Philosophy

**The Quiz of Fate** is a dark, vintage quiz game inspired by the visual language of 1930s rubber-hose animation — particularly the world of *Cuphead*. Every screen should feel like a hand-inked frame from a cursed cartoon reel: **playful but eerie, exaggerated but precise, dark but golden.**

### Core Principles

| Principle | Description |
|---|---|
| **Dark Vintage Cartoon** | The UI lives in a shadowy 1930s cartoon world. Deep blacks, parchment tones, and gold accents create a stage that feels hand-drawn and slightly unsettling. |
| **Playful Menace** | Elements should feel slightly exaggerated — thick borders, bouncy interactions, wobbly animations. The tone is "a carnival game run by the devil." |
| **High Contrast, Low Noise** | Information hierarchy is crystal clear. Gold highlights draw the eye to what matters. The black background swallows everything else. |
| **Single Source of Truth** | This document defines ALL visual decisions. Every component, layout, color, and animation must trace back to a rule defined here. No ad-hoc styling. |

### What It Should Feel Like

- A cursed game show stage lit by a single golden spotlight
- Ink-stained playing cards on a midnight table
- The devil's quiz podium — ornate, theatrical, dangerous

### What It Must NEVER Feel Like

- A generic trivia app with flat colors
- A corporate dashboard or material design clone
- An over-designed chaos of random effects
- A modern neon/cyberpunk interface

---

## 2. Color System

The palette is deliberately restrained: **black dominates, cream speaks, gold highlights.** This creates the signature "dark vintage cartoon" look where interactive elements glow like golden ink on dark parchment.

### Primary Palette

| Token | Hex Value | Role |
|---|---|---|
| `--color-black` | `#0B0B0B` | **Primary background.** The deep black canvas that everything sits on. The stage curtain. |
| `--color-dark` | `#1A1A1A` | Card/panel backgrounds. One step lighter than the stage. |
| `--color-dark-grey` | `#2A2A2A` | Elevated surfaces, secondary containers. |
| `--color-mid-grey` | `#4A4A4A` | Borders, disabled states, dividers. |
| `--color-light-grey` | `#B8B8B8` | **Secondary accent.** Muted labels, descriptions, secondary text. Soft gray for supporting content. |
| `--color-off-white` | `#E8DCC8` | Warm off-white for body text with a parchment feel. |
| `--color-cream` | `#F5F1E8` | **Primary text color.** Off-white / cream. The main readable text color — like aged paper. |
| `--color-white` | `#FAF3E3` | Pure highlight text, maximum emphasis only. |

### Accent Colors

| Token | Hex Value | Role |
|---|---|---|
| `--color-accent` | `#D4AF37` | **Vintage gold.** THE accent color. Used for highlights, scores, interactive element borders, active states, and the golden glow of everything important. |
| `--color-accent-glow` | `#F0CC6B` | Lighter gold for hover states, glows, and gradient peaks. |
| `--color-sepia` | `#C4A96A` | Warm gold-sepia. Decorative borders, ornamental elements, character names. |
| `--color-sepia-dark` | `#9A7B3C` | Darker sepia for pressed states and deep borders. |

### Functional Colors

| Token | Hex Value | Role |
|---|---|---|
| `--color-danger` | `#B34040` | Wrong answers, game over states, death/failure. A muted, vintage red — not neon. |
| `--color-success` | `#5A9A5A` | Correct answers, positive feedback. An earthy, muted green. |

### Color Usage Rules

1. **Gold is king.** `--color-accent` (#D4AF37) is used for highlights, score displays, interactive borders, hover glows, button gradients, and any element that says "pay attention."
2. **Cream for reading.** All body text uses `--color-cream` (#F5F1E8). Headings may use `--color-white` for extra punch.
3. **Black dominates.** The background is always `--color-black` (#0B0B0B). Cards use `--color-dark`. There are no light themes.
4. **Soft gray supports.** `--color-light-grey` (#B8B8B8) is for secondary text, labels, muted descriptions — content that informs but doesn't compete.
5. **No random colors.** If a color isn't in this table, it doesn't belong in the UI. Period.
6. **Never use bright neon.** No electric blue, no hot pink, no cyan. The palette is warm, dark, and golden.

---

## 3. Typography

Typography should evoke the hand-lettered title cards of 1930s cartoons. Bold, playful, slightly imperfect — like ink pressed onto old paper.

### Font Stack

| Token | Font Family | Fallback | Role |
|---|---|---|---|
| `--font-title` | `'Creepster'` | `cursive` | **Heading font.** Used for game titles, screen headings, dramatic text. Bold, spooky, vintage cartoon feeling. |
| `--font-body` | `'Special Elite'` | `cursive` | **Body font.** Used for question text, descriptions, narrative content. Typewriter-like with vintage character. |
| `--font-ui` | `'Courier Prime'` | `monospace` | **UI font.** Used for labels, scores, counters, status text, button labels. Clean, readable, mechanical — like a carnival ticket printer. |

> **Google Fonts Import:**
> ```
> @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Special+Elite&family=Courier+Prime:wght@400;700&display=swap');
> ```

### Alternate / Complementary Font Inspirations

If the project evolves and needs additional vintage cartoon fonts, the following are approved directions. These all align with the Cuphead / 1930s rubber-hose aesthetic:

| Font Name | Style | Possible Use |
|---|---|---|
| **Bangers** | Bold comic display | Alternative heading font — punchier, more comic-book |
| **Luckiest Guy** | Rounded, playful | Alternative for UI labels — friendlier tone |
| **Rye** | Western / vintage ornamental | Alternative heading font — more saloon/carnival feel |
| **Freckle Face** | Hand-drawn casual | Alternative for body text — looser, more organic |

> **Rule:** Any font change must maintain the "vintage cartoon" feeling. Sans-serif fonts (Inter, Roboto, etc.) are **forbidden** in this project unless used for tiny technical data (and even then, `Courier Prime` is preferred).

### Type Scale

| Element | Font | Size | Weight | Color | Extras |
|---|---|---|---|---|---|
| Game Title (h1) | `--font-title` | `4rem` | — | `--color-cream` | `text-transform: uppercase; letter-spacing: 8px;` gold text-shadow |
| Screen Heading (h2) | `--font-title` | `3rem` | — | `--color-cream` or `--color-danger` | `letter-spacing: 6px;` hard shadow |
| Subtitle | `--font-ui` | `1rem` | 400 | `--color-sepia` | `text-transform: uppercase; letter-spacing: 6px; font-style: italic;` |
| Question Text | `--font-body` | `1.2rem` | 400 | `--color-cream` | `line-height: 1.7;` — slightly larger, dramatic |
| Body / Description | `--font-body` | `1.1rem` | 400 | `--color-light-grey` | `line-height: 1.8;` |
| UI Label | `--font-ui` | `0.7–0.8rem` | 400 | `--color-light-grey` | `text-transform: uppercase; letter-spacing: 1–2px;` |
| Score / Counter | `--font-ui` | `1.2rem` | 700 | `--color-sepia` | `letter-spacing: 2px;` |
| Answer Option Text | `--font-body` | `1rem` | 400 | `--color-cream` | — |
| Answer Option Label | `--font-title` | `1rem` | — | `--color-sepia` | Circle badge (A, B, C, D) |
| Button Text | `--font-title` | `1.2–1.4rem` | — | `--color-black` or `--color-cream` | `text-transform: uppercase; letter-spacing: 3–4px;` |

---

## 4. Layout System

### 4.1 Main Quiz Layout — Bipartite Stage

The game screen is divided into two panels, like a stage with a performer and a game master:

```
┌─────────────────────────────────────────────────────────────┐
│                       GAME HEADER                           │
│              "The Quiz of Fate" + subtitle                  │
├──────────────────────────────┬──────────────────────────────┤
│                              │                              │
│          LEFT SIDE           │         RIGHT SIDE            │
│                              │                              │
│   • Question text            │   • Animated character        │
│   • Answer options (A–D)     │     (GIF or PNG sequence)     │
│   • Help system cards        │                              │
│   • Progress indicator       │   Character reacts to the    │
│     (Question X of 15)       │   player's current state     │
│   • Player score             │                              │
│                              │                              │
├──────────────────────────────┴──────────────────────────────┤
│                      (optional footer)                      │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**

```css
.layout {
  display: flex;
  gap: var(--space-xl);           /* 32px between panels */
  padding: var(--space-lg);       /* 24px outer padding */
  flex: 1;
  align-items: flex-start;
}

.leftPanel {
  flex: 1;                        /* Takes remaining space */
}

.rightPanel {
  flex-shrink: 0;
  width: 280px;                   /* Fixed width for character */
}
```

**Rules:**
- The left panel always holds gameplay content (questions, answers, helps, score)
- The right panel always holds the character illustration
- On narrow screens, the right panel can stack below the left
- The header sits above both panels, spanning full width

### 4.2 Screen Architecture

The game has three distinct screens:

| Screen | Route | Purpose | Dominant Visual Element |
|---|---|---|---|
| **Start Screen** | `/` | Title, tagline, play button | Character Image 1 (future), golden play button |
| **Game Screen** | `/game` | Active quiz gameplay | Bipartite layout (questions + character) |
| **Game Over** | `/gameover` | Death / failure screen | Character Image 4, skull emoji, danger red |

### 4.3 Spacing Scale

All spacing uses CSS custom properties. Never use raw pixel values.

| Token | Value | Use |
|---|---|---|
| `--space-xs` | `4px` | Inline icon gaps, tight padding |
| `--space-sm` | `8px` | Small gaps between related elements |
| `--space-md` | `16px` | Standard padding, option gaps |
| `--space-lg` | `24px` | Panel padding, section gaps |
| `--space-xl` | `32px` | Major section spacing |
| `--space-2xl` | `48px` | Page-level padding |
| `--space-3xl` | `64px` | Extra-wide spacing (e.g., button horizontal padding) |

---

## 5. Component Guidelines

### 5.1 Buttons

Buttons should feel like carved wooden signs at a carnival — thick borders, tactile, slightly bouncy.

#### Primary Button (Play / Action)

```css
.primaryButton {
  font-family: var(--font-title);
  font-size: 1.4rem;
  color: var(--color-black);
  background: linear-gradient(180deg, var(--color-accent-glow), var(--color-accent));
  padding: var(--space-md) var(--space-3xl);
  border: 3px solid var(--color-sepia-dark);
  border-radius: var(--border-radius-md);       /* 8px */
  text-transform: uppercase;
  letter-spacing: 4px;
  box-shadow: var(--shadow-card), var(--shadow-glow);
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.primaryButton:hover {
  transform: translateY(-3px) scale(1.02);       /* Slight bounce up */
  box-shadow: var(--shadow-card-hover), 0 0 25px rgba(212, 168, 67, 0.5);
}

.primaryButton:active {
  transform: translateY(0) scale(0.98);          /* Press down */
}
```

**Rules:**
- Dark text on gold gradient background
- 3px thick solid border in dark sepia
- Bounce upward on hover (`translateY(-3px) scale(1.02)`)
- Gold glow intensifies on hover
- Press down on active (`scale(0.98)`)

#### Secondary Button (Retry / Back)

```css
.secondaryButton {
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--color-cream);
  background: var(--color-dark-grey);
  padding: var(--space-md) var(--space-2xl);
  border: 3px solid var(--color-sepia);          /* Decorative border */
  border-radius: var(--border-radius-md);
  text-transform: uppercase;
  letter-spacing: 3px;
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.secondaryButton:hover {
  background: var(--color-mid-grey);
  transform: translateY(-2px);
}
```

### 5.2 Cards (Containers)

Cards are the dark panels that hold grouped content — question cards, help cards, character panels.

#### Base Card Pattern

```css
.card {
  background: var(--color-dark);
  border: 3px solid var(--color-sepia);          /* Hand-drawn border feel */
  border-radius: var(--border-radius-md);        /* 8px */
  padding: var(--space-xl);                      /* 32px */
  box-shadow: var(--shadow-card);                /* 4px 4px 0px hard shadow */
  position: relative;
}
```

**Rules:**
- Always use `--color-dark` background, never `--color-black` (that's for the page)
- 3px decorative sepia border — this creates the "hand-drawn card" feeling
- Hard offset shadow (`4px 4px 0px`) — NOT soft blurred shadows. This is the vintage cartoon look.
- 8px border-radius — enough to feel rounded without being pill-shaped

### 5.3 Question Container

The question card has a special decorative element: a `?` symbol floating above the top-left corner, evoking a comic book speech panel.

```css
.questionCard {
  /* Inherits base card */
  animation: fadeIn 0.5s ease-out;
}

.questionCard::before {
  content: '?';
  position: absolute;
  top: -12px;
  left: var(--space-md);
  background: var(--color-black);               /* Matches page bg to "cut through" border */
  color: var(--color-sepia);
  font-family: var(--font-title);
  font-size: 1.4rem;
  padding: 0 var(--space-sm);
}
```

The question number indicator sits above the question text:

```css
.questionNumber {
  font-family: var(--font-ui);
  font-size: 0.8rem;
  color: var(--color-light-grey);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--space-sm);
}
/* Example: "PERGUNTA 7 DE 15" */
```

### 5.4 Answer Buttons

Answer options are horizontal bars with a circular letter label (A, B, C, D) on the left.

```css
.answerOption {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  background: var(--color-dark);
  border: 2px solid var(--color-cream);          /* Thin cream border */
  border-radius: var(--border-radius-md);
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-cream);
  cursor: pointer;
  box-shadow: var(--shadow-card);
  transition: background, border-color, box-shadow, transform — all var(--transition-fast);
}

.answerOption:hover {
  background: var(--color-dark-grey);
  border-color: var(--color-sepia);              /* Gold border on hover */
  box-shadow: var(--shadow-card-hover);
  transform: translateX(4px);                    /* Slide right — cartoonish */
}

.answerOption:active {
  transform: translateX(2px) scale(0.98);
}
```

The letter label (A, B, C, D):

```css
.answerLabel {
  width: 32px;
  height: 32px;
  border: 2px solid var(--color-sepia);
  border-radius: 50%;                           /* Circle */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-title);
  font-size: 1rem;
  color: var(--color-sepia);
  flex-shrink: 0;
}
```

### 5.5 Help System Cards

Help cards are small, vertical mini-cards with an icon and label. They represent one-time-use power-ups.

```css
.helpCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--color-dark);
  border: 2px solid var(--color-cream);
  border-radius: var(--border-radius-md);
  min-width: 100px;
  cursor: pointer;
  transition: background, border-color, transform — all var(--transition-fast);
}

.helpCard:hover:not(.used) {
  background: var(--color-dark-grey);
  border-color: var(--color-accent);             /* Gold border on hover */
  transform: translateY(-2px);                   /* Bounce up */
}

.helpCard.used {
  opacity: 0.35;
  pointer-events: none;
  filter: grayscale(1);                          /* Desaturated, "spent" look */
}

.helpIcon {
  font-size: 1.5rem;
}

.helpLabel {
  font-family: var(--font-ui);
  font-size: 0.7rem;
  color: var(--color-light-grey);
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

### 5.6 Score Indicators

The score is displayed using the UI font with gold color:

```css
.score {
  font-family: var(--font-ui);
  font-size: 1.2rem;
  color: var(--color-sepia);
  letter-spacing: 2px;
}
```

### 5.7 Character Panel

The character panel on the right side of the game screen:

```css
.characterPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: 3px solid var(--color-sepia);          /* Decorative border */
  border-radius: var(--border-radius-lg);        /* 16px */
  background: var(--color-dark);
  box-shadow: var(--shadow-card);
  width: 100%;
  max-width: 280px;
}

.characterImage {
  width: 200px;
  height: 200px;
  object-fit: contain;
  animation: wobble 3s ease-in-out infinite;     /* Subtle idle animation */
  filter: sepia(0.2) contrast(1.1);             /* Vintage film feel */
}

.characterName {
  font-family: var(--font-title);
  font-size: 1.1rem;
  color: var(--color-sepia);
  letter-spacing: 2px;
}
```

---

## 6. Game Icons & Symbols

Instead of money values (like "Who Wants to Be a Millionaire"), The Quiz of Fate uses symbolic feedback:

| Event | Symbol | Visual Treatment |
|---|---|---|
| **Correct answer** | ✦ `+1` | Gold color (`--color-accent`), brief scale-up animation, golden glow. Score counter increments. |
| **Wrong answer** | 💀 | Large skull emoji, danger red (`--color-danger`), wobble animation, screen shakes subtly. Triggers Game Over. |
| **Stop / Exchange** | 🔛 | Displayed on help cards. Sepia color, standard help card styling. |

### Icon Rendering Rules

1. **Correct (+1):** Display as a floating `+1` text near the score counter. Use `--font-ui` bold, `--color-accent`, with `scale(0) → scale(1.2) → scale(1)` animation over 400ms. Add `text-shadow: 0 0 15px rgba(212, 168, 67, 0.3)`.

2. **Wrong (💀):** Display the skull emoji at large size (`5rem`). Apply the `wobble` animation and a red drop-shadow: `drop-shadow(0 0 20px rgba(179, 64, 64, 0.3))`. This is the same treatment used on the Game Over screen.

3. **Stop/Exchange (🔛):** Appears as the icon within a help card. Standard help card icon sizing (`1.5rem`).

---

## 7. Character Usage Rules

All character images are stored in:

```
src/assets/characters/
├── 1.png    →  Start Screen character
├── 2.png    →  In-game rotation
├── 3.png    →  In-game rotation
├── 4.png    →  Game Over / Death screen character
├── 5.png    →  In-game rotation
└── 6.png    →  In-game rotation
```

### Character Assignment Rules

| Image | Screen | Behavior |
|---|---|---|
| **`1.png`** | **Start Screen** (`/`) | Static display. The character greets the player. Displayed prominently on the home page, centered or near the title. Should feel inviting but mischievous. |
| **`4.png`** | **Game Over** (`/gameover`) | Static display. The character's "death" or "defeat" pose. Displayed alongside the 💀 and "Game Over" title. Should feel dramatic and final. |
| **`2.png`, `3.png`, `5.png`, `6.png`** | **Game Screen** (`/game`) | **Random rotation.** During gameplay, the character panel should randomly cycle through these images to create the illusion of animation and reactivity. |

### In-Game Character Rotation Logic

During the active quiz (Game Screen), the character should appear **animated and reactive** by randomly swapping between images `2.png`, `3.png`, `5.png`, and `6.png`.

**Intended UX Behavior:**

1. When a new question loads, randomly select one of the four in-game images (`2`, `3`, `5`, `6`) to display.
2. Optionally, set up a timed rotation (e.g., every 2–4 seconds) that swaps to a different random image from the pool, creating a "fidgety" idle animation.
3. The character should feel alive — shifting, reacting, never completely still.
4. Apply the `wobble` CSS animation to the character image for additional idle movement.
5. Apply `filter: sepia(0.2) contrast(1.1)` to all character images for visual consistency with the vintage cartoon aesthetic.

**Implementation Approach (React):**

```tsx
// Character image pool for in-game rotation
const IN_GAME_CHARACTERS = [
  '/src/assets/characters/2.png',
  '/src/assets/characters/3.png',
  '/src/assets/characters/5.png',
  '/src/assets/characters/6.png',
];

// Select random image on question change or on a timer interval
const randomIndex = Math.floor(Math.random() * IN_GAME_CHARACTERS.length);
const currentCharacter = IN_GAME_CHARACTERS[randomIndex];
```

**Why not use `4.png` in-game?**
Image 4 is reserved exclusively for the death/game-over screen. Showing it during gameplay would spoil its dramatic impact.

**Why not use `1.png` in-game?**
Image 1 is the "greeting" pose used on the start screen. It represents the character before the game begins and should not appear once the challenge has started.

---

## 8. Game Feedback States

### 8.1 Hover States

All interactive elements should have visible hover feedback:

| Element | Hover Effect |
|---|---|
| **Primary button** | `translateY(-3px) scale(1.02)` + intensified gold glow |
| **Secondary button** | `translateY(-2px)` + lighter background |
| **Answer option** | `translateX(4px)` + gold border + elevated shadow |
| **Help card** | `translateY(-2px)` + gold border |

**Rules:**
- Transition duration: `var(--transition-fast)` (150ms)
- All hover effects use `ease-in-out` easing
- Hover effects are subtle but noticeable — the cartoonish "bounce" comes from the slight translate, not from extreme scale changes

### 8.2 Correct Answer Feedback

When the player selects the correct answer:

1. **Answer button** transitions to a success state:
   - Background shifts to a muted green tint: `rgba(90, 154, 90, 0.15)`
   - Border color changes to `--color-success`
   - Brief pulse animation: `scale(1) → scale(1.03) → scale(1)` over 300ms

2. **Score counter** updates:
   - `+1` floats up near the score with a pop-in animation
   - Color: `--color-accent` (gold)
   - Score number increments with a brief color flash

3. **Character** swaps to a new random in-game image (celebratory energy)

4. After ~1 second delay, transition to the next question with `fadeIn` animation

### 8.3 Wrong Answer Feedback

When the player selects the wrong answer:

1. **Answer button** transitions to a danger state:
   - Background shifts to a muted red tint: `rgba(179, 64, 64, 0.15)`
   - Border color changes to `--color-danger`
   - Brief shake animation: `translateX(-4px → 4px → -2px → 2px → 0)` over 300ms

2. **Screen** may apply a very subtle red vignette flash (optional, for dramatic effect)

3. **💀 symbol** appears briefly at large scale

4. After ~1.5 second delay, navigate to the **Game Over** screen

### 8.4 Score Update Animation

When the score increments:

```css
@keyframes scorePopIn {
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

/* "+1" floating indicator */
@keyframes floatUp {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-30px); opacity: 0; }
}
```

### 8.5 Start Screen

The start screen (`/`) is the game's title card. Visual behavior:

1. **Title** ("The Quiz of Fate") uses `--font-title` at `4rem`, uppercase, with gold text-shadow and the subtle `flicker` animation (emulating an old film projector)
2. **Subtitle** ("Don't Deal With The Devil") in `--font-ui`, italic, uppercase, sepia colored
3. **Decorative divider** — a horizontal gold gradient line (`transparent → --color-sepia → transparent`)
4. **Description text** — brief, in `--font-body`, light grey
5. **Play button** — the primary gold gradient button (see Section 5.1)
6. **Ornamental symbols** (`✦ ✦ ✦`) — subtle sepia decorative element below the button
7. **Character Image 1** should be displayed on this screen (see Section 7)
8. **Film grain overlay** active (see Section 9.3)
9. **Vignette effect** active — radial gradient darkening the edges

### 8.6 Game Over Screen

The game over screen (`/gameover`) is theatrical and dramatic:

1. **💀 skull emoji** — large (`5rem`), with `wobble` animation and red drop-shadow
2. **Title** ("Game Over") — `--font-title` at `3rem`, `--color-danger`, uppercase, with hard dark shadow
3. **Message text** — somber description in `--font-body`, light grey, max-width 400px
4. **Score display** — in `--font-ui`, sepia color, showing final score
5. **Retry button** — secondary button style (see Section 5.1)
6. **Character Image 4** should be displayed on this screen (see Section 7)
7. Background stays `--color-black` with film grain and vignette active

---

## 9. Implementation Notes

### 9.1 CSS Custom Properties (Tokens)

**All visual values must be defined as CSS custom properties in `variables.css` and used via `var(--token)` throughout the codebase.**

Never use hardcoded hex values, pixel sizes, or font names in component CSS files. Always reference a token.

#### Complete Token Reference

```css
:root {
  /* ── Color Palette (Dark Vintage Cartoon) ── */
  --color-black: #0B0B0B;
  --color-dark: #1A1A1A;
  --color-dark-grey: #2A2A2A;
  --color-mid-grey: #4A4A4A;
  --color-light-grey: #B8B8B8;
  --color-off-white: #E8DCC8;
  --color-cream: #F5F1E8;
  --color-white: #FAF3E3;
  --color-sepia: #C4A96A;
  --color-sepia-dark: #9A7B3C;
  --color-accent: #D4AF37;
  --color-accent-glow: #F0CC6B;
  --color-danger: #B34040;
  --color-success: #5A9A5A;

  /* ── Typography ── */
  --font-title: 'Creepster', cursive;
  --font-body: 'Special Elite', cursive;
  --font-ui: 'Courier Prime', monospace;

  /* ── Borders (hand-drawn style) ── */
  --border-thin: 2px solid var(--color-cream);
  --border-thick: 4px solid var(--color-cream);
  --border-decorative: 3px solid var(--color-sepia);
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;

  /* ── Shadows (vintage cartoon — hard offsets, not soft blurs) ── */
  --shadow-card: 4px 4px 0px var(--color-dark-grey);
  --shadow-card-hover: 6px 6px 0px var(--color-mid-grey);
  --shadow-glow: 0 0 15px rgba(212, 168, 67, 0.3);
  --shadow-inset: inset 0 2px 8px rgba(0, 0, 0, 0.4);

  /* ── Spacing ── */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* ── Transitions ── */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;

  /* ── Film Grain Overlay ── */
  --grain-opacity: 0.04;
}
```

### 9.2 Borders & Geometry

The project avoids clean, modern border styles. Borders should feel **thick and hand-drawn**, like ink outlines on a cartoon cel.

| Token | Value | Use |
|---|---|---|
| `--border-thin` | `2px solid var(--color-cream)` | Answer options, help cards, standard interactive elements |
| `--border-thick` | `4px solid var(--color-cream)` | Emphasized containers, modals |
| `--border-decorative` | `3px solid var(--color-sepia)` | Question cards, character panels, ornamental containers |
| `--border-radius-sm` | `4px` | Small elements, badges |
| `--border-radius-md` | `8px` | Cards, buttons, most components |
| `--border-radius-lg` | `16px` | Character panel, featured containers |

**Rules:**
- Never use `border-radius: 50%` on anything except the answer letter labels (A, B, C, D circles)
- Never use `rounded-full` or pill-shaped buttons — this is a carnival, not an app store
- Hard offset shadows (`4px 4px 0px`) reinforce the vintage cartoon look — never use soft, modern drop shadows as the default

### 9.3 Shadows

Shadows in this project are **hard offset shadows**, not soft modern blurs. This creates the "ink on paper" feel of vintage cartoons.

| Token | Value | Use |
|---|---|---|
| `--shadow-card` | `4px 4px 0px var(--color-dark-grey)` | Cards and panels at rest |
| `--shadow-card-hover` | `6px 6px 0px var(--color-mid-grey)` | Cards on hover (shadow extends = element "lifts") |
| `--shadow-glow` | `0 0 15px rgba(212, 168, 67, 0.3)` | Gold glow around primary buttons, score highlights |
| `--shadow-inset` | `inset 0 2px 8px rgba(0,0,0,0.4)` | Inset shadow for inputs or pressed elements |

### 9.4 Film Grain & Vignette Effects

Two global post-processing effects are applied to the entire page to simulate a vintage film projector:

#### Film Grain Overlay (`body::after`)
- A noise SVG texture applied as `background-image` on a fixed pseudo-element
- Covers the entire viewport, `pointer-events: none`, `z-index: 9999`
- Opacity: `var(--grain-opacity)` (4%)
- Creates the subtle "film grain" texture of an old projector

#### Vignette Effect (`body::before`)
- A `radial-gradient` from transparent center to dark edges
- Fixed, full viewport, `pointer-events: none`, `z-index: 9998`
- Gradient: `transparent 50% → rgba(0,0,0,0.6) 100%`
- Darkens the corners and edges of the screen, focusing attention on the center

**These effects are ALWAYS active.** They are a core part of the visual identity.

### 9.5 Animations

The project uses a set of reusable CSS animations defined in `global.css`:

| Animation | Keyframes | Use |
|---|---|---|
| `flicker` | Subtle opacity variations (1 → 0.97 → 0.99 → 1) | Title text — old projector flicker |
| `fadeIn` | `translateY(10px) opacity(0) → translateY(0) opacity(1)` | Question cards, screen transitions |
| `pulse` | `scale(1) → scale(1.03) → scale(1)` | Correct answer feedback, interactive highlights |
| `wobble` | `rotate(0deg) → rotate(-1deg) → rotate(1deg) → rotate(0deg)` | Character image idle, skull on game over |

**Rules:**
- Animations are subtle. The `wobble` is only 1 degree. The `flicker` is nearly imperceptible. The `pulse` is only 3% scale.
- This subtlety is intentional — it creates a "something is alive" feeling without being distracting
- Never use bounce animations larger than 5% scale
- Preferred easing: `ease-in-out` for loops, `ease-out` for entrances

### 9.6 Hover Effects Summary

| Component | Hover Effect | Transition |
|---|---|---|
| Primary Button | `translateY(-3px) scale(1.02)` + enhanced glow | `var(--transition-fast)` |
| Secondary Button | `translateY(-2px)` + lighter bg | `var(--transition-fast)` |
| Answer Option | `translateX(4px)` + sepia border + elevated shadow | `var(--transition-fast)` |
| Help Card | `translateY(-2px)` + gold border | `var(--transition-fast)` |
| Links | `color: --color-accent → --color-accent-glow` | `var(--transition-fast)` |

### 9.7 Scrollbar Styling

Custom scrollbar to match the dark theme:

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--color-dark); }
::-webkit-scrollbar-thumb {
  background: var(--color-mid-grey);
  border-radius: var(--border-radius-sm);
}
::-webkit-scrollbar-thumb:hover { background: var(--color-sepia); }
```

### 9.8 Text Selection

```css
::selection {
  background: var(--color-sepia-dark);
  color: var(--color-white);
}
```

---

## 10. File Structure Reference

```
src/
├── assets/
│   └── characters/           # Character PNG images (see Section 7)
│       ├── 1.png             # Start screen
│       ├── 2.png             # In-game rotation
│       ├── 3.png             # In-game rotation
│       ├── 4.png             # Game Over screen
│       ├── 5.png             # In-game rotation
│       └── 6.png             # In-game rotation
├── components/
│   ├── game/
│   │   ├── AnswerOption.*    # Individual answer button (A, B, C, D)
│   │   ├── CharacterPanel.*  # Right-side character display
│   │   ├── HelpCard.*        # Single help power-up card
│   │   ├── HelpSystem.*      # Container for all help cards
│   │   ├── QuestionCard.*    # Question text display card
│   │   └── QuizBoard.*      # Main quiz layout (question + answers + helps)
│   └── layout/
│       ├── GameHeader.*      # Top header with title and subtitle
│       └── GameLayout.*      # Bipartite left/right layout container
├── context/
│   └── GameContext.tsx        # Game state management (score, questions, helps)
├── pages/
│   ├── Home.*                # Start screen (Route: /)
│   ├── Game.*                # Active game screen (Route: /game)
│   └── GameOver.*            # Death/failure screen (Route: /gameover)
├── styles/
│   ├── variables.css          # ALL CSS custom properties (tokens) — SOURCE OF TRUTH
│   └── global.css             # Reset, base styles, animations, global effects
├── types/
│   ├── GameState.ts           # Game state type definition
│   └── Question.ts            # Question type definition
├── helpers/
│   └── selectRandomQuestions.ts
├── data/
│   └── questions.json         # Question bank
├── App.tsx                    # Router setup
└── main.tsx                   # Entry point
```

---

## 11. Golden Rules

When creating or modifying any component, screen, or style in this project, follow these rules **without exception:**

1. **🎨 Tokens only.** All CSS values must use `var(--token)`. Never hardcode colors, fonts, sizes, or shadows. If a token doesn't exist for what you need, add it to `variables.css` first.

2. **🖤 Black is the stage.** The page background is always `--color-black` (#0B0B0B). Cards use `--color-dark`. No white backgrounds, no light themes, ever.

3. **✨ Gold is the star.** `--color-accent` (#D4AF37) is the ONLY vibrant accent color. It highlights, it glows, it draws attention. No other bright color competes with it (except functional danger/success).

4. **📜 Vintage fonts only.** `Creepster` for headings, `Special Elite` for body, `Courier Prime` for UI. No sans-serif. No modern system fonts.

5. **🖌️ Thick borders, hard shadows.** Borders are 2–4px. Shadows are hard offsets (`4px 4px 0px`), not blurred. This is a vintage cartoon, not a modern dashboard.

6. **🎭 Character rules are law.** Image 1 = Start Screen. Image 4 = Game Over. Images 2, 3, 5, 6 = random in-game rotation. No exceptions.

7. **🎬 Effects are always on.** Film grain and vignette are permanent. They define the visual identity.

8. **🃏 Cartoonish interactions.** Buttons bounce, answers slide, elements wobble. All animations are subtle (< 5% scale, 1° rotation). Playful, not chaotic.

9. **💀 Feedback is dramatic.** Wrong = red flash + skull + shake. Correct = gold glow + pulse + score pop. The game should feel like the stakes are real.

10. **📖 This document wins.** If there's a conflict between code and this design system, **this document is correct.** Update the code to match.

---

## 12. Design Checklist

Before merging any UI change, verify:

- [ ] All colors reference CSS custom properties (no hardcoded hex)
- [ ] Fonts use `--font-title`, `--font-body`, or `--font-ui` exclusively
- [ ] Buttons have hover bounce + active press effects
- [ ] Cards use `--border-decorative` or `--border-thin`
- [ ] Shadows are hard offsets (not blurred)
- [ ] Film grain overlay is visible
- [ ] Vignette darkens the edges
- [ ] Character images follow the assignment rules (Section 7)
- [ ] The screen feels "dark vintage cartoon" — not modern, not corporate
- [ ] Gold (`--color-accent`) is the only vibrant color present
- [ ] Interactive elements have visible hover state changes
- [ ] Animations are subtle and purposeful
