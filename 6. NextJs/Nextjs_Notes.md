# Next.js Fundamentals Cheatsheet

## 1. What is Next.js?
* A React framework for building full web applications.
* **Key Feature**: **Server-side Rendering (SSR)**. The server generates full HTML, and the browser displays content immediately.
* **Pros**: Great SEO, faster First Contentful Paint.
* **Why Next.js?**
  1. **Hybrid Rendering**: Supports SSR (Server-Side), SSG (Static Site Generation), and CSR (Client-Side).
  2. **File-system Routing**: Folders automatically define routes (no extra setup needed).
  3. **API Routes**: Build backend endpoints within the same project.
  4. **Automatic Optimization**: Built-in optimization for images, fonts, and scripts.

---

## 2. Setup & Installation
* **Prerequisite**: Node.js 18.17 or later.
* **Create a new project**:
  ```bash
  npx create-next-app@latest
  ```
  *(Follow the interactive prompts to configure TypeScript, Tailwind CSS, ESLint, etc.)*
* **Start Development Server**:
  ```bash
  cd my-next-app
  npm run dev
  ```
  *(Runs on `http://localhost:3000`)*

---

## 3. App Router (`app/` directory)
The App Router uses a file-system-based routing model. Folders represent URL segments.

**Special File Conventions**:
* `page.tsx`: The main, unique UI for a specific route.
* `layout.tsx`: Shared UI wrapping multiple pages (e.g., Header, Sidebar).
* `loading.tsx`: Loading UI (uses React Suspense).
* `error.tsx`: Error boundary UI.
* `route.ts`: API endpoints.
* `not-found.tsx`: 404 Not Found UI.
* `metadata.ts`: Manages SEO metadata (title, description).
* `template.tsx`: Similar to layout but re-mounts on navigation.

---

## 4. Layouts & Nested Routing
* Layouts accept a `children` prop.
* They allow creating shared UI elements that **do not re-render** when navigating between child pages.
* Layouts can be nested to create a component hierarchy.
* **Root Layout** (`app/layout.tsx`): Required top-level layout. Must contain `<html>` and `<body>` tags.
* **Nested Layout** (e.g., `app/dashboard/layout.tsx`): Only applies to pages within the `/dashboard` route.

---

## 5. Server vs. Client Components

### Server Components (Default)
* Run **only on the server**.
* **Cannot** use hooks (`useState`, `useEffect`) or browser-only APIs.
* **Best for**: Accessing backend resources directly (Databases, internal APIs), fetching data, and reducing JavaScript bundle size sent to the client.
* All components in the `app/` directory are Server Components by default.

### Client Components
* Require the **`"use client";`** directive at the top of the file.
* Rendered on the server (SSR) and then "hydrated" on the client to become interactive.
* **Best for**: Using hooks, managing state, and handling user events (`onClick`, `onChange`, etc.).

---

## 6. Advanced Routing Techniques

### 1. Dynamic Routes
* Instead of making a separate file for each item, use a template for pages with dynamic data (e.g., blog posts, products).
* Wrap the folder name in square brackets: e.g., `[slug]` or `[userId]`.
* The dynamic value from the URL is passed to the component as a `params` prop.

### 2. Nested Routes and Layouts
* You can nest dynamic routes and layouts to build complex, shared UIs.
* Adding a `layout.tsx` inside a dynamic folder (like `[userId]`) creates a shared UI (e.g., a sidebar) that appears on all sub-pages for that user.

### 3. Catch-all & Optional Catch-all Routes
* **Catch-all Routes (`[...folderName]`)**: Captures all subsequent URL segments.
  * Useful for deep paths like documentation. E.g., `[...slug]` matches `/docs/a` and `/docs/a/b`.
* **Optional Catch-all Routes (`[[...folderName]]`)**: Same as Catch-all, but it **also matches the root path** without any extra segments. 
  * Perfect for optional URL parameters like search filters.

### 4. The `<Link>` Component for Navigation
* The primary way to navigate between pages in Next.js.
* Updates the page content without a full-page reload, making navigation feel instant.
* Next.js automatically **pre-loads** the next page in the background!
* Usage: `<Link href="/path">Click Here</Link>`

### 5. Programmatic Navigation
* Used when you need to redirect a user after an action (like a form submission or login).
* **`useRouter()`**: Hook to trigger navigation via code.
  * Call `router.push('/your-path')`.
  * *Note*: Requires a Client Component (`"use client";`).
* **`usePathname()`**: Hook to get the current URL path string you are on.

---

## 7. Data Fetching Strategies

### 1. The Shift to Server Components
* Previously, React used client-side fetching (`useEffect`), leading to layout shifts and network waterfalls.
* Next.js Server Components fetch data directly on the server **before rendering**.
* **Benefits**: Eliminates client-side processing, hides sensitive API keys, provides fully populated HTML (instant visibility), and ensures superior SEO.
* **Types of Data**:
  * **Static Data**: Fetched once at build time and cached globally (maximum speed).
  * **Dynamic Data**: Fetched on every request (real-time updates).

### 2. Fetching in Server Components (`async/await`)
* By default, all components are Server Components.
* Simply use `async/await` directly inside the component to fetch data.
* Next.js handles the server-side fetch automatically. Recommended for data that doesn't need user interaction.

### 3. Static Generation (`generateStaticParams`)
* **Static Site Generation (SSG)** pre-renders pages at build time.
* For dynamic routes (e.g., `[slug]`), use `generateStaticParams` to tell Next.js which parameters to pre-render.
* It returns an array of `params` objects, generating a static HTML page for each (improves speed and reduces server load).

### 4. Server-Side Rendering (SSR) & Streaming UI
* **SSR**: The default for dynamic pages that aren't statically generated. HTML is generated on the server for *each* request.
* **Streaming UI**: Instead of waiting for the full page to render, Next.js sends a static UI shell (like a layout) with a loading state. As data is fetched, the dynamic content is "streamed" in.
* Achieved using a `loading.tsx` file and React Suspense.

### 5. Client-Side Data Fetching
* Use this for frequently changing data or data depending on user interaction (e.g., a dashboard).
* Requires making the component a Client Component (`"use client";`).
* Can use standard React hooks (`useEffect`, `useState`) or specialized libraries like **SWR** or **React Query** for caching and revalidation.

### 6. Creating API Routes
* Create API endpoints by adding a `route.ts` (or `.js`) file inside a route folder.
* Export async functions named after HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
* Enables building a full backend directly within your Next.js app to handle client requests or communicate securely with external services.

---

## 8. Performance Optimization Techniques

### 1. Image Optimization with the `<Image>` Component
The Next.js `<Image>` component (`next/image`) is an extension of the HTML `<img>` tag, specifically designed for performance optimization. It automatically performs the following tasks:
* **Resizing**: Creates smaller versions of images for different screen sizes to avoid sending oversized image files to the user's device.
* **Format Optimization**: Automatically converts images to more modern formats like WebP or AVIF (if the browser supports them), which reduces file size while maintaining quality.
* **Lazy Loading**: By default, images are only loaded when they are scrolled into the user's viewport, which speeds up the initial page load.
* **Prevents Cumulative Layout Shift (CLS)**: Automatically sets dimensions for the image so the browser can reserve space for it before it finishes loading, preventing content from suddenly "jumping."

### 2. Code Splitting & Parallel Loading
* **Automatic Code Splitting**: Next.js intelligently performs code splitting out of the box. Each `page.tsx` file in the App Router is compiled into its own JavaScript "bundle." This means that when a user visits a page, they only download the code necessary for that specific page, not the entire application.
* **Parallel Route Loading**: When a URL is requested, Next.js will load all the necessary `layout.tsx` and `page.tsx` files for that route in parallel. For example, when accessing `/dashboard/settings`, the root layout, the dashboard layout, and the settings page will all be fetched and rendered simultaneously on the server, minimizing wait times.
* *Note*: This is an automatic behavior; you don't need any extra configuration. Simply structuring your application according to the App Router conventions enables this feature.

### 3. React Suspense and Lazy Loading with Loading UI
* React Suspense is a React feature that lets components "wait" for something (like data) before they render. Next.js deeply integrates with Suspense to create a better user experience through **Streaming**.
* By creating a `loading.tsx` file, you are telling Next.js: "While the main page component (`page.tsx`) is busy fetching data, show the UI from this `loading.tsx` file as a temporary placeholder." This allows the user to immediately see part of the page and know that content is on its way, instead of staring at a blank screen.

### 4. Caching Strategies and ISR
Next.js extends JavaScript's `fetch` function with a powerful server-side caching system.
* **Static Fetch (Default)**: `fetch('...')` will automatically cache the result indefinitely. This is similar to `getStaticProps` in the Pages Router. The data is fetched at build time and reused for every request.
* **No-cache Fetch**: `fetch('...', { cache: 'no-store' })` will always fetch fresh data for every request. This is similar to `getServerSideProps`.
* **Incremental Static Regeneration (ISR)**: `fetch('...', { next: { revalidate: 60 } })` is the best of both worlds. It caches data for a specific time period (e.g., 60 seconds). The first request within that window gets the cached data, while Next.js triggers a "revalidation" in the background to fetch fresh data. Subsequent requests will receive the updated data.

### 5. Monitoring and Improving Core Web Vitals
Core Web Vitals (CWV) are a set of three metrics from Google used to measure real-world user experience on a website, focusing on loading speed, interactivity, and visual stability.
1. **Largest Contentful Paint (LCP)**: Measures the time it takes for the largest content element (usually an image or text block) to become visible. Next.js helps improve LCP with the `<Image>` component.
2. **Interaction to Next Paint (INP)**: Measures the latency from a user interaction (click, tap, key press) until the UI provides feedback. Next.js helps improve INP with code splitting, loading only necessary JS. (INP has replaced First Input Delay - FID).
3. **Cumulative Layout Shift (CLS)**: Measures how much the layout "jumps" unexpectedly during loading. Next.js helps reduce CLS by automatically sizing images and fonts.

You can monitor these metrics using tools like Google PageSpeed Insights or by integrating Vercel Analytics into your project.

**Metrics Diagram**:
* **LCP (Loading)**: "Does the page load fast?" -> `<Image>`, Font Optimization.
* **INP (Interactivity)**: "Does the page respond quickly?" -> Code Splitting.
* **CLS (Stability)**: "Is the layout stable?" -> `<Image>`, Font Optimization.
