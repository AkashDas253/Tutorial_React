### Functional Components in React

#### Description
Functional components are one of the primary ways to define components in React. They are JavaScript functions that accept props as an argument and return React elements. Functional components are simpler and easier to write compared to class components, especially for components that do not require state or lifecycle methods.

#### Syntax
```javascript
function ComponentName(props) {
  // Component logic
  return (
    // JSX to render
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
```

#### Usage
Functional components are used to create stateless components that render UI based on the props passed to them. They are ideal for simple components that do not need to manage their own state or lifecycle methods.

**Example**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));
```

#### Types of Functional Components

1. **Stateless Functional Components**
   - **Description**: Components that do not manage their own state.
   - **Example**:
     ```javascript
     function Welcome(props) {
       return <h1>Welcome, {props.user}</h1>;
     }
     ```

2. **Hooks-based Functional Components**
   - **Description**: Components that use React hooks to manage state and lifecycle methods.
   - **Example**:
     ```javascript
     import React, { useState, useEffect } from 'react';

     function Counter() {
       const [count, setCount] = useState(0);

       useEffect(() => {
         document.title = `You clicked ${count} times`;
       }, [count]);

       return (
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       );
     }
     ```

#### Hooks in Functional Components

1. **useState**
   - **Description**: Hook that allows you to add state to functional components.
   - **Syntax**:
     ```javascript
     const [state, setState] = useState(initialState);
     ```
   - **Example**:
     ```javascript
     import React, { useState } from 'react';

     function Counter() {
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       );
     }
     ```

2. **useEffect**
   - **Description**: Hook that allows you to perform side effects in functional components.
   - **Syntax**:
     ```javascript
     useEffect(() => {
       // Side effect logic
       return () => {
         // Cleanup logic
       };
     }, [dependencies]);
     ```
   - **Example**:
     ```javascript
     import React, { useEffect } from 'react';

     function Timer() {
       useEffect(() => {
         const timer = setInterval(() => {
           console.log('Tick');
         }, 1000);

         return () => clearInterval(timer);
       }, []);

       return <div>Check the console for ticks</div>;
     }
     ```

3. **useContext**
   - **Description**: Hook that allows you to access context values in functional components.
   - **Syntax**:
     ```javascript
     const value = useContext(MyContext);
     ```
   - **Example**:
     ```javascript
     import React, { useContext } from 'react';

     const MyContext = React.createContext('default value');

     function Display() {
       const value = useContext(MyContext);
       return <div>{value}</div>;
     }

     function App() {
       return (
         <MyContext.Provider value="Hello from context">
           <Display />
         </MyContext.Provider>
       );
     }
     ```

#### Advantages of Functional Components

1. **Simplicity**: Easier to read and write compared to class components.
2. **Performance**: Functional components are generally faster because they are simpler and do not have the overhead of class components.
3. **Hooks**: Hooks provide a powerful way to manage state and side effects in functional components.
4. **Testing**: Easier to test due to their simplicity and lack of state.

#### Limitations of Functional Components

1. **State Management**: Before hooks, functional components could not manage state, making them less suitable for complex components.
2. **Lifecycle Methods**: Before hooks, functional components did not have access to lifecycle methods, limiting their capabilities.
3. **Performance**: In some cases, functional components can be less performant due to frequent re-renders, but this can be mitigated with hooks like `useMemo` and `useCallback`.

### Summary
Functional components are a fundamental part of React, offering a simple and efficient way to create components. With the introduction of hooks, functional components can now manage state and side effects, making them as powerful as class components. Understanding the syntax, usage, and limitations of functional components is crucial for building modern React applications.