

A faithful, desktop-first recreation of the **CampusCode** portal for **Round 1 of ReBuild '26**, engineered strictly according to the brand guidelines, typography scale, and layout specifications.

---


- **Live Demo Link:** `[Paste your Vercel or Netlify link here]`
- **Repository:** `[Paste your GitHub repo link here]`
- **Event:** CampusCode ReBuild '26 — Round 1: Recreate
- **Participant / Tracking Name:** `TEAM CAMPUSCODE`

---



| Page | Route | Description & Features | Status |
| :--- | :--- | :--- | :--- |
| **Landing Page** | [`index.html`](index.html) | Faithful recreation of hero header, ticker banner, numbered highlight cards (`01`, `02`, `03`), brutalist typography statement (`BUILD • COMPETE • SHIP`), platform introduction, AI feature cards, schedule table, and prize breakdown. | **100% Complete** |
| **Login Page** | [`login.html`](login.html) | Split hero layout (`ENTER THE ARENA`), clean credential card, show/hide password toggle, interactive captcha box, simulated auth with loading indicator, and dynamic user session routing. | **100% Complete** |
| **Register Page** | [`register.html`](register.html) | Split layout (`JOIN THE ARENA`), student profile creation, role badge (`STUDENT`), 18+ age verification check, interactive email OTP simulation (`948201`), and automatic dashboard onboarding. | **100% Complete** |
| **Student Dashboard** | [`dashboard.html`](dashboard.html) | Desktop-first sidebar layout, live ticking countdown timer to 10:00 PM IST, interactive tab switcher for **My Events** & **Events (Explore)**, searchable hackathon catalog, and **Digital ID Card with Verifiable QR Modal**. | **100% Complete** |

---



Every design token from the official ReBuild '26 rulebook was implemented down to the exact hex code:

- **Background Canvas:** `#f7f7f4` (Light warm gray)
- **Cards & Surfaces:** `#ffffff`
- **Subtle Borders:** `#deded8` (1px crisp borders)
- **Primary Color:** `#7665ff` (CampusCode Digital Purple)
- **Accent Color:** `#a8e62e` / `#82b91a` (CampusCode Electric Lime)
- **Base Typography & Ink:** `#111111` (Deep black)
- **Primary Font:** `Inter` (Google Fonts: 400, 600, 800, 900)
- **Monospace Font:** `DM Mono` (Google Fonts: 400, 500 for tags, labels, numbers)
- **Logo:** Faithful three-slash geometric mark in `#111111`, `#7665ff`, `#a8e62e`.

---


As permitted by Section 06/08 of the rulebook (*"Small additions allowed: animations and colours, but they must blend into the UI - do not redesign"*):

1. **Live Round 1 Deadline Countdown:** An accurate real-time clock ticking down seconds until Friday 10:00 PM IST directly in the ReBuild '26 event card.
2. **Interactive Tab Switching:** Seamless toggle between **"My Events"** (active registrations & certificates) and **"Events"** (full hackathon catalog with search).
3. **Digital Student ID Modal:** An interactive pop-up presenting the participant's verified ID, photo card, and styled QR code.
4. **Client-side State & Dynamic Welcome:** Dynamic greeting reading the user's name across Login, Register, and Dashboard via `localStorage`.
5. **Interactive Feedback:** Non-intrusive toast notifications when copying tracking IDs or submitting forms.

---


This project is built with zero complex build dependencies so you can run it anywhere instantly.


Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

```bash
# Using Node / npx
npx serve .

# Or using Python 3
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

### Deploy to Vercel:
1. Push this folder to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete faithful recreation of CampusCode portal"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](campuscode-rebuild-1.vercel.app), select the repository, and click **Deploy**.
3. Copy your live Vercel URL and submit it on the CampusCode portal.
