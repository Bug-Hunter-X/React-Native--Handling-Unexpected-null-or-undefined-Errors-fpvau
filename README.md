# React Native: Handling Unexpected null or undefined Errors

This repository demonstrates a common error in React Native applications: encountering unexpected `null` or `undefined` values when accessing object properties.  The error often arises from asynchronous operations or improper data handling, making debugging challenging.

## Problem
The `bug.js` file showcases the problem.  It attempts to access properties of an object that might be `null` or `undefined`, leading to a runtime error.  This is a frequent issue in asynchronous JavaScript code where the data might not be ready when accessed.

## Solution
The `bugSolution.js` file offers a solution using optional chaining (`?.`) and nullish coalescing (`??`).  These features provide a concise way to safely access properties and provide default values when encountering `null` or `undefined`. This approach prevents runtime crashes and improves code robustness.