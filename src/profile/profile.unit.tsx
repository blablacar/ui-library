import React from 'react'
import { mount } from 'enzyme'

import Profile from 'profile'
import Item from '_utils/item'
import Avatar from 'avatar'
import Rating from 'rating'
import { TextDisplayType } from 'text'
import TextBody from 'typography/body'

const defaultProps = {
  title: 'Jack Sparrow',
}
describe('Profile default', () => {
  let defaultProfile: any

  beforeEach(() => {
    defaultProfile = mount(<Profile {...defaultProps} />)
  })

  it('Should pass a title prop to Item', () => {
    expect(defaultProfile.find(Item).prop('leftTitle')).toEqual('Jack Sparrow')
  })

  it("Shouldn't have `ariaLabel` by default", () => {
    expect(defaultProfile.find(Item).prop('ariaLabel')).toBeFalsy()
  })

  it('Should pass a title prop to Item', () => {
    expect(defaultProfile.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.TITLE)

    const profileMedium = mount(<Profile {...defaultProps} isMedium />)
    expect(profileMedium.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.DISPLAY1)
  })

  it('Should not have a chevron by default', () => {
    expect(defaultProfile.find(Item).prop('chevron')).toBe(false)
  })
})

describe('Profile', () => {
  it('Should have `ariaLabel`', () => {
    const profile = mount(<Profile {...defaultProps} ariaLabel="testLabel" />)
    expect(profile.find(Item).prop('ariaLabel')).toEqual('testLabel')
  })

  it('Should display info if no rating is provided', () => {
    const profile = mount(<Profile {...defaultProps} info="test label" />)
    expect(
      profile
        .find(Item)
        .find(TextBody)
        .text(),
    ).toEqual('test label')
  })

  it('Should display the rating over info if both are provided', () => {
    const profile = mount(<Profile {...defaultProps} ratings={2} info="test label" />)
    const rating = profile.find(Item).find(Rating)
    expect(rating.exists()).toBeTruthy()
    expect(rating.exists()).toBeTruthy()
    expect(rating.prop('ratings')).toBe(2)
  })

  it('Should pass a rightAddon prop to Item', () => {
    const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    const profile = mount(<Profile {...defaultProps} picture={pictureUrl} />)
    const avatar = profile.find(Item).find(Avatar)
    expect(avatar.exists()).toBeTruthy()
    expect(avatar.prop('image')).toBe(pictureUrl)
  })

  it('Should pass all picture props to Avatar', () => {
    const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    const profile = mount(
      <Profile {...defaultProps} picture={pictureUrl} alt="alt_text" isMedium isIdChecked />,
    )
    const avatar = profile.find(Item).find(Avatar)
    expect(avatar.exists()).toBeTruthy()
    expect(avatar.prop('image')).toBe(pictureUrl)
    expect(avatar.prop('alt')).toBe('alt_text')
    expect(avatar.prop('isMedium')).toBe(true)
    expect(avatar.prop('isIdChecked')).toBe(true)
  })

  it('Should pass a chevron prop to Item when isLink is true', () => {
    const profile = mount(<Profile {...defaultProps} isLink />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })

  it('Should pass a chevron prop to Item when href is present', () => {
    const profile = mount(<Profile {...defaultProps} href="#" />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })

  it('Should pass a chevron prop to Item when href is present', () => {
    const profile = mount(<Profile {...defaultProps} onClick={() => null} />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })
})
