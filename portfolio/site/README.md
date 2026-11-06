# Site source — Bruno Rafael AI Engineering Portfolio

The contents of this directory are a standalone Next.js application maintained within the `brasilguard-visual-lab` repository until an independent GitHub repository can be created.

## Develop locally

```bash
cd portfolio/site
npm install
npm run dev
```

Open http://localhost:3000.

## CI/CD verification

- **GitHub:** `brunorafaeliecb-web/brasilguard-visual-lab` (`main`)
- **Vercel Git-linked project:** `brasilguard-portfolio-ci`
- **Root directory:** `portfolio/site`
- **Production domain for linked project:** https://brasilguard-portfolio-ci.vercel.app
- **Original public domain preserved:** https://brunorafael-portfolio-next3d.vercel.app

Edits to this site on the production branch should trigger the Git-linked Vercel project's automated build and deployment.

**Operational policy:** The original portfolio URL remains unchanged and its prior deployment is available for rollback. Do not switch domains or remove projects until the independent GitHub repository and tests are complete.

## Portfolio data policy

Public repository case studies must be evidence-backed. Never commit secrets, client information or private source code. Treat private architecture descriptions as proposals/designs unless verified implemented.
