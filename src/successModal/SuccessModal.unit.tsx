import React from 'react'
import { mount, shallow } from 'enzyme'

import SuccessModal from './index'

const defaultProps = {
  isOpen: false,
  confirmLabel: 'Confirm',
  imageSrc: 'https://svgshare.com/i/AGz.svg',
  imageText: 'Illustration description',
  closeOnEsc: true,
  onClose: () => {},
  forwardedRef: null,
}

describe('<SuccessModal>', () => {
  let mockClose
  let wrapperOpen

  it('Should be visible if isOpen is set to true', () => {
    mockClose = jest.fn()
    wrapperOpen = mount(
      <SuccessModal {...defaultProps} isOpen onClose={mockClose}>
        Success description
      </SuccessModal>,
    )
    expect(wrapperOpen.find('.kirk-modal-dialog').exists()).toBe(true)
  })

  it('Should be hidden if isOpen is set to false', () => {
    const wrapper = shallow(<SuccessModal {...defaultProps} />)
    expect(wrapper.find('.kirk-modal-dialog').exists()).toBe(false)
  })

  it('Should have proper linked id to the content text', () => {
    expect(
      wrapperOpen
        .find('[data-test="success-title"]')
        .at(0)
        .text(),
    ).toEqual('Success description')
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    expect(
      wrapperOpen
        .find('[data-test="success-button"]')
        .at(0)
        .text(),
    ).toBe('Confirm')
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    const confirmButton = wrapperOpen.find('[data-test="success-button"]').at(0)
    expect(confirmButton.text()).toBe('Confirm')
    confirmButton.simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
})
