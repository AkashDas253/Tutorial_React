# **`useReducer` Hook in React**  

## **Definition**  
The `useReducer` hook is an **alternative to `useState`** for managing **complex state logic** in React functional components. It follows a **reducer pattern** (similar to Redux) to manage state transitions **predictably**.

---

## **Why Use `useReducer`?**  
- Useful when **state logic is complex** and involves multiple sub-values.  
- Helps manage **state transitions** based on actions.  
- Preferred when **state updates depend on the previous state**.  

---

## **Syntax**  
```javascript
const [state, dispatch] = useReducer(reducerFunction, initialState);
```
- **`reducerFunction(state, action) → newState`**: A function that determines how state changes based on an action.  
- **`initialState`**: The starting state value.  
- **`dispatch(action)`**: A function used to send actions to the reducer.  

---

## **1. Basic Counter Example (`useState` vs `useReducer`)**  

### **Using `useState` (Simple Approach)**  
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```
- **Works well for simple state changes** but may become **unmanageable** for complex logic.  

---

### **Using `useReducer` (Better for Complex Logic)**  
```javascript
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```
- **More structured** than `useState` for handling multiple actions.  
- **Follows a reducer function** for predictable state transitions.  

---

## **2. Managing Complex State (Todo List Example)**  

### **Using `useState` (Less Scalable Approach)**  
```javascript
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, { id: Date.now(), text: 'New Task', completed: false }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}
```
- Becomes harder to manage when actions like **toggle, delete, edit** are required.  

---

### **Using `useReducer` (Better for Complex Logic)**  
```javascript
import { useReducer } from 'react';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  function addTodo() {
    dispatch({ type: 'add', text: 'New Task' });
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text} {todo.completed ? "✅" : "❌"}</p>
          <button onClick={() => dispatch({ type: 'toggle', id: todo.id })}>Toggle</button>
          <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```
- **Each action (add, toggle, delete) is handled in one place (reducer function)**.  
- **Code remains cleaner and more scalable** as the app grows.  

---

## **3. `useReducer` with `useContext` (Global State Management)**  
Instead of **prop drilling**, `useReducer` can be combined with `useContext` to **manage state globally**.  

### **Creating a Global State with Context**  
```javascript
import { createContext, useReducer, useContext } from 'react';

const CounterContext = createContext();

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
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
  const { state } = useContext(CounterContext);
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
- **Eliminates prop drilling** by making state accessible via `useContext`.  
- **Makes components reusable and modular**.  

---

## **Comparison: `useState` vs. `useReducer`**  
| Feature | `useState` | `useReducer` |  
|---------|---------|-----------|  
| Simplicity | ✅ Simple | ❌ Slightly complex |  
| Best for | ✅ Simple state | ✅ Complex state |  
| State dependent on previous state | ❌ Not ideal | ✅ Best choice |  
| Manages multiple state updates | ❌ Difficult | ✅ Better |  
| Works with `useContext` for global state | ❌ No | ✅ Yes |  

---

## **Best Practices**  
- **Use `useReducer`** for **complex state logic** (e.g., multi-action updates).  
- **Use `useState`** for **simple state changes** (e.g., toggles, counters).  
- Combine `useReducer` **with `useContext`** for **global state management**.  

---

## **Conclusion**  
The `useReducer` hook **simplifies complex state management** by organizing state changes into a **reducer function**. It is **more scalable** than `useState` and is useful for **predictable state transitions**, **complex logic**, and **global state management**.