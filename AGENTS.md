<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# PERMANENT PROJECT INSTRUCTIONS — LONG VIEW
## SEO Protection, Development Standards & Website Safety

**Target Website**: https://www.longviewmarketing.agency/

---

### 1. SEO PROTECTION
For every future development task:
- **Canonical Domain**: Strictly preserve `https://www.longviewmarketing.agency`.
- **Self-Referencing Canonicals**: Every indexable page must define its own self-referencing canonical URL.
- **Titles & Descriptions**: Every page must have a unique, relevant SEO title and meta description.
- **Metadata**: Preserve existing SEO metadata configuration across layouts and pages.
- **Dynamic Sitemap**: Ensure every new public, indexable page is automatically included in `sitemap.xml`.
- **Sitemap Hygiene**: Remove deleted or permanently unavailable pages. Never include duplicate URLs, redirecting URLs, private routes, or non-indexable pages.
- **Preserve SEO Files**: Preserve existing `sitemap.ts` and `robots.ts` implementations unless a change is technically necessary.
- **Content & Tags**: Avoid duplicate content and conflicting canonical tags.
- **Structured Data**: Preserve existing structured data if implemented.

---

### 2. TECHNICAL SEO
- Never add `noindex` directives to public pages.
- Never block important public pages through `robots.txt`.
- Preserve correct HTTP status codes (200 OK) and existing redirect logic.
- Maintain HTTPS and the canonical `www` domain.
- Ensure internal navigation links point directly to canonical URLs.
- Ensure search engine crawlers can access all intended public pages.
- Avoid creating unnecessary URL variations or duplicate routes.

---

### 3. WEBSITE FUNCTIONALITY AND DESIGN
- Never break existing pages, navigation, forms, animations, responsiveness, or features.
- Do not remove existing features unless explicitly requested.
- Maintain the established design system, typography, colours, and visual consistency.
- Do not make unrelated changes while working on a requested task.
- Ensure full responsiveness on desktop, tablet, and mobile viewports.

---

### 4. DEVELOPMENT AND CODE SAFETY
**Before making changes**:
1. Inspect the relevant existing implementation.
2. Understand how the requested change interacts with the rest of the site.
3. Identify potential SEO, styling, or functionality risks.

**After making changes**:
1. Run the production build (`npm run build`).
2. Run TypeScript type checks (`npx tsc --noEmit`).
3. Check for linting errors (`npm run lint`).
4. Fix any introduced errors.
5. Review the final Git diff (`git diff`).
6. Verify existing functionality remains completely intact.
*Never deploy code that has not passed validation.*

---

### 5. GIT, GITHUB AND VERCEL SAFETY
- **Never commit** without explicit user permission.
- **Never push to GitHub** without explicit user permission.
- **Never deploy to Vercel** without explicit user permission.
- Never modify production environment variables or domain settings without approval.
- Do not overwrite or discard existing work without explaining the consequences.
- Keep unrelated changes out of commits.

---

### 6. GOOGLE SEARCH CONSOLE
- Do not automatically request indexing for individual URLs.
- Do not automatically resubmit sitemaps.
- Do not alter canonical URLs, sitemaps, `robots.txt`, or redirects without clear technical necessity.
- After deploying a new page, supply its URL so the user can inspect it in GSC.
- Inform the user if a change requires manual GSC action.
- Never claim a page is indexed just because it is live or in the sitemap.

---

### 7. AFTER EVERY DEVELOPMENT TASK (REPORTING TEMPLATE)
Before reporting completion, provide a simple summary answering:
1. **What files were changed?**
2. **What exactly was changed?**
3. **Why was the change necessary?**
4. **Could it affect SEO?**
5. **Could it affect existing website functionality?**
6. **Did the build and validation checks pass?**
7. **Is any manual action required from me?**

*Note: Explain technical terms in plain, accessible language.*

---

### 8. APPROVAL PREREQUISITES
If a requested change could:
- Affect SEO or indexing
- Change canonical URLs or metadata
- Modify `sitemap.xml` or `robots.txt`
- Change redirects or routing
- Break existing functionality
- Affect the live production website

**Explain the potential impact and obtain user approval before proceeding.**
*If unsure whether a change is safe, stop and ask rather than guessing.*

