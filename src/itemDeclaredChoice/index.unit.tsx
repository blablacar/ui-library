import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Item from '_utils/item'
import ItemDeclaredChoice, { ItemDeclaredChoiceProps } from './index'

describe('ItemDeclaredChoice', () => {
  const defaultProps: ItemDeclaredChoiceProps = {
    label: 'Label',
    name: 'name',
    value: 0,
    className: 'custom-class-name',
    labelTitle: 'Label title',
    data: 'Data',
    dataInfo: 'Data info',
    checked: false,
    disabled: false,
    onChange() {},
    status: ItemDeclaredChoice.STATUS.DEFAULT,
    key: 0,
  }

  it('Should use the Item component', () => {
    const itemDeclaredChoice = shallow(<ItemDeclaredChoice {...defaultProps} />)
    expect(itemDeclaredChoice.find(Item).exists()).toBe(true)
  })
  it('Should forward its props to the Item component', () => {
    const itemDeclaredChoice = renderer.create(<ItemDeclaredChoice {...defaultProps} />).toJSON()
    expect(itemDeclaredChoice).toMatchSnapshot()
  })
  it('Should display a CheckIcon when the input is checked', () => {
    const itemDeclaredChoice = renderer
      .create(<ItemDeclaredChoice {...defaultProps} checked />)
      .toJSON()
    expect(itemDeclaredChoice).toMatchSnapshot()
  })
  it('Should display a Loader when the component is in loading status', () => {
    const itemDeclaredChoice = renderer
      .create(<ItemDeclaredChoice {...defaultProps} status={ItemDeclaredChoice.STATUS.LOADING} />)
      .toJSON()
    expect(itemDeclaredChoice).toMatchSnapshot()
  })
  it('Should bind the onChange callback of the input', () => {
    const itemDeclaredChoice = mount(<ItemDeclaredChoice {...defaultProps} />)
    expect(itemDeclaredChoice.find('input').prop('onChange')).toEqual(
      itemDeclaredChoice.instance().onChange,
    )
  })
  it('Should call the onChange prop with name and value when the input changes', () => {
    const onChangeMock = jest.fn()
    const itemDeclaredChoice = shallow(
      <ItemDeclaredChoice {...defaultProps} onChange={onChangeMock} />,
    )
    itemDeclaredChoice.instance().onChange()
    expect(onChangeMock).toHaveBeenCalledWith({
      name: defaultProps.name,
      value: defaultProps.value,
    })
  })
})
