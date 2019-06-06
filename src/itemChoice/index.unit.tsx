import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Item from '_utils/item'
import Loader from 'loader'
import ItemChoice, { ItemChoiceProps } from './index'

describe('ItemChoice', () => {
  const defaultProps: ItemChoiceProps = {
    title: 'Title',
    titleInfo: 'Title infos',
    data: 'Data',
    dataInfo: 'Data infos',
    className: 'custom-class-name',
    href: <a href="#" />,
    status: ItemChoice.STATUS.DEFAULT,
    style: ItemChoice.STYLE.PRIMARY,
    disabled: false,
    onClick() {},
  }

  it('Should use the Item component', () => {
    const itemChoice = shallow(<ItemChoice {...defaultProps} />)
    expect(itemChoice.find(Item).exists()).toBe(true)
  })
  it('Should forward its props to the Item component', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should use a button tag by default', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} href="" />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should display a Loader when the component is in loading status', () => {
    const itemChoice = renderer
      .create(<ItemChoice {...defaultProps} status={ItemChoice.STATUS.LOADING} />)
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should display a done Loader when the component is in checked status', () => {
    const itemChoice = renderer
      .create(<ItemChoice {...defaultProps} status={ItemChoice.STATUS.CHECKED} />)
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should bind the onDoneAnimationEnd callback of the Loader', () => {
    const onDoneAnimationEndMock = jest.fn()
    const itemChoice = mount(
      <ItemChoice {...defaultProps} onDoneAnimationEnd={onDoneAnimationEndMock} />,
    )
    expect(itemChoice.find(Loader).prop('onDoneAnimationEndMock')).toEqual(onDoneAnimationEndMock)
  })
  it('Should support a disabled state', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} disabled />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
})
