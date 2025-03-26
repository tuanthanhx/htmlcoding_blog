---
title: "Understanding noopener, noreferrer, and nofollow in HTML Links"
excerpt: ""
tags: ["dev", "html"]
coverImage: "/uploads/2025-03/cover_011.jpg"
ogImage:
  url: "/uploads/2025-03/cover_011.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"

---

## Introduction

When adding external links to a website, developers often use `rel` attributes like `noopener`, `noreferrer`, and `nofollow` to improve security, privacy, and SEO. This article explains what each attribute does and when to use them.

## 1. `noopener`

**What is `noopener`?**

The `noopener` attribute is used to prevent the newly opened tab from gaining control over the original page when using `target="_blank"`. Without `noopener`, the new page can access the `window.opener` object and potentially manipulate the referring page, leading to security vulnerabilities like phishing attacks.

**Example**

```html
<a href="https://example.com" target="_blank" rel="noopener">Visit Example</a>
```

**Why Use `noopener`?**
- Prevents malicious pages from modifying the original website.
- Reduces the risk of security exploits.
- Recommended for all `target="_blank"` links.

## 2. `noreferrer`

**What is `noreferrer`?**

The `noreferrer` attribute prevents the browser from sending the HTTP `Referer` header when navigating to the linked page. This enhances user privacy because the destination site won’t see where the user came from.

**Example**

```html
<a href="https://example.com" target="_blank" rel="noreferrer">Visit Example</a>
```

**Why Use `noreferrer`?**

- Protects user privacy by hiding referral information.
- Prevents the destination site from knowing the source of the traffic.
- Also includes the `noopener` behavior by default.

## 3. `nofollow`

**What is `nofollow`?**

The `nofollow` attribute tells search engines not to pass ranking credit (link juice) to the linked website. This is commonly used for:
- Paid links (e.g., sponsored content, affiliate links).
- User-generated content (e.g., blog comments, forums) to prevent spam.
- Any link that the site owner does not want to endorse for SEO.

**Example**

```html
<a href="https://example.com" rel="nofollow">Visit Example</a>
```

**Why Use `nofollow`?**

- Prevents SEO manipulation through spammy links.
- Follows Google’s guidelines for paid or untrusted links.
- Does not impact user navigation; only affects search engines.

## Combining `rel` Attributes
You can combine these attributes for enhanced security and control:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer nofollow">Visit Example</a>
```

**Explanation:**

- `noopener`: Prevents `window.opener` access.
- `noreferrer`: Hides referral data and includes `noopener` behavior.
- `nofollow`: Tells search engines not to follow the link.

## Conclusion
Using `rel="noopener noreferrer nofollow"` appropriately enhances security, privacy, and SEO compliance. Whenever linking to an external site, especially with `target="_blank"`, consider adding these attributes to protect both your users and your website.

**Key Takeaways**

- Always use `noopener` with `target="_blank"` to prevent security risks.
- Use `noreferrer` for privacy concerns.
- Use `nofollow` for paid, untrusted, or non-endorsed links.

By applying these best practices, you can ensure a safer and more SEO-friendly website!

