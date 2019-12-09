import React from 'react'
import { shallow, mount } from 'enzyme'

import Loader from 'loader/Loader'
import ItemAction from 'itemAction'
import CrossIcon from 'icon/crossIcon'

jest.useFakeTimers()

const defaultProps = {
  className: 'custom',
  action: 'Action',
  subLabel: 'sub label',
  leftAddon: <CrossIcon />,
  href: '#',
  onClick() {},
  onBlur() {},
  onFocus() {},
  onMouseDown() {},
}

describe('ItemAction', () => {
  it('Should forward props to Item', () => {
    const wrapper = shallow(<ItemAction {...defaultProps} />)

    expect(wrapper.prop('className')).toEqual('custom')
    expect(wrapper.prop('leftTitle')).toEqual('Action')
    expect(wrapper.prop('leftBody')).toEqual('sub label')
    expect(wrapper.prop('leftAddon')).toEqual(<CrossIcon />)
    expect(wrapper.prop('href')).toEqual('#')
    expect(wrapper.prop('onClick')).not.toBeNull()
    expect(wrapper.prop('onBlur')).not.toBeNull()
    expect(wrapper.prop('onFocus')).not.toBeNull()
    expect(wrapper.prop('onMouseDown')).not.toBeNull()
  })

  it('Should set highlighted to true', () => {
    const wrapper = shallow(<ItemAction {...defaultProps} />)

    expect(wrapper.prop('highlighted')).toBe(true)
  })

  it('Should set tag to button by default', () => {
    const wrapper = shallow(<ItemAction {...defaultProps} />)

    expect(wrapper.prop('tag')).toEqual(<button />)
  })

  it('Should forward the tag to item', () => {
    const wrapper = shallow(<ItemAction tag="li" {...defaultProps} />)

    expect(wrapper.prop('tag')).toEqual('li')
  })

  describe('status', () => {
    it('Should not render Loader when status is not defined', () => {
      const wrapper = mount(<ItemAction>...</ItemAction>)
      expect(wrapper.find(Loader).exists()).toBe(false)
    })

    it('Should not render Loader when status is DEFAULT', () => {
      const props = { status: ItemAction.STATUS.DEFAULT }
      const wrapper = mount(<ItemAction {...props}>...</ItemAction>)
      expect(wrapper.find(Loader).exists()).toBe(false)
    })

    it('Should render Loader when status is LOADING', () => {
      const props = { status: ItemAction.STATUS.LOADING }
      const wrapper = mount(<ItemAction {...props}>...</ItemAction>)
      expect(wrapper.find(Loader).exists()).toBe(true)
      expect(wrapper.find(Loader).prop('done')).toBe(false)
    })

    it('Should render Loader when status is CHECKED', () => {
      const props = { status: ItemAction.STATUS.CHECKED }
      const wrapper = mount(<ItemAction {...props}>...</ItemAction>)
      expect(wrapper.find(Loader).exists()).toBe(true)
      expect(wrapper.find(Loader).prop('done')).toBe(true)
    })

    it('Should render an highlighted ItemAction by default', () => {
      const props = { action: 'test' }
      const wrapper = mount(<ItemAction {...props}>...</ItemAction>)
      expect( wrapper.find('.kirk-item--highlighted').exists()).toBe(true)
    })

    it('Can render a non-highlighted ItemAction', () => {
      const props = { action: 'test', highlighted: false }
      const wrapper = mount(<ItemAction {...props}>...</ItemAction>)
      expect( wrapper.find('.kirk-item--highlighted').exists()).toBe(false)
    })
  })
})
