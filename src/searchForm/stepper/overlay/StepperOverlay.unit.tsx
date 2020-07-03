import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { StandardSeatIcon as StandardSeat } from '../../../icon/standardSeat'
import { Stepper, StepperDisplay } from '../../../stepper'
import { StepperOverlay } from './StepperOverlay'

describe('StepperOverlay', () => {
  it('should have a Item with a title and a seat icon', () => {
    const wrapper = shallow(<StepperOverlay itemTitle="1 seat" closeOnBlur={() => {}} />)
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<StandardSeat />)
  })

  it('should have a Stepper in large display', () => {
    const wrapper = shallow(<StepperOverlay itemTitle="1 seat" closeOnBlur={() => {}} />)
    expect(wrapper.find(Stepper).prop('display')).toEqual(StepperDisplay.LARGE)
    expect(wrapper.find(Stepper).prop('focus')).toBe(true)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <StepperOverlay
        itemTitle="1 seat"
        title="Choose your number of seats"
        closeOnBlur={() => {}}
      />,
    )
    expect(wrapper.find(Stepper).prop('title')).toEqual('Choose your number of seats')
  })
})
