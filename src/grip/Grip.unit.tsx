import React from 'react'
import { shallow } from 'enzyme'

import { TheVoice } from '../theVoice'
import { Grip, SLIDE_OFFSET, touchEndListener } from './Grip'
import { GripHandle } from './GripHandle'

describe('Grip', () => {
  const defaultProps = {
    onSlideUp: jest.fn(),
    onSlideDown: jest.fn(),
  }
  it('Should render a GripHandle', () => {
    const grip = shallow(<Grip {...defaultProps} />)
    expect(grip.find(GripHandle).exists()).toBe(true)
  })
  it('Should render its children', () => {
    const grip = shallow(
      <Grip {...defaultProps}>
        <TheVoice>Hello World</TheVoice>
      </Grip>,
    )
    expect(grip.find(TheVoice).exists()).toBe(true)
  })
  describe('touchEndListener', () => {
    const fingerYPosition = 100
    const setFingerYPosition = jest.fn()
    it('Should call onSlideUp when touch position is higher than initial touch', () => {
      const slideUpMock = jest.fn()
      touchEndListener(fingerYPosition - SLIDE_OFFSET * 2, fingerYPosition, setFingerYPosition, {
        ...defaultProps,
        onSlideUp: slideUpMock,
      })
      expect(slideUpMock).toHaveBeenCalled()
    })
    it('Should call onSlideDown when touch position is lower than initial touch', () => {
      const slideDownMock = jest.fn()
      touchEndListener(fingerYPosition + SLIDE_OFFSET * 2, fingerYPosition, setFingerYPosition, {
        ...defaultProps,
        onSlideDown: slideDownMock,
      })
      expect(slideDownMock).toHaveBeenCalled()
    })
    it('Should not do anything if touch position is within the SLIDE_OFFSET', () => {
      const slideDownMock = jest.fn()
      const slideUpMock = jest.fn()
      touchEndListener(fingerYPosition - SLIDE_OFFSET / 2, fingerYPosition, setFingerYPosition, {
        onSlideUp: slideUpMock,
        onSlideDown: slideDownMock,
      })
      touchEndListener(fingerYPosition + SLIDE_OFFSET / 2, fingerYPosition, setFingerYPosition, {
        onSlideUp: slideUpMock,
        onSlideDown: slideDownMock,
      })
      expect(slideDownMock).not.toHaveBeenCalled()
      expect(slideUpMock).not.toHaveBeenCalled()
    })
    it('Should not do anything if disabled prop is set to true', () => {
      const slideDownMock = jest.fn()
      const slideUpMock = jest.fn()
      touchEndListener(fingerYPosition - SLIDE_OFFSET * 2, fingerYPosition, setFingerYPosition, {
        onSlideUp: slideUpMock,
        onSlideDown: slideDownMock,
        disabled: true,
      })
      touchEndListener(fingerYPosition + SLIDE_OFFSET * 2, fingerYPosition, setFingerYPosition, {
        onSlideUp: slideUpMock,
        onSlideDown: slideDownMock,
        disabled: true,
      })
      expect(slideDownMock).not.toHaveBeenCalled()
      expect(slideUpMock).not.toHaveBeenCalled()
    })
  })
})
