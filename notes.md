## JavaScript Promises – Simple Notes
## 🔹 What is a Promise?

A Promise is an object that represents the future result of an asynchronous operation.

# It helps handle:

API calls
setTimeout
File reading
Database requests
Any task that takes time

# 🔹 Why We Need Promises?

JavaScript is single-threaded.
If something takes time (like fetching data), we don’t want JS to stop everything.
Promise allows JS to:
Continue running other code
Handle result later when ready

# 🔹 Promise States

A Promise has 3 states:

# Pending → Waiting for result

# Fulfilled → Success

# Rejected → Failed

# 🔹 Creating a Promise
```
const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }

});
```
# 📝 Notes:

new Promise() creates a promise
resolve() → success
reject() → error

# 🔹 Handling Promise (Using .then & .catch)
```
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  ```
# 📝 Notes:

.then() runs when resolved

.catch() runs when rejected

# 🔹 Using Async / Await (Modern Way)
```
async function run() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();
```
# 📝 Notes:

async makes function return a Promise
await waits for Promise result
try/catch handles errors

# 🔹 Real Example (setTimeout)
```
const example = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("Data received after 2 seconds");
  }, 2000);

});

example.then(data => console.log(data));
```

# 🔹 Fetch API (Returns Promise)
```
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
  ```
# 🔹 Promise Flow (Simple)

Promise created → Pending
Async task runs
resolve() → Fulfilled
reject() → Rejected
Result handled using .then() or await

# 🔹 Important Concepts to Practice

Promise chaining
Promise.all()
Error handling
Async/Await
Fetch API

# Summary

Promise handles asynchronous code
Cleaner than callbacks
Async/Await is modern and easier to read
Fetch returns a Promise