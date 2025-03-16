# **`useContext` Hook in React**  

## **Definition**  
The `useContext` hook provides a way to access **React Context values** without needing **prop drilling** (passing props manually through multiple levels). It simplifies **global state management** within a component tree.

---

## **Why Use `useContext`?**  
- **Avoids prop drilling** by allowing components to access global data.  
- **Works with `useReducer`** for scalable state management.  
- **Simplifies global theme, authentication, and language settings**.  

---

## **Syntax**  
```javascript
const contextValue = useContext(MyContext);
```
- **`MyContext`**: A context object created using `React.createContext()`.  
- **`contextValue`**: The shared value stored in the context.  

---

## **1. Basic Example (Without `useContext`)**  

When **not using `useContext`**, props must be passed manually:  
```javascript
function App() {
  const theme = "dark";  
  return <Header theme={theme} />;
}

function Header({ theme }) {
  return <Title theme={theme} />;
}

function Title({ theme }) {
  return <p>Current Theme: {theme}</p>;
}
```
- **Problem:** Prop drilling occurs at each component level.  

---

## **2. Using `useContext` (Avoids Prop Drilling)**  
```javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext(); // Create Context

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return <Title />;
}

function Title() {
  const theme = useContext(ThemeContext); // Access Context Value
  return <p>Current Theme: {theme}</p>;
}
```
- **No need to pass props manually**.  
- **Any component inside `ThemeContext.Provider` can access the value**.  

---

## **3. `useContext` with `useReducer` (Global State Management)**  

### **Creating a Global Counter**  
```javascript
import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext(); // Step 1: Create Context

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { state } = useContext(CounterContext); // Step 3: Access Context
  return <p>Count: {state.count}</p>;
}

function CounterButtons() {
  const { dispatch } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterButtons />
    </CounterProvider>
  );
}
```
- **State is managed globally** using `useReducer`.  
- **Any child component can access `state` and `dispatch` using `useContext`**.  

---

## **4. Multiple Contexts (Theme + Authentication)**  
```javascript
import { createContext, useContext } from 'react';

const ThemeContext = createContext();
const AuthContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <AuthContext.Provider value={{ user: "John Doe" }}>
        <Header />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  return <p>User: {auth.user}, Theme: {theme}</p>;
}
```
- **Supports multiple contexts** (Theme and Authentication).  
- **Each context provides a different type of global data**.  

---

## **Comparison: `useContext` vs. Prop Drilling**  
| Feature | Prop Drilling | `useContext` |  
|---------|-------------|-------------|  
| Simplicity | ❌ Gets complex for deep components | ✅ Direct access |  
| Performance | ❌ Passing props manually | ✅ Avoids unnecessary re-renders |  
| Scalability | ❌ Hard to manage for large apps | ✅ Suitable for global state |  

---

## **Best Practices**  
- Use **context only for global state**; avoid it for local state.  
- **Combine `useContext` with `useReducer`** for better state management.  
- **Wrap only necessary components** in `Context.Provider` to avoid unnecessary re-renders.  

---

## **Conclusion**  
The `useContext` hook **avoids prop drilling** and simplifies **global state access**. When combined with `useReducer`, it provides **scalable state management** for large applications.