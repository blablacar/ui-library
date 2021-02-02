import React from 'react'
import renderer from 'react-test-renderer'

import { Avatar } from '../../../avatar'
import { MaxTwoInTheBackIllustration } from '../../../illustration/maxTwoInTheBack'
import { IllustratedSection } from './index'

describe('IllustratedSection', () => {
  it('should render an IllustratedSection section with an img', () => {
    const section = (
      <IllustratedSection illustration={<img src="http://blablacar.com/pic.jpg" alt="" />}>
        Hello World
      </IllustratedSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render an IllustratedSection section with an Avatar', () => {
    const section = (
      <IllustratedSection illustration={<Avatar image="http://blablacar.com/pic.jpg" isLarge />}>
        Hello World
      </IllustratedSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render an IllustratedSection section with an illustration', () => {
    const section = (
      <IllustratedSection illustration={<MaxTwoInTheBackIllustration />}>
        Hello World
      </IllustratedSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
