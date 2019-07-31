# ItemsList

```js
import { ItemsList, ItemChoice, ItemsListDivider } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## How to use

> With separators between each Item

```js
<ItemsList withSeparators>
  <ItemChoice label="Item 1" href="#1" />
  <ItemChoice label="Item 2" href="#2" />
  <ItemChoice label="Item 3" href="#3" />
</ItemsList>
```

> With custom positioned separators

```js
<ItemsList>
  <ItemChoice label="Item 1" href="#1" />
  <ItemChoice label="Item 2" href="#2" />
  <ItemChoice label="Item 3" href="#3" />
  <ItemsListDivider />
  <ItemChoice label="Item 4" href="#4" />
</ItemsList>
```
