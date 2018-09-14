import React from 'react'

import Profile from 'profile'
import Rating from 'rating'
import Button from 'button'
import ArrowIcon from 'icon/arrowIcon'

it('Should have a profile name', () => {
  const profile = shallow(<Profile title="Jack Sparrow" />)
  const name = profile.find('.kirk-title')
  expect(name.text()).toBe('Jack Sparrow')
})

it('Should have a rating', () => {
  const profile = shallow(<Profile title="Jack Sparrow" ratings={123} />)
  expect(profile.contains(<Rating ratings={123} score={0} />)).toBe(true)
})

it('Should have an image', () => {
  const picture = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
  const profile = mount((
    <Profile
      title="Jack Sparrow"
      picture={picture}
    />
  ))
  expect(profile.find('img').prop('src')).toBe(picture)
})

it('Should display an action button', () => {
  const profile = shallow(<Profile title="Jack Sparrow" action="title" />)
  expect(profile.contains(
    <Button status={Button.STATUS.UNSTYLED} title="title"><ArrowIcon right /></Button>,
  )).toBe(true)
})
