import React from 'react'
import renderer from 'react-test-renderer'

import ItemChoice from 'itemChoice'

import ItemsList, { ItemsListDivider } from './index'

describe('ItemsList', () => {
  it('Should render an unordered list', () => {
    const itemChoice = renderer
      .create(
        <ItemsList>
          <ItemChoice label="Item 1" href="#1" />
          <ItemChoice label="Item 2" href="#2" />
          <ItemChoice label="Item 3" href="#3" />
        </ItemsList>,
      )
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should render an unordered list with the separators classname', () => {
    const itemChoice = renderer
      .create(
        <ItemsList withSeparators>
          <ItemChoice label="Item 1" href="#1" />
          <ItemChoice label="Item 2" href="#2" />
          <ItemChoice label="Item 3" href="#3" />
        </ItemsList>,
      )
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should render an unordered list with some separators', () => {
    const itemChoice = renderer
      .create(
        <ItemsList>
          <ItemChoice label="Item 1" href="#1" />
          <ItemChoice label="Item 2" href="#2" />
          <ItemsListDivider />
          <ItemChoice label="Item 3" href="#3" />
        </ItemsList>,
      )
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
})
