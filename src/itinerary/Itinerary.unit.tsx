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

  describe('Should handle highlightRoad', () => {
    it('Should add kirk-itinerary--highlightRoad class by default', () => {
      const itinerary = shallow(<Itinerary places={places} />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(true)
    })

    it('Should add kirk-itinerary--highlightRoad class if highighlightRoad is true', () => {
      const itinerary = shallow(<Itinerary places={places} />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(true)
    })

    it('Should not add kirk-itinerary--highlightRoad class highighlightRoad is false', () => {
      const itinerary = shallow(<Itinerary places={places} highlightRoad={false} />)
      expect(itinerary.find('.kirk-itinerary--highlightRoad').exists()).toBe(false)
    })
  })
})
