import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Item from '_utils/item'
import ItemRadio, { ItemRadioProps, ItemRadioStatus } from './ItemRadio'

describe('ItemRadio', () => {
  const defaultProps: ItemRadioProps = {
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
    onClick() {},
    status: ItemRadioStatus.DEFAULT,
    key: 0,
  }

  it('Should use the Item component', () => {
    const itemRadio = shallow(<ItemRadio {...defaultProps} />)
    expect(itemRadio.find(Item).exists()).toBe(true)
  })
  it('Should forward its props to the Item component', () => {
    const itemRadio = renderer.create(<ItemRadio {...defaultProps} />).toJSON()
    expect(itemRadio).toMatchSnapshot()
  })
  it('Should display a CircleIcon with an innerDisc when the input is checked', () => {
    const itemRadio = renderer.create(<ItemRadio {...defaultProps} checked />).toJSON()
    expect(itemRadio).toMatchSnapshot()
  })
  it('Should display a Loader when the component is in loading status', () => {
    const itemRadio = renderer
      .create(<ItemRadio {...defaultProps} status={ItemRadioStatus.LOADING} />)
      .toJSON()
    expect(itemRadio).toMatchSnapshot()
  })

  describe('a11y', () => {
    it('Should have a label tag as wrapper to associate content text to input radio', () => {
      const itemRadio = mount(<ItemRadio {...defaultProps} />)
      const labelTag = itemRadio.find('label input[type="radio"]')
      expect(labelTag.exists()).toBe(true)
    })
  })

  describe('onChange', () => {
    it('Should bind the onChange callback of the input', () => {
      const itemRadio = mount(<ItemRadio {...defaultProps} />)
      expect(itemRadio.find('input').prop('onChange')).toEqual(itemRadio.instance().onChange)
    })

    it('Should call the onChange prop with name and value when the input changes', () => {
      const onChangeMock = jest.fn()
      const itemRadio = shallow(<ItemRadio {...defaultProps} onChange={onChangeMock} />)
      itemRadio.instance().onChange()
      expect(onChangeMock).toHaveBeenCalledWith({
        name: defaultProps.name,
        value: defaultProps.value,
      })
    })
  })

  describe('onClick', () => {
    it('Should bind the onClick callback of the input', () => {
      const itemRadio = mount(<ItemRadio {...defaultProps} />)
      expect(itemRadio.find('input').prop('onClick')).toEqual(itemRadio.instance().onClick)
    })

    it('Should call the onClick prop with name and value when the input changes', () => {
      const onClickMock = jest.fn()
      const itemRadio = shallow(<ItemRadio {...defaultProps} onClick={onClickMock} />)
      itemRadio.instance().onClick()
      expect(onClickMock).toHaveBeenCalledWith({
        name: defaultProps.name,
        value: defaultProps.value,
      })
    })
  })
})
