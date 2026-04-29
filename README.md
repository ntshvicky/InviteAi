# InviteAI – Beautiful Invitation Generator

A fully offline, browser-based invitation card generator with AI-powered customization, cultural themes, and a photographer marketplace. No backend required — pure HTML, CSS, and JavaScript.

---

## Features

### Invitation Generator
- **Multi-cultural wedding templates** — Hindu, Muslim, Christian, Sikh, South Indian, Western
- **Celebration categories** — Birthday, Anniversary, New Year, Housewarming, Baby Shower
- **Rich cultural visuals** — Inline SVG character illustrations (bridal couple, birthday person, etc.) + Ganesha / religious motifs per theme
- **CSS-animated backgrounds** — Mandala, arabesque, celestial, peacock, floral, saffron, confetti, galaxy, romance, pastel, fireworks patterns
- **Live preview editor** — Edit names, dates, venue, events, colors, fonts, background music
- **Multi-page animated invitations** — Intro screen → Names → Event schedule, all with custom animations
- **Background music** — 6 built-in music presets (Indian Traditional, Romantic Piano, Happy Celebration, Festive Bells, Gentle Serene, Epic Cinematic)
- **Download & Share** — Copy shareable link, download as HTML file, fullscreen preview
- **Template search** — Quick-search across all templates by name or style

### Photographer Marketplace
- **Photographer directory** — Browse verified photographers with portfolio previews
- **Advanced filters** — Search by name/city, filter by specialty (Wedding, Pre-Wedding, etc.) and price range
- **Photographer profiles** — Full profile with bio, portfolio gallery, service packages, social links
- **Contact photographers** — In-app contact form that composes a pre-filled email
- **Photographer registration** — Self-onboarding form for photographers to list themselves
- **Persistent storage** — All registrations and inquiries stored in browser localStorage

---

## Project Structure

```
inviteai/
├── invite-platform/
│   ├── index.html          # App shell, sidebar navigation
│   ├── style.css           # Full design system (dark glassmorphism UI)
│   ├── app.js              # Core app engine — templates, editor, preview
│   ├── characters.js       # Inline SVG cultural character illustrations
│   └── photographers.js    # Photographer directory & registration module
├── vercel.json             # Vercel static deployment config
├── .gitignore
└── README.md
```

---

## Getting Started

### Run Locally

```bash
cd invite-platform
python3 -m http.server 3001
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

Or with Node.js:
```bash
npx serve invite-platform
```

### Deploy to Vercel

**Option 1 — Import from GitHub (recommended):**
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → set **Root Directory** to `invite-platform`
4. Click Deploy

**Option 2 — Vercel CLI:**
```bash
npm i -g vercel
vercel --prod
```

The `vercel.json` at the repo root handles routing automatically.

---

## Templates Overview

| Category | Styles Available |
|----------|-----------------|
| Hindu Wedding | Mandala, Peacock, Floral, Rajasthani Royal, Saffron Sunrise, Golden Temple, South Indian |
| Muslim Wedding | Arabesque, Celestial Night, Royal Garden |
| Christian Wedding | Garden Chapel, Cathedral Grace |
| Sikh Wedding | Golden Temple, Anand Karaj |
| Western Wedding | Modern Minimal, Luxury Black |
| Birthday | Confetti Blast, Galaxy Dream, Pastel Dream |
| Anniversary | Romance Red, Rose Gold |
| New Year | Fireworks Night, Champagne Gold |
| Housewarming | Botanical Fresh, Warm Home |
| Baby Shower | Soft Pastel, Stork Delivery |

---

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+) — zero dependencies, zero build step
- **Fonts**: Google Fonts (Inter, Playfair Display, Great Vibes, Cormorant Garamond)
- **Icons**: Font Awesome 6
- **Storage**: Browser `localStorage` for invites, photographer registrations, inquiries
- **Deployment**: Vercel static hosting

---

## Contributing

1. Fork the repo
2. Make changes inside `invite-platform/`
3. Test with `python3 -m http.server 3001`
4. Submit a PR

---

## License

MIT License — free to use, modify, and distribute.
