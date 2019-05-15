import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import ItemDeclaredChoice from 'itemDeclaredChoice'

import ItemDeclaredChoiceGroup, { ItemDeclaredChoiceGroupProps } from './index'

describe('ItemDeclaredChoiceGroup', () => {
  const defaultProps: ItemDeclaredChoiceGroupProps = {
    name: 'name',
    value: 2,
    onChange() {},
    status: ItemDeclaredChoice.STATUS.DEFAULT,
    children: [
      <ItemDeclaredChoice label="1" value={1} />,
      <ItemDeclaredChoice label="2" value={2} />,
      <ItemDeclaredChoice label="3" value={3} />,
    ],
  }
  it('Should map its children and render them with specific props', () => {
    const itemDeclaredChoiceGroup = renderer
      .create(<ItemDeclaredChoiceGroup {...defaultProps} />)
      .toJSON()
    expect(itemDeclaredChoiceGroup).toMatchSnapshot()
  })
  it('Should listen to all children ItemDeclaredChoice changes', () => {
    const itemDeclaredChoiceGroup = shallow(<ItemDeclaredChoiceGroup {...defaultProps} />)
    const onChangeListener = itemDeclaredChoiceGroup.instance().onChange
    expect(itemDeclaredChoiceGroup.find({ value: 1 }).prop('onChange')).toEqual(onChangeListener)
    expect(itemDeclaredChoiceGroup.find({ value: 2 }).prop('onChange')).toEqual(onChangeListener)
    expect(itemDeclaredChoiceGroup.find({ value: 3 }).prop('onChange')).toEqual(onChangeListener)
  })
  it('Should change the value in the state when an ItemDeclaredChoice triggers a change', () => {
    const itemDeclaredChoiceGroup = shallow(<ItemDeclaredChoiceGroup {...defaultProps} />)
    itemDeclaredChoiceGroup.instance().onChange({ name: 'name', value: 'foo' })
    expect(itemDeclaredChoiceGroup.state('value')).toBe('foo')
  })
  it('Should call the onChange prop when an ItemDeclaredChoice triggers a change', () => {
    const onChangeMock = jest.fn()
    const itemDeclaredChoiceGroup = shallow(
      <ItemDeclaredChoiceGroup {...defaultProps} onChange={onChangeMock} />,
    )
    itemDeclaredChoiceGroup.instance().onChange({ name: 'name', value: 'foo' })
    expect(onChangeMock).toHaveBeenCalledWith({ name: defaultProps.name, value: 'foo' })
  })
})
