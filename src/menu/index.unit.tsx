import React from 'react'
import { shallow, mount } from 'enzyme'

import Menu from 'menu'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'
import { HomeIcon, NewspaperIcon, CheckShieldIcon } from 'icon'

let defaultProps = {}

describe('Menu', () => {
  beforeEach(() => {
    defaultProps = {
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
          rightAddon: <CheckShieldIcon />,
          href: '/rides',
        },
      ],
    }
  })

  it('Should accept a custom className', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<Menu {...defaultProps} className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should render menu items', () => {
    const wrapper = mount(<Menu {...defaultProps} />)
    expect(wrapper.find(ItemChoice)).toHaveLength(2)
    expect(
      wrapper
        .find(ItemChoice)
        .first()
        .prop('href'),
    ).toEqual('/')
    expect(
      wrapper
        .find(ItemChoice)
        .first()
        .text(),
    ).toEqual('Dashboard')
    expect(wrapper.find(HomeIcon)).toHaveLength(1)
    expect(wrapper.find(CheckShieldIcon)).toHaveLength(1)
  })

  it('Should configure onClick listeners on nested menu items', () => {
    // Set up the second menu item with a mocked onClick handler.
    const onClickMock = jest.fn()
    defaultProps.items[1].onClick = onClickMock

    const wrapper = shallow(<Menu {...defaultProps} />)
    wrapper
      .find(ItemChoice)
      .last()
      .simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('Should use configured status for nested items', () => {
    defaultProps.items[0].status = ItemChoiceStatus.LOADING

    const wrapper = shallow(<Menu {...defaultProps} />)
    expect(
      wrapper
        .find(ItemChoice)
        .first()
        .prop('status'),
    ).toEqual('loading')
  })
})
