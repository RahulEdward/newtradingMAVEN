# Blog Articles — Updates and Fixes

This document records the changes made to the three featured blog articles and the blog experience.

## Overview
- Implemented dynamic article route at `src/app/blogs/[slug]/page.tsx`.
- Added working links from the blogs listing to article pages.
- Wrote complete, formatted content for each article with images and resources.
- Ensured responsive layout and smooth navigation between articles.

## Updated Articles

### 1) Mastering Trend Following: A Complete Guide for Beginners
- Slug: `mastering-trend-following-beginners`
- Author/Meta preserved; read time adjusted for content depth.
- Sections added: What is Trend Following, Core Principles, Common Tools, Risk Management, Resources.
- Images: Switched to `placehold.co` to avoid cross-origin blocks.
- Links: Added Investopedia and Babypips references.

### 2) Risk Management: Protecting Your Trading Capital
- Slug: `risk-management-protecting-capital`
- Sections added: Why Risk Management Matters, Key Concepts, Position Sizing Example, Common Mistakes, Useful Links.
- Image updated to `placehold.co`.
- Links: Investopedia and Babypips resources.

### 3) Automated Trading with Expert Advisors: Best Practices
- Slug: `automated-trading-expert-advisors-best-practices`
- Sections added: EA Best Practices, Deployment Checklist, Optimization Tips, Recommended Resources.
- Image updated to `placehold.co`.
- Links: MQL5 and MetaTrader references.

## Listing Page Changes
- File: `src/app/blogs/page.tsx`
- Added `slug` to featured posts and linked the “Read Article” buttons using `Button asChild` with `next/link`.

## Navigation and UI
- Article pages include back-to-blogs link and previous/next navigation.
- Content is rendered within a `max-w-3xl` container for readability.
- Mobile/desktop responsiveness ensured using Tailwind utility classes.

## Notes
- External images use `https://placehold.co` for reliable loading in dev and browsers without additional configuration.
- If you switch to `next/image` with external domains, add allowed domains to `next.config.js`.