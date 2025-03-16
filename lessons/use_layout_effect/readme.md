# **useLayoutEffect in React**

## **Definition**  
`useLayoutEffect` is a React Hook that **runs synchronously after all DOM mutations** but before the browser paints the screen. It is similar to `useEffect`, but it executes **before the browser updates the UI**, making it useful for measuring DOM elements, applying synchronous updates, and preventing flickering.

---

## **Syntax**  
```jsx
useLayoutEffect(callback, [dependencies])
```

### **Parameters**  
| Parameter | Description |
|-----------|-------------|
| `callback` | The function that runs synchronously after DOM mutations. |
| `[dependencies]` | (Optional) Runs only when dependencies change. |

---

## **Key Differences: `useEffect` vs. `useLayoutEffect`**  
| Feature | `useEffect` | `useLayoutEffect` |
|---------|------------|----------------|
| Execution Timing | Runs **asynchronously** after the render is committed. | Runs **synchronously** after the DOM is updated but **before painting**. |
| Use Case | Fetching data, event listeners, logging. | Measuring layout, synchronizing UI updates, avoiding flickers. |
| Blocking Rendering | ❌ Does **not** block rendering. | ✅ **Blocks** rendering until execution completes. |

---

## **Usage Example**
### **Preventing Flicker During UI Updates**
```jsx
import React, { useState, useLayoutEffect, useRef } from "react";

const Box = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth); // Get width before repaint
  }, []);

  return (
    <div ref={boxRef} style={{ width: "100px", height: "100px", background: "blue" }}>
      Width: {width}px
    </div>
  );
};

export default Box;
```
✅ **Ensures the correct width is set before the browser repaints, avoiding flickering.**

---

## **When to Use `useLayoutEffect`**
- **Measuring the DOM** (e.g., element sizes, positions before re-render).  
- **Synchronizing animations** with UI updates.  
- **Avoiding flickering** when updating styles based on layout changes.  
- **Modifying the DOM before painting** (e.g., dynamically positioning elements).  

---

## **Best Practices**
✅ **Use `useEffect` whenever possible** – `useLayoutEffect` blocks painting and can **cause performance issues**.  
✅ **Use for layout-related side effects** – Only when direct DOM measurement or synchronous updates are necessary.  
✅ **Keep it minimal** – Avoid complex logic inside `useLayoutEffect` to prevent delays.  

---

## **Comparison: `useEffect` vs. `useLayoutEffect`**
| Scenario | Preferred Hook |
|----------|---------------|
| Fetching API data | `useEffect` |
| Logging state updates | `useEffect` |
| Measuring element dimensions | `useLayoutEffect` |
| Synchronizing animations | `useLayoutEffect` |
| Applying styles before the browser paints | `useLayoutEffect` |

---

## **Conclusion**
- `useLayoutEffect` **runs synchronously after the DOM updates but before the browser paints**.  
- **Best used for measuring layout, animations, and preventing flickering.**  
- **Avoid using it unnecessarily** as it can impact performance by delaying rendering. 