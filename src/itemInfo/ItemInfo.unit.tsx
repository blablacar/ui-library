import React from 'react'
import { shallow } from 'enzyme'

import { ItemInfo } from './index'

const defaultProps = {
  mainInfo: 'Main information',
}

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<ItemInfo {...defaultProps} className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})
