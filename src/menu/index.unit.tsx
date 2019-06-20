import React from 'react'
import { shallow, mount } from 'enzyme'

import Menu from 'menu'
import ItemChoice from 'itemChoice'
import { HomeIcon } from 'icon/homeIcon'
import { NewspaperIcon } from 'icon/newspaperIcon'
import { CheckShieldIcon } from 'icon/checkShieldIcon'

let children = []

describe('Menu', () => {
  beforeEach(() => {
    children = [
      <ItemChoice label="Dashboard" leftAddon={<HomeIcon />} href="/" key="/" />,
      <ItemChoice
        label="Rides offered"
        leftAddon={<NewspaperIcon />}
        rightAddon={<CheckShieldIcon />}
        href="/rides"
        key="/rides"
      />,
    ]
  })

  it('Should accept a custom className', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<Menu className={customClassName}>{children}</Menu>)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should render menu items', () => {
    const wrapper = mount(<Menu>{children}</Menu>)
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
})
