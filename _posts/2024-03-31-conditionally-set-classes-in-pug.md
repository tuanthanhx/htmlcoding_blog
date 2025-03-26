---
title: "Conditionally set classes in Pug"
excerpt: ""
tags: ["PUG", "HTML"]
coverImage: "/uploads/2025-03/cover_008.jpg"
ogImage:
  url: "/uploads/2025-03/cover_008.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

## Introduction

Pug (formerly Jade) is a powerful templating engine that simplifies writing HTML with its clean, indentation-based syntax. One of its standout features is the flexibility it offers when working with CSS classes—especially when you need to apply them conditionally. Whether you’re toggling a button’s state, highlighting an active menu item, or managing user interface states, knowing how to set classes dynamically in Pug can save you time and make your code more maintainable. In this post, we’ll explore the ins and outs of conditional class assignment in Pug, complete with practical examples to get you started.

## Why Conditional Classes Matter
In modern web development, user interfaces are rarely static. A button might need an `active` class when clicked, a navigation link might highlight with `selected` based on the current page, or a user status might switch between `online` and `offline`. Pug makes this dynamic styling intuitive, letting you leverage JavaScript-like logic directly in your templates. Let’s dive into the techniques you can use.

## Technique 1: Arrays with Ternary Operators
One of the simplest ways to apply a conditional class in Pug is by using an array combined with a ternary operator. This approach is perfect when you have a single class that toggles between two states.

Here’s an example:
```pug
div(class=[isActive ? 'active' : 'inactive'])
```
In this snippet, `isActive` is a variable (perhaps passed from your backend or defined in the template). If `isActive` is `true`, the `div` gets the class `active`; if `false`, it gets `inactive`. The rendered HTML would look like:
```html
<div class="active"></div>  <!-- or "inactive" -->
```

This method is concise and readable, making it ideal for straightforward binary conditions.

## Technique 2: Object Literal Syntax
For more complex scenarios—say, when you need to toggle multiple classes—Pug’s object literal syntax shines. You define an object where the keys are class names and the values are boolean conditions determining whether each class is applied.

Check this out:
```pug
div(class={active: isActive, hidden: !isActive})
```
Here, if `isActive` is `true`, the `div` gets the `active` class; if `false`, it gets `hidden`. The output might be:
```html
<div class="active"></div>  <!-- or "hidden" -->
```

This approach scales beautifully. You can add as many key-value pairs as needed:
```pug
div(class={error: hasError, success: isSuccess, loading: isLoading})
```
The result? A `div` with only the classes whose conditions evaluate to `true`. It’s clean, declarative, and easy to debug.

## Technique 3: Mixing Static and Conditional Classes
Sometimes, you’ll want a mix of static classes (always applied) and conditional ones (applied based on logic). Pug handles this seamlessly:
```pug
div.static-class(class={active: isActive})
```
This renders as:
```html
<div class="static-class active"></div>  <!-- if isActive is true -->
```
The static class `static-class` is always present, while `active` depends on the `isActive` condition. This is particularly useful for base styling combined with state-specific tweaks.

## Real-World Example: User Status Indicator
Let’s put it all together with a practical example. Imagine you’re building a user dashboard, and you want to show a user’s login status with appropriate styling:
```pug
- let isLoggedIn = true
div.user-status(class={logged-in: isLoggedIn, guest: !isLoggedIn})
```
If `isLoggedIn` is `true`, you get:
```html
<div class="user-status logged-in"></div>
```
If `false`:
```html
<div class="user-status guest"></div>
```
Pair this with some CSS (e.g., `.logged-in { color: green; }` and `.guest { color: gray; }`), and you’ve got a dynamic, reusable component.

## Tips for Success
- **Keep Variables Clear**: Ensure your condition variables (like `isActive` or `isLoggedIn`) are defined, either in your Pug template with `- let` or passed from your backend.
- **Debugging**: If a class isn’t applying as expected, double-check your condition’s value—Pug won’t warn you about undefined variables.
- **Combine with Logic**: Pug’s inline JavaScript support means you can use more complex expressions (e.g., `class={active: user.role === 'admin'}`).

## Wrapping Up
Mastering conditional classes in Pug unlocks a world of dynamic, maintainable templates. Whether you prefer the terse array-and-ternary method, the expressive object literal approach, or a hybrid of static and conditional classes, Pug has you covered.