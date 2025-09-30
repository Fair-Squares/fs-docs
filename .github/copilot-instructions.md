# Fair Squares Documentation - AI Coding Agent Instructions

## Project Overview
Fair Squares (FS) documentation site built with **Docusaurus 3** - describes a pooled housing asset protocol (fungible pool units, OpenGov governance tracks, external housing corporation operations). This repository holds documentation only, not the runtime code.

## Architecture & Key Components

### Documentation Structure
- `docs/` - Main documentation organized by categories with `_category_.json` files
- `src/pages/` - Custom React pages including homepage 
- `src/components/` - Reusable React components (HomepageFeatures)
- `static/` - Static assets (images, favicon, CNAME for GitHub Pages)
- `sidebars.js` - Auto-generated sidebar from filesystem structure

### Critical Configuration Files
- `docusaurus.config.js` - Main config with **mermaid diagrams enabled**, dual language support (en/nl), GitHub Pages deployment
- `package.json` - Uses Docusaurus 3.9.x with mermaid theme addon
- `.github/workflows/` - Auto-deploy to GitHub Pages on main branch pushes

## Development Workflow

### Essential Commands
```bash
yarn start          # Local development with hot reload
yarn build          # Production build to ./build
yarn deploy         # Deploy to GitHub Pages (requires GIT_USER)
```

### Deployment Pattern
- **Automatic**: GitHub Actions deploys main branch to `gh-pages` 
- **Manual**: Use `yarn deploy` with `GIT_USER=<username>` or `USE_SSH=true`
- **Domain**: Custom domain `docs.fair-squares.nl` via CNAME files

## Content Patterns & Conventions

### Documentation Categories
1. **Introduction** (`docs/intro.md`) - Platform overview with embedded video
2. **Learn** (`docs/learn/`) - Lightpaper, stakeholder analysis
3. **Technology** (`docs/technology/`) - Architecture diagrams, pallet design
4. **Legal Framework** (`docs/legal-framework/`) - Compliance documentation
5. **Guides** (`docs/guides/`) - External resource links (remove/avoid dead Polkaverse URLs)

### Content Features
- **Mermaid diagrams** extensively used in `technology/design.md` & `technology/architecture.md` for lifecycle, state machines, and sequences
- **Embedded iframes** for external content (YouTube, Eurostat charts)
- **Markdown tables** for role permissions and stakeholder comparisons
- **Footnote references** using `[^1]` syntax
- **TOC integration** with `<TOCInline toc={toc} />` component

### Styling Approach
- **CSS modules** in components (`styles.module.css`)
- **Custom theme colors** in `src/css/custom.css` (turquoise/magenta palette)
- **Responsive design** with mobile-specific breakpoints
- **Logo integration** using banner images in header

## Project-Specific Knowledge

### Fair Squares Context
The documentation describes a **Substrate/Polkadot-based blockchain protocol** with:
- **Current pallets/modules**: Roles, Housing Fund, Onboarding, Finalizer, Asset Pool Engine, Governance (OpenGov integration), Monitoring/Metrics. (Legacy: NFT, Bidding, Share Distributor, Tenancy removed.)
- **Stakeholder roles**: Servicer, Seller, Notary, Investor (Representative & Tenant now legacy/on hold; external housing corporations manage tenancy off-chain)
- **Asset workflow (new)**: Proposal intake → multi‑appraisal valuation → legal finalization → OpenGov asset admission track → capital allocation → pool unit mint → external operations metrics → NAV updates.

### Technical Integration Points
- **GitHub Pages deployment** with custom domain
- **Multi-language support** (English/Dutch) configured but English-primary
- **External content embedding** (Discord, GitHub, social links in footer)
- **Web3 Foundation Grant** recipient - maintain professional presentation

## Development Guidelines

### Adding New Documentation
- Use frontmatter with `sidebar_position` and `date` fields
- Place images in `static/img/` or `img/` directories
- Update `_category_.json` files for new sections
- Test mermaid diagrams in development before deploying

### Modifying Existing Content
- Large tables may need horizontal scrolling consideration
- Mermaid diagrams require specific syntax - reference updated patterns (`design.md` uses stateDiagram-v2, flowchart, sequence; multiline labels use <br/>)
- Maintain consistency with role-based table structures (◎/✖ symbols)
- Preserve external links to community resources (Discord, GitHub, Polkaverse)

### Common Pitfalls
- **Node version**: Requires Node.js ≥18.0 (specified in package.json)
- **Yarn dependency**: Project uses Yarn, not npm
- **Asset paths**: Use `/img/` prefix for static assets in markdown
- **Mermaid syntax**: Must be in fenced code blocks with `mermaid` language tag

## Key Files to Reference
- `docs/technology/design.md` - Updated pooled model design (state machines, governance tracks, no PNG images)
- `docusaurus.config.js` - Configuration patterns for navbar, footer, themes
- `src/components/HomepageFeatures/index.js` - Component structure examples
- `.github/workflows/deploy.yml` - CI/CD deployment pattern



# removeal

### Migration Notes (for AI agents)
- Replace any remaining per‑asset NFT or Share Distributor references with Pool Unit model.
- Avoid generating PNG workflow images; use Mermaid diagrams instead.
- Governance examples should mention OpenGov tracks (Asset Admission, Corp Accreditation, Param Tuning, Emergency) instead of council/investor dual phases.
- External tenancy flows reference Housing Corporations; do not model on-chain tenant referendum logic.