### React Hooks

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