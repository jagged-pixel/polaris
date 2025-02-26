---
name: Link
category: Navigation
keywords:
  - URL
  - linklist
  - link list
  - embed
  - actions
  - pathways
  - deep link
  - text link
  - plain button
  - plain call to action
  - plain cta
  - embeddd action
  - action in text
  - hyperlink
  - secondary actions
  - secondary cta
  - secondary call to action
examples:
  - fileName: link-default.tsx
    title: Default
    description: Use for text links in larger spans of text.
  - fileName: link-monochrome.tsx
    title: Monochrome
    description: Use for text links that are the same color as the surrounding text.
  - fileName: link-monochrome-in-a-banner.tsx
    title: Monochrome in a banner
    description: Monochrome styles will be applied to links rendered within a `Banner`.
  - fileName: link-external.tsx
    title: External
    description: Use for text links that should open in a new browser tab (or window, depending on the merchant’s browser settings). Use this only when opening a page in the same tab might disrupt the merchant’s workflow.
---

# Link

Links take users to another place, and usually appear within or directly following a sentence.

For actions that aren’t related to navigation, use the [button component](https://polaris.shopify.com/components/button).

---

## Best practices

### Buttons versus links

Links are used primarily for navigation, and usually appear within or directly following a sentence.

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.

The HTML that renders for the `Button` and `Link` components carries meaning. Using these components intentionally and consistently results in:

- a more inclusive experience for assistive technology users
- a more cohesive visual experience for sighted users
- products that are easier to maintain at scale

### Unstyled links

If the existing link styles don’t meet the needs of your project, then use the `UnstyledLink` component to create a custom link style.

---

## Content guidelines

The link component should follow the content guidelines for [links](https://polaris.shopify.com/content/actionable-language#section-links).

---

## Related components

- For actions that don’t appear within or directly following a sentence, use the [button component](https://polaris.shopify.com/components/button)

---

## Accessibility

Use the `url` prop to give the link component a valid `href` value. This allows the element to be identified as a link to assistive technologies and gives it default keyboard support.

The Link component is underlined to give interactive elements a shape. This allows links to not rely on color from being the only way users can tell if an element is interactive.

<!-- dodont -->

#### Do

- Remove the link underline when link is repeated in a list or navigation
- Use underlines for links when used inline content

```jsx
<p>
  Learn more about <Link>Fraud Protect</Link>.
</p>
```

#### Don’t

- Remove underlines when the user cannot determine it's interactivity

```jsx
<Link removeUnderline>Learn more about Fraud Protect.</Link>
```

<!-- end -->

### Submitting data

Merchants generally expect links to navigate, and not to submit data or take action. If you need a component that doesn’t have a URL associated with it, then use the [button component](https://polaris.shopify.com/components/button) instead.

### Labeling

Give links text that clearly describes their purpose.

The `accessibilityLabel` prop adds an `aria-label` attribute to the link, which can be accessed by assistive technologies like screen readers. Typically, this label text replaces the visible text on the link for merchants who use assistive technology.

To provide consistency and clarity:

- Use the same text for links that navigate to the same content
- Use different text for links that navigate to different content

<!-- dodont -->

#### Do

```jsx
<Link url="https://help.shopify.com/manual">fulfilling orders</Link>
```

#### Don’t

```jsx
<Link>fulfilling orders</Link>
```

<!-- end -->

<!-- dodont -->

#### Do

```jsx
/* Somewhere in the code: */
<Link url="https://help.shopify.com/manual">fulfilling orders</Link>

/* Elsewhere in the code: */
<Link url="https://help.shopify.com/manual">fulfilling orders</Link>
```

#### Don’t

```jsx
/* Somewhere in the code: */
<Link url="https://help.shopify.com/manual">fulfilling orders</Link>

/* Elsewhere in the code: */
<Link url="https://help.shopify.com/manual">order fulfillment section</Link>
```

<!-- end -->

#### External links

The `external` prop adds an icon and a notification that the link opens a new tab. Use the `external` prop to make the link open in a new tab (or window, depending on the merchant’s browser settings). Open a page in a new tab only when opening a page in the same tab might disrupt the merchant’s workflow.

### Keyboard support

Links use browser defaults for keyboard interaction.

- Give links keyboard focus with the <kbd>tab</kbd> key (or <kbd>shift</kbd> + <kbd>tab</kbd> when tabbing backwards)
- Activate links with the <kbd>enter</kbd>/<kbd>return</kbd> key
