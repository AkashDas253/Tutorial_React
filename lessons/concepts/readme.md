## React Concepts and Sub-Concepts

## React Concepts  

- **Core Principles**  
  - Component-based architecture  
  - Declarative UI  
  - Unidirectional data flow  

- **React Components**  
  - Functional Components  
  - Class Components  
  - JSX Syntax  
  - Props  
  - State  
  - Lifecycle Methods  
  - Component Re-rendering  

- **Hooks**  
  - `useState`  
  - `useEffect`  
  - `useContext`  
  - `useReducer`  
  - `useRef`  
  - `useMemo`  
  - `useCallback`  
  - Custom Hooks  

- **Event Handling**  
  - Synthetic Events  
  - Event Binding  
  - Handling User Input  
  - Preventing Default Behavior  

- **Conditional Rendering**  
  - `if` Statements  
  - Ternary Operators  
  - Logical `&&` Operator  
  - Guard Clauses  

- **Lists and Keys**  
  - Rendering Lists  
  - Using `key` Props  
  - Handling Dynamic Lists  

- **Forms in React**  
  - Controlled Components  
  - Uncontrolled Components  
  - Handling Form Submission  
  - Using `useRef` in Forms  

- **React Router**  
  - BrowserRouter  
  - Route Components  
  - Link and NavLink  
  - Nested Routes  
  - Redirects and Navigation  
  - Route Parameters  

- **State Management**  
  - Local State (`useState`)  
  - Global State (`useContext`, Redux)  
  - Server State (React Query, SWR)  
  - URL State (Query Parameters, React Router)  

- **Context API**  
  - Creating Context  
  - Providing Context  
  - Consuming Context  

- **React and APIs**  
  - Fetching Data with `fetch`  
  - Fetching Data with Axios  
  - Handling API Responses  
  - Handling Errors  

- **Performance Optimization**  
  - Memoization (`useMemo`, `React.memo`)  
  - Lazy Loading (`React.lazy`, `Suspense`)  
  - Virtualization (`react-window`)  
  - Avoiding Unnecessary Renders  

- **Higher-Order Components (HOC)**  
  - Concept and Use Cases  
  - Implementing HOCs  
  - Wrapping Components  

- **Error Handling**  
  - Error Boundaries  
  - Try-Catch in Async Functions  
  - Fallback UI  

- **Testing in React**  
  - Unit Testing (`Jest`, `React Testing Library`)  
  - End-to-End Testing (`Cypress`)  

- **Server-Side Rendering (SSR) and Static Site Generation (SSG)**  
  - Next.js Overview  
  - SSR vs. SSG  
  - API Routes  

- **Progressive Web Apps (PWAs)**  
  - Service Workers  
  - Caching Strategies  

- **React Native**  
  - Differences from React.js  
  - Mobile Components (`View`, `Text`, `Touchable`)  
  - Navigation in React Native  
  - State Management in React Native  

---
---

#### 1. **Components**
   - **Functional Components**: Stateless components defined as functions.
   - **Class Components**: Stateful components defined as ES6 classes.
   - **Pure Components**: Components that render the same output for the same props and state.
   - **Higher-Order Components (HOCs)**: Functions that take a component and return a new component.
   - **Controlled Components**: Components that control form elements in React.
   - **Uncontrolled Components**: Components that manage their own state internally.

#### 2. **JSX (JavaScript XML)**
   - **Syntax**: XML-like syntax used to describe UI elements.
   - **Embedding Expressions**: Embedding JavaScript expressions within JSX.
   - **Attributes**: Using attributes to pass data to elements.
   - **Children**: Nesting elements within other elements.

#### 3. **State and Lifecycle**
   - **State**: An object that determines how a component renders and behaves.
   - **setState()**: Method to update the state and re-render the component.
   - **Lifecycle Methods**: Methods that get called at different stages of a component's lifecycle (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

#### 4. **Props (Properties)**
   - **Passing Props**: Passing data from parent to child components.
   - **PropTypes**: Type-checking for props using `PropTypes`.
   - **Default Props**: Setting default values for props.

#### 5. **Event Handling**
   - **Handling Events**: Handling user interactions like clicks, form submissions, etc.
   - **Synthetic Events**: Cross-browser wrapper around the browser's native event.
   - **Event Binding**: Binding event handlers to the component instance.

#### 6. **Conditional Rendering**
   - **If-Else Statements**: Using JavaScript conditional statements to render elements.
   - **Ternary Operators**: Using ternary operators for inline conditional rendering.
   - **Logical && Operator**: Using logical AND operator for conditional rendering.

#### 7. **Lists and Keys**
   - **Rendering Lists**: Rendering lists of elements using `map()`.
   - **Keys**: Unique identifiers for list items to help React identify which items have changed.

#### 8. **Forms**
   - **Controlled Components**: Form elements controlled by React state.
   - **Uncontrolled Components**: Form elements that maintain their own state.
   - **Form Submission**: Handling form submission events.

#### 9. **Refs**
   - **Creating Refs**: Using `React.createRef()` to create references to DOM elements.
   - **Accessing Refs**: Accessing the DOM nodes or React elements using refs.
   - **Callback Refs**: Using callback functions to set refs.

#### 10. **Context API**
   - **Creating Context**: Using `React.createContext()` to create a context.
   - **Provider**: Using `Provider` to pass the context value to child components.
   - **Consumer**: Using `Consumer` to consume the context value in child components.

#### 11. **Hooks**
   - **useState**: Hook to add state to functional components.
   - **useEffect**: Hook to perform side effects in functional components.
   - **useContext**: Hook to use context in functional components.
   - **useReducer**: Hook to manage complex state logic.
   - **useRef**: Hook to create mutable refs.
   - **Custom Hooks**: Creating custom hooks to encapsulate reusable logic.

#### 12. **React Router**
   - **Router**: Component to wrap the application and enable routing.
   - **Route**: Component to define a route and its component.
   - **Link**: Component to create navigational links.
   - **Switch**: Component to render the first matching route.
   - **Redirect**: Component to redirect to a different route.

#### 13. **State Management**
   - **Redux**: State management library for managing application state.
   - **Context API**: Using React's Context API for state management.
   - **MobX**: State management library that uses observables.

#### 14. **Performance Optimization**
   - **Memoization**: Using `React.memo` to memoize functional components.
   - **PureComponent**: Using `PureComponent` to optimize class components.
   - **useMemo**: Hook to memoize expensive calculations.
   - **useCallback**: Hook to memoize callback functions.
   - **Lazy Loading**: Using `React.lazy` and `Suspense` to lazy load components.

#### 15. **Testing**
   - **Jest**: Testing framework for JavaScript.
   - **React Testing Library**: Library for testing React components.
   - **Enzyme**: Testing utility for React.

#### 16. **Server-Side Rendering (SSR)**
   - **Next.js**: Framework for server-side rendering in React.
   - **Static Site Generation (SSG)**: Generating static HTML pages at build time.

#### 17. **TypeScript with React**
   - **Type Annotations**: Adding type annotations to React components.
   - **Interfaces**: Defining interfaces for props and state.
   - **Generics**: Using generics for reusable components.

#### 18. **Error Handling**
   - **Error Boundaries**: Components that catch JavaScript errors in their child component tree.
   - **Fallback UI**: Rendering a fallback UI when an error is caught.

#### 19. **Code Splitting**
   - **Dynamic Import**: Using `import()` to dynamically load modules.
   - **React.lazy**: Lazy loading components with `React.lazy`.
   - **Suspense**: Component to handle loading states for lazy-loaded components.

#### 20. **Styling**
   - **CSS Modules**: Using CSS modules for scoped styling.
   - **Styled Components**: Using `styled-components` for CSS-in-JS.
   - **Sass**: Using Sass for advanced CSS features.
   - **Inline Styles**: Applying styles directly in the component.

#### 21. **Build Tools**
   - **Webpack**: Module bundler for JavaScript applications.
   - **Babel**: JavaScript compiler for using the latest JavaScript features.
   - **Create React App**: CLI tool to set up a new React project with a pre-configured build setup.

#### 22. **Deployment**
   - **Netlify**: Platform for deploying static sites and serverless functions.
   - **Vercel**: Platform for deploying frontend applications.
   - **GitHub Pages**: Hosting service for static websites.
