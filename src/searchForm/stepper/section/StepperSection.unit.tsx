import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { Button } from '../../../button'
import { ChevronIcon, ChevronIconDirections } from '../../../icon/chevronIcon'
import { Stepper, StepperDisplay } from '../../../stepper'
import { StepperSection } from './StepperSection'

describe('StepperSection', () => {
  it('should have a clickable Item with a title and chevron icon', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <StepperSection itemTitle="1 seat" onClose={onClick} confirmLabel="Submit" />,
    )
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(
      <ChevronIcon direction={ChevronIconDirections.LEFT} />,
    )
    expect(wrapper.find(Item).prop('tag')).toEqual(<button type="button" />)
    expect(wrapper.find(Button).prop('children')).toEqual('Submit')
    wrapper.find(Item).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have a Stepper with display large', () => {
    const wrapper = shallow(
      <StepperSection itemTitle="1 seat" confirmLabel="Submit" onClose={() => {}} />,
    )
    expect(wrapper.find(Stepper).prop('display')).toEqual(StepperDisplay.LARGE)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <StepperSection itemTitle="1 seat" title="Choose your number of seats" onClose={() => {}} />,
    )
    expect(wrapper.find(Stepper).prop('title')).toEqual('Choose your number of seats')
  })
})
