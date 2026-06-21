# Portfolio Decision Copilot - Dezerv PM MVP

A lightweight, deployable prototype that shows how Dezerv could explain active portfolio actions to clients and advisors at scale.

## The product problem

Active wealth management builds trust only when clients understand *why* portfolio actions are taken.

When Dezerv rebalances, trims exposure, raises liquidity, or changes strategy, an HNI client may ask:

- What changed in my portfolio?
- Why was this action taken now?
- Does this reduce my returns?
- How is my portfolio different from another investor's?

Today, this explanation can become manual advisor effort. This copilot turns an investment decision into a clear client narrative, advisor talking points, objection handling, risk flags, and a decision timeline.

## MVP demo

The prototype includes:

- Client briefing view
- Advisor console
- Risk flags
- Decision timeline
- Narrative tone regeneration
- Copyable founder note

## How to run locally

Open `index.html` in any browser. No backend, installation, or API key required.

## How to deploy on GitHub Pages

1. Create a new public GitHub repository, for example: `dezerv-portfolio-copilot`.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. GitHub will give you a public link like:
   `https://YOUR_USERNAME.github.io/dezerv-portfolio-copilot/`

## How to deploy with command line

```bash
git init
git add .
git commit -m "Add Dezerv portfolio decision copilot MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dezerv-portfolio-copilot.git
git push -u origin main
```

Then enable GitHub Pages from repository settings.

## Suggested message to Vaibhav

Hi Vaibhav, I applied for the PM role at Dezerv and wanted to show how I think about the product.

I noticed that active wealth management creates an explainability challenge: clients need to understand why portfolio actions are taken, and advisors need to communicate those decisions consistently.

So I built a quick prototype called Portfolio Decision Copilot. It turns portfolio actions into client-ready narratives, advisor talking points, risk flags, and a decision timeline.

Would love to share it and get your feedback: [insert link]

## Next version

- Add input form for investment committee note + portfolio action
- Generate client note, advisor brief, and compliance-safe summary
- Add multiple investor personas
- Add downloadable PDF client report
- Add CRM-style decision history
