import React from 'react'
import { shallow, mount } from 'enzyme'

import Profile from 'profile'
import Item from '_utils/item'
import Avatar from 'avatar'
import Rating from 'rating'
import Text, { TextDisplayType } from 'text'

const defaultProps = {
  title: 'Jack Sparrow',
}

it('Should pass a title prop to Item', () => {
  const profile = shallow(<Profile title="Jack Sparrow" />)
  expect(profile.find(Item).prop('leftTitle')).toEqual('Jack Sparrow')
})

it('Should pass a title prop to Item', () => {
  const profile = shallow(<Profile title="Jack Sparrow" />)
  expect(profile.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.TITLE)

  const profileMedium = shallow(<Profile title="Jack Sparrow" isMedium />)
  expect(profileMedium.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.DISPLAY2)
})

it('Should display info if no rating is provided', () => {
  const profile = shallow(<Profile title="Jack Sparrow" info="fhtagn" />)
  expect(profile.find(Item).prop('leftBody')).toEqual(<Text>fhtagn</Text>)
})

it('Should display the rating over info if both are provided', () => {
  const profile = shallow(<Profile title="Jack Sparrow" ratings="2" info="fhtagn" />)
  expect(profile.find(Item).prop('leftBody')).toEqual(<Rating ratings="2" />)
})

it('Should pass a rightAddon prop to Item', () => {
  const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
  const profile = shallow(<Profile title="Jack Sparrow" picture={pictureUrl} />)
  expect(profile.find(Item).prop('rightAddon')).toEqual(<Avatar image={pictureUrl} />)
})

it('Should pass all picture props to Avatar', () => {
  const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
  const profile = shallow(
    <Profile title="Jack Sparrow" picture={pictureUrl} alt="fhtagn" isMedium isIdChecked />,
  )
  expect(profile.find(Item).prop('rightAddon')).toEqual(
    <Avatar image={pictureUrl} alt="fhtagn" isMedium isIdChecked />,
  )
})

it('Should not have a chevron by default', () => {
  const profile = shallow(<Profile title="Jack Sparrow" />)
  expect(profile.find(Item).prop('chevron')).toBe(false)
})

it('Should pass a chevron prop to Item when isLink is true', () => {
  const profile = shallow(<Profile title="Jack Sparrow" isLink />)
  expect(profile.find(Item).prop('chevron')).toBe(true)
})

it('Should pass a chevron prop to Item when href is present', () => {
  const profile = shallow(<Profile title="Jack Sparrow" href="#" />)
  expect(profile.find(Item).prop('chevron')).toBe(true)
})

it('Should pass a chevron prop to Item when href is present', () => {
  const profile = shallow(<Profile title="Jack Sparrow" onClick={() => null} />)
  expect(profile.find(Item).prop('chevron')).toBe(true)
})
