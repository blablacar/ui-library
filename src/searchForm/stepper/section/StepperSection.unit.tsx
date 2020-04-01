import React from 'react'
import { shallow } from 'enzyme'
import Stepper, { StepperDisplay } from 'stepper'
import StepperSection from './StepperSection'
import Item from '_utils/item'
import ChevronIcon from 'icon/chevronIcon'
import Button from 'button'

describe('StepperSection', () => {
  it('should have a clickable Item with a title and chevron icon', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <StepperSection itemTitle="1 seat" onBackButtonClick={onClick} confirmLabel="Submit" />,
    )
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<ChevronIcon left />)
    expect(wrapper.find(Item).prop('tag')).toEqual(<button type="button" />)
    expect(wrapper.find(Button).prop('children')).toEqual('Submit')
    wrapper.find(Item).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have a Stepper with display large', () => {
    const wrapper = shallow(<StepperSection itemTitle="1 seat" confirmLabel="Submit" />)
    expect(wrapper.find(Stepper).prop('display')).toEqual(StepperDisplay.LARGE)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <StepperSection itemTitle="1 seat" title="Choose your number of seats" />,
    )
    expect(wrapper.find(Stepper).prop('title')).toEqual('Choose your number of seats')
  })
})
