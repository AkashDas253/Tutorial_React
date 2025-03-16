## React Built-in Components  

#### Description  
React provides several **built-in components** that help in creating UI elements efficiently. These components handle **common tasks like rendering lists, managing forms, and handling layouts** while maintaining React's declarative approach.  

---

### Built-in Components in React  

| **Component** | **Description** | **Usage** |  
|--------------|----------------|-----------|  
| `<Fragment>` | Groups elements without adding extra nodes in the DOM. | `<></>` or `<React.Fragment>` |  
| `<Suspense>` | Handles lazy loading of components. | Wraps `React.lazy` components. |  
| `<StrictMode>` | Highlights potential problems in an app during development. | Wraps application root. |  
| `<Profiler>` | Measures performance of component rendering. | Used in development for profiling. |  
| `<ErrorBoundary>` | Catches JavaScript errors in component trees. | Implemented using class components. |  
| `<Portal>` | Renders child components outside the main React DOM hierarchy. | `ReactDOM.createPortal(child, container)` |  

---

### Syntax and Usage  

#### **1. Fragments (`<Fragment>` or `<>`):**  
- Used to wrap multiple elements without adding unnecessary `<div>` tags.  

**Syntax:**  
```javascript
import React from "react";

function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

---

#### **2. Suspense (`<Suspense>`)**  
- Enables **lazy loading** of components for performance optimization.  

**Syntax:**  
```javascript
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

#### **3. StrictMode (`<StrictMode>`)**  
- Detects potential issues in React applications **without affecting production builds**.  

**Syntax:**  
```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

---

#### **4. Profiler (`<Profiler>`)**  
- Measures how long it takes for components to render.  

**Syntax:**  
```javascript
import React, { Profiler } from "react";

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration
) {
  console.log(`Rendered ${id} in ${actualDuration}ms`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MyComponent />
    </Profiler>
  );
}
```

---

#### **5. Error Boundaries (`<ErrorBoundary>`)**  
- **Catches JavaScript errors** in a React component tree and **prevents crashes**.  

**Syntax:**  
```javascript
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

---

#### **6. Portals (`<Portal>`)**  
- Used for rendering elements **outside** the main DOM hierarchy (e.g., modals).  

**Syntax:**  
```javascript
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
};

function App() {
  return (
    <>
      <h1>Main App</h1>
      <Modal>
        <p>This is inside a portal</p>
      </Modal>
    </>
  );
}
```

---

### **Summary**  
- Built-in React components provide **optimized functionality** without manual implementation.  
- **`<Fragment>`** prevents unnecessary DOM elements.  
- **`<Suspense>`** enables lazy loading.  
- **`<StrictMode>`** ensures code quality in development.  
- **`<Profiler>`** helps in performance monitoring.  
- **`<ErrorBoundary>`** catches and handles errors.  
- **`<Portal>`** allows rendering outside the main React tree.  

---
---

## Built-in Components in React

React provides a few essential built-in components and APIs that are fundamental to building applications. These include `Fragment`, `StrictMode`, `Suspense`, `ErrorBoundary`, and `Portal`. Below is a comprehensive note covering their description, syntax, usage, and limitations.

### Fragment

**Description**: A `Fragment` lets you group a list of children without adding extra nodes to the DOM.

**Syntax**:
```javascript
import React from 'react';

function Component() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}
```

**Short Syntax**:
```javascript
function Component() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

ReactDOM.render(<ul><List /></ul>, document.getElementById('root'));
```

**Limitations**:
- Fragments cannot have keys when using the short syntax (`<>...</>`).

### StrictMode

**Description**: A tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

**Syntax**:
```javascript
import React from 'react';

function Component() {
  return (
    <React.StrictMode>
      <h1>Title</h1>
      <p>Description</p>
    </React.StrictMode>
  );
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.StrictMode>
      <div>
        <h1>Hello, world!</h1>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- StrictMode does not render any visible UI. It only activates checks and warnings.

### Suspense

**Description**: A component that lets you wait for some code to load and declaratively specify a loading state (e.g., a spinner).

**Syntax**:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

**Usage**:
```javascript
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- Suspense is currently limited to code-splitting with `React.lazy`. More features are planned for future releases.

### ErrorBoundary

**Description**: A component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the crashed component tree.

**Syntax**:
```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('I crashed!');
  return <div>Buggy Component</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- Error boundaries do not catch errors for:
  - Event handlers
  - Asynchronous code (e.g., `setTimeout` or `requestAnimationFrame` callbacks)
  - Server-side rendering
  - Errors thrown in the error boundary itself (rather than its children)

### Portal

**Description**: A feature that allows rendering a component outside of its parent DOM hierarchy while still preserving its React context.

**Syntax**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
```

**Usage**:
```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal>Modal Content</Modal>}
    </div>
  );
}
```

**Limitations**:
- The target container must exist in the DOM before rendering the portal.

### Summary
React provides essential built-in components and APIs that help in structuring applications efficiently. These include:
- `Fragment` for grouping elements without adding extra DOM nodes
- `StrictMode` for debugging and highlighting potential issues
- `Suspense` for handling lazy loading
- `ErrorBoundary` for catching component tree errors
- `Portal` for rendering elements outside the parent hierarchy

---
---



## Built-in Components in React

React itself does not come with a large set of built-in components like some other UI libraries. Instead, it provides a few essential components and APIs that are fundamental to building React applications. Below is a detailed note on these built-in components and APIs, including their usage, limitations, syntax, and types.

#### 1. Fragment

**Description**: A `Fragment` lets you group a list of children without adding extra nodes to the DOM.

**Syntax**:
```javascript
import React from 'react';

function Component() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}
```

**Short Syntax**:
```javascript
function Component() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

ReactDOM.render(<ul><List /></ul>, document.getElementById('root'));
```

**Limitations**:
- Fragments cannot have keys when using the short syntax (`<>...</>`).

#### 2. StrictMode

**Description**: A tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

**Syntax**:
```javascript
import React from 'react';

function Component() {
  return (
    <React.StrictMode>
      <h1>Title</h1>
      <p>Description</p>
    </React.StrictMode>
  );
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.StrictMode>
      <div>
        <h1>Hello, world!</h1>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- StrictMode does not render any visible UI. It only activates checks and warnings.

#### 3. Suspense

**Description**: A component that lets you wait for some code to load and declaratively specify a loading state (e.g., a spinner).

**Syntax**:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

**Usage**:
```javascript
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- Suspense is currently limited to code-splitting with `React.lazy`. More features are planned for future releases.

#### 4. ErrorBoundary

**Description**: A component that catches JavaScript errors anywhere in their child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.

**Syntax**:
```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

**Usage**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('I crashed!');
  return <div>Buggy Component</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Limitations**:
- Error boundaries do not catch errors for:
  - Event handlers
  - Asynchronous code (e.g., `setTimeout` or `requestAnimationFrame` callbacks)
  - Server-side rendering
  - Errors thrown in the error boundary itself (rather than its children)

### Summary
React provides a few essential built-in components and APIs that are fundamental to building applications. These include `Fragment` for grouping elements, `StrictMode` for highlighting potential problems, `Suspense` for handling lazy loading, and `ErrorBoundary` for catching errors in the component tree. Understanding these components and their usage is crucial for building robust and efficient React applications.