import React from 'react'
import { mount, shallow } from 'enzyme'

import { Button } from '../button'
import { Text } from '../text'
import { ItemData } from './index'

const defaultProps = {
  mainInfo: 'Main information',
  data: 'Data',
}

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<ItemData {...defaultProps} className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})

it('Should trigger click on addon button', () => {
  const onButtonClick = jest.fn()
  const wrapper = mount(
    <ItemData
      {...defaultProps}
      mainTitle="Left title"
      mainTitleButtonAddon={<Button onClick={onButtonClick}>More info</Button>}
    />,
  )
  wrapper.find('.kirk-item-title--withButtonAddon button').simulate('click')
  expect(onButtonClick).toHaveBeenCalledTimes(1)
})

it("Shouldn't display left addon button if no main title", () => {
  const wrapper = mount(
    <ItemData
      {...defaultProps}
      mainTitleButtonAddon={<Button onClick={() => {}}>More info</Button>}
    />,
  )
  expect(wrapper.find('.kirk-item-title--withButtonAddon button').exists()).toBe(false)
})

it('Should display left and right elements', () => {
  const wrapper = mount(<ItemData {...defaultProps} />)
  const text = wrapper.find(Text)
  expect(text).toHaveLength(2)
  expect(text.at(0).text()).toBe('Main information')
  expect(text.at(1).text()).toBe('Data')
})
