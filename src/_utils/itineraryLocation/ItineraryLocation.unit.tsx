import React from 'react'
import { shallow } from 'enzyme'

import Proximity from 'proximity'
import Bullet, { BulletTypes } from 'bullet'

import ItineraryLocation from './ItineraryLocation'

const place: Place = {
  time: '09:00',
  isoDate: '2017-12-11T09:00',
  stepAriaLabel: 'Pick up/drop off location',
  mainLabel: '21 Jump Street',
  subLabel: 'Paris',
}

const placeWithProximity: Place = {
  ...place,
  subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
}

const placeWithLink: Place = {
  ...place,
  actionAriaLabel: 'New page with a map',
  href: '#test',
}

const placeWithButton: Place = {
  ...place,
  actionAriaLabel: 'New page with a map',
  href: <button type="button" />,
}

const placeWithKey: Place = {
  ...place,
}

describe('ItineraryLocation', () => {
  it('Should display stopover with a11y label', () => {
    const wrapper = shallow(<ItineraryLocation place={place} />)
    expect(wrapper.prop('aria-label')).toEqual('Pick up/drop off location')
  })

  it('Should display link with a11y label', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithLink} />)
    const locationWrapper = wrapper.find('.kirk-itineraryLocation-wrapper')
    expect(locationWrapper.type()).toEqual('a')
    expect(locationWrapper.prop('aria-label')).toEqual('New page with a map')
    expect(locationWrapper.find('.kirk-itineraryLocation-chevron').exists()).toBe(true)
  })

  it('Should display button', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithButton} />)
    const locationWrapper = wrapper.find('.kirk-itineraryLocation-wrapper')
    expect(locationWrapper.type()).toEqual('button')
    expect(locationWrapper.prop('aria-label')).toEqual('New page with a map')
    expect(locationWrapper.prop('type')).toEqual('button')
    expect(locationWrapper.find('.kirk-itineraryLocation-chevron').exists()).toBe(true)
  })

  it('Should display Proximity if found in subLabel', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithProximity} hasSubLabel />)
    expect(wrapper.find(Proximity).prop('value')).toBe('FAR')
  })

  it('Should display time if "hasTime"', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithKey} hasTime />)
    expect(wrapper.find('time').exists()).toBe(true)
  })

  it('Should display a small Bullet if "isSmall"', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithKey} isSmall hasTime />)
    expect(wrapper.find(Bullet).prop('type')).toBe(BulletTypes.SMALL)
  })

  it('Should display subLabel instead of mainLabel with displaySubLabelOnly', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithKey} displaySubLabelOnly hasTime />)
    expect(wrapper.find('.kirk-itineraryLocation-label').text()).toBe('Paris')
  })

  it('Should not display road if "isArrival"', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithKey} isArrival />)
    expect(wrapper.hasClass('kirk-itineraryLocation--arrival')).toBe(true)
    expect(wrapper.find('.kirk-itineraryLocation-road').exists()).toBe(false)
  })

  it('Should still display road if "isArrival" but also "hasBottomAddon"', () => {
    const wrapper = shallow(<ItineraryLocation place={placeWithKey} isArrival hasBottomAddon />)
    expect(wrapper.hasClass('kirk-itineraryLocation--arrival')).toBe(true)
    expect(wrapper.hasClass('kirk-itineraryLocation--withToAddon')).toBe(true)
    expect(wrapper.find('.kirk-itineraryLocation-road').exists()).toBe(true)
  })
})
