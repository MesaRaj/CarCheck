# CarCheck

**Inspect before you invest.** India's independent pre-purchase used-car inspection service.

> **Founder:** Mesa Raj Kumar
> **Stack:** React 18 + Vite + Tailwind CSS + Lucide Icons
> **Status:** V1 Demo · 24 screens · Production-ready prototype

---

## What is CarCheck?

CarCheck is an **independent third-party inspection service** for India's ₹4 lakh crore used-car market. We do not sell cars. We just check them — honestly.

**The problem:** Around 80% of used-car buyers in India get cheated on price or hidden defects. Average loss: ₹40,000 – ₹80,000 per deal. Cars24, Spinny, and OLX all sell cars, so they cannot give an unbiased opinion.

**Our solution:** Customer finds a used car anywhere (OLX, friend, dealer). Books CarCheck mechanic to inspect at seller's location. Gets a detailed report — scratches → engine → ownership → fines → fair price. Decides whether to buy. We never touch the actual car transaction.

---

## Get it running locally

You need **Node.js 18+** installed. Get it from https://nodejs.org

```bash
# 1. Clone this repo
git clone https://github.com/MesaRaj/CarCheck.git
cd CarCheck

# 2. Install dependencies (one time)
npm install

# 3. Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser. That is your app running.

---

## Deploy to a public URL (free)

### Option 1 — Vercel (recommended, ~3 minutes)

1. Push your code to GitHub (already done if you are reading this here)
2. Go to https://vercel.com/signup, sign in with GitHub
3. Click **Add New** → **Project**
4. Import the `MesaRaj/CarCheck` repo
5. Vercel auto-detects Vite — click **Deploy**
6. Wait 60 seconds → you get a URL like `carcheck-mesaraj.vercel.app`

**Bonus:** Every time you `git push`, Vercel auto-redeploys in 30 seconds.

### Option 2 — Netlify

1. Sign up at https://app.netlify.com using GitHub
2. **Add new site** → **Import existing project** → pick this repo
3. Build settings auto-detect: `npm run build` → `dist`
4. Click **Deploy**

### Option 3 — GitHub Pages

```bash
npm run build
# Then in your repo Settings → Pages → set source to `dist` folder
```

---

## Project structure

```
CarCheck/
├── package.json              ← dependencies + scripts
├── vite.config.js            ← Vite build config
├── tailwind.config.js        ← Tailwind theme (colors, fonts)
├── postcss.config.js         ← Tailwind compiler
├── vercel.json               ← Vercel deployment hints
├── index.html                ← HTML entry point (loads fonts)
├── LICENSE                   ← MIT License under Mesa Raj Kumar
├── README.md                 ← This file
│
└── src/
    ├── main.jsx              ← React entry
    ├── App.jsx               ← Main router (decides which screen to show)
    ├── index.css             ← Tailwind + theme + animations
    │
    ├── data/                 ← All hardcoded demo data
    │   ├── index.js              barrel: import everything from "./data"
    │   ├── mechanics.js          mechanic profiles
    │   ├── stores.js             drive-in stores + locations
    │   ├── notifications.js      sample notifications
    │   ├── report.js             inspection report + past reports
    │   ├── vinReport.js          free VIN history report
    │   └── pitch.js              investor pitch content
    │
    ├── components/           ← Reusable UI pieces
    │   ├── index.js              barrel
    │   ├── Device.jsx            phone frame
    │   ├── StatusBar.jsx         9:41 status bar
    │   ├── BottomNav.jsx         tab bar (Home/Reports/Stores/Profile)
    │   ├── BackButton.jsx        round back button
    │   ├── Toast.jsx             transient notifications
    │   ├── CTA.jsx               primary button
    │   ├── Field.jsx             labelled input
    │   ├── OTPInput.jsx          6-digit OTP boxes with auto-advance
    │   └── Chip.jsx              pill-shaped filter chip
    │
    ├── screens/              ← One file per screen (24 total)
    │   ├── index.js              barrel
    │   ├── Splash.jsx
    │   ├── UserType.jsx
    │   ├── Login.jsx
    │   ├── Forgot.jsx
    │   ├── Signup.jsx            3-step with email + phone OTP
    │   ├── Home.jsx              main dashboard
    │   ├── Location.jsx          GPS picker
    │   ├── Notifications.jsx
    │   ├── Account.jsx           user profile
    │   ├── VinScan.jsx           camera scanner UI
    │   ├── VinReport.jsx         free history report
    │   ├── SelectMechanic.jsx
    │   ├── Confirm.jsx           date/slot/payment
    │   ├── Tracking.jsx          live map with mechanic moving
    │   ├── Report.jsx            full 8-section inspection report
    │   ├── Stores.jsx            drive-in stores list
    │   ├── StoreBook.jsx         store slot booking
    │   ├── Trust.jsx             trust score breakdown
    │   ├── Escrow.jsx            escrow payment service
    │   ├── Warranty.jsx          30-day money-back
    │   ├── Referral.jsx          refer and earn
    │   ├── History.jsx           past inspection reports
    │   ├── MechDash.jsx          mechanic dashboard
    │   └── Pitch.jsx             investor pitch summary
    │
    └── utils/                ← Custom hooks + helpers
        ├── index.js              barrel
        ├── useTimer.js           OTP countdown hook
        ├── useToast.js           toast notification hook
        └── theme.js              color tokens + scoreColor helper
```

---

## What works in this demo

| Feature | Status |
|---|---|
| Splash → User select → Signup with dual OTP (email + phone) | ✅ Fully working |
| OTP auto-read simulation (3-second auto-fill) | ✅ Working |
| OTP validation with green tick / red shake | ✅ Working |
| 30-second timer with resend | ✅ Working |
| Home screen with all services | ✅ Working |
| Location picker (GPS sim + manual) | ✅ Working |
| Pick mechanic (auto-assign or manual) | ✅ Working |
| Live tracking with mechanic moving on map | ✅ Working |
| Full inspection report (8 sections, key findings, fair price) | ✅ Working |
| Drive-in store finder + slot booking | ✅ Working |
| Trust score, escrow, warranty, referral | ✅ Working |
| Reports history, mechanic dashboard, investor pitch | ✅ Working |

---

## What to edit for what

| Want to change... | Edit this file |
|---|---|
| Mechanic list | `src/data/mechanics.js` |
| Drive-in stores | `src/data/stores.js` |
| Inspection report content | `src/data/report.js` |
| Notifications | `src/data/notifications.js` |
| Investor pitch text | `src/data/pitch.js` |
| Brand colors | `tailwind.config.js` + `src/index.css` |
| Splash text | `src/screens/Splash.jsx` |
| Home layout | `src/screens/Home.jsx` |

---

## Tech choices explained

- **React 18** — UI library
- **Vite 5** — dev server (fast HMR) + production bundler (tiny output)
- **Tailwind CSS 3** — utility-first styling with custom theme tokens
- **Lucide React** — clean, consistent icon set
- **Custom fonts** — Bricolage Grotesque (display), DM Sans (body), JetBrains Mono (data)

No state management library (Redux, Zustand) — `useState` is enough for this demo.
No router library (React Router) — single `screen` state variable controls navigation.

---

## What is next (V2 backend)

To turn this into a real working app:

- **Backend:** Node.js + Express + PostgreSQL
- **OTP:** MSG91 or Twilio integration
- **Payments:** Razorpay
- **Maps:** Google Maps API or Mapbox
- **VIN data:** VAHAN portal + NCRB integration
- **Mobile apps:** React Native (iOS + Android)
- **Push notifications:** Firebase Cloud Messaging

---

## License

MIT License · Copyright (c) 2026 Mesa Raj Kumar

For commercial licensing, partnership, or investor inquiries: open an issue on this repo.

---

## Founder

**Mesa Raj Kumar**
Building the trust layer for India's used-car market.

Reach out: open a GitHub issue, or contact via the email in repo settings.
