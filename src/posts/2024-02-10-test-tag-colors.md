---
title: "Testing Flexible Tag Color System"
excerpt: "This post demonstrates how tag colors can be overridden in frontmatter while maintaining consistency across the site."
date: "2024-02-10"
readTime: "3 min read"
tags: ["Documentation", "Testing", "New Feature", "Custom Color"]
tagColors: {
  "Documentation": "red",
  "Testing": "purple",
  "Custom Color": "teal"
}
---

# Testing Flexible Tag Color System

This post demonstrates the new flexible tag color system that supports three approaches:

## 1. Frontmatter Override (Highest Priority)

In this post, we've overridden some tag colors in the frontmatter:
- **Documentation** is set to `red` (overriding the central config's `blue`)
- **Testing** is set to `purple` (custom override)
- **Custom Color** is set to `teal` (custom override)

## 2. Central Config (Medium Priority)

The tag **New Feature** doesn't have a frontmatter override, so it will use either:
- A color from `tagConfig.json` if defined there
- An automatically assigned color if not in the config

## 3. Automatic Assignment (Fallback)

Any tags not defined in either frontmatter or the central config will automatically receive a color from the predefined palette, ensuring visual consistency across the site.

## How It Works

The system maintains consistency by:
1. Always checking frontmatter first for color overrides
2. Falling back to the central configuration
3. Using automatic assignment for undefined tags
4. Caching color assignments for performance

This approach provides maximum flexibility while maintaining a cohesive visual design throughout your documentation site.