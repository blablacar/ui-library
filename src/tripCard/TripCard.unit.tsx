import React from 'react'
import { shallow, mount } from 'enzyme'

import Text from 'text'
import Avatar from 'avatar'
import TripCard from './TripCard'
import ComfortIcon from 'icon/comfortIcon'
import LightningIcon from 'icon/lightningIcon'
import LadyIcon from 'icon/ladyIcon'
import WarningIcon from 'icon/warningIcon'
import Card from '_utils/card'

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

const createPassengers = count => {
  let passengerIdx = 1
  const passengers = Array(count).fill({
    avatarUrl: '//placehold.it/500x500',
    firstName: `Jane ${(passengerIdx += 1)}`,
  })

  return passengers
}

const Div = () => <div className="divTest" />

describe('TripCard component', () => {
  it('Should wrap the content in a Card', () => {
    const tripCard = shallow(<TripCard {...mockedProps} />)

    expect(tripCard.first().type()).toBe(Card)
  })

  it('Should have the base class and no aria attribute', () => {
    const tripCard = shallow(<TripCard {...mockedProps} />)
    expect(tripCard.hasClass('kirk-tripCard')).toBe(true)
    expect(tripCard.prop('ariaLabel')).toBeFalsy()
  })

  it('Should have `aria-label` attribute on the wrapper link', () => {
    const tripCard = shallow(<TripCard {...mockedProps} ariaLabel="testLabel" />)
    expect(tripCard.find('a').prop('aria-label')).toEqual('testLabel')
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

  it('Should have only the Ladies Only icon', () => {
    const tripCard = shallow(<TripCard {...mockedProps} flags={{ ladiesOnly: true }} />)
    expect(tripCard.find(LadyIcon).exists()).toBe(true)
    expect(tripCard.find(ComfortIcon).exists()).toBe(false)
    expect(tripCard.find(LightningIcon).exists()).toBe(false)
  })

  it('Should render metaUrl if provided', () => {
    const tripCard = shallow(<TripCard {...mockedProps} metaUrl={null} />)
    expect(tripCard.find('meta')).toHaveLength(0)

    const tripCardWithMetaUrl = shallow(<TripCard {...mockedProps} metaUrl="blablacar.fr" />)
    expect(tripCardWithMetaUrl.find('meta')).toHaveLength(4)
  })

  it('Should show driver avatar', () => {
    const driver = {
      avatarUrl: '//placehold.it/500x500',
      firstName: 'Jane',
    }

    const component = shallow(<TripCard {...mockedProps} driver={driver} passengers={null} />)
    expect(component.find(Avatar)).toHaveLength(1)
  })

  it('Should render 3 passengers', () => {
    const passengersCount = 3
    const component = shallow(
      <TripCard {...mockedProps} driver={null} passengers={createPassengers(passengersCount)} />,
    )
    expect(component.find(Avatar)).toHaveLength(passengersCount)
    expect(component.find('.kirk-tripCard-passengers-more').exists()).toBe(false)
  })

  it('Should render 5 passengers', () => {
    const passengersCount = 5
    const component = shallow(
      <TripCard {...mockedProps} driver={null} passengers={createPassengers(passengersCount)} />,
    )
    expect(component.find(Avatar)).toHaveLength(passengersCount)
    expect(component.find('.kirk-tripCard-passengers-more').exists()).toBe(false)
  })

  it('Should render 4 passengers and a +6 icon', () => {
    const passengersCount = 10
    const component = shallow(
      <TripCard {...mockedProps} driver={null} passengers={createPassengers(passengersCount)} />,
    )
    expect(component.find(Avatar)).toHaveLength(4)
    expect(component.find('.kirk-tripCard-passengers-more').exists()).toBe(true)
    expect(
      component
        .find('.kirk-tripCard-passengers-more')
        .find(Text)
        .html(),
    ).toMatch(/\+6/)
  })

  it('Should render status information', () => {
    const statusInformation = { icon: <WarningIcon />, text: 'Warning!' }
    const component = shallow(<TripCard {...mockedProps} statusInformation={statusInformation} />)
    expect(component.find('.kirk-tripCard-top-item').exists()).toBe(true)
  })

  it('Should render badge', () => {
    const component = shallow(<TripCard {...mockedProps} badge="Cheapest!" />)
    expect(component.hasClass('kirk-tripCard--with-badge')).toBe(true)
    expect(component.find('.kirk-tripCard-badge').exists()).toBe(true)
  })

  it('Should render title', () => {
    const component = shallow(<TripCard {...mockedProps} title="Sun 3 march, 18:00" />)
    expect(component.find('.kirk-tripCard-title').exists()).toBe(true)
  })
})
