# ⚛️ AssetFlow Frontend Engineering & UI Roadmap (Developer B)

**Core Stack:** Node.js 26.x.x, React 19.x.x, TypeScript 5.7.x, Vite 6.x.x, TanStack Query 5.64.x, Recharts 2.15.x, Tailwind CSS 4.x.x, shadcn/ui

---

## 🗓️ Week 1: Scaffold, Global State & Core View Engines

### Days 1 – 2: Application Scaffolding & Base Layouts
*   [ ] Initialize the frontend workspace directory utilizing the Vite engine (`npm create vite@latest -- --template react-ts`).
*   [ ] Integrate the **Tailwind CSS v4** layout engine and bootstrap atomic design configurations for **shadcn/ui** components.
*   [ ] Construct the responsive Shell layout framework containing the unified sidebar dashboard navigation, profile panels, and status components.
*   [ ] Establish the main repository branch version control system to match Developer A's configurations.

### Days 3 – 4: Authentication Guards & Core Grid Components
*   [ ] Build out user login view frameworks and manage token persistence behaviors using an isolated React Context provider (`useAuth`).
*   [ ] Build out path navigation interceptors inside **React Router** to actively screen routing destinations by active user permission roles.
*   [ ] Construct the foundational asset inventory view grid mapping standard attributes onto functional `shadcn/ui/table` visual templates.

### Days 5 – 7: Data Pipeline Hookups & Form Validations
*   [ ] Integrate **TanStack Query (React Query)** inside the data fetch loops to consume Developer A’s exposed API contracts.
*   [ ] Create comprehensive asset intake and updates interfaces using responsive dialog modal components.
*   [ ] Implement client-side input safety parsing patterns by mapping forms through `react-hook-form` connected with **Zod declarative type verification models**.

---

## 🗓️ Week 2: Virtualized Tables, Live Visualizations & Release

### Days 8 – 9: Server-Driven Tables & Analytics Visualizations
*   [ ] Hook table state filters (sorting parameters, pagination page counters, text query bounds) directly into TanStack Query custom hooks to drive server-side data extraction queries.
*   [ ] Design the primary platform landing dashboard utilizing **Recharts** to parse server data into interactive cost breakdowns and sector capacity graphs.

### Days 10 – 11: Audit Tracking Visualizations & File Handling
*   [ ] Construct a dedicated administrative security **Audit Log view panel** that features color-coded typography based on event severity categories (e.g., *Created*, *Modified*, *Retired*).
*   [ ] Integrate responsive client-side file compression handlers supporting media upload components for document attachment tracking.

### Days 12 – 14: Testing, CI integration & Production Deployment
*   [ ] Write functional End-to-End (E2E) browser verification scripts using **Playwright** or **Cypress** to test core auth and asset creation user flows.
*   [ ] Synchronize build type checking constraints (`tsc --noEmit`) inside the project repository CI/CD pipeline.
*   [ ] Deploy the client-side production package bundle to **Vercel** or an equivalent hosting platform, and compile a clear visual system flow chart within the project documentation repository.