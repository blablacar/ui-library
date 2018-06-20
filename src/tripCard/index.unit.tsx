import React from 'react'

import TripCard from 'tripCard'
import ComfortIcon from 'icon/comfortIcon'
import LightningIcon from 'icon/lightningIcon'
import LadyIcon from 'icon/ladyIcon'

const mockedProps = {
  href: '#',
  itinerary: [
    {
      mainLabel: 'Paris',
      subLabel: 'Porte de Vincennes',
      time: '09:00',
      isoDate: '2017-12-11T09:00',
      distanceFromPoint: '1,5km',
    },
    {
      mainLabel: 'Bordeaux',
      subLabel: 'Gare Bordeaux Saint-Jean',
      time: '12:00',
      isoDate: '2017-12-11T12:00',
      distanceFromPoint: '8km',
    },
  ],
  driver: {
    avatarUrl: '//placehold.it/500x500',
    firstName: 'Jane',
  },
  flags: {
    ladiesOnly: true,
    maxTwo: true,
    autoApproval: true,
  },
  price: '8,00€',
}

const Div = () => <div className="divTest" />

it('Should have the base class', () => {
  const tripCard = shallow(<TripCard {...mockedProps} />)
  expect(tripCard.hasClass('kirk-tripCard')).toBe(true)
})

it('Should have the test class', () => {
  const tripCard = shallow(<TripCard {...mockedProps} className="test" />)
  expect(tripCard.hasClass('test')).toBe(true)
})

it('Should use the right element (specified in href prop)', () => {
  const tripCard = mount(<TripCard {...mockedProps} href={<Div />} />)
  expect(tripCard.find(Div).exists()).toBe(true)
  expect(tripCard.find('.divTest').exists()).toBe(true)
})

it('Should have the highlighted modifier display the highlighted string instead of flags', () => {
  const tripCard = shallow(<TripCard {...mockedProps} highlighted="Test string" />)
  expect(tripCard.find('.kirk-tripCard--highlighted').exists()).toBe(true)
  expect(tripCard.find('.kirk-tripCard-flags').exists()).toBe(false)
  expect(tripCard.find('.kirk-tripCard-topText').exists()).toBe(true)
})

it('Should have only the Ladies Only icon', () => {
  const tripCard = shallow(<TripCard {...mockedProps} flags={{ ladiesOnly: true }} />)
  expect(tripCard.find(LadyIcon).exists()).toBe(true)
  expect(tripCard.find(ComfortIcon).exists()).toBe(false)
  expect(tripCard.find(LightningIcon).exists()).toBe(false)
})
