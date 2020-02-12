import React from 'react'
import renderer from 'react-test-renderer'

import MediaContentSection from './index'

const defaultProps = {
  title: 'section title',
  content: 'section content',
  buttonLabel: 'button label',
  buttonHref: 'http://blablacar.com',
  mediaUrl: 'http://blablacar.com/pic.jpg',
}

describe('MediaContentSection', () => {
  it('should render default MediaContentSection section', () => {
    const section = <MediaContentSection {...defaultProps} />
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
