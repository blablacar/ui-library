import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Item from '_utils/item'
import ItemCheckbox, { ItemCheckboxStatus, ItemCheckboxProps } from './ItemCheckbox'

describe('ItemCheckbox', () => {
  const defaultProps: ItemCheckboxProps = {
    label: 'Label',
    name: 'name',
    className: 'custom-class-name',
    labelTitle: 'Label title',
    data: 'Data',
    dataInfo: 'Data info',
    checked: false,
    disabled: false,
    onChange() {},
    status: ItemCheckboxStatus.DEFAULT,
    key: 0,
  }

  it('Should use the Item component', () => {
    const itemCheckbox = shallow(<ItemCheckbox {...defaultProps} />)
    expect(itemCheckbox.find(Item).exists()).toBe(true)
  })
  it('Should forward its props to the Item component', () => {
    const itemCheckbox = renderer.create(<ItemCheckbox {...defaultProps} />).toJSON()
    expect(itemCheckbox).toMatchSnapshot()
  })
  it('Should display a CheckIcon when the input is checked', () => {
    const itemCheckbox = renderer.create(<ItemCheckbox {...defaultProps} checked />).toJSON()
    expect(itemCheckbox).toMatchSnapshot()
  })
  it('Should display a Loader when the component is in loading status', () => {
    const itemCheckbox = renderer
      .create(<ItemCheckbox {...defaultProps} status={ItemCheckboxStatus.LOADING} />)
      .toJSON()
    expect(itemCheckbox).toMatchSnapshot()
  })
  it('Should bind the onChange callback of the input', () => {
    const itemCheckbox = mount(<ItemCheckbox {...defaultProps} />)
    expect(itemCheckbox.find('input').prop('onChange')).toEqual(itemCheckbox.instance().onChange)
  })
  it('Should call the onChange prop with name and value when the input changes (check)', () => {
    const onChangeMock = jest.fn()
    const itemCheckbox = shallow(<ItemCheckbox {...defaultProps} onChange={onChangeMock} />)
    itemCheckbox.instance().onChange()
    expect(onChangeMock).toHaveBeenCalledWith({
      name: defaultProps.name,
      value: true,
    })
  })
  it('Should call the onChange prop with name and value when the input changes (uncheck)', () => {
    const onChangeMock = jest.fn()
    const itemCheckbox = shallow(<ItemCheckbox {...defaultProps} onChange={onChangeMock} checked />)
    itemCheckbox.instance().onChange()
    expect(onChangeMock).toHaveBeenCalledWith({
      name: defaultProps.name,
      value: false,
    })
  })
  describe('a11y', () => {
    it('Should have a label tag as wrapper to associate content text to input checkbox', () => {
      const itemCheckbox = mount(<ItemCheckbox {...defaultProps} />)
      const labelTag = itemCheckbox.find('label input[type="checkbox"]')
      expect(labelTag.exists()).toBe(true)
    })
  })
})
