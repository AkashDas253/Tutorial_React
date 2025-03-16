# **`useState` Hook in React**  

## **Definition**  
The `useState` hook allows functional components to **manage state** in React.  
- **Replaces `this.state` in class components**  
- **Triggers component re-render when state changes**  
- **Works with primitive values, objects, and arrays**  

---

## **Syntax**  
```javascript
const [state, setState] = useState(initialValue);
```
- **`state`** → The current state value  
- **`setState`** → Function to update state  
- **`initialValue`** → The initial state value  

---

## **1. Basic Example (Number State)**  
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- **`count` starts at `0`**  
- **Clicking the button updates state and triggers re-render**  

---

## **2. State with Strings**  
```javascript
const [name, setName] = useState("Guest");

<input value={name} onChange={(e) => setName(e.target.value)} />;
```
- **Updates the state when typing in the input field**  

---

## **3. State with Objects**  
```javascript
const [user, setUser] = useState({ name: "Alice", age: 25 });

setUser({ ...user, age: 26 }); // Update only `age`, keeping `name`
```
- **Always spread (`...`) the previous state to avoid overwriting other properties**  

---

## **4. State with Arrays**  
```javascript
const [items, setItems] = useState([]);

setItems([...items, { id: items.length, value: "New Item" }]); // Add new item
```
- **Spread the previous array when updating**  

---

## **5. Functional State Update (When Using Previous State)**  
```javascript
setCount(prevCount => prevCount + 1);
```
- **Recommended when updating state based on the previous value**  

---

## **6. Lazy Initialization (Setting Initial State Once)**  
```javascript
const [count, setCount] = useState(() => {
  return expensiveComputation(); // Runs only once
});
```
- **Useful for performance optimization**  

---

## **Comparison: `useState` vs. Class State**  
| Class Component (`this.state`) | Functional Component (`useState`) |  
|-------------------------------|----------------------------------|  
| `this.state = { count: 0 }` | `const [count, setCount] = useState(0);` |  
| `this.setState({ count: count + 1 })` | `setCount(count + 1);` |  
| Merges state automatically | Must manually merge state (objects, arrays) |  

---

## **Best Practices**  
- **Use functional updates** for dependent state changes.  
- **Spread objects and arrays** to avoid overwriting state.  
- **Use lazy initialization** for performance optimization.  

---

## **Conclusion**  
The `useState` hook enables **state management** in functional components, replacing `this.state`. It **triggers re-renders on state updates** and supports **primitive values, objects, and arrays**.