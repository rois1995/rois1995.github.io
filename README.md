# Andrea Rausa · research portfolio

**Review build only.** This branch contains an Astro-based redesign of the website at https://rois1995.github.io. It does not replace the published site, and should not be merged before review.

## Stack

- Astro static-site generation (no runtime server, no CMS, no analytics).
- Reusable layouts/components; typed content data under `src/data/`.
- Responsive navigation, keyboard focus states, semantic HTML.
- Searchable/filterable publication list.
- Dedicated research project pages with explicit image placeholders.
- Compatibility redirects for former public URLs.

## Local development

Requires Node.js 20+.

```sh
npm install
npm run dev
npm run build
```

The output is `dist/`. Before release, commit a generated lockfile to make installation reproducible and replace `npm install` with `npm ci` in the build workflow.

## Privacy and publication rules

Only completed, publicly documented research is included. Do not add unpublished results, draft manuscripts, quantitative claims, or unverified figures without explicit approval. The research-image panels are placeholders, **not numerical results**.

The former `Assets/CV.pdf` is outdated and is deliberately not linked as a current CV; use the `about/` page or request the current CV until a reviewed PDF is installed.

## Deployment

This review branch intentionally has **no GitHub Pages deployment workflow**. After approval:

1. Run the review workflow or `npm run build`, and check internal links, project copy, and responsive behaviour.
2. Merge to `main` only after explicit approval.
3. Configure GitHub Pages to use GitHub Actions, then add the official Astro GitHub Pages workflow or an equivalent controlled deployment.
4. Verify the live site and old-URL redirects after deployment.

Do not deploy directly from this review branch.

## Suggested follow-up content

- Real, reusable published figures with captions and permissions.
- Project-level methodology and measured results from the research PDFs.
- DOI auditing for publications without DOI metadata.
- A reviewed and current PDF CV.
