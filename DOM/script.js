
/* =========================
 FILE 2: script.js
========================= */

// =========================
// 1. SELECTING ELEMENTS
// =========================

// By ID
const heading = document.getElementById("main-heading");

// By Class Name (HTMLCollection)
const boxes = document.getElementsByClassName("box");

// By Tag Name (HTMLCollection)
const allParagraphs = document.getElementsByTagName("p");

// querySelector (returns FIRST match)
const firstBox = document.querySelector(".box");

// querySelectorAll (returns NodeList)
const allItems = document.querySelectorAll(".item");


// =========================
// 2. innerText vs innerHTML vs textContent
// =========================

heading.innerText = "DOM Manipulation Updated"; // visible text only

// innerHTML (can add HTML)
heading.innerHTML = "<span style='color:red'>DOM</span> Day 16";

// textContent (includes hidden text too)
console.log(heading.textContent);


// =========================
// 3. STORING ELEMENT IN VARIABLE
// =========================

const para = document.querySelector(".description");

// Apply styles using JS
para.style.color = "blue";
para.style.fontSize = "18px";


// =========================
// 4. CSS MANIPULATION USING DOM
// =========================

firstBox.style.backgroundColor = "lightgreen";
firstBox.style.borderRadius = "8px";


// =========================
// 5. EVENT LISTENER
// =========================

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  heading.classList.toggle("highlight");
});


// =========================
// 6. querySelectorAll() → NodeList → forEach
// =========================

allItems.forEach(function (item, index) {
  item.style.color = "purple";
  item.innerText = `Updated Item ${index + 1}`;
});


// =========================
// 7. HTMLCollection → Convert to Array
// =========================

// boxes is HTMLCollection

// Convert to Array
const boxArray = Array.from(boxes);

boxArray.forEach((box, index) => {
  box.style.backgroundColor = "#f2f2f2";
  box.innerText = `Box ${index + 1} updated`;
});


// =========================
// 8. UL / LI DOM OPERATIONS
// =========================

const ul = document.getElementById("list");

// Create new LI
const newLi = document.createElement("li");
newLi.innerText = "Item 4";
newLi.classList.add("item");

// Append to UL
ul.appendChild(newLi);


// =========================
// 9. classList methods
// =========================

newLi.classList.add("highlight");
newLi.classList.remove("highlight");
newLi.classList.toggle("highlight");


// =========================
// 10. DOM TRAVERSING
// =========================

console.log(ul.parentElement); // parent
console.log(ul.children);      // children
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


// =========================
// 11. ATTRIBUTE MANIPULATION
// =========================

button.setAttribute("title", "Click to toggle highlight");
console.log(button.getAttribute("title"));


// =========================
// END OF DAY 16 DOM PRACTICE 🚀
// You covered A LOT today 💪
