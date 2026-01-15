# JavaScript Array Methods Practice 

This repository contains my daily JavaScript practice focused on **array methods**.  
The goal is to understand **how arrays work internally**, when to use each method, and how to write clean, readable code.

---

##  Topics Covered

This practice file covers the most important JavaScript array methods:

## 1️⃣ forEach()
- Used to iterate over an array
- Does **not return** a new array
- Mainly used for side effects like logging or updating values

```js
array.forEach((item) => {
  console.log(item)
})

```
## 2️⃣ filter()

Creates a new array
Returns elements that satisfy a condition
Commonly used for searching and selecting data
array.filter((item) => item > 4)

Used with:
Numbers
Objects (real-world data like books, users, etc.)

## 3️⃣ map()

Creates a new transformed array
Does not change the original array
Perfect for data manipulation
array.map((item) => item * 10)

## Method Chaining

Multiple operations applied step by step:

array
  .map(val => val * 10)
  .map(val => val + 1)
  .filter(val => val >= 40)

## 4️⃣ reduce()

Reduces an array to a single value
Used for totals, sums, cart prices, counters, etc.
array.reduce((acc, curr) => acc + curr, 0)

## Real-world example:

Calculating total shopping cart price 🛒

## What I Learned

Difference between forEach, map, filter, and reduce
How to work with arrays of objects
Why forEach() does not return values
How method chaining improves readability
How reduce() works internally with accumulator

## Why This Repo?

Daily JavaScript practice
Strengthening core concepts
Building problem-solving mindset
Preparing for interviews and real projects

## Tech Used

JavaScript (ES6+)

## Daily Progress

I update this repository regularly as part of my “Let’s Code” challenge
Each commit represents what I practiced that day.