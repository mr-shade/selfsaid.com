---
title: "React Part -1"
date: "2025-12-09T18:48:01.000Z"
slug: "react-part-1-2"
image: "https://blog.codingblocks.com/content/images/2025/12/image-1-1.png"
description: "What Makes React Special?Single Page Application (SPA)Imagine browsing a website that never refreshes, where content flows seamlessly as you navigate. That's the magic of SPAs! Unlike traditional websites that reload entire pages, SPAs update only the content that changes, creating lightning-fast, app-like experiences. Real-world example: Think of Gmail"
tags: ["react"]
original_url: "https://blog.codingblocks.com/2025/react-part-1-2/"
---

## What Makes React Special?

### Single Page Application (SPA)

Imagine browsing a website that never refreshes, where content flows seamlessly as you navigate. That's the magic of SPAs! Unlike traditional websites that reload entire pages, SPAs update only the content that changes, creating lightning-fast, app-like experiences.

**Real-world example:** Think of Gmail - you can read emails, compose messages, and navigate folders without ever seeing a page reload.

![](https://blog.codingblocks.com/content/images/2025/12/image-1.png)

### Component-Based Architecture

React components are small, independent, reusable pieces of code that define the structure and behavior of the user interface (UI). Its like breaking a long html code into small reusable peice called **component !**

Each component is a self-contained piece that you can reuse anywhere in your application.

Website  
├── Header Component  
├── Content Component  
│ ├── Card Component  
│ └── Button Component  
└── Footer Component

![](https://blog.codingblocks.com/content/images/2025/12/image-2.png)

**Benefits:**

*   Reusable code - write once, use everywhere
*   Easy to maintain and debug
*   Better team collaboration

### Virtual DOM Magic

Why React is fast? All because of Virtual dom

React creates a virtual copy of your webpage in memory. When something changes, React compares the virtual copy with the real webpage and updates only what's different. It's like having a super-efficient editor that only changes the words that need updating!

User Action → Virtual DOM Updates → React Compares → Only Changed Parts Update → ⚡ Fast UI

![](https://blog.codingblocks.com/content/images/2025/12/image-3.png)

## Setting Up React with Vite

Vite is a modern build tool that's super fast! Let's set up our first React project.

**Step 1: Create Project**

```
npm create vite@latest
// give project name React1 press enter
//package name package.json if asked
//choose react
//choose javascript
cd React1
npm install
npm run dev
```

**Step 2: Project Structure**

*   Remove assests folder, and all the code inside App.jsx and App.css
*   Install ES7 react/redux extension
*   Type rafce in App.jsx

![](https://blog.codingblocks.com/content/images/2025/12/image-4.png)

## JSX and Babel

### What is JSX?

JSX lets you write HTML-like code in JavaScript. It makes creating UI components intuitive and easy to read!

**Regular JavaScript (Hard to read):**

```JavaScript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, World!'
);
```

```JavaScript
JSX (EAST TO READ):
const element = <h1 className="greeting">Hello, World!</h1>;
```

### What is Babel?

Babel is a translator that converts JSX into regular JavaScript that browsers can understand. Vite handles this automatically for us!

```
//jsx code
const greeting = <h1>Hello, World!</h1>;
```

```
//What Babel converts it to:
const greeting = React.createElement('h1', null, 'Hello, World!');
```

## Creating Your First Functional Component

*   functional component are nothing but just a javascript function that return jsx

Let's create a simple greeting component in App.jsx

```JavaScript
function Greeting() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>You just created your first component!</p>
    </div>
  );
}
```

Call this function in App component

```JavaScript
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
function Greeting() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>You just created your first component!</p>
    </div>
  );
}

export default App;
```

**Key Points:**

*   Component names must start with a capital letter
*   Components are just JavaScript functions that return JSX
*   Calling component is just like using html tag <ComponentName>
*   In React each tag must have a closing tag

* * *

## Embedding JavaScript in JSX

You can embed any JavaScript expression in JSX using curly braces `{}`

```JavaScript
function UserCard() {
  const name = "Kartik Mathur";
  const age = 29;
  const hobbies = ["Reading", "Teaching", "Coding"];
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Birth Year: {2025 - age}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Is Adult? {age >= 18 ? "Yes" : "No"}</p>
    </div>
  );
```

**What you can put inside {}:**

*   Variables: `{name}`
*   Expressions: `{2 + 2}`
*   Function calls: `{getName()}`
*   Ternary operators: `{isLoggedIn ? "Hi" : "Login"}`

## Regular Variable vs State Variable

### Regular Variable - Doesn't Trigger Re-render

```JavaScript
function BrokenCounter() {
  let count = 0;
  
  const increment = () => {
    count = count + 1;
    console.log(count); // This updates, but UI doesn't!
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
// Clicking button won't update the display!
```

```
function App() {
  return (
    <div>
      <Greeting />
      <BrokenCounter />
    </div>
  );
}
function Greeting() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>You just created your first component!</p>
    </div>
  );
}
function BrokenCounter() {
  let count = 0;
  const increment = () => {
    count = count + 1;
    console.log(count); // This updates, but UI doesn't!
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default App;
```

### State Variable - Triggers Re-render

```JavaScript
import { useState } from 'react';

function WorkingCounter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1); // UI updates automatically!
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}
// Clicking button updates the display!
```

Dont worry about the syntax, we will deep dive into useState hook !!

**Key Difference:**

Regular Variable:  
Update Variable → Nothing Happens to UI

State Variable:  
Update State → React Re-renders Component → UI Updates

## What are Hooks?

Hooks are special functions that let you "hook into" React features. They all start with "use".

**Common Hooks:**

*   `useState` - Manage component state
*   `useEffect` - Handle side effects
*   `useContext` - Share data across components
*   `useRef` - Reference DOM elements

**Rules of Hooks:**

*   Only call hooks at the top level (not inside loops or conditions)
*   Only call hooks in functional components

* * *

## useState Hook - Deep Dive

### Basic Syntax

const \[stateVariable, setStateFunction\] = useState(initialValue);

**Breaking it down:**

*   `stateVariable` - The current value
*   `setStateFunction` - Function to update the value
*   `initialValue` - Starting value

* * *

## Project: Counter Application

Let's build a complete counter app with multiple features!

**src/App.jsx**

```JavaScript
import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      
      <div className="display">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={decrement} className="btn-decrement">
          Decrease
        </button>
        <button onClick={reset} className="btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn-increment">
          Increase
        </button>
      </div>
    </div>
  );
}
```

**Key Take Away**

*   States are immutable in javascript
*   Never change it directly, instead of doing count++, do count + 1

**src/App.css**

```CSS
.counter-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
}

.display {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 15px;
  margin: 20px 0;
}

.display h2 {
  font-size: 48px;
  margin: 0;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.btn-increment {
  background: #10b981;
  color: white;
}

.btn-decrement {
  background: #ef4444;
  color: white;
}

.btn-reset {
  background: #f59e0b;
  color: white;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
```

Use it in App Component:

```JavaScript
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

Happy Coding!