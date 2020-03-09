import React from 'react'
import { shallow } from 'enzyme'
import Stepper, { StepperDisplay } from 'stepper'
import Item from '_utils/item'
import StandardSeat from 'icon/standardSeat'
import StepperOverlay from './StepperOverlay'

describe('StepperOverlay', () => {
  it('should have a Item with a title and a seat icon', () => {
    const wrapper = shallow(<StepperOverlay itemTitle="1 seat" />)
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<StandardSeat />)
  })

  it('should have a Stepper in large display', () => {
    const wrapper = shallow(<StepperOverlay itemTitle="1 seat" />)
    expect(wrapper.find(Stepper).prop('display')).toEqual(StepperDisplay.LARGE)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <StepperOverlay itemTitle="1 seat" title="Choose your number of seats" />,
    )
    expect(wrapper.find(Stepper).prop('title')).toEqual('Choose your number of seats')
  })
})
