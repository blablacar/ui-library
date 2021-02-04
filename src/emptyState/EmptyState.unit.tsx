import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '../button'
import { EmptyStateIllustration } from '../illustration/emptyState'
import { Title } from '../title'
import { EmptyState } from './EmptyState'

const defaultProps = {
  illustration: <img src="my-image-url" alt="" />,
  text: 'Explanation text.',
}

describe('EmptyState', () => {
  it('Should show title & image', () => {
    const wrapper = shallow(<EmptyState {...defaultProps} />)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find(Button).exists()).toBe(false)
  })

  it('Should render a JSX element instead of a title if text is not provided as a string', () => {
    const wrapper = shallow(<EmptyState {...defaultProps} text={<h2>not a Title</h2>} />)
    expect(wrapper.find(Title).exists()).toBe(false)
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('Should render button if provided', () => {
    const wrapper = shallow(<EmptyState {...defaultProps} button={<Button>Action</Button>} />)
    expect(wrapper.find(Button).exists()).toBe(true)
  })

  it('Should render an illustration', () => {
    const wrapper = shallow(<EmptyState illustration={<EmptyStateIllustration />} text="Yolo" />)
    expect(wrapper.find(EmptyStateIllustration).exists()).toBe(true)
  })
})
