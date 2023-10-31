# React useMemo

Welcome to the useMemo demonstration. This project showcases the importance and functionality of the useMemo hook in React. By using this hook, you can optimize expensive operations and prevent them from re-running on every render.

## There are two main components:

### NameFilterWithoutMemo:

Filters a list of names based on the input filter.
Every time the component re-renders (like when you increment the counter), the filtering operation is executed.
This can lead to performance issues as the operation is run even when the list or the filter hasn't changed.

### NameFilterWithMemo:

Also filters a list of names, but this time using the useMemo hook.
The filtering operation is optimized so that it only runs when there's an actual change in the list of names or the filter.
Even if other parts of the component update (like our counter), useMemo ensures that the expensive operation is not unnecessarily repeated.
To see the difference between the two, observe the console logs. It'll show how often the filtering function is executed in each scenario.

### Why Use useMemo?

React's useMemo hook helps in optimizing performance. When you have computationally expensive operations in your component, running them on every render can be costly. With useMemo, you can ensure these operations only re-run when certain dependencies change, saving unnecessary recalculations and enhancing performance.

## Exercise

**Clone the repository:**
`git clone https://github.com/danielawde9/REACT-USE-MEMO`

Switch to the 'initial' branch for the exercise:

`git checkout initial`

This branch contains the basic setup and structure for you to start experimenting with useMemo.

Install the dependencies:
`npm install`

`npm start`
