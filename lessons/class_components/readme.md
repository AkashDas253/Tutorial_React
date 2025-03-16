## **Class Components in React**  

#### **Definition**  
Class components are ES6 classes that extend `React.Component` and contain a `render` method to return JSX. Unlike functional components, they support state management and lifecycle methods, making them suitable for complex UI logic.  

---

#### **Syntax**  
```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}

export default MyComponent;
```

---

#### **Props in Class Components**  
Props allow passing data to a component and are accessible via `this.props`. They are read-only.  

| **Aspect**  | **Details** |
|-------------|------------|
| **Definition** | Props are immutable and passed from parent to child. |
| **Access** | `this.props.propName` |
| **Modification** | Cannot be modified inside the component |

**Example**  
```javascript
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
**Usage**  
```javascript
<Greeting name="Alice" />
```

---

#### **State in Class Components**  
State stores component-specific data that can change over time using `this.setState()`.  

| **Aspect**  | **Details** |
|-------------|------------|
| **Definition** | State is mutable and managed inside the component. |
| **Initialization** | Done in the constructor method. |
| **Modification** | Use `this.setState()` to update state. |

**Example**  
```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

---

#### **Lifecycle Methods in Class Components**  
Lifecycle methods allow control over component behavior at different stages of its existence.

| **Phase**         | **Method**               | **Purpose** |
|------------------|------------------------|-------------|
| **Mounting**    | `constructor()` | Initialize state and bind methods. |
|                | `render()` | Returns JSX. |
|                | `componentDidMount()` | Runs after first render (API calls, subscriptions). |
| **Updating**    | `shouldComponentUpdate(nextProps, nextState)` | Controls re-rendering for optimization. |
|                | `componentDidUpdate(prevProps, prevState)` | Runs after updates (e.g., data fetching). |
| **Unmounting**  | `componentWillUnmount()` | Cleanup before component removal (e.g., clear timers). |

**Example: Using Lifecycle Methods**  
```javascript
class Timer extends Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return <h1>Timer Running</h1>;
  }
}
```

---

#### **Event Handling in Class Components**  
Event handlers in class components use `this` binding.

**Example**  
```javascript
class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicked ? "Clicked!" : "Click Me"}
      </button>
    );
  }
}
```

Alternative: Using arrow functions (no need for explicit binding).  
```javascript
class ClickButton extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicked ? "Clicked!" : "Click Me"}
      </button>
    );
  }
}
```

---

#### **Performance Optimization in Class Components**  

| **Technique**       | **Usage** |
|--------------------|----------|
| `shouldComponentUpdate()` | Prevents unnecessary re-renders. |
| `PureComponent` | Automatically implements `shouldComponentUpdate()`. |
| `React.memo()` | Memoizes functional components (for comparison). |

**Example: Using `shouldComponentUpdate()`**  
```javascript
class OptimizedComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return <h1>{this.props.value}</h1>;
  }
}
```

**Example: Using `PureComponent`**  
```javascript
import React, { PureComponent } from 'react';

class OptimizedComponent extends PureComponent {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}
```

---

#### **Comparison: Class Components vs. Functional Components**  

| Feature            | Class Components | Functional Components |
|--------------------|-----------------|----------------------|
| Syntax            | Uses ES6 classes | Uses functions |
| State Management  | Uses `this.state` and `setState()` | Uses `useState()` hook |
| Lifecycle Methods | Yes (`componentDidMount`, `componentDidUpdate`, etc.) | Replaced by `useEffect()` hook |
| Performance       | May require optimizations like `PureComponent` | Generally more optimized |
| Code Length       | More boilerplate code | Concise and easier to read |

---

#### **Conclusion**  
Class components provide built-in state management, lifecycle methods, and event handling but involve more boilerplate code. They are being replaced by functional components with hooks, but they remain relevant in legacy applications.