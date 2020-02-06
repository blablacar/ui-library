import React from 'react'
import { shallow } from 'enzyme'

import ItineraryCollapsible from './ItineraryCollapsible'

const places = [
  {
    distanceFromPoint: '1,5km',
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Paris',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: '21 Jump Street',
    mainLabel: 'Tours',
  },
  {
    distanceFromPoint: '8km',
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Bordeaux',
  },
]

describe('ItineraryCollapsible component', () => {
  it('Should render with a label if provided', () => {
    const wrapper = shallow(<ItineraryCollapsible places={places} label="unit test" />)
    expect(wrapper.find('.kirk-itineraryCollapsible-collapsed').text()).toBe('unit test')
  })

  it('Should rendered as collapsed, extend on click, collapse on click again', () => {
    const wrapper = shallow(<ItineraryCollapsible places={places} />)
    expect(wrapper.hasClass('kirk-itineraryCollapsible--collapsed')).toBe(true)
    expect(wrapper.hasClass('kirk-itineraryCollapsible--extended')).toBe(false)
    wrapper.simulate('click')
    expect(wrapper.hasClass('kirk-itineraryCollapsible--collapsed')).toBe(false)
    expect(wrapper.hasClass('kirk-itineraryCollapsible--extended')).toBe(true)
    wrapper.simulate('click')
    expect(wrapper.hasClass('kirk-itineraryCollapsible--collapsed')).toBe(true)
    expect(wrapper.hasClass('kirk-itineraryCollapsible--extended')).toBe(false)
  })
})
