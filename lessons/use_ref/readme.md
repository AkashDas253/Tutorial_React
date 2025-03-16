### **`useRef` Hook in React**  

#### **Definition**  
The `useRef` hook **creates a mutable reference** that persists across renders without causing re-renders. It can be used to reference **DOM elements** or **store mutable values**.  

---

## **Why Use `useRef`?**  
- **Accessing and manipulating DOM elements**.  
- **Storing mutable values** without triggering re-renders.  
- **Keeping previous values** (useful in tracking previous state).  

---

## **Syntax**  
```javascript
const refContainer = useRef(initialValue);
```
- **`initialValue`**: Optional, sets the initial value of the reference.  
- **`refContainer.current`**: Holds the reference value and can be updated.  

---

## **1. Using `useRef` to Access a DOM Element**  
### **Without `useRef` (Using `document.querySelector`)**  
```javascript
function InputFocus() {
  function focusInput() {
    document.querySelector('input').focus();
  }

  return (
    <div>
      <input type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```
- **Issue**: Directly manipulating the DOM is not a recommended React approach.  

---

### **With `useRef` (Better Approach)**  
```javascript
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```
- **Now**, `inputRef.current` directly accesses the DOM element without re-rendering the component.  

---

## **2. Using `useRef` to Store Mutable Values**  
### **Without `useRef` (Using `useState`)**  
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  let previousCount = count;

  function increment() {
    setCount(count + 1);
    previousCount = count; // Gets reset on re-render
  }

  return (
    <div>
      <p>Previous Count: {previousCount}</p>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
- **Issue**: `previousCount` resets on every render, losing past state.  

---

### **With `useRef` (Correct Approach)**  
```javascript
import { useRef, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  function increment() {
    previousCount.current = count; // Stores previous count
    setCount(count + 1);
  }

  return (
    <div>
      <p>Previous Count: {previousCount.current}</p>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
- **Now**, `previousCount.current` persists between renders without triggering re-renders.  

---

## **3. Using `useRef` to Persist Intervals**  
```javascript
import { useRef, useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <p>Timer: {count} seconds</p>;
}
```
- **Benefit**: `intervalRef.current` allows stopping the timer without re-rendering.  

---

## **Comparison: `useRef` vs. `useState`**  
| Feature | `useRef` | `useState` |  
|---------|---------|-----------|  
| Causes re-render | ❌ No | ✅ Yes |  
| Holds DOM references | ✅ Yes | ❌ No |  
| Stores mutable values | ✅ Yes | ✅ Yes |  
| Good for tracking previous state | ✅ Yes | ❌ No |  

---

## **Best Practices**  
- Use `useRef` when **modifying values without triggering re-renders**.  
- Use it for **DOM manipulations** instead of `document.querySelector`.  
- Avoid using it as a replacement for `useState` in cases where UI updates are required.  

---

## **Conclusion**  
The `useRef` hook is useful for **accessing DOM elements, storing mutable values without causing re-renders, and persisting data across renders**.