import React from 'react'
import renderer from 'react-test-renderer'

import Itinerary from 'itinerary'
import Proximity from 'proximity'

const places = [
  {
    distanceFromPoint: '1,5km',
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
  },
  {
    distanceFromPoint: '8km',
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]
const placesWithProximity = [
  {
    distanceFromPoint: '1,5km',
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place"/>,
    mainLabel: 'Paris',
  },
  {
    distanceFromPoint: '8km',
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

describe('Itinerary component', () => {
  it('Render with custom className', () => {
    const itinerary = shallow((
      <Itinerary className="test" places={places} />
    ))
    expect(itinerary.hasClass('test')).toBe(true)
  })

  it('Should display distance from departure point', () => {
    const itinerary = shallow((
      <Itinerary showFromDistance places={places} />
    ))
    expect(itinerary.find('.kirk-itinerary-fromDeparture').exists()).toBe(true)
  })

  it('Should display distance from arrival point', () => {
    const itinerary = shallow((
      <Itinerary showToDistance places={places} />
    ))
    expect(
      itinerary.find('.kirk-itinerary--arrival').hasClass('kirk-itinerary-location--fromArrival'),
    ).toBe(true)
    expect(itinerary.find('.kirk-itinerary-fromArrival').exists()).toBe(true)
  })

  it('Should display proximity from departure point', () => {
    const itinerary = renderer.create(
      <Itinerary places={places} />,
    ).toJSON()
    expect(itinerary).toMatchSnapshot()
  })
})
