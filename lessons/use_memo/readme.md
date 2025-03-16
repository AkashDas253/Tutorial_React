### **`useMemo` Hook in React**  

#### **Definition**  
The `useMemo` hook **memoizes** the result of an expensive computation, preventing unnecessary recalculations on every render. It returns a **cached value** that only updates when dependencies change.  

---

## **Why Use `useMemo`?**  
- Optimizes performance by caching computed values.  
- Reduces expensive re-computations in functional components.  
- Works well with `useCallback` and `React.memo`.  

---

## **Syntax**  
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(arg1, arg2), [dependencies]);
```
- **First argument**: A function that returns a computed value.  
- **Second argument**: Dependency array—recomputes only when dependencies change.  

---

## **Basic Example: Without `useMemo` (Unoptimized)**  
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function expensiveCalculation(num) {
    console.log('Expensive Calculation Running...');
    return num * 2;
  }

  const result = expensiveCalculation(count);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
```
- **Issue**: `expensiveCalculation` runs on every render, even when updating `input`.  

---

## **Optimized with `useMemo`**  
```javascript
import { useState, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const result = useMemo(() => {
    console.log('Expensive Calculation Running...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
```
- **Now**, `expensiveCalculation` **only runs when `count` changes**, improving performance.  

---

## **Example with a Large List (Filtering Expensive Computations)**  
### **Without `useMemo` (Inefficient Filtering)**  
```javascript
import { useState } from 'react';

const numbers = Array.from({ length: 10000 }, (_, i) => i);

function FilterNumbers() {
  const [query, setQuery] = useState('');

  const filteredNumbers = numbers.filter(num => num.toString().includes(query));

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredNumbers.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
```
- **Issue**: Filtering runs on **every keystroke**, causing performance issues.  

---

### **Optimized with `useMemo`**  
```javascript
import { useState, useMemo } from 'react';

const numbers = Array.from({ length: 10000 }, (_, i) => i);

function FilterNumbers() {
  const [query, setQuery] = useState('');

  const filteredNumbers = useMemo(() => {
    return numbers.filter(num => num.toString().includes(query));
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredNumbers.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
```
- Now, filtering only happens when `query` **actually changes**, preventing unnecessary re-executions.  

---

## **Comparison: `useMemo` vs `useCallback`**  
| Feature | `useMemo` | `useCallback` |  
|---------|----------|--------------|  
| Memoizes | **Computed Value** | **Function** |  
| Usage | Optimizes expensive calculations | Optimizes function references |  
| Prevents re-execution | ✅ Yes | ✅ Yes |  
| Prevents re-creation | ❌ No | ✅ Yes |  

---

## **When to Use `useMemo`?**  
| Scenario | Use `useMemo`? |  
|----------|----------------|  
| Expensive calculations (e.g., filtering, sorting) | ✅ Yes |  
| Caching computed values | ✅ Yes |  
| Preventing function re-creation | ❌ No (use `useCallback`) |  
| Optimizing simple values | ❌ No (unnecessary) |  

---

## **Best Practices**  
- **Use only for expensive computations** to avoid unnecessary memory usage.  
- **Combine with `useCallback`** when optimizing both functions and values.  
- **Avoid overusing it**, as unnecessary memoization may reduce readability.  

---

## **Conclusion**  
The `useMemo` hook **improves performance** by caching computed values and preventing expensive recalculations. It is especially useful for **complex calculations, filtering, and sorting large datasets**.