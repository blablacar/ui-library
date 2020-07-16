import React from 'react'
import { mount } from 'enzyme'

import { ItemEditableInfo } from './index'

it('Should render a basic ItemEditableInfo', () => {
  const props = {
    label: 'My label',
    value: 'My value',
    href: '/myhref',
  }
  const wrapper = mount(<ItemEditableInfo {...props} />)
  const anchor = wrapper.find('a')
  expect(anchor).toHaveLength(1)
  expect(anchor.props().href).toBe('/myhref')
  expect(wrapper.text()).toBe('My labelMy value')
})

it('Should render an onClick ItemEditableInfo', () => {
  const onClickFn = () => {}
  const props = {
    label: 'My label',
    value: 'My value',
    onClick: onClickFn,
  }
  const wrapper = mount(<ItemEditableInfo {...props} />)
  expect(wrapper.text()).toBe('My labelMy value')
  expect(wrapper.props().onClick).toBe(onClickFn)
})

it('Should render a readonly ItemEditableInfo', () => {
  const props = {
    label: 'My label',
    value: 'My value',
    readonly: true,
  }
  const wrapper = mount(<ItemEditableInfo {...props} />)
  expect(wrapper.find('a').exists()).toBe(false)
  expect(wrapper.text()).toBe('My labelMy value')
})
