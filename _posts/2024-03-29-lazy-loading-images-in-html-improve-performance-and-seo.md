---
title: "Lazy Loading Images in HTML: Improve Performance & SEO"
excerpt: ""
tags: ["HTML", "CSS"]
coverImage: "/uploads/2025-03/cover.jpg"
ogImage:
  url: "/uploads/2025-03/cover.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

Lazy loading is a technique that defers the loading of images until they are needed, improving **page load speed**, reducing **bandwidth usage**, and enhancing **SEO**. In this article, we'll explore how lazy loading works, how to implement it, and best practices for optimal performance.

## 1. What is Lazy Loading?
Lazy loading delays the loading of offscreen images until they are about to be displayed in the viewport. This reduces the initial page load time and saves network resources.

### 🚀 **Benefits of Lazy Loading:**
- **Faster page load times** by loading only visible images.
- **Reduces bandwidth usage**, especially for users on slow connections.
- **Improves SEO & Core Web Vitals**, particularly **Largest Contentful Paint (LCP)**.

## 2. How to Implement Lazy Loading in HTML

### 2.1. Using the `loading="lazy"` Attribute (Native Lazy Loading)
HTML5 introduced the `loading` attribute, which provides native lazy loading support.

```html
<img src="image.jpg" alt="Example Image" loading="lazy">
```
✅ **Browser Support:** Most modern browsers support `loading="lazy"` (Chrome, Edge, Firefox, Opera). Older browsers will simply ignore it.

### 2.2. Lazy Loading with JavaScript (Intersection Observer API)
For more control over lazy loading, use JavaScript and the **Intersection Observer API**.

```html
<img data-src="image.jpg" alt="Lazy Image" class="lazy">
```
```js
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
});
```
✅ **Advantages:**
- Works in **all browsers**, including older versions.
- Allows more customization (e.g., animations, preload thresholds).

## 3. Best Practices for Lazy Loading
✅ **Use `loading="lazy"` for simplicity**

The native `loading="lazy"` is recommended for most use cases.

✅ **Provide a placeholder or fallback**

Use a **low-resolution placeholder** to avoid layout shifts.
```html
<img src="placeholder.jpg" data-src="image.jpg" alt="Example" class="lazy">
```

✅ **Optimize images for performance**

- Use **modern formats** like **WebP**.
- Implement **responsive images** with `<picture>` and `srcset`.

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Example" loading="lazy">
</picture>
```

✅ **Avoid lazy loading above-the-fold images**

Do **not** lazy load images that appear immediately on page load.
```html
<img src="hero.jpg" alt="Hero Image" loading="eager">
```

## 4. Conclusion
Lazy loading is a **simple yet powerful** technique to improve website performance, reduce load times, and boost SEO. Use **native lazy loading (`loading="lazy"`)** when possible, and fall back to **JavaScript-based lazy loading** for more advanced scenarios.

By implementing these strategies, your website will be **faster, more efficient, and user-friendly**!

