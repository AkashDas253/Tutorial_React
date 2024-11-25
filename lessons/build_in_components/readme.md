### Built-in Components in React

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