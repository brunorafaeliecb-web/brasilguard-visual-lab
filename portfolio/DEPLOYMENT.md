# Live portfolio — deployment record

- **Vercel project:** `brunorafael-portfolio-next3d`
- **Public URL:** https://brunorafael-portfolio-next3d.vercel.app
- **Deployment:** `dpl_H2R82NL6XPr3efQD94yiHsgaq3p7`
- **Observed Vercel state:** `READY` after successful optimized Next.js build
- **Stack:** Next.js 15.5.25, React 19, TypeScript, Three.js, React Three Fiber, Drei.
- **3D controls:** drag to orbit; wheel zoom with pass-through at min/max.
- **Typography:** Bebas Neue and Montserrat (web served).
- **Interaction:** spotlight, dark/light, PT/EN/ES/FR/IT/DE.
- **Typewriter:** five rotating English phrases; 80 ms typing, 5s hold, 80 ms backspacing, 5s empty pause.

### Notes

The Vercel application currently receives deployments by API; this GitHub folder does not automatically deploy to Vercel. Establish a Git-connected Vercel project or source sync in a separate, reviewed change before claiming CI/CD is active.

Do not commit credentials, private customer data or third-party proprietary source code.

## GitHub source verification — 2026-11-06

A clean Vercel build was executed **from this GitHub repository**, selecting `portfolio/site` as the Next.js root directory.

- **Git source:** `brunorafaeliecb-web/brasilguard-visual-lab`, branch `main`
- **Source commit compiled:** `ae350bf591d8ccd777b3927ea324c40fc06af74f`
- **GitHub verification deployment:** `dpl_AM56hY8jZdUDqsiAmnZK4u5KKbWX`
- **Build result:** `READY`; Next.js compiled, TypeScript checked, static pages generated.
- **Verification URL:** https://bgd-portfolio-github-qa.vercel.app

The verification deployment establishes that the separately versioned GitHub implementation builds successfully. The existing main live website remains hosted in a distinct Vercel project and is not yet configured to auto-deploy from this GitHub subdirectory.
