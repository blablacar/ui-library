import React from 'react'
import { shallow } from 'enzyme'

import Profile from 'profile'
import Item from '_utils/item'
import Avatar from 'avatar'
import Rating from 'rating'
import Text, { TextDisplayType } from 'text'

const defaultProps = {
  title: 'Jack Sparrow',
}
describe('Profile default', () => {
  let defaultProfile

  beforeEach(() => {
    defaultProfile = shallow(<Profile {...defaultProps} />)
  })

  it('Should pass a title prop to Item', () => {
    expect(defaultProfile.find(Item).prop('leftTitle')).toEqual('Jack Sparrow')
  })

  it("Shouldn't have `ariaLabel` by default", () => {
    expect(defaultProfile.find(Item).prop('ariaLabel')).toBeFalsy()
  })

  it('Should pass a title prop to Item', () => {
    expect(defaultProfile.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.TITLE)

    const profileMedium = shallow(<Profile {...defaultProps} isMedium />)
    expect(profileMedium.find(Item).prop('leftTitleDisplay')).toEqual(TextDisplayType.DISPLAY1)
  })

  it('Should not have a chevron by default', () => {
    expect(defaultProfile.find(Item).prop('chevron')).toBe(false)
  })
})

describe('Profile', () => {
  it('Should have `ariaLabel`', () => {
    const profile = shallow(<Profile {...defaultProps} ariaLabel="testLabel" />)
    expect(profile.find(Item).prop('ariaLabel')).toEqual('testLabel')
  })

  it('Should display info if no rating is provided', () => {
    const profile = shallow(<Profile {...defaultProps} info="fhtagn" />)
    expect(profile.find(Item).prop('leftBody')).toEqual(<Text>fhtagn</Text>)
  })

  it('Should display the rating over info if both are provided', () => {
    const profile = shallow(<Profile {...defaultProps} ratings="2" info="fhtagn" />)
    expect(profile.find(Item).prop('leftBody')).toEqual(<Rating ratings="2" />)
  })

  it('Should pass a rightAddon prop to Item', () => {
    const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    const profile = shallow(<Profile {...defaultProps} picture={pictureUrl} />)
    expect(profile.find(Item).prop('rightAddon')).toEqual(<Avatar image={pictureUrl} />)
  })

  it('Should pass all picture props to Avatar', () => {
    const pictureUrl = 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    const profile = shallow(
      <Profile {...defaultProps} picture={pictureUrl} alt="fhtagn" isMedium isIdChecked />,
    )
    expect(profile.find(Item).prop('rightAddon')).toEqual(
      <Avatar image={pictureUrl} alt="fhtagn" isMedium isIdChecked />,
    )
  })

  it('Should pass a chevron prop to Item when isLink is true', () => {
    const profile = shallow(<Profile {...defaultProps} isLink />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })

  it('Should pass a chevron prop to Item when href is present', () => {
    const profile = shallow(<Profile {...defaultProps} href="#" />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })

  it('Should pass a chevron prop to Item when href is present', () => {
    const profile = shallow(<Profile {...defaultProps} onClick={() => null} />)
    expect(profile.find(Item).prop('chevron')).toBe(true)
  })
})
