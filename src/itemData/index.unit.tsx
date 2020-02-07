import React from 'react'
import { shallow, mount } from 'enzyme'

import ItemData from 'itemData'
import Button from 'button'
import Text from 'text'

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

it('Should display right data with aria-label attribute', () => {
  const wrapper = mount(<ItemData data="Data" dataAriaLabel="Data aria-label" />)
  const text = wrapper.find(Text)
  expect(text.hasClass('kirk-item-title')).toBe(true)
  expect(text.prop('ariaLabel')).toBe('Data aria-label')
})
