## React Cheatsheet

### Introduction to React

React is a JavaScript library primarily used for building user interfaces, especially single-page applications where efficiency and fast rendering are crucial. It’s built around the concept of components, which can be managed with either functions or classes. 

### Core Concepts of React

1. **Components**: Building blocks of any React application, they allow for reusable UI elements.
2. **JSX (JavaScript XML)**: An XML/HTML-like syntax used by React that extends JavaScript, enabling more readable and maintainable code.
3. **Virtual DOM**: React maintains a virtual representation of the DOM to improve performance.
4. **State and Props**: Mechanisms for managing data within and between components.

---

### Setting Up React

To create a new React project, you generally use the following command:
```bash
npx create-react-app my-app
```

### Syntax and Structure

#### JSX Syntax

JSX looks like HTML but allows you to write components with JavaScript. Key rules for JSX:
- **HTML tags** must be self-closing if they are empty, like `<img />`.
- **Variables** are embedded in JSX using `{}`.
  
```jsx
const greeting = 'Hello';
const element = <h1>{greeting}, World!</h1>;
```

#### Functional Components

Functional components are the simplest form of React components, written as JavaScript functions:
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

#### Class Components

Class components use ES6 classes and are more complex, allowing methods and life-cycle hooks.

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

---

### Core React APIs and Functions

#### `React.createElement`

Used to create an element; JSX converts directly to `React.createElement`.

**Syntax:**
```javascript
React.createElement(type, [props], [...children])
```

**Parameters**:
- `type`: Type of the element, such as `'div'` or `ReactComponent`.
- `props` (optional): Attributes as an object, default is `{}`.
- `children` (optional): Child nodes or text, default is `null`.

**Example**:
```javascript
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, World');
```

#### `React.Component`

React.Component is the base class for creating class components.

**Syntax**:
```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    render() {
        return <div>{this.state.counter}</div>;
    }
}
```

**Parameters**:
- `props`: Component properties passed down from parent components, default `{}`.
- `state`: Internal data structure, initialized in the constructor, default `undefined`.

---

### React State and Props

#### `this.setState`

`setState` is a function used to update the component’s state, which triggers a re-render.

**Syntax**:
```javascript
this.setState(updater[, callback])
```

**Parameters**:
- `updater`: Either an object or a function to update state, no default.
- `callback` (optional): Function to execute after state updates, no default.

#### `props`

`props` are read-only and passed from parent to child components to configure them. Props cannot be modified by the component that receives them.

**Usage**:
```jsx
<MyComponent title="Welcome!" />
```

---

### React Lifecycle Methods (Class Components)

Each lifecycle method has a specific purpose. Here are the main ones:

1. **Mounting**:
   - `constructor(props)`: Initializes state and binds functions.
   - `static getDerivedStateFromProps(props, state)`: Sync state with props.
   - `componentDidMount()`: Invoked after component is mounted.

2. **Updating**:
   - `shouldComponentUpdate(nextProps, nextState)`: Controls component re-rendering.
   - `getSnapshotBeforeUpdate(prevProps, prevState)`: Captures data before re-rendering.
   - `componentDidUpdate(prevProps, prevState, snapshot)`: Invoked after updating.

3. **Unmounting**:
   - `componentWillUnmount()`: Cleanup before component removal.

---

### React Hooks (Functional Components)

Hooks allow you to use state and lifecycle features in functional components.

#### `useState`

`useState` manages local state in functional components.

**Syntax**:
```javascript
const [state, setState] = useState(initialState)
```

**Parameters**:
- `initialState`: Initial value of the state, default `undefined`.

**Example**:
```javascript
const [count, setCount] = useState(0);
```

#### `useEffect`

`useEffect` runs side-effects in functional components.

**Syntax**:
```javascript
useEffect(effect, [dependencies])
```

**Parameters**:
- `effect`: Function containing the side-effect, no default.
- `dependencies`: Array of dependencies, which, if not provided, runs effect after every render.

**Example**:
```javascript
useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);
```

---

### Prop Types and Default Props

Prop types allow you to define expected data types for `props`.

```javascript
MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

MyComponent.defaultProps = {
    onClick: () => alert('Clicked!'),
};
```

**Usage**:
- `propTypes`: Checks the type of props.
- `defaultProps`: Sets default values for props.

---

### Advanced APIs

#### `React.Children`

React.Children provides utilities to interact with children elements, such as counting or iterating.

```javascript
React.Children.map(this.props.children, child => {
    return React.cloneElement(child, { ...props });
});
```

---

### Summary Table of Core Parameters

| API / Component      | Parameters                          | Default Values         | Value Range   | Purpose                    |
|----------------------|-------------------------------------|------------------------|---------------|----------------------------|
| `React.createElement` | type, props, children             | `{}`, `null`           | Any element type | Creates a React element |
| `React.Component`     | props, state                      | `{}`, `undefined`      | N/A           | Base for class components |
| `this.setState`       | updater, callback                 | N/A                    | N/A           | Updates component state |
| `useState`            | initialState                      | `undefined`            | Any           | Manages local state in functions |
| `useEffect`           | effect, dependencies              | N/A                    | Array or none | Runs side-effects         |

This overview covers the foundational components, lifecycle methods, and hooks necessary to start building with React.