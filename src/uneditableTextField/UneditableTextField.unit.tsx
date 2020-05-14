import React from 'react'
import renderer from 'react-test-renderer'

import UneditableTextField from './index'

describe('UneditableTextField', () => {
  it('Should have the proper default props', () => {
    const wrapper = renderer.create(<UneditableTextField>Hello world</UneditableTextField>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should have the text ellipsed', () => {
    const wrapper = renderer.create(
      <UneditableTextField ellipsis>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tristique sapien, eu
        placerat justo. Donec tempor, risus ac cursus fringilla, lorem ipsum facilisis tortor, vel
        molestie sapien justo nec orci.
      </UneditableTextField>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support add-ons', () => {
    const wrapper = renderer.create(
      <UneditableTextField addOn={<div>Add-on</div>}>Hello world</UneditableTextField>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support simple links', () => {
    const wrapper = renderer.create(<UneditableTextField href="#foo">Click me</UneditableTextField>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support component links', () => {
    const wrapper = renderer.create(
      <UneditableTextField href={<a href="#bar" />}>Click me</UneditableTextField>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
