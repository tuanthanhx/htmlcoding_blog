---
title: "Understanding the Difference Between <figure> and <picture> in HTML"
excerpt: ""
tags: ["HTML"]
coverImage: "/uploads/2025-03/cover.jpg"
ogImage:
  url: "/uploads/2025-03/cover.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

When working with images in HTML, two commonly used elements are `<figure>` and `<picture>`. While both improve the semantic structure of your HTML, they serve different purposes. In this article, we will explore the differences between these elements, their use cases, and how to use them effectively.

## 1. What is `<figure>`?

The `<figure>` element is used to group an image with an optional caption. It helps associate images with their descriptions in a meaningful way, improving accessibility and readability.

**Example:**
```html
<figure>
  <img src="image.jpg" alt="A beautiful scenery">
  <figcaption>A breathtaking sunset over the mountains.</figcaption>
</figure>
```

**When to Use `<figure>`:**
- When an image needs a **caption**.
- When an image is part of **self-contained content** (e.g., blog posts, articles).
- To improve **semantic HTML** and accessibility.

## 2. What is `<picture>`?

The `<picture>` element is used for **responsive images**, allowing the browser to select the best image based on the screen size, resolution, or format support.

**Example:**
```html
<picture>
  <source srcset="image-small.jpg" media="(max-width: 600px)">
  <source srcset="image-large.jpg" media="(min-width: 601px)">
  <img src="fallback.jpg" alt="A beautiful scenery">
</picture>
```

**When to Use `<picture>`:**
- When you need **different images** for different screen sizes.
- When optimizing for **performance and faster load times**.
- When you want to serve **modern image formats** (e.g., WebP) with fallback support.

## 3. Using `<figure>` and `<picture>` Together

If you need both a responsive image and a caption, you can combine `<picture>` inside `<figure>`:

```html
<figure>
  <picture>
    <source srcset="image-small.jpg" media="(max-width: 600px)">
    <source srcset="image-large.jpg" media="(min-width: 601px)">
    <img src="fallback.jpg" alt="A beautiful scenery">
  </picture>
  <figcaption>A breathtaking sunset over the mountains.</figcaption>
</figure>
```

## 4. Key Differences Between `<figure>` and `<picture>`
| Feature | `<figure>` | `<picture>` |
|---------|-----------|------------|
| Purpose | Group image with a caption | Provide multiple image sources for responsiveness |
| Supports `<figcaption>` | ✅ Yes | ❌ No |
| Handles different screen sizes | ❌ No | ✅ Yes |
| Improves semantics | ✅ Yes | ✅ Yes |
| Best for | Articles, blogs, content with captions | Responsive images, modern format support |

## 5. Conclusion

Both `<figure>` and `<picture>` enhance the way images are used in HTML. Use `<figure>` when you need a **captioned image** and `<picture>` when you need **responsive images**. If your use case requires both, combine them for the best results.

By understanding their strengths, you can write **cleaner, more accessible, and more performant HTML**. 🚀

