## **React Hooks**  

#### **Definition**  
React Hooks are functions that enable state and lifecycle features in functional components, eliminating the need for class components. Introduced in React 16.8, they improve readability, maintainability, and reusability of code.  

---

#### **Why Use Hooks?**  
- Avoid class components (`this` keyword complexity).  
- Enable state management in functional components (`useState`).  
- Allow reusable logic (`custom hooks`).  
- Simplify lifecycle handling (`useEffect`).  

---

#### **List of Hooks**  

| **Hook**              | **Purpose** |
|----------------------|------------|
| `useState`           | Manages state in functional components. |
| `useEffect`          | Handles side effects (API calls, subscriptions). |
| `useContext`         | Accesses context API values. |
| `useReducer`         | Manages complex state logic with reducers. |
| `useRef`             | Accesses DOM elements or persists values without re-rendering. |
| `useMemo`            | Memoizes values for performance optimization. |
| `useCallback`        | Memoizes functions to prevent unnecessary re-creation. |
| `useLayoutEffect`    | Runs synchronously after DOM mutations. |
| `useImperativeHandle`| Customizes instance values exposed via `React.forwardRef`. |
| **Custom Hooks**      | Enables reusable logic across components. |

---


## **Hooks in Details**  

### **1. `useState` – Managing State**  
#### **Definition**:  
`useState` allows a functional component to manage local state. It returns an array containing the current state value and a function to update it.  

#### **Syntax**:  
```javascript
const [state, setState] = useState(initialValue);
```
#### **Example**:  
```javascript
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>;
```
#### **Details**:  
- `useState` preserves state across re-renders.  
- State updates trigger a re-render.  
- State updates can be functional:  
  ```javascript
  setCount(prevCount => prevCount + 1);
  ```

---

### **2. `useEffect` – Handling Side Effects**  
#### **Definition**:  
`useEffect` runs side effects in functional components, replacing lifecycle methods like `componentDidMount` and `componentDidUpdate`.  

#### **Syntax**:  
```javascript
useEffect(() => {
  // Side effect logic
  return () => { /* Cleanup logic */ };
}, [dependencies]);
```
#### **Example**:  
```javascript
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(setData);
}, []);
```
#### **Details**:  
- Runs after every render unless dependencies are provided.  
- Runs once when passed an empty dependency array (`[]`).  
- Can return a cleanup function for resource management.  

---

### **3. `useContext` – Accessing Context API**  
#### **Definition**:  
`useContext` allows components to access values from a **React Context**, eliminating the need for prop drilling.  

#### **Syntax**:  
```javascript
const value = useContext(MyContext);
```
#### **Example**:  
```javascript
const theme = useContext(ThemeContext);

<div>Current Theme: {theme}</div>;
```
#### **Details**:  
- Retrieves the nearest `Provider` value.  
- Prevents prop drilling but does not trigger re-renders efficiently.  
- Best used for **global state management** like themes or authentication.  

---

### **4. `useReducer` – Managing Complex State**  
#### **Definition**:  
`useReducer` is an alternative to `useState` for handling complex state logic using a **reducer function**.  

#### **Syntax**:  
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
#### **Example**:  
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}
```
#### **Details**:  
- Useful for managing complex state transitions.  
- Reduces unnecessary re-renders compared to `useState`.  
- Works similarly to Redux but is local to the component.  

---

### **5. `useRef` – Accessing DOM Elements**  
#### **Definition**:  
`useRef` provides a **mutable reference** that persists across renders, often used to reference **DOM elements** or store previous values.  

#### **Syntax**:  
```javascript
const ref = useRef(initialValue);
```
#### **Example**:  
```javascript
const inputRef = useRef(null);
<input ref={inputRef} />;
<button onClick={() => inputRef.current.focus()}>Focus</button>;
```
#### **Details**:  
- Does not trigger re-renders when updated.  
- Used for **direct DOM manipulation** and persisting values.  
- Can store previous state without causing re-renders.  

---

### **6. `useMemo` – Optimizing Computations**  
#### **Definition**:  
`useMemo` **memoizes** values, preventing expensive calculations from re-running on every render.  

#### **Syntax**:  
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
#### **Example**:  
```javascript
const doubled = useMemo(() => num * 2, [num]);
```
#### **Details**:  
- Improves performance by caching results.  
- Should be used only for **expensive computations**.  

---

### **7. `useCallback` – Optimizing Function Creation**  
#### **Definition**:  
`useCallback` memoizes functions, preventing them from being **re-created** unnecessarily.  

#### **Syntax**:  
```javascript
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```
#### **Example**:  
```javascript
const increment = useCallback(() => setCount(prev => prev + 1), []);
```
#### **Details**:  
- Prevents function re-creation on every render.  
- Useful for passing callbacks to child components to avoid unnecessary re-renders.  

---

### **8. `useLayoutEffect` – Synchronous Effect Handling**  
#### **Definition**:  
`useLayoutEffect` is similar to `useEffect`, but it runs **synchronously** after DOM mutations.  

#### **Syntax**:  
```javascript
useLayoutEffect(() => { /* Runs synchronously */ });
```
#### **Example**:  
```javascript
useLayoutEffect(() => console.log(divRef.current.offsetWidth), []);
```
#### **Details**:  
- Executes before the browser paints the screen.  
- Used when the DOM needs to be updated **before user interaction**.  

---

### **9. `useImperativeHandle` – Customizing Ref Behavior**  
#### **Definition**:  
`useImperativeHandle` allows a component to **expose specific methods** to a `ref`.  

#### **Syntax**:  
```javascript
useImperativeHandle(ref, () => ({ customMethod }));
```
#### **Example**:  
```javascript
useImperativeHandle(ref, () => ({ focus: () => console.log('Focused!') }));
```
#### **Details**:  
- Used with `forwardRef()`.  
- Controls what values the parent component can access.  

---

### **10. Custom Hooks – Reusing Logic**  
#### **Definition**:  
A **custom hook** is a reusable function that encapsulates logic using built-in hooks.  

#### **Example**:  
```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(url).then(res => res.json()).then(setData); }, [url]);
  return data;
}
```
#### **Details**:  
- Custom hooks **must start with "use"** (`useFetch`).  
- Help **encapsulate logic** and improve **code reusability**.

---

## **Comparison: Class Components vs. Hooks**  

| Feature            | Class Components | Hooks |
|--------------------|-----------------|------|
| State Management  | `this.state` + `setState()` | `useState()` |
| Side Effects      | Lifecycle methods (`componentDidMount`, etc.) | `useEffect()` |
| Performance       | Needs `PureComponent` | `useMemo`, `useCallback` |
| Code Complexity   | More boilerplate | More concise |

---

### **Conclusion**  
Hooks simplify state management, lifecycle control, and logic reuse, making functional components more powerful than class components.


---
---

## React Hooks

#### Description
Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.

#### Types of Hooks
1. **Basic Hooks**
   - `useState`
   - `useEffect`
   - `useContext`
2. **Additional Hooks**
   - `useReducer`
   - `useCallback`
   - `useMemo`
   - `useRef`
   - `useImperativeHandle`
   - `useLayoutEffect`
   - `useDebugValue`

### Hooks Table

| Hook                | Syntax                                                                 | Description                                                                 | Purpose                                                                 | Limitations                                                                 | Example                                                                 |
|---------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `useState`          | `const [state, setState] = useState(initialState);`                   | Manages state in functional components.                                     | To add state to functional components.                                    | State updates are asynchronous.                                            | `const [count, setCount] = useState(0);`                                 |
| `useEffect`         | `useEffect(() => { /* effect */ return () => { /* cleanup */ }; }, [dependencies]);` | Performs side effects in functional components.                             | To handle side effects like data fetching, subscriptions, etc.           | Runs after render, not before.                                             | `useEffect(() => { document.title = \`Clicked \${count} times\`; }, [count]);` |
| `useContext`        | `const value = useContext(MyContext);`                                | Accesses context values in functional components.                           | To consume context values.                                               | Requires a context provider higher in the tree.                            | `const theme = useContext(ThemeContext);`                                 |
| `useReducer`        | `const [state, dispatch] = useReducer(reducer, initialState);`        | Manages state with a reducer function.                                      | To handle complex state logic.                                           | More complex than `useState`.                                               | `const [state, dispatch] = useReducer(reducer, { count: 0 });`            |
| `useCallback`       | `const memoizedCallback = useCallback(() => { /* callback */ }, [dependencies]);` | Returns a memoized callback.                                                | To optimize performance by memoizing functions.                          | Can lead to unnecessary re-renders if dependencies are not managed correctly. | `const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);` |
| `useMemo`           | `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` | Returns a memoized value.                                                   | To optimize performance by memoizing values.                             | Can lead to unnecessary re-renders if dependencies are not managed correctly. | `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` |
| `useRef`            | `const refContainer = useRef(initialValue);`                          | Creates a mutable ref object.                                               | To access DOM elements or persist values across renders.                 | Does not notify when its content changes.                                   | `const inputRef = useRef(null);`                                          |
| `useImperativeHandle` | `useImperativeHandle(ref, () => ({ /* instance values */ }), [dependencies]);` | Customizes the instance value that is exposed when using `ref`.             | To customize the ref instance value.                                      | Should be used with `forwardRef`.                                           | `useImperativeHandle(ref, () => ({ scrollToTop }), []);`                  |
| `useLayoutEffect`   | `useLayoutEffect(() => { /* effect */ return () => { /* cleanup */ }; }, [dependencies]);` | Runs synchronously after all DOM mutations.                                 | To read layout from the DOM and synchronously re-render.                 | Blocks the browser from painting.                                           | `useLayoutEffect(() => { /* effect */ }, [dependencies]);`                |
| `useDebugValue`     | `useDebugValue(value);`                                               | Displays a label for custom hooks in React DevTools.                        | To display debug information for custom hooks.                           | Only useful for custom hooks.                                               | `useDebugValue(isOnline ? 'Online' : 'Offline');`                         |

### Summary
React hooks provide a powerful way to manage state, side effects, context, and other React features in functional components. Understanding the syntax, purpose, and limitations of each hook is crucial for building efficient and maintainable React applications.