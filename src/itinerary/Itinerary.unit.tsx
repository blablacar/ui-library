import React from 'react'
import { shallow } from 'enzyme'

import Itinerary from './Itinerary'
import Proximity from 'proximity'

const places = [
  {
    distanceFromPoint: '1,5km',
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
    mainLabel: 'Paris',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: <Proximity value="MIDDLE" title="Pick up point is not that far fom your place" />,
    mainLabel: 'Tours',
  },
  {
    distanceFromPoint: '8km',
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: <Proximity value="CLOSE" title="Pick up point is close to your place" />,
    mainLabel: 'Bordeaux',
  },
]

describe('Itinerary component', () => {
  it('Render with custom className', () => {
    const itinerary = shallow(<Itinerary className="test" places={places} />)
    const root = itinerary.find('.kirk-itinerary-root')
    expect(root.hasClass('test')).toBe(true)
  })

  it('Render with aria-labelledby', () => {
    const itinerary = shallow(<Itinerary ariaLabelledBy="id" places={places} />)
    expect(itinerary.prop('aria-labelledby')).toEqual('id')
  })

  it('Render with aria-label', () => {
    const itinerary = shallow(
      <Itinerary ariaLabelledBy="id" ariaLabel="testLabel" places={places} />,
    )
    expect(itinerary.prop('aria-label')).toEqual('testLabel')
    expect(itinerary.prop('aria-labelledby')).toEqual(undefined)
  })

  it('Should display the top addon with a11y label', () => {
    const itinerary = shallow(
      <Itinerary fromAddon="test" fromAddonAriaLabel="testLabel" places={places} />,
    )
    expect(itinerary.find('.kirk-itinerary-addon--from').exists()).toBe(true)
    expect(itinerary.find('.kirk-itinerary-addon--from').prop('aria-label')).toEqual('testLabel')
  })

  it('Should display the bottom addon with a11y label', () => {
    const itinerary = shallow(
      <Itinerary toAddon="test" toAddonAriaLabel="testLabel" places={places} />,
    )
    expect(
      itinerary.find('.kirk-itinerary--arrival').hasClass('kirk-itinerary-location--withToAddon'),
    ).toBe(true)
    expect(itinerary.find('.kirk-itinerary-addon--to').exists()).toBe(true)
    expect(itinerary.find('.kirk-itinerary-addon--to').prop('aria-label')).toEqual('testLabel')
  })

  it('Should not render top addon with blank string', () => {
    const itinerary = shallow(<Itinerary fromAddon=" " places={places} />)
    expect(itinerary.find('.kirk-itinerary-addon--from').exists()).toBe(false)
  })

  it('Should not render bottom addon with blank string', () => {
    const itinerary = shallow(<Itinerary toAddon=" " places={places} />)
    expect(itinerary.find('.kirk-itinerary-addon--to').exists()).toBe(false)
  })

  describe('Should handle highlightRoad', () => {
    it('Should add kirk-itinerary--highlightRoad class by default', () => {
      const itinerary = shallow(<Itinerary places={places} />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(true)
    })

    it('Should add kirk-itinerary--highlightRoad class if highighlightRoad is true', () => {
      const itinerary = shallow(<Itinerary places={places} highighlightRoad />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(true)
    })

    it('Should not add kirk-itinerary--highlightRoad class highighlightRoad is false', () => {
      const itinerary = shallow(<Itinerary places={places} highlightRoad={false} />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(false)
    })
  })

  it('Should display stopover with a11y label', () => {
    const itinerary = shallow(<Itinerary places={places} />)
    expect(itinerary.find('.kirk-itinerary-location')).toHaveLength(places.length)
    expect(
      itinerary
        .find('.kirk-itinerary-location')
        .first()
        .prop('aria-label'),
    ).toEqual('Pick up/drop off location')
  })

  it('Should display link with a11y label', () => {
    const itinerary = shallow(
      <Itinerary
        places={[
          {
            distanceFromPoint: '1,5km',
            time: '09:00',
            isoDate: '2017-12-11T09:00',
            subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
            mainLabel: 'Paris',
            actionAriaLabel: 'New page with a map',
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
    expect(
      itinerary
        .find('.kirk-itinerary-location-wrapper')
        .first()
        .prop('aria-label'),
    ).toEqual('New page with a map')
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
            actionAriaLabel: 'New page with a map',
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
        .prop('aria-label'),
    ).toEqual('New page with a map')
    expect(
      itinerary
        .find('.kirk-itinerary-location-wrapper')
        .first()
        .prop('type'),
    ).toEqual('button')
    expect(itinerary.find('.kirk-itinerary-location-chevron').exists()).toBe(true)
  })

  it('Should display proximity pills for all points', () => {
    const itinerary = shallow(<Itinerary places={places} />)
    const proxi = itinerary.find(Proximity)
    expect(proxi).toHaveLength(3)
    expect(proxi.first().prop('value')).toBe('FAR')
  })

  it("Should use subLabel in key if it's a string", () => {
    const placesList = [
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
    const itinerary = shallow(<Itinerary fromAddon="test" places={placesList} />)
    const key1 = itinerary
      .find('li.kirk-itinerary-location')
      .at(1)
      .key()
    expect(key1).toBe('Paris-rue Ménars-2017-12-11T09:00')
    const key2 = itinerary
      .find('li.kirk-itinerary-location')
      .at(2)
      .key()
    expect(key2).toBe('Tours-2017-12-11T12:00')
  })

  it("Should not use subLabel in key if it's a JSX object", () => {
    const itinerary = shallow(<Itinerary fromAddon="test" places={places} />)
    const key = itinerary
      .find('li.kirk-itinerary-location')
      .at(1)
      .key()
    expect(key).toBe('Paris-2017-12-11T09:00')
  })

  it('Should use key attribute as key if provided', () => {
    const placesList = [
      {
        distanceFromPoint: '1,5km',
        time: '09:00',
        isoDate: '2017-12-11T09:00',
        subLabel: 'rue Ménars',
        mainLabel: 'Paris',
        key: 'route-start-paris',
      },
      {
        time: '12:00',
        isoDate: '2017-12-11T12:00',
        subLabel: <Proximity value="FAR" title="Pick up point is quite far fom your place" />,
        mainLabel: 'Tours',
        key: 'route-end-tours',
      },
    ]
    const itinerary = shallow(<Itinerary fromAddon="test" places={placesList} />)
    const key1 = itinerary
      .find('li.kirk-itinerary-location')
      .at(1)
      .key()
    expect(key1).toBe('route-start-paris')
    const key2 = itinerary
      .find('li.kirk-itinerary-location')
      .at(2)
      .key()
    expect(key2).toBe('route-end-tours')
  })

  describe('small', () => {
    it('Should be displayed as small if required in props', () => {
      const itinerary = shallow(<Itinerary places={places} small />)
      const ul = itinerary.find('ul')
      expect(ul.hasClass('kirk-itinerary--noTime')).toBe(true)
    })

    it('Should not be displayed as small if not in props and time exists', () => {
      const itinerary = shallow(<Itinerary places={places} />)
      const ul = itinerary.find('ul')
      expect(ul.hasClass('kirk-itinerary--noTime')).toBe(false)
    })

    it('Should be displayed as small if no time', () => {
      const placesList = [
        {
          isoDate: '2017-12-11T09:00',
          mainLabel: 'Paris',
          subLabel: 'Place de Clichy',
          key: 'route-start-paris',
        },
        {
          isoDate: '2017-12-11T12:00',
          mainLabel: 'Tours',
          key: 'route-end-tours',
        },
      ]

      const itinerary = shallow(<Itinerary places={placesList} />)
      const ul = itinerary.find('ul')
      expect(ul.hasClass('kirk-itinerary--noTime')).toBe(true)
    })
  })
})
