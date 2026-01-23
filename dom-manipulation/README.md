# Day 16 – DOM Manipulation (Let’s Code)

This repository contains my **Day 16 practice** from the *Let’s Code* challenge, focused on learning and applying **JavaScript DOM (Document Object Model)** concepts.

## 📚 Topics Covered

* Selecting DOM elements using:

  * `getElementById`
  * `getElementsByClassName`
  * `getElementsByTagName`
  * `querySelector`
  * `querySelectorAll`
* Difference between:

  * `innerText`
  * `innerHTML`
  * `textContent`
* Storing DOM elements in variables and reusing them
* CSS manipulation using JavaScript (`element.style`)
* Working with lists (`ul`, `li`) using DOM
* `NodeList` vs `HTMLCollection`

  * Using `forEach` on NodeList
  * Converting HTMLCollection to Array using `Array.from()`
* Creating and appending elements dynamically
* Using `classList` (`add`, `remove`, `toggle`)
* DOM traversing (`parentElement`, `children`, etc.)
* Attribute manipulation (`setAttribute`, `getAttribute`)
* Event handling using `addEventListener`

## 🛠️ Project Structure

```
├── index.html   # HTML structure
├── script.js    # JavaScript DOM logic
└── README.md    # Project documentation
```

## 🚀 Purpose

The goal of this practice is to:

* Understand how JavaScript interacts with HTML & CSS
* Learn real-world DOM manipulation techniques
* Build a strong foundation for frontend development

## ✅ Status

✔ Completed – Day 16 of *Let’s Code*

---

💻 *Practicing daily to become better at Frontend Development.*

##

## DOM Practice Overview

This section documents my hands-on learning of the JavaScript DOM using plain HTML and JavaScript.

##  DOM Selection
Selected elements using getElementById, getElementsByClassName, and querySelector.
Practiced selecting single and multiple elements.
Compared innerText, textContent, and innerHTML using hidden elements.

## Working with Classes & Styles
Applied styles dynamically using element.style.
Used classes and IDs to target elements efficiently.
Changed styles of specific elements at runtime.

## DOM Traversing

Accessed parent and child relationships using:
parentElement
children
firstElementChild and lastElementChild
Understood the difference between children and childNodes.

## Creating Elements Dynamically
Created new elements using document.createElement.
Added attributes using setAttribute.
Inserted text using createTextNode.
Appended elements to the DOM using appendChild.

## Working with Lists (ul / li)
Added new list items dynamically.
Optimized DOM updates by avoiding innerHTML where possible.
Edited existing list items using replaceWith and outerHTML.
Removed elements using .remove().

## Performance & Best Practices
Learned why createTextNode is preferred over innerHTML.
Practiced clean DOM updates to avoid unnecessary reflows.
Wrote reusable functions for DOM operations.

## Learning Outcome
These exercises strengthened my understanding of how JavaScript interacts with HTML in real time and built a solid foundation for advanced frontend concepts and React.js.
