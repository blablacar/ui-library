import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { ItemRadio } from '../itemRadio'
import { ItemRadioStatus } from '../itemRadio/ItemRadio'
import { ItemRadioGroup, ItemRadioGroupProps } from './index'

describe('ItemRadioGroup', () => {
  const defaultProps: ItemRadioGroupProps = {
    name: 'name',
    value: 2,
    onChange() {},
    onClick() {},
    status: ItemRadioStatus.DEFAULT,
    children: [
      <ItemRadio label="1" value={1} />,
      <ItemRadio label="2" value={2} />,
      <ItemRadio label="3" value={3} />,
    ],
  }
  it('Should map its children and render them with specific props', () => {
    const itemRadioGroup = renderer.create(<ItemRadioGroup {...defaultProps} />).toJSON()
    expect(itemRadioGroup).toMatchSnapshot()
  })

  describe('onChange', () => {
    it('Should listen to all children ItemRadio changes', () => {
      const itemRadioGroup = shallow(
        <ItemRadioGroup {...defaultProps} aria-labelledBy="My div ID" />,
      )
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
      const itemRadioGroup = shallow(<ItemRadioGroup {...defaultProps} onChange={onChangeMock} />)
      itemRadioGroup.instance().onChange({ name: 'name', value: 'foo' })
      expect(onChangeMock).toHaveBeenCalledWith({ name: defaultProps.name, value: 'foo' })
    })
  })

  describe('onClick', () => {
    it('Should listen to all children ItemRadio clicks', () => {
      const itemRadioGroup = shallow(<ItemRadioGroup {...defaultProps} />)
      const onClickListener = itemRadioGroup.instance().onClick
      expect(itemRadioGroup.find({ value: 1 }).prop('onClick')).toEqual(onClickListener)
      expect(itemRadioGroup.find({ value: 2 }).prop('onClick')).toEqual(onClickListener)
      expect(itemRadioGroup.find({ value: 3 }).prop('onClick')).toEqual(onClickListener)
    })
    it('Should call the onClick prop when an ItemRadio triggers a click', () => {
      const onClickMock = jest.fn()
      const itemRadioGroup = shallow(<ItemRadioGroup {...defaultProps} onClick={onClickMock} />)
      itemRadioGroup.instance().onClick({ name: 'name', value: 'foo' })
      expect(onClickMock).toHaveBeenCalledWith({ name: defaultProps.name, value: 'foo' })
    })
  })
})
