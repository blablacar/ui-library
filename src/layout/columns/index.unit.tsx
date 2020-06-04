import React from 'react'
import renderer from 'react-test-renderer'

import { Column } from '../../layout/column'
import { Columns } from './index'

describe('Columns', () => {
  it('should render default columns', () => {
    const columns = (
      <Columns>
        <Column>column 1</Column>
        <Column>column 2</Column>
        <Column>column 3</Column>
      </Columns>
    )
    const renderedColumns = renderer.create(columns).toJSON()
    expect(renderedColumns).toMatchSnapshot()
  })
})
