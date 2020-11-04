---
title: "Event Delegation"
date: "2020-11-04"
tags: ['javascript', 'react']
---

## Key Concepts
### Event Delegation

Event delegation is useful when we have multiple sibling elements and we don't want to attach an event handler to each individual one. A classic example would be a list `<ul>` containing many `<li>`.

Through the magic of event delegation we can add the event listener once to a parent element, and check `event.target`  within the handler to determine which specific element captured the event.

**Note:** the event listener does not have to be assigned to the direct parent. Because of "bubbling", we can add it to any element further up the chain.

### Bubbling

Bubbling is a concept that involves checking for an event handler on the element on which the event was fired. If no event handler is found, the event "bubbles up" to the parent element, ad infinitum, until a handler is found.

[This link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) provides an excellent breakdown of both the bubbling and capturing phases that run in modern browsers. Unfortunately there is no direct anchor to the subheading; just search the page for "Bubbling and capturing explained".

### event.target

`event.target` allows us to set an event listener on a parent element (e.g. `ul`) and when an event such as "click" occurs on one of its children (e.g. `li`), we can know which specific child was clicked by checking `event.target` which, in this case, will contain the "clicked" `li` element.

Example:
```
function hide(e) {
	// 'e.target' contains the clicked element.
	// This will hide the specific element that was clicked.
	e.target.style.visibility = 'hidden';
}

// For brevity, let's pretend that parentEl contains
//  multiple children, each of which can be clicked.
// e.g. <ul> containing multple <li>
parentEl.addEventListener('click', hide);
```


## Usage in React
When using React, we generally don't have to worry about event delegation. Under the hood, and prior to v17.0, [React made use of event delegation and listened at the document level](https://github.com/facebook/react/issues/13635#issuecomment-421085767).

One of the major changes in v17.0 is that [React now attaches event handlers to the root DOM container into which your React tree is rendered](https://reactjs.org/blog/2020/10/20/react-v17.html#changes-to-event-delegation).

As developers creating React components, we simply attach our handlers to the component in question, and let React handle the handler!

Example:
```
const Button = props => (
	<button onClick={props.onClick}>
	  click me!
	</button>
);
```


## References
* [Event.target - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
* [Introduction to events | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
* [React v17.0 – React Blog](https://reactjs.org/blog/2020/10/20/react-v17.html#changes-to-event-delegation)