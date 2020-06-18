# Trip Card

```js
import { TripCard } from '@blablacar/ui-library'
```

## Component

<!-- STORY -->

## Specifications

> Card

This component serves as a container for other components. Its entire area becomes clickable.

Components inside cards have a medium 16 pt inner margin as compared to regular state - 24 pt inner margin.

> Shadow

To further establish unique character of the card and it’s content - this component has a material like appearance.

The card casts shadow:
`box-shadow: 0 1pt 4pt rgba(0,0,0,0.16), 0 2pt 8pt rgba(0,0,0,0.08);`

Additionaly on desktop when it receives a cursor :hover
`box-shadow: 0 2pt 8pt rgba(0,0,0,0.08), 0 2pt 16pt rgba(0,0,0,0.08);`

## When should I use it?

Use cards to represent a summary of a single trip in a collection view.
Use backgroundless components to represent card’s content.

- ✅ Always clickable.
