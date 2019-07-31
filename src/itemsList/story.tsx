import React from 'react'

import { storiesOf } from '@storybook/react'

import ItemChoice from 'itemChoice'
import ItemsList, { ItemsListDivider } from 'itemsList'

import specs from './specifications/index.md'

const stories = storiesOf('ItemsList', module)

stories.add(
  'With separators between each item',
  () => {
    return (
      <ItemsList withSeparators>
        <ItemChoice label="Item 1" href="#1" />
        <ItemChoice label="Item 2" href="#2" />
        <ItemChoice label="Item 3" href="#3" />
      </ItemsList>
    )
  },
  {
    readme: { content: specs },
  },
)

stories.add(
  'With custom positioned separators',
  () => {
    return (
      <ItemsList>
        <ItemChoice label="Item 1" href="#1" />
        <ItemChoice label="Item 2" href="#2" />
        <ItemChoice label="Item 3" href="#3" />
        <ItemsListDivider />
        <ItemChoice label="Item 4" href="#4" />
      </ItemsList>
    )
  },
  {
    readme: { content: specs },
  },
)
