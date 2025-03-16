# **`useEffect` Hook in React**  

## **Definition**  
The `useEffect` hook is used for **side effects** in React functional components, such as:  
- **Fetching data from an API**  
- **Subscribing to events**  
- **Updating the DOM**  
- **Managing timers (setInterval, setTimeout)**  

It **replaces lifecycle methods** like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

---

## **Syntax**  
```javascript
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```
- **First argument:** A function containing the side effect.  
- **Return function (optional):** Runs during cleanup (before the effect runs again or when the component unmounts).  
- **Second argument (`dependencies` array):** Controls when the effect runs.  

---

## **1. Basic Example (Runs on Every Render)**  
```javascript
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- **Effect runs after every render** (because no dependency array is provided).  
- **Console logs every time `count` updates**.  

---

## **2. Run Effect Only Once (Like `componentDidMount`)**  
```javascript
useEffect(() => {
  console.log("Component mounted!");
}, []);
```
- **Empty dependency array (`[]`) ensures it runs only once, on mount**.  
- **Useful for fetching data when the component loads**.  

---

## **3. Effect Runs on Dependency Change**  
```javascript
useEffect(() => {
  console.log(`Count changed to: ${count}`);
}, [count]);
```
- **Runs only when `count` changes**.  
- **Prevents unnecessary executions**.  

---

## **4. Cleanup Function (Like `componentWillUnmount`)**  
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval cleared!");
  };
}, []);
```
- **Starts an interval when the component mounts**.  
- **Cleans up (`clearInterval`) when the component unmounts**.  

---

## **5. Fetch Data Using `useEffect`**  
```javascript
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json.slice(0, 5))); // Fetch first 5 posts
  }, []);

  return (
    <ul>
      {data.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```
- **Fetches data once when the component mounts**.  
- **Prevents re-fetching by using an empty dependency array (`[]`)**.  

---

## **6. `useEffect` with Event Listeners**  
```javascript
useEffect(() => {
  const handleResize = () => {
    console.log(`Window width: ${window.innerWidth}`);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```
- **Adds an event listener when the component mounts**.  
- **Removes it when unmounting to prevent memory leaks**.  

---

## **Comparison: `useEffect` vs. Class Lifecycle Methods**  
| Lifecycle Method (Class) | Equivalent `useEffect` |  
|-------------------------|----------------------|  
| `componentDidMount` | `useEffect(() => {...}, [])` |  
| `componentDidUpdate` | `useEffect(() => {...}, [dependencies])` |  
| `componentWillUnmount` | `useEffect(() => { return () => {...}; }, [])` |  

---

## **Best Practices**  
- **Use the cleanup function for event listeners and timers** to avoid memory leaks.  
- **Optimize performance by specifying dependencies** to avoid unnecessary re-renders.  
- **Avoid directly modifying state inside `useEffect`** without handling infinite loops.  

---

## **Conclusion**  
The `useEffect` hook **handles side effects in functional components**, replacing class lifecycle methods. It runs **after rendering** and supports **cleanup functions** for efficient resource management.