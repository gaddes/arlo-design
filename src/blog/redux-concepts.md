---
title: "Redux Concepts"
date: "2020-10-27"
tags: [redux]
---

# Key Concepts

## Action Creators

Function that returns ACTION object.

```
export const fetchCollection = (
  model,
  path,
  params = {},
  opts = {},
  headers = {},
) => (
  {
    type: API_FETCH_COLLECTION,
    meta: {
      successAction: API_FETCH_COLLECTION_SUCCESS,
      failureAction: API_FETCH_COLLECTION_ERROR,
      params,
      model,
      opts,
    },
    payload: {
      method: 'get',
      path,
      params,
      headers,
      responseType: opts.responseType || 'json',
    },
  }
);
```

## Actions
Object containing action TYPE and PAYLOAD (i.e. parts of state to be updated).

See object returned from **Action Creator** function above.

## Reducers
Pure function (prevState, action) => newState - this actually updates state!

```
// Note ES6 default argument - if state is undefined, we set it equal to 0
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

## Sagas
Middleware to handle side effects e.g. Async state updates.

```
// Watcher saga for spawning new tasks
function* watchRequestDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync)
}

// Worker saga that performs the task
function* fetchDogAsync() {
  // Do stuff here
}
```