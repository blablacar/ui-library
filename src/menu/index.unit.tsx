import React from 'react'
import Menu from 'menu'

const defaultProps = {
  items: [
    {
      id: 'menu-item-1',
      label: 'Menu item 1',
      url: '#',
    },
    {
      id: 'separator-1',
      separator: true,
    },
    {
      id: 'menu-item-2',
      label: 'Menu item 2',
      url: '#',
    },
  ],
}

describe('Menu', () => {
  it('Should accept a custom className', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<Menu {...defaultProps} className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should render menu items', () => {
    const wrapper = mount(<Menu {...defaultProps} />)
    expect(wrapper.find('li')).toHaveLength(3)
    expect(wrapper.find('.separator')).toHaveLength(1)
  })
})
