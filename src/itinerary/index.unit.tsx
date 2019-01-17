import React from 'react'
import renderer from 'react-test-renderer'

import Itinerary from 'itinerary'
import Proximity from 'proximity'

const places = [
  {
    distanceFromPoint: '1,5km',
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
    mainLabel: 'Paris',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
    mainLabel: 'Tours',
  },
  {
    distanceFromPoint: '8km',
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
    mainLabel: 'Bordeaux',
  },
]

describe('Itinerary component', () => {
  it('Render with custom className', () => {
    const itinerary = shallow(<Itinerary className="test" places={places} />)
    expect(itinerary.hasClass('test')).toBe(true)
  })

  it('Should display the top addon', () => {
    const itinerary = shallow(<Itinerary fromAddon="test" places={places} />)
    expect(itinerary.find('.kirk-itinerary-fromAddon').exists()).toBe(true)
  })

  it('Should display the bottom addon', () => {
    const itinerary = shallow(<Itinerary toAddon="test" places={places} />)
    expect(
      itinerary.find('.kirk-itinerary--arrival').hasClass('kirk-itinerary-location--toAddon'),
    ).toBe(true)
    expect(itinerary.find('.kirk-itinerary-toAddon').exists()).toBe(true)
  })

  it('Should display stopover', () => {
    const itinerary = shallow(<Itinerary places={places} />)
    expect(itinerary.find('.kirk-itinerary-location')).toHaveLength(places.length)
  })

  it('Should display link', () => {
    const itinerary = shallow(
      <Itinerary
        places={[
          {
            distanceFromPoint: '1,5km',
            time: '09:00',
            isoDate: '2017-12-11T09:00',
            subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
            mainLabel: 'Paris',
            href: '#test',
          },
          {
            distanceFromPoint: '8km',
            time: '15:00',
            isoDate: '2017-12-11T15:00',
            subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
            mainLabel: 'Bordeaux',
          },
        ]}
      />,
    )
    expect(
      itinerary
        .find('.kirk-itinerary-location-wrapper')
        .first()
        .type(),
    ).toEqual('a')
    expect(itinerary.find('.kirk-itinerary-location-chevron').exists()).toBe(true)
  })

  it('Should display button', () => {
    const itinerary = shallow(
      <Itinerary
        places={[
          {
            distanceFromPoint: '1,5km',
            time: '09:00',
            isoDate: '2017-12-11T09:00',
            subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
            mainLabel: 'Paris',
            href: <button type="button" />,
          },
          {
            distanceFromPoint: '8km',
            time: '15:00',
            isoDate: '2017-12-11T15:00',
            subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
            mainLabel: 'Bordeaux',
          },
        ]}
      />,
    )
    expect(
      itinerary
        .find('.kirk-itinerary-location-wrapper')
        .first()
        .type(),
    ).toEqual('button')
    expect(
      itinerary
        .find('.kirk-itinerary-location-wrapper')
        .first()
        .prop('type'),
    ).toEqual('button')
    expect(itinerary.find('.kirk-itinerary-location-chevron').exists()).toBe(true)
  })

  it('Should display proximity from departure point', () => {
    const itinerary = renderer.create(<Itinerary places={places} />).toJSON()
    expect(itinerary).toMatchSnapshot()
  })

  it('Should use subLabel in key if it\'s a string', () => {
    const places = [
      {
        distanceFromPoint: '1,5km',
        time: '09:00',
        isoDate: '2017-12-11T09:00',
        subLabel: 'rue Ménars',
        mainLabel: 'Paris',
      },
      {
        time: '12:00',
        isoDate: '2017-12-11T12:00',
        subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
        mainLabel: 'Tours',
      },
    ]
    const itinerary = shallow(<Itinerary fromAddon="test" places={places} />)
    const key = itinerary.find('li.kirk-itinerary-location').at(0).key()
    expect(key).toBe('Paris-rue Ménars-2017-12-11T09:00')
  })

  it('Should not use subLabel in key if it\'s a JSX object', () => {
    const itinerary = shallow(<Itinerary fromAddon="test" places={places} />)
    const key = itinerary.find('li.kirk-itinerary-location').at(0).key()
    expect(key).toBe('Paris-2017-12-11T09:00')
  })

  it('Should use key attribute as key if provided', () => {
    const places = [
      {
        distanceFromPoint: '1,5km',
        time: '09:00',
        isoDate: '2017-12-11T09:00',
        subLabel: 'rue Ménars',
        mainLabel: 'Paris',
        key: 'route-start-paris'
      },
      {
        time: '12:00',
        isoDate: '2017-12-11T12:00',
        subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
        mainLabel: 'Tours',
        key: 'route-end-tours'
      },
    ]
    const itinerary = shallow(<Itinerary fromAddon="test" places={places} />)
    const key1 = itinerary.find('li.kirk-itinerary-location').at(0).key()
    expect(key1).toBe('route-start-paris')
    const key2 = itinerary.find('li.kirk-itinerary-location').at(1).key()
    expect(key2).toBe('route-end-tours')
  })
})
