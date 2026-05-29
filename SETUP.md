# Setup guide — first time running CarCheck on your computer

Bro, idi step-by-step guide nuvvu first time React project ni computer lo run cheyataniki. Anni steps follow chesthe 15 minutes lo your app running on localhost!

---

## Step 1: Install Node.js (one time)

If you don't have Node.js installed:

1. Go to https://nodejs.org
2. Download the **LTS version** (recommended one — green button)
3. Run the installer · keep clicking Next
4. **Restart your terminal/CMD** after install

**Verify it installed:**
Open terminal/CMD and type:
```bash
node --version
```
Should show something like `v20.10.0` or higher. If yes → Node installed ✓

---

## Step 2: Install Git (one time)

If you don't have Git:

1. Go to https://git-scm.com/downloads
2. Download for your OS
3. Run installer · click Next on everything
4. **Restart terminal again**

**Verify:**
```bash
git --version
```
Should show `git version 2.x.x`

---

## Step 3: Get the project on your computer

You have 2 options:

### Option A: Clone from GitHub (recommended)

```bash
# Open terminal · navigate to where you want the folder
cd Desktop

# Clone the repo
git clone https://github.com/MesaRaj/CarCheck.git

# Go into the folder
cd CarCheck
```

### Option B: Just unzip this folder

If you got this from a zip file, just unzip it somewhere on your computer. Then open terminal in that folder.

**On Windows:** Right-click the folder → "Open in Terminal"
**On Mac:** Right-click → Services → "New Terminal at Folder"

---

## Step 4: Install dependencies (one time per project)

In your terminal, inside the CarCheck folder:

```bash
npm install
```

This downloads React, Vite, Tailwind, etc. Will take 1-3 minutes. You'll see a `node_modules` folder appear (huge folder — that's normal, don't touch it).

If you see warnings — ignore them. Only worry if you see "ERROR" in red.

---

## Step 5: Run the dev server!

```bash
npm run dev
```

You'll see something like:
```
  VITE v5.4.11  ready in 432 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open http://localhost:5173 in your browser.**

You should see the CarCheck splash screen → 3 seconds → role select screen → click through everything.

✓ Your app is running locally!

---

## Step 6: Make changes & see them live

Try this — open `src/data/mechanics.js` in VS Code. Change `"Ravi Teja Konda"` to your name. Save the file.

The browser will auto-refresh and show your name! That's **hot module reload** — saves you tons of time.

---

## Step 7: Push changes to GitHub

After you've made changes you want to keep:

```bash
git add .
git commit -m "describe your change here"
git push
```

First time you push, GitHub will ask for your username + password (or token). Follow the prompts.

---

## Step 8: Deploy to Vercel (free public URL)

1. Go to https://vercel.com/signup
2. Click **Continue with GitHub** (uses your existing GitHub login)
3. Authorize Vercel
4. Click **Add New** → **Project**
5. Find `MesaRaj/CarCheck` → click **Import**
6. Don't change any settings → click **Deploy**
7. Wait 60 seconds...
8. **Done!** You get a URL like `carcheck-mesaraj.vercel.app`

Share that link anywhere. It's your live app on the internet, free forever, auto-updates whenever you `git push`.

---

## Common errors and fixes

### "npm: command not found"
Node.js not installed properly. Go back to Step 1. Make sure to restart terminal.

### "permission denied" on Mac
Try: `sudo npm install` (it will ask for your Mac password)

### "Cannot find module" errors
Run `npm install` again. If still broken, delete `node_modules` folder and run `npm install` fresh.

### Port 5173 already in use
Something else is using that port. Either close it, or run `npm run dev -- --port 3000` to use a different port.

### Browser shows blank page
Open browser DevTools (F12). Look at Console tab. The error message there will tell you what's wrong. Copy that error and ask me — I'll fix it.

### Changes not showing up
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Or stop the server (Ctrl+C in terminal) and run `npm run dev` again

---

## Daily workflow once setup is done

Whenever you want to work on the app:

```bash
# 1. Open terminal, navigate to project
cd Desktop/CarCheck

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173

# 4. Edit files in VS Code

# 5. When done for the day, in terminal:
git add .
git commit -m "what I did today"
git push

# 6. Stop dev server with Ctrl+C
```

That's it! Vercel auto-deploys whenever you push, so your live URL stays up to date.

---

## What to learn next

Once you're comfortable running the project:

1. **Read the code** — start with `src/App.jsx`, then `src/screens/Home.jsx`
2. **Make small changes** — change colors in `tailwind.config.js`, change text in `src/data/*.js`
3. **Learn React basics** — https://react.dev/learn (free official tutorial)
4. **Learn Tailwind** — https://tailwindcss.com/docs (utility class reference)
5. **Build new features** — try adding a screen that wasn't in the demo

---

Edaina question vasthe — paste the error message or describe what's not working. We'll fix it together.

— Mesa Raj Kumar's CarCheck setup guide
