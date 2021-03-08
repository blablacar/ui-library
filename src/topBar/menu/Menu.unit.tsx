import React from 'react'
import { mount, shallow } from 'enzyme'

import { CheckShieldIcon } from '../../icon/checkShieldIcon'
import { HomeIcon } from '../../icon/homeIcon'
import { NewspaperIcon } from '../../icon/newspaperIcon'
import { ItemChoice } from '../../itemChoice'
import { Menu } from '../menu'

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

  it('Should render menu even with a single item', () => {
    const wrapper = mount(
      <Menu>
        <ItemChoice
          label="Rides offered"
          leftAddon={<NewspaperIcon />}
          rightAddon={<CheckShieldIcon />}
          href="/rides"
          key="/rides"
        />
      </Menu>,
    )
    expect(wrapper.find(ItemChoice)).toHaveLength(1)
    expect(
      wrapper
        .find(ItemChoice)
        .first()
        .prop('href'),
    ).toEqual('/rides')
    expect(
      wrapper
        .find(ItemChoice)
        .first()
        .text(),
    ).toEqual('Rides offered')
    expect(wrapper.find(CheckShieldIcon)).toHaveLength(1)
  })
})
