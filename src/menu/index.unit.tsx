import React from 'react'
import Menu from 'menu'
import ItemChoice from 'itemChoice'
import { HomeIcon, NewspaperIcon } from 'icon'

const defaultProps = {
  items: [
    {
      id: 'menu-item-1',
      label: 'Dashboard',
      leftAddon: <HomeIcon />,
      href: '/',
    },
    {
      id: 'menu-item-2',
      label: 'Rides offered',
      leftAddon: <NewspaperIcon />,
      href: '/rides',
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
    expect(wrapper.find(ItemChoice)).toHaveLength(2)
    expect(wrapper.find(ItemChoice).first().prop('href')).toEqual('/')
    expect(wrapper.find(ItemChoice).first().text()).toEqual('Dashboard')
    expect(wrapper.find(HomeIcon)).toHaveLength(1)
  })
})
