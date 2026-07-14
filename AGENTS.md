# Custom AI Agent Instructions

- **Project Order Rule**: When adding or modifying projects in the portfolio (`/src/components/Projects/Projects.tsx`), always ensure that the "CineScope" project remains as the VERY FIRST project in the `projectsData` array and is displayed at the top of the "Web Apps" category.

- **SPA Routing Rule**: Always build React websites using `BrowserRouter` with proper SPA routing (so URLs like `/about`, `/contact`, and `/projects` work without `#`). When generating a site, include configuration files for common hosting platforms (like Vercel, Netlify, and Firebase) to ensure all unknown routes serve `index.html` (e.g. `vercel.json` and `public/_redirects`). Use `react-router-dom`'s `Link` or `useNavigate` for internal navigation.
