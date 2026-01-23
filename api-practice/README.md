# API Practice with JavaScript

This project is created to practice **working with APIs in JavaScript**, focusing on how asynchronous code works using:

- Promises
- fetch API
- async / await
- Error handling
- DOM manipulation

The goal is to understand how data flows from an API to the UI.

---

## 🔹 What This Project Demonstrates

### 1. Custom Promise (Basic Understanding)
- A manually created Promise using `new Promise()`
- Uses `resolve()` to return data after a delay
- Uses `.then()` to consume resolved data
- Demonstrates how asynchronous code works

Example:
- Resolving user-related data after 2 seconds
- Displaying the resolved data on the page

---

### 2. Promise + Fetch API with Error Control
- A custom Promise that either:
  - Resolves with an API URL
  - Or rejects with a manual error
- Uses `.then()` chaining to:
  - Fetch API data
  - Convert response to JSON
  - Display the result on the UI
- Uses `.catch()` to handle errors

This helps understand how **Promise chaining** works in real-world API calls.

---

### 3. Async / Await (Modern JavaScript)
- Uses `async` and `await` for cleaner asynchronous code
- Uses `try...catch` for error handling
- Fetches data from an API and updates the DOM
- Demonstrates how async/await is easier to read than `.then()` chains

This is the **recommended approach in production applications**.

---

### 4. Direct Fetch API Usage
- Uses `fetch()` directly without custom Promises
- Handles API response and errors
- Displays fetched data on the page

This is the most commonly used pattern in frontend applications.

---

## 🔹 APIs Used

- **Official Joke API**  
  https://official-joke-api.appspot.com/random_joke

---

## 🔹 Concepts Practiced

- JavaScript Promises
- Promise chaining (`.then()`)
- Error handling (`.catch()`, `throw new Error`)
- fetch API
- async / await
- DOM manipulation using JavaScript

---

## 🔹 Purpose of This Project

This project is part of my learning process to:
- Improve understanding of asynchronous JavaScript
- Practice real-world API handling


---

