import React from 'react'
import renderer from 'react-test-renderer'

import { SearchRecap } from './SearchRecap'

const defaultProps = {
  from: 'Middlesbrough',
  to: 'Stoke-on-Trent, city center',
  info: 'Today 2:30pm, 2 passengers',
  large: false,
}

describe('SearchRecap', () => {
  it('Should display searchRecap component', () => {
    const component = renderer.create(<SearchRecap {...defaultProps} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
