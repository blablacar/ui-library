import React from 'react'
import renderer from 'react-test-renderer'

import FakeTextField from 'fakeTextField'

describe('FakeTextField', () => {
  it('Should have the proper default props', () => {
    const wrapper = renderer.create(<FakeTextField>Hello world</FakeTextField>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should have the text ellipsed', () => {
    const wrapper = renderer.create((
      <FakeTextField ellipsis>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec nec tristique sapien, eu placerat justo. Donec tempor,
        risus ac cursus fringilla, lorem ipsum facilisis tortor, vel
        molestie sapien justo nec orci.
      </FakeTextField>
    ))
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support add-ons', () => {
    const wrapper = renderer.create((
      <FakeTextField addOn={<div>Add-on</div>}>
        Hello world
      </FakeTextField>
    ))
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support simple links', () => {
    const wrapper = renderer.create((
      <FakeTextField href="#foo">
        Click me
      </FakeTextField>
    ))
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should support component links', () => {
    const wrapper = renderer.create((
      <FakeTextField href={<a href="#bar" />}>
        Click me
      </FakeTextField>
    ))
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
