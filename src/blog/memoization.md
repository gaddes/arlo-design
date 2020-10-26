---
title: "Memoization"
date: "2020-10-26"
tags: [javascript, react]
---

# Summary
[Memoization](/https://en.wikipedia.org/wiki/Memoization/) (not to be confused with memorization!) is the process
of caching the results of an expensive function, so these results can be quickly retrieved on subsequent calls.

When used correctly, this results in faster programs and satisfied users.

But be careful! If used incorrectly, memoization can introduce bugs in your code. **Example here**

# Usage in React
In React there are three main ways to do this, depending on what exactly you want to memoize.

## Values (useMemo)
[https://reactjs.org/docs/hooks-reference.html#usememo](https://reactjs.org/docs/hooks-reference.html#usememo)

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Returns a memoized value.

Pass a “create” function and an array of dependencies. `useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to `useMemo` runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in `useEffect`, not `useMemo`.

## Functions (useCallback)
[https://reactjs.org/docs/hooks-reference.html#usecallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

```
const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  },
  [a, b],
);
```

Returns a memoized callback.

Pass an inline callback and an array of dependencies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. `shouldComponentUpdate`).

**Note:** useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

## Components (React.memo)
[https://reactjs.org/docs/react-api.html#reactmemo](https://reactjs.org/docs/react-api.html#reactmemo)

```
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

`React.memo` is a [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html).

If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

`React.memo` only checks for prop changes. If your function component wrapped in `React.memo` has a `useState` or `useContext` hook in its implementation, it will still rerender when state or context change.

