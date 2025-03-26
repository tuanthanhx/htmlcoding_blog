---
title: "Creating a Responsive Font Size with clamp() and vw in CSS"
excerpt: ""
tags: ["Responsive", "CSS"]
coverImage: "/uploads/2025-03/cover.jpg"
ogImage:
  url: "/uploads/2025-03/cover.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

## Introduction

When designing responsive websites, ensuring that text scales smoothly across different screen sizes improves readability and aesthetics. A great way to achieve this is using the `clamp()` function in CSS, combined with `vw` (viewport width). This tutorial will guide you through creating a responsive font size that adheres to specific constraints.

### Our Goal

We want the font size to:

1. Be **fixed at 16px** when the viewport width is **less than 640px**.
2. Be **fixed at 36px** when the viewport width is **1200px or more**.
3. **Smoothly scale** between **640px and 1200px** using `vw`.

## Understanding clamp() in CSS

The `clamp(min, preferred, max)` function in CSS allows us to set a dynamic value with constraints:

- `min`: The minimum value the property can have.
- `preferred`: The preferred (scaling) value.
- `max`: The maximum value the property can have.

Using `clamp()`, we can define a font size that smoothly scales but never exceeds given limits.

## The Perfect Formula

To ensure the font size smoothly increases from 16px (at 640px) to 36px (at 1200px), we use the following calculation:

```css
html {
  font-size: clamp(16px, calc((36 - 16) / (1200 - 640) * (100vw - 640px) + 16px), 36px);
}
```

### Breaking Down the Formula

Let's analyze the formula inside `clamp()`:

```css
calc((36 - 16) / (1200 - 640) * (100vw - 640px) + 16px)
```

This formula ensures that the font size grows **proportionally** between `640px` and `1200px`. Here's how it works:

1. `(36 - 16) / (1200 - 640)`: This calculates the **growth rate** of the font size per pixel increase in viewport width.

   - `36px` (max size) minus `16px` (min size) gives `20px` total growth.
   - `1200px` (max width) minus `640px` (min width) gives `560px` of scaling range.
   - `20 / 560` results in **0.035px growth per 1px of viewport width**.

2. `100vw - 640px`: This gives us the **current viewport width offset** relative to `640px`.

   - If the viewport is `800px` wide, `100vw - 640px = 160px`.

3. `0.035 * (100vw - 640px)`: This applies the growth rate to the viewport width offset.

   - At `800px` wide: `0.035 * 160px = 5.6px`

4. `+ 16px`: This ensures the font size starts at **16px** at `640px`.

   - At `800px`: `16px + 5.6px = 21.6px`

### Ensuring the Constraints

- `clamp(16px, ..., 36px)`: Ensures that the font size **never goes below 16px or above 36px**.
- `100vw - 640px`: Ensures that scaling **only starts from 640px** and is **relative** to that breakpoint.

## Implementing in CSS

Here’s the full CSS implementation with media queries for better control:

```css
html {
  font-size: 16px;
}

@media (min-width: 640px) {
  html {
    font-size: clamp(16px, calc((36 - 16) / (1200 - 640) * (100vw - 640px) + 16px), 36px);
  }
}
```

## Testing the Font Size

To test if the font size works correctly:

1. Open your browser and **resize the window**.
2. Use the **developer tools (F12 or Ctrl+Shift+I in Chrome)**.
3. Check the computed `font-size` in the **Elements** tab.

## Summary

✅ Below `640px`, font size stays **16px**.\
✅ Between `640px` and `1200px`, it **smoothly increases**.\
✅ At `1200px` or more, font size is **fixed at 36px**.

This approach ensures smooth and controlled scaling of text while keeping it readable on all screen sizes.
