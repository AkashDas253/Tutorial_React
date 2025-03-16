## **Custom Hooks in React**  

#### **Definition**  
A **custom hook** is a reusable JavaScript function that encapsulates logic using React's built-in hooks. It allows developers to **share stateful logic** across multiple components while keeping the component code **clean and modular**.  

---

## **Why Use Custom Hooks?**  
- **Encapsulation**: Keeps components clean by separating logic.  
- **Code Reusability**: Reduces duplication of stateful logic.  
- **Better Organization**: Encourages modular design.  
- **Improved Readability**: Keeps JSX and logic separate.  

---

## **Creating a Custom Hook**  
A custom hook **must start with "use"**, following React’s convention to detect hooks correctly.  

### **Syntax**  
```javascript
function useCustomHook() {
  // Logic using built-in hooks
  return value;
}
```

---

## **Examples of Custom Hooks**  

### **1. `useCounter` – Custom Hook for Managing Counters**  
#### **Implementation**  
```javascript
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```
#### **Usage in Component**  
```javascript
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```
#### **Key Benefits**  
- Manages counter logic in one place.  
- Can be reused across multiple components.  

---

### **2. `useFetch` – Custom Hook for Fetching Data**  
#### **Implementation**  
```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```
#### **Usage in Component**  
```javascript
function DataComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
#### **Key Benefits**  
- Encapsulates fetching logic.  
- Handles loading and error states.  
- Works for any API URL.  

---

### **3. `useLocalStorage` – Custom Hook for Managing Local Storage**  
#### **Implementation**  
```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```
#### **Usage in Component**  
```javascript
function StorageComponent() {
  const [name, setName] = useLocalStorage('username', 'Guest');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Stored Name: {name}</p>
    </div>
  );
}
```
#### **Key Benefits**  
- Stores and retrieves data from `localStorage`.  
- Persists state between page reloads.  

---

## **Best Practices for Custom Hooks**  
| Practice | Description |
|----------|------------|
| **Start with "use"** | React expects hook names to begin with `use`. |
| **Use other hooks inside** | Custom hooks should use `useState`, `useEffect`, etc. |
| **Keep it pure** | Avoid side effects inside hooks; use `useEffect` instead. |
| **Make it reusable** | Ensure the hook is not tightly coupled to a single component. |
| **Return only necessary values** | Expose only required values/functions. |

---

## **Conclusion**  
Custom hooks **enhance modularity, reusability, and code organization** in React applications. They enable developers to encapsulate logic **efficiently**, keeping component code **clean and maintainable**.