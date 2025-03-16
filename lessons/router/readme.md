## React Router  

### Definition  
React Router is a standard library for handling navigation in React applications. It enables dynamic routing, allowing the UI to synchronize with the URL while maintaining a component-based architecture.

### Core Concepts  

#### BrowserRouter & HashRouter  
| Router Type | Description |
|------------|-------------|
| `BrowserRouter` | Uses HTML5 history API for clean URLs (`/about`). Preferred for modern applications. |
| `HashRouter` | Uses hash-based URLs (`#/about`). Useful when server configuration prevents direct URL handling. |

#### Route  
Defines a mapping between a URL path and a component.  
**Syntax:**  
```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>;
```

#### Link & NavLink  
Used for navigation without full-page reloads.  
**Syntax:**  
```jsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>
<NavLink to="/about" activeClassName="active">About</NavLink>
```
- `NavLink` adds styling for active links.

#### useNavigate  
Replaces `useHistory` for programmatic navigation.  
**Syntax:**  
```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/dashboard");
```

#### useParams  
Retrieves URL parameters.  
**Syntax:**  
```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

#### Outlet  
Renders child routes dynamically in nested routing.  
**Syntax:**  
```jsx
import { Outlet } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Outlet />
  </div>
);
```

### Protected Routes  
Restricts access to routes based on authentication.  
**Syntax:**  
```jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

### Summary  
React Router provides essential features for navigation, including:  
- `BrowserRouter` & `HashRouter` for defining routing behavior.  
- `Route`, `Link`, and `NavLink` for mapping paths to components.  
- Hooks like `useNavigate` and `useParams` for dynamic routing.  
- `Outlet` for nested routing.  
- Protected routes to manage access control effectively.


---
---


## React Router  

### Definition  
React Router is a powerful library for handling client-side navigation in React applications. It enables dynamic routing by synchronizing the UI with the URL while maintaining a component-based architecture. It provides declarative navigation and supports features like nested routing, protected routes, and route parameters.

---

## Core Concepts  

### **1. Router Types**  
React Router provides two main router types based on how the application manages URLs:

| Router Type     | Description |
|----------------|-------------|
| `BrowserRouter` | Uses the HTML5 history API to manage navigation. This results in clean URLs (e.g., `/about`). Suitable for modern applications where the server can handle direct requests to different routes. |
| `HashRouter`    | Uses hash-based URLs (e.g., `#/about`). This is useful when deploying applications on static file servers that do not support URL rewriting. |

**Usage Example:**  
```jsx
import { BrowserRouter, HashRouter } from "react-router-dom";

<BrowserRouter>
  {/* Define Routes here */}
</BrowserRouter>

<HashRouter>
  {/* Define Routes here */}
</HashRouter>
```

---

### **2. Route**  
A `Route` component defines a mapping between a URL path and a React component.  
- It determines which component to render based on the current URL.  
- The `Routes` component (introduced in React Router v6) wraps multiple `Route` components.

**Syntax:**  
```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>;
```

**Usage:**  
- Used to define pages and their respective components.  
- Helps in structuring navigation without reloading the page.  

---

### **3. Link & NavLink**  
In React Router, navigation between pages should be handled using `Link` or `NavLink` instead of `<a>` tags to prevent full-page reloads.

| Component  | Description |
|------------|-------------|
| `Link`     | Provides client-side navigation while preventing unnecessary re-renders. |
| `NavLink`  | Similar to `Link` but allows adding an active class when the link matches the current URL. |

**Syntax:**  
```jsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>

<NavLink to="/about" activeClassName="active">
  About
</NavLink>
```

**Usage:**  
- `Link` ensures smooth navigation without a full page refresh.  
- `NavLink` is useful when highlighting the currently active route.

---

### **4. useNavigate (Replacing useHistory)**  
`useNavigate` is a hook that enables programmatic navigation in React Router.

**Syntax:**  
```jsx
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return <button onClick={goToDashboard}>Go to Dashboard</button>;
}
```

**Usage:**  
- Used for programmatic redirection.  
- Can replace button clicks, form submissions, or authentication flows.

---

### **5. useParams (Accessing URL Parameters)**  
The `useParams` hook extracts dynamic parameters from the URL.

**Syntax:**  
```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return <h1>Profile ID: {id}</h1>;
}
```

**Usage:**  
- Useful for fetching and displaying user-specific data.  
- Helps in constructing dynamic paths like `/user/:id`.  

---

### **6. Outlet (Nested Routing)**  
The `Outlet` component allows child routes to be dynamically rendered within a parent route.

**Syntax:**  
```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

**Usage:**  
- Helps in structuring nested routes within a layout.  
- Used for dashboards and multi-step forms.

**Example of Nested Routes:**
```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

---

### **7. Protected Routes (Authentication-Based Navigation)**  
Protected routes restrict access based on authentication.

**Syntax:**  
```jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
```

**Usage:**  
- Restricts access to logged-in users only.  
- Redirects unauthenticated users to a login page.

---

### **8. Redirecting (Using <Navigate />)**  
React Router provides `<Navigate />` for handling redirects.

**Syntax:**  
```jsx
import { Navigate } from "react-router-dom";

function HomePage() {
  return <Navigate to="/dashboard" />;
}
```

**Usage:**  
- Used to navigate users programmatically without needing a button click.  
- Commonly used after login or logout actions.

---

### **9. Route Not Found (404 Handling)**  
A "Not Found" page can be implemented using a wildcard (`*`).

**Syntax:**  
```jsx
<Routes>
  <Route path="*" element={<NotFound />} />
</Routes>
```

**Usage:**  
- Ensures users are redirected to a custom 404 page when accessing an invalid URL.

---

## **Summary**  
React Router enables client-side navigation in React applications, providing:  
- **Router types**: `BrowserRouter` (history API) and `HashRouter` (hash-based navigation).  
- **Routing**: `Route` maps URLs to components.  
- **Navigation Components**: `Link` and `NavLink` prevent full-page reloads.  
- **Hooks**:  
  - `useNavigate`: Programmatic navigation.  
  - `useParams`: Access URL parameters.  
- **Advanced Features**:  
  - `Outlet` for nested routing.  
  - Protected routes for authentication.  
  - `<Navigate />` for redirection.  
- **Error Handling**: A `Route path="*"` handles 404 errors.
