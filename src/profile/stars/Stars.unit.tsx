import React from 'react'
import { mount } from 'enzyme'

import { Stars } from './Stars'

const testStars = (nbStars: number, stars: any) => {
  stars.forEach((star: any, index: number) => {
    const filled = nbStars - index
    const result = filled > 0 ? Math.min(1, filled) : 0
    expect(star.find('linearGradient').prop('id')).toBe(`gradient-${result}`)
  })
}

it('Should display 5 stars', () => {
  const nbStars = 5
  const stars = mount(<Stars stars={nbStars} />)
  const starsArray = stars.find('.star')
  expect(starsArray).toHaveLength(5)
  testStars(nbStars, starsArray)
})

it('Should display 0 stars', () => {
  const nbStars = 0
  const stars = mount(<Stars stars={nbStars} />)
  const starsArray = stars.find('.star')
  expect(starsArray).toHaveLength(5)
  testStars(nbStars, starsArray)
})

it('Should display 2.5 stars', () => {
  const nbStars = 2.5
  const stars = mount(<Stars stars={nbStars} />)
  const starsArray = stars.find('.star')
  expect(starsArray).toHaveLength(5)
  testStars(nbStars, starsArray)
})
