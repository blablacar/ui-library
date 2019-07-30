import React from 'react'
import { shallow } from 'enzyme'

import ItemData from 'itemData'

const defaultProps = {
  mainInfo: 'Main information',
  data: 'Data',
}

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<ItemData {...defaultProps} className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})
