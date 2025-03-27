---
title: "Common HTML Mistakes and How to Avoid Them"
excerpt: ""
tags: []
coverImage: "/uploads/2025-03/cover.jpg"
ogImage:
  url: "/uploads/2025-03/cover.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"
---

## Introduction

HTML is the backbone of the web, and it's essential for creating well-structured and accessible websites. However, even experienced developers can make mistakes when writing HTML code. In this article, we'll explore some common HTML mistakes and provide tips on how to avoid them, ensuring your websites are more robust and user-friendly.

## Forgetting to Close Tags

One of the most common HTML mistakes is forgetting to close tags. This can lead to unexpected behavior and broken layouts in your web pages.

### Why it's a problem

Unclosed tags can cause elements to be improperly nested, which may result in overlapping content or incorrect styling. For example, if you forget to close a `<div>` tag, all subsequent content might be included within that div, potentially breaking your page's structure.

### How to avoid it

To prevent this issue, always ensure you close your tags properly. Most modern code editors have features that can help you identify unclosed tags, such as syntax highlighting and auto-closing tags. Additionally, you can use HTML validation tools like the W3C Markup Validation Service to check your code for errors.

Here's an example of properly closed tags:

```html
<div>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

## Using Deprecated or Obsolete Elements

Another common mistake is using HTML elements that have been deprecated or are no longer supported by modern browsers.

### Why it's a problem

Using outdated elements can lead to compatibility issues across different browsers and devices. It can also make your code harder to maintain and update in the future.

### How to avoid it

To avoid this issue, stay up-to-date with the latest HTML specifications and best practices. The World Wide Web Consortium (W3C) maintains the official HTML standard, which you can refer to for the most current information.

Some examples of deprecated elements to avoid include:

- `<font>`: Use CSS for styling text instead.
- `<center>`: Use CSS for centering content.
- `<strike>` or `<s>`: Use the `<del>` element for strikethrough text to indicate deletions.

Instead of using deprecated elements, focus on using semantic HTML5 elements that provide better structure and meaning to your content. For example:

```html
<!-- Instead of <font> -->
<p style="color: blue; font-size: 16px;">This text is blue and 16px in size.</p>

<!-- Instead of <center> -->
<div style="text-align: center;">This content is centered.</div>

<!-- Instead of <strike> or <s> -->
<p>The price was <del>$100</del> but is now $80.</p>
```

## Improper Use of Semantic Elements

Semantic HTML elements help improve the accessibility and SEO of your website by providing meaning to the structure of your content. However, using these elements incorrectly can lead to confusion for both users and search engines.

### Why it's a problem

Misusing semantic elements can make your content harder to understand for assistive technologies like screen readers. It can also negatively impact your site's search engine rankings, as search engines rely on semantic markup to understand the context of your content.

### How to avoid it

To use semantic elements correctly, familiarize yourself with their intended purposes. Here are some common semantic elements and their proper uses:

- `<header>`: Represents introductory content or a set of navigational links.
- `<nav>`: Contains primary navigation links for your site.
- `<main>`: Represents the main content of the document.
- `<article>`: Represents a self-contained composition in a document, page, application, or site.
- `<section>`: Represents a standalone section which doesn't have a more specific semantic element to represent it.
- `<aside>`: Represents content related to the main content of the page, often used for sidebars.
- `<footer>`: Represents a footer for its nearest ancestor sectioning content or sectioning root element.

Here's an example of proper semantic markup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Welcome to My Website</h2>
      <p>This is the main content of my website.</p>
    </article>

    <section>
      <h2>Additional Information</h2>
      <p>This is a separate section of content.</p>
    </section>
  </main>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

## Conclusion

By being aware of these common HTML mistakes and following the tips provided, you can create more robust, accessible, and maintainable websites. Remember to always validate your HTML code, stay up-to-date with the latest standards, and use semantic elements correctly to ensure the best possible user experience for your website visitors.
