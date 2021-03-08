import React from 'react'

import { render, screen } from '@testing-library/react'

import { ItemChoice } from '../itemChoice'
import { ItemsList, ItemsListDivider } from './index'

describe('ItemsList', () => {
  it('Should render an unordered list', () => {
    render(
      <ItemsList>
        <ItemChoice label="Item 1" href="#1" />
        <ItemChoice label="Item 2" href="#2" />
        <ItemChoice label="Item 3" href="#3" />
      </ItemsList>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
  it('Should not throw for falsy items', () => {
    const item: JSX.Element = null
    render(
      <ItemsList>
        <ItemChoice label="Item 1" href="#1" />
        {item && <div>undefined list item</div>}
        <ItemChoice label="Item 3" href="#3" />
      </ItemsList>,
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
  it('Should render an unordered list with the separators classname', () => {
    render(
      <ItemsList withSeparators>
        <ItemChoice label="Item 1" href="#1" />
        <ItemChoice label="Item 2" href="#2" />
        <ItemChoice label="Item 3" href="#3" />
      </ItemsList>,
    )
    expect(screen.getAllByRole('separator')).toHaveLength(2)
  })
  it('Should render an unordered list with some separators', () => {
    render(
      <ItemsList>
        <ItemChoice label="Item 1" href="#1" />
        <ItemChoice label="Item 2" href="#2" />
        <ItemsListDivider />
        <ItemChoice label="Item 3" href="#3" />
      </ItemsList>,
    )
    expect(screen.getAllByRole('separator')).toHaveLength(1)
  })
  it('Should render an unordered list with only one element', () => {
    render(
      <ItemsList>
        <ItemChoice label="Item 1" href="#1" />
      </ItemsList>,
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })
})
