import React from 'react'
import { shallow } from 'enzyme'

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
})
