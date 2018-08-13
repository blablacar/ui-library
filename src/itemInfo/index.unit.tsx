import React from 'react'

import ItemInfo from 'itemInfo'

const defaultProps = {
  mainInfo: 'Main information',
}

it('Should be displayed in a div (default)', () => {
  const wrapper = shallow(<ItemInfo {...defaultProps} />)
  expect(wrapper.dive().type()).toBe('div')
})

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<ItemInfo {...defaultProps} className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})

it('Should accept a custom `tag`', () => {
  const wrapper = shallow(<ItemInfo {...defaultProps} tag="li" />)
  expect(wrapper.dive().type()).toBe('li')
})
