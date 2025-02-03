# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by an incorrectly used `useEffect` hook.

The `bug.js` file contains the buggy code, which attempts to increment a state variable within the `useEffect` hook, leading to an infinite render cycle.

The `bugSolution.js` file provides the corrected code, demonstrating how to properly manage dependencies in the `useEffect` hook to prevent this issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm start` to start the React development server.
4. Observe the browser console for errors and the rapidly updating counter.

## Solution

The solution involves understanding the dependencies of `useEffect`. It should only run when the values in the dependency array change. In the original code, the state variable count changes within the effect itself, leading to an infinite loop. The solution adds a condition to update the state only under specific circumstances to prevent the infinite loop.