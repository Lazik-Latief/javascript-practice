// ============================================================
//  TOPIC 2: PROMISES & ASYNC / AWAIT
//  Promises represent a value that will be available in the
//  future (resolved) or an error that occurred (rejected).
//  async/await is syntactic sugar built on top of Promises.
// ============================================================

// --- Example 1: Creating a Promise from scratch ---
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(new Error("ID must be positive"));
      return;
    }
    // Simulate network latency
    setTimeout(() => {
      resolve({ id, name: "Alice", role: "admin" });
    }, 500);
  });
}

// --- Example 2: .then() / .catch() / .finally() chain ---
fetchUserById(1)
  .then((user) => {
    console.log("Got user:", user);
    return user.name.toUpperCase(); // pass transformed value forward
  })
  .then((name) => console.log("Upper name:", name))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Request done (always runs)"));


// --- Example 3: async / await (same logic, cleaner syntax) ---
async function loadUser(id) {
  try {
    const user = await fetchUserById(id);
    console.log("Loaded:", user);

    await delay(200); // pause for 200ms without blocking the thread

    return user;
  } catch (err) {
    console.error("Failed to load user:", err.message);
  }
}

loadUser(1);   // ✅ works
loadUser(-5);  // ❌ triggers catch


// --- Example 4: Running promises in parallel ---
async function loadDashboard() {
  const [users, posts, comments] = await Promise.all([
    fetchUserById(1),
    Promise.resolve([{ id: 1, title: "Hello World" }]),
    Promise.resolve([{ id: 1, body: "Great post!" }]),
  ]);

  console.log("Dashboard data:", { users, posts, comments });
}

loadDashboard();


// --- Example 5: Promise.allSettled — don't fail on partial errors ---
async function loadWithFallback() {
  const results = await Promise.allSettled([
    fetchUserById(1),   // ✅
    fetchUserById(-1),  // ❌
    fetchUserById(2),   // ✅
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Request ${index} succeeded:`, result.value);
    } else {
      console.warn(`Request ${index} failed:`, result.reason.message);
    }
  });
}

loadWithFallback();


// --- Example 6: Promise.race — first to finish wins ---
async function fetchWithTimeout(id, timeoutMs) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeoutMs)
  );

  return Promise.race([fetchUserById(id), timeout]);
}

fetchWithTimeout(1, 1000) // 1 second window — should succeed
  .then((u) => console.log("Race winner:", u))
  .catch((e) => console.error(e.message));

fetchWithTimeout(1, 100)  // 100 ms window — likely times out
  .then((u) => console.log("Race winner:", u))
  .catch((e) => console.error(e.message));


// ============================================================
//  KEY TAKEAWAYS
//  • A Promise is pending → fulfilled | rejected.
//  • Chain .then()/.catch()/.finally() or use async/await.
//  • Promise.all  — parallel, fails fast on first rejection.
//  • Promise.allSettled — parallel, waits for all outcomes.
//  • Promise.race — resolves/rejects with the fastest Promise.
// ============================================================
