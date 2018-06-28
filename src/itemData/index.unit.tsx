import React from 'react'

import ItemData from 'itemData'

const defaultProps = {
  mainInfo: 'Main information',
  data: 'Data',
}

it('Should be displayed in a div (default)', () => {
  const wrapper = shallow(<ItemData {...defaultProps} />)
  expect(wrapper.dive().type()).toBe('div')
})

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<ItemData {...defaultProps} className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})

it('Should accept a custom `tag`', () => {
  const wrapper = shallow(<ItemData {...defaultProps} tag="li" />)
  expect(wrapper.dive().type()).toBe('li')
})
