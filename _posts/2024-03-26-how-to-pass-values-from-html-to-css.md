---
title: "How to Pass Values from HTML to CSS"
excerpt: ""
tags: ["HTML", "CSS"]
coverImage: "/uploads/2025-03/cover_007.jpg"
ogImage:
  url: "/uploads/2025-03/cover_007.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

## A Beginner’s Guide

When working with HTML Coding, you might wonder how to connect your HTML structure with your CSS styles dynamically. While HTML defines the content and structure, CSS controls the presentation—but what if you want to "pass" specific values from HTML to CSS to make your styles more flexible? In this post, we’ll explore a few clever ways to achieve this, focusing on modern techniques like CSS custom properties (variables), data attributes, and class-based styling. Let’s dive in!

### 1. Using CSS Custom Properties (Variables)
One of the most powerful and modern ways to pass values from HTML to CSS is through **CSS custom properties**, often called CSS variables. These allow you to define values in your HTML (or CSS) and use them dynamically in your styles.

**How It Works:**
- Define a custom property in your HTML using an inline `style` attribute or in a `<style>` tag.
- Reference it in your CSS using the `var()` function.

**Example:**
```html
<div style="--my-color: #3498db;" class="box">
  This box has a dynamic background!
</div>
```
```css
.box {
  background-color: var(--my-color);
  padding: 20px;
  color: white;
}
```
Here, the `--my-color` variable is set in the HTML and picked up by the CSS. You can change the value of `--my-color` in the HTML, and the CSS will adapt automatically. This is great for themes or user-customizable elements!

**Why It’s Awesome:**
- Super flexible and reusable.
- Works with JavaScript too (you can update variables dynamically).
- Supported in all modern browsers.

### 2. Leveraging Data Attributes
Another cool way to pass values is by using **HTML data attributes**. These are custom attributes you can add to any HTML element, prefixed with `data-`, and then access them in CSS using the `attr()` function or with JavaScript.

**How It Works:**
- Add a `data-*` attribute to your HTML element.
- Use it in CSS (though `attr()` has limited practical use currently) or pair it with CSS selectors.

**Example:**
```html
<div data-size="50px" class="square"></div>
```
```css
.square {
  width: attr(data-size);
  height: attr(data-size);
  background-color: #e74c3c;
}
```
As of now, support for advanced `attr()` is still growing—you can track its progress across browsers on CanIUse at https://caniuse.com/css3-attr.

Since `attr()` isn’t fully supported for all properties yet, a more practical approach is combining data attributes with CSS and JavaScript. For now, you might use a class or variable instead, but keep an eye on this—it’s the future!

**Why It’s Useful:**
- Perfect for passing metadata from HTML.
- Integrates well with JavaScript for dynamic updates.

### 3. Class-Based Value Passing
The simplest and most traditional way to "pass" values is by using **classes**. You define specific classes in your CSS with predefined styles, then apply them in your HTML to control the look.

**How It Works:**
- Define styles for different classes in your CSS.
- Add the appropriate class to your HTML element.

**Example:**
```html
<div class="box red">Red Box</div>
<div class="box blue">Blue Box</div>
```
```css
.box {
  padding: 20px;
  color: white;
}
.red {
  background-color: #e74c3c;
}
.blue {
  background-color: #3498db;
}
```
Here, the "value" (e.g., the color) is passed by choosing the right class. It’s not as dynamic as variables, but it’s reliable and widely supported.

**Why It’s Great:**
- Easy to understand and implement.
- No fancy browser requirements.
- Perfect for static designs.

### Bonus: Combining with JavaScript
If you need even more control, JavaScript can bridge HTML and CSS beautifully. For example, you can read values from HTML (like data attributes or input fields) and update CSS variables or classes dynamically.

**Example:**
```html
<input type="color" id="colorPicker" value="#3498db">
<div class="dynamic-box">Watch me change!</div>
```
```javascript
const picker = document.getElementById("colorPicker");
const box = document.querySelector(".dynamic-box");

picker.addEventListener("input", () => {
  box.style.setProperty("--box-color", picker.value);
});
```
```css
.dynamic-box {
  background-color: var(--box-color);
  padding: 20px;
}
```
This lets users pick a color, and the box updates in real-time—pretty neat, right?

### Which Method Should You Use?
- **CSS Variables**: Best for dynamic, reusable values (e.g., themes, user preferences).
- **Data Attributes**: Ideal for metadata or when paired with JavaScript.
- **Classes**: Perfect for simple, static designs.
- **JavaScript**: Use it when you need interactivity or complex logic.

### Wrapping Up
Passing values from HTML to CSS doesn’t have to be complicated. Whether you’re using CSS custom properties for flexibility, data attributes for metadata, or good old classes for simplicity, you’ve got options to make your web projects more dynamic and maintainable.