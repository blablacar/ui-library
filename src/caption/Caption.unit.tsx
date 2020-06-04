import React from 'react'
import { mount, shallow } from 'enzyme'

import { Caption, renderSecondary } from './Caption'

it('Should have the proper text & attributes with link', () => {
  const caption = mount(
    <Caption
      href="https://blablacar.com"
      secondaryText="Go to blablacar"
      isoDate="2017-08-07T14:10:40.526Z"
    >
      08th August 2017
    </Caption>,
  )
  expect(caption.find('time')).toHaveLength(1)
  expect(caption.find('time').text()).toBe('08th August 2017')
  expect(caption.find('time').prop('dateTime')).toBe('2017-08-07T14:10:40.526Z')
  expect(caption.find('span')).toHaveLength(1)
  expect(caption.find('a')).toHaveLength(1)
  expect(caption.find('a').prop('href')).toBe('https://blablacar.com')
})

it('Should not have a datetime attribute', () => {
  const caption = shallow(<Caption>08th August 2017</Caption>)
  expect(caption.find('time').prop('dateTime')).toBeNull()
})

it('Should have the proper text & attributes without a link', () => {
  const caption = shallow(
    <Caption secondaryText="Go to blablacar" isoDate="2017-08-07T14:10:40.526Z">
      08th August 2017
    </Caption>,
  )
  expect(caption.find('span > span').text()).toBe('Go to blablacar')
})

it('Should not render the secondary element', () => {
  const caption = shallow(<Caption>08th August 2017</Caption>)
  expect(caption.find('span')).toHaveLength(0)
})

it('Should render a <span> element if no href is passed', () => {
  const caption = shallow(renderSecondary(undefined, 'Delivered'))
  expect(caption.find('span').contains(<span>Delivered</span>)).toBe(true)
})

it('Should render a <button> if href is passed', () => {
  const caption = mount(renderSecondary('https://m.blablacar.fr', 'Delivered'))
  expect(caption.find('a')).toHaveLength(1)
  expect(caption.find('a').prop('href')).toBe('https://m.blablacar.fr')
})
