import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import ItemRadio from 'itemRadio'

import ItemRadioGroup, { ItemRadioGroupProps } from './index'

describe('ItemRadioGroup', () => {
  const defaultProps: ItemRadioGroupProps = {
    name: 'name',
    value: 2,
    onChange() {},
    status: ItemRadio.STATUS.DEFAULT,
    children: [
      <ItemRadio label="1" value={1} />,
      <ItemRadio label="2" value={2} />,
      <ItemRadio label="3" value={3} />,
    ],
  }
  it('Should map its children and render them with specific props', () => {
    const itemRadioGroup = renderer
      .create(<ItemRadioGroup {...defaultProps} />)
      .toJSON()
    expect(itemRadioGroup).toMatchSnapshot()
  })
  it('Should listen to all children ItemRadio changes', () => {
    const itemRadioGroup = shallow(<ItemRadioGroup {...defaultProps} />)
    const onChangeListener = itemRadioGroup.instance().onChange
    expect(itemRadioGroup.find({ value: 1 }).prop('onChange')).toEqual(onChangeListener)
    expect(itemRadioGroup.find({ value: 2 }).prop('onChange')).toEqual(onChangeListener)
    expect(itemRadioGroup.find({ value: 3 }).prop('onChange')).toEqual(onChangeListener)
  })
  it('Should change the value in the state when an ItemRadio triggers a change', () => {
    const itemRadioGroup = shallow(<ItemRadioGroup {...defaultProps} />)
    itemRadioGroup.instance().onChange({ name: 'name', value: 'foo' })
    expect(itemRadioGroup.state('value')).toBe('foo')
  })
  it('Should call the onChange prop when an ItemRadio triggers a change', () => {
    const onChangeMock = jest.fn()
    const itemRadioGroup = shallow(
      <ItemRadioGroup {...defaultProps} onChange={onChangeMock} />,
    )
    itemRadioGroup.instance().onChange({ name: 'name', value: 'foo' })
    expect(onChangeMock).toHaveBeenCalledWith({ name: defaultProps.name, value: 'foo' })
  })
})
