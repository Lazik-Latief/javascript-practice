## Overview

This folder contains hands-on practice files focused on JavaScript Events, Event Handling, and Timers.
All examples are written using pure HTML + JavaScript to deeply understand how events work under the hood.

## Files Explanation
## 1️⃣ Image Click & Event Delegation (one.html)

Concepts covered:
Event listeners using addEventListener
Event bubbling & propagation
event.target and event.currentTarget
Event delegation using parent elements
Dynamically removing DOM elements
Preventing default behavior (preventDefault)
Stopping event bubbling (stopPropagation)

What it does:
Clicking an image removes it from the list
Only image clicks are handled (safe check using tagName)
Demonstrates efficient event handling using a single listener

## 2️⃣ setTimeout & clearTimeout (two.html)

Concepts covered:
setTimeout() for delayed execution
clearTimeout() to cancel execution
DOM manipulation after a delay
Event-based control using buttons

What it does:
Changes heading text after 2 seconds
Clicking Stop cancels the text change
Demonstrates real-world use of canceling scheduled tasks

## 3️⃣ setInterval & clearInterval (three.html)
Concepts covered:
setInterval() for repeated execution
clearInterval() to stop intervals
Start/Stop interval control using buttons
Avoiding multiple intervals
Passing arguments to interval functions

What it does:
Logs a message with timestamp every second
Start button begins logging
Stop button stops the interval cleanly

## Key Learnings (Summary)

By completing these files, I learned:
How JavaScript events work internally
Event bubbling and delegation for performance optimization
How to safely handle user interactions in the DOM
The difference between setTimeout and setInterval
How to control timers using events
Writing clean, readable, and scalable event-driven code

## Why This Matters

These concepts are core JavaScript fundamentals and are heavily used in:
Frontend frameworks (React, Vue)
Real-world UI interactions
Interviews and machine coding rounds