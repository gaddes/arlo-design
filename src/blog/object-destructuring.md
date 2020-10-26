---
title: "Object Destructuring"
date: "2020-10-27"
tags: [javascript]
---

# Summary
Object Destructuring allows us to take the **properties of an existing object** and copy them for use within a block or function.
We can also assign a **different name** to these properties, as shown below.

Here's some extra information from [javascript.info](https://javascript.info/destructuring-assignment#object-destructuring)

If we want to assign a property to a variable with another name, for instance, options.width to go into the variable named w, then we can set it using a colon:
```
let options = {
  title: 'Menu',
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

The colon shows "what : goes where". In the example above the property width goes to w, property height goes to h, and title is assigned to the same name. 

# Nested Objects
We can destructure nested objects like this:

```
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};

const { education: {degree} } = user;
console.log(degree); // Masters
```