import React from 'react'
import renderer from 'react-test-renderer'

import Itinerary from 'itinerary'
import Proximity from 'proximity'

const departure = {
  distanceFromPoint: '1,5km',
  time: '09:00',
  isoDate: '2017-12-11T09:00',
  subLabel: 'Porte de Vincennes',
  mainLabel: 'Paris',
}
const arrival = {
  distanceFromPoint: '8km',
  time: '12:00',
  isoDate: '2017-12-11T12:00',
  subLabel: 'Gare Bordeaux Saint-Jean',
  mainLabel: 'Bordeaux',
}
const departureWithProximity = {
  ...departure,
  subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place"/>,
}

describe('Itinerary component', () => {
  it('Render with custom className', () => {
    const itinerary = shallow((
      <Itinerary className="test" departure={departure} arrival={arrival} />
    ))
    expect(itinerary.hasClass('test')).toBe(true)
  })

  it('Should display distance from departure point', () => {
    const itinerary = shallow((
      <Itinerary showFromDistance departure={departure} arrival={arrival} />
    ))
    expect(itinerary.find('.kirk-itinerary-fromDeparture').exists()).toBe(true)
  })

  it('Should display distance from arrival point', () => {
    const itinerary = shallow((
      <Itinerary showToDistance departure={departure} arrival={arrival} />
    ))
    expect(
      itinerary.find('.kirk-itinerary--arrival').hasClass('kirk-itinerary-location--fromArrival'),
    ).toBe(true)
    expect(itinerary.find('.kirk-itinerary-fromArrival').exists()).toBe(true)
  })

  it('Should display proximity from departure point', () => {
    const itinerary = renderer.create(
      <Itinerary departure={departureWithProximity} arrival={arrival} />,
    ).toJSON()
    expect(itinerary).toMatchSnapshot()
  })
})
