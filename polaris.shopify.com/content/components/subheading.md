---
name: Subheading
category: Titles and text
keywords:
  - title bar
  - top-level
  - description
  - sub-section titles
  - titles of sub-sections
  - subsection titles
  - titles of subsections
examples:
  - fileName: subheading-default.tsx
    title: Default
    description: Used for the title of any sub-sections in top-level page sections.
---

# Subheading

Subheadings are used for the title of any sub-sections in top-level page sections.

---

## Best practices

Subheadings should:

- Be used to explain and clearly label logical groups in existing sections of a page
- Not be used without a parent heading
- Not be used in tables or list items, such as for the primary content in a [resource list](https://polaris.shopify.com/components/resource-list)

---

## Content guidelines

Subheadings should follow the content guidelines for [headings and subheadings](https://polaris.shopify.com/content/actionable-language#section-headings-and-subheadings).

---

## Related components

- To break up major sections of a page with a title, [use the heading component](https://polaris.shopify.com/components/heading)

---

## Accessibility

A clear and consistent heading structure helps merchants who have difficulty with reading or language. It also helps screen reader users to navigate the page using keystrokes that are custom to their screen reader.

Use the `element` prop to determine the specific HTML element that’s output for the subheading. The component defaults to a level 3 heading (`<h3>`). Use a different value for the `element` prop if a different subheading fits the context better.

Learn more about writing helpful [headings and subheadings](https://polaris.shopify.com/content/actionable-language#section-headings-and-subheadings).

<!-- dodont -->

#### Do

Use subheadings to support the hierarchy and structure of the page.

#### Don’t

- Use subheadings for style alone.
- Use subheadings for major sections of the page.

<!-- end -->
