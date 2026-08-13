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

---

## 9. Styling and CSS in Next.js

### 1. Using CSS Modules
CSS Modules are a way to write CSS that is locally scoped to a specific component. When you import a CSS Module file, Next.js automatically generates unique classnames, which helps you avoid class name conflicts between different components. This is the built-in and recommended way to handle component-level styling in Next.js. To use it, you just need to name your file with the `[name].module.css` convention.

### 2. Example

#### 1. CSS Module File (`Button.module.css`)
```css
/* app/components/Button.module.css */
.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

#### 2. Using it in a Component (`Button.tsx`)
```tsx
// app/components/Button.tsx
import styles from './Button.module.css';

export default function Button() {
  return (
    <button className={styles.btn}>Click me!</button>
  );
}
```

### 3. Integrating Sass/SCSS
Sass/SCSS is a CSS preprocessor that extends the capabilities of CSS with features like:
* **Variables**: To store reusable values (colors, font sizes).
* **Nesting**: Write CSS rules nested within each other, following the HTML structure.
* **Mixins**: Create reusable blocks of styles.
* **Partials & Imports**: Split CSS into manageable modules.

**Installation**:
```bash
npm install sass
# or
yarn add sass
```

### 4. Sass/SCSS - Example
```
app/
├── styles/
│   └── _variables.scss  // File for global variables
└── components/
    ├── Card.jsx
    └── Card.module.scss // Using SCSS for the module
```

`app/styles/_variables.scss`
```scss
// Define global variables
$primary-color: #8a2be2;
$border-radius: 12px;
$card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

`app/components/Card.module.scss`
```scss
// Import variables from the partial file
@import '../styles/variables';

.card {
  padding: 1.5rem;
  border-radius: $border-radius;
  box-shadow: $card-shadow;
  background-color: white;

  h3 {
    margin-top: 0;
    color: $primary-color;
  }

  p {
    color: #555;
  }
}
```

`app/components/Card.jsx`
```jsx
// Usage is no different from regular CSS Modules
import styles from './Card.module.scss';

export default function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
```

### 5. Styled-components with Server Components
Styled-components is a CSS-in-JS library that allows you to write CSS directly in your JavaScript/TypeScript files using tagged template literals.
* **Advantages**: Dynamic styling based on props, automatic scoping, no need to worry about class names.

**Challenge with the App Router**: Styled-components requires a browser runtime environment to inject styles into the DOM. However, Server Components are rendered entirely on the server, where this environment doesn't exist.

**Solution**:
1. All components using styled-components must be Client Components (marked with `'use client'`).
2. A Style Registry needs to be created to collect all the styles generated during the server render, and then inject them into the `<head>` of the HTML file sent to the client.

### 6. Styled-components - Installation & Example
**Install the library**:
```bash
npm install styled-components
```

**Create the file** `app/lib/StyledComponentsRegistry.jsx`:
```jsx
'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
```

### 7. Installation & Example (cont.)
**3. Use the Registry in the Root Layout (`app/layout.jsx`)**:
```jsx
import StyledComponentsRegistry from './lib/StyledComponentsRegistry';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

`app/components/StyledButton.jsx`
```jsx
'use client'; // MUST be a Client Component

import styled from 'styled-components';

// Dynamic style based on the 'primary' prop
const Button = styled.button`
  background: ${props => props.$primary ? '#BF4F74' : 'white'};
  color: ${props => props.$primary ? 'white' : '#BF4F74'};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: 2px solid #BF4F74;
  border-radius: 5px;
  cursor: pointer;
`;

export default function StyledButton({ primary, children }) {
  // Note: styled-components recommends using props with a $ prefix
  // to avoid them being passed down to the DOM element unnecessarily.
  return <Button $primary={primary}>{children}</Button>
}
```

### 8. Tailwind CSS in the App Router
Tailwind CSS is a utility-first framework. Instead of writing custom CSS, you build interfaces by applying pre-existing utility classes directly in your JSX.
* **Advantages**: Extremely fast UI development, consistent, easily customizable, and automatically purges unused CSS for production optimization.

**Installation & Configuration**: (According to the official Tailwind documentation)
1. **Install necessary packages**:
```bash
npm install -D tailwindcss postcss autoprefixer
```
2. **Initialize configuration files**:
```bash
npx tailwindcss init -p
```

### 9. Adding Custom Tailwind CSS Classes
To maintain a consistent design system, you'll often need to add custom values (like brand colors, fonts, or animations) to Tailwind. This is done in the `tailwind.config.ts` file.

The best practice is to add your customizations inside the `theme.extend` object. This adds to Tailwind's default theme instead of completely replacing it. Once defined, you can use these classes anywhere in your application.

---

## 10. State Management in Next.js Applications

### 1. Overview - Challenges in Next.js
In the Next.js App Router, state management is more complex due to the separation between Server and Client.
* **Server Components**:
  * Run on the server, are stateless, and cannot use hooks like `useState` or `useEffect`.
  * Ideal for data fetching and accessing the backend.
  * Cannot directly interact with client-side state.
* **Client Components** (`"use client"`):
  * Behave like traditional React components.
  * Can use hooks, manage state, and handle events.
  * All state management libraries (Context, Redux, Zustand) must be used within Client Components.
* **Hydration**:
  * The process of 'breathing life' into static server-rendered HTML by attaching JavaScript event listeners and state on the client, making the page interactive.
  * Synchronizing the initial state between the server and client is crucial to avoid errors.

### 2. React Context & Server Components
The React Context API is a way to share state between components without having to pass props down through multiple levels (prop drilling).
* **Pros**:
  * Built into React, no extra libraries needed.
  * Easy to learn and use for small to medium-sized applications.
  * Excellent for state that changes infrequently, like themes (light/dark mode), language, or user information.
* **Cons**:
  * Can cause unnecessary re-renders for all consuming components when the state changes.
  * Not optimized for frequent and complex state updates.
* **Note in Next.js**:
  * The Context Provider MUST be placed within a Client Component (`"use client"`).

**Flow**:
1. RootLayout (Server) renders the ThemeProvider.
2. ThemeProvider (Client) creates the state and provides it via the Context.
3. The children (which can be Server or Client Components) are rendered inside the Provider.
4. Only Client Components within the tree can access the state from the Context (e.g., ThemeToggleButton).

**Example**:
```jsx
// contexts/ThemeContext.jsx
'use client';

import { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Create Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook for easy consumption
export function useTheme() {
  return useContext(ThemeContext);
}
```

```jsx
// app/layout.js
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

```jsx
// components/ThemeSwitcher.jsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`p-2 rounded ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

### 3. Redux Toolkit & App Router
Redux Toolkit (RTK) is the official, recommended toolset for writing Redux logic. It simplifies store setup and reducer creation.
* **Pros**:
  * Centralized, predictable state management.
  * Powerful ecosystem (DevTools, middleware like Redux Thunk/Saga).
  * Performance optimizations with reselect and Immer.
  * Suitable for large, complex applications with a lot of global state.
* **Cons**:
  * Still has some boilerplate (though significantly reduced by RTK).
  * Steeper learning curve compared to other solutions.
* **Note in Next.js**: Similar to Context, the Redux store only exists on the client side. The Provider must also be placed in a Client Component.

**Flow**:
1. The store is created once on the client side.
2. The `StoreProvider` (Client) provides this store to the component tree.
3. Child Client Components can interact with the store using the `useDispatch` and `useSelector` hooks.

```
(Server) RootLayout
└── (Client) "use client" <StoreProvider>
    └── (Server) {children} - (e.g., DashboardPage)
        └── (Client) "use client" <CounterComponent />
```

**1. Installation**:
```bash
npm install @reduxjs/toolkit react-redux
```

**2. Create a Slice (`/lib/features/counter/counterSlice.js`)**:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**3. Create the Store (`/lib/store.js`)**:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};
```

**4. Create the Provider (`/app/StoreProvider.jsx`)**:
```jsx
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    // Create a new store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

**5. Use in `layout.js` and a component**:
```jsx
// app/layout.js
import StoreProvider from './StoreProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

```jsx
// components/Counter.js
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/lib/features/counter/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
```

### 4. Recoil & Zustand
These are modern, minimalist, hook-based state management libraries.

**Zustand**
* **'Zustand'** means 'state' in German.
* Extremely simple with minimal boilerplate.
* State is stored in a store outside of React, accessed via hooks.
* No need to wrap the application in a Provider.
* **Best for**: Projects of all sizes that need a lightweight, easy-to-use solution.

**Recoil**
* Developed by Facebook.
* Uses the concepts of 'atoms' (individual units of state) and 'selectors' (derived state).
* Allows for better re-render optimization as components subscribe only to the atoms they need.
* **Best for**: Complex applications that need to efficiently manage interdependent states. Requires a Provider (`RecoilRoot`).

**Persist State**
The fundamental problem that state persistence solves is the temporary nature of state held in memory. By default, when you create state with Zustand (or any other state management library), it's stored in the browser's JavaScript memory. This means:
* When a user reloads the page (F5), all JavaScript memory is wiped clean and re-initialized.
* When a user closes the tab or browser, that memory is completely destroyed.

As a result, the application's entire state reverts to its initial value. This creates a very poor user experience in many common scenarios, for example:
* **Shopping Cart**: A customer adds five items to their cart, accidentally reloads the page, and finds their cart is completely empty.
* **User Preferences**: A user selects dark mode, but when they return to the site later, the interface has reverted to light mode.
* **Form Data**: A user is filling out a long form, but accidentally closes the tab and has to start all over from scratch.

State persistence is the solution to this problem. It takes state from temporary memory and saves it to a more durable storage location on the user's device.

**Configuring State Persistence with Zustand**:
1. **Create the Persisted Store**: Use the `persist` middleware and provide a unique name to act as the key in localStorage. This automatically saves and rehydrates your state. (`stores/settingsStore.ts`)
2. **Handle Hydration in Next.js / SSR**: Delay rendering UI that uses the store until the component has mounted on the client. This prevents a "hydration mismatch" error between the server and client. (`components/ThemeSwitcher.tsx`)

### 5. Handling State Hydration
Hydration is the process where client-side React takes over the HTML rendered by the server.

**The Problem**: If the initial state on the client does not match what was rendered on the server, React will throw a "Hydration Mismatch" error.
* **Example**: The server renders a page with a 'light' theme, but the client initializes the theme state as 'dark' (e.g., from localStorage).

**The Solution**: Pass the initial state from a Server Component down to a Client Component as props. The Client Component will use these props to initialize its state, ensuring consistency.

**Correct Hydration Flow Diagram**:
1. **Server**: ServerComponent fetches data (`initialTodos`).
2. **Server -> Client**: Pass `initialTodos` via props to ClientComponent.
3. **Client**: ClientComponent receives `initialTodos` and uses it as the initial value for `useState`. `const [todos, setTodos] = useState(initialTodos)`.
4. **Result**: The server-rendered HTML and the initial client-side state match. Hydration succeeds!
