import React from 'react'
import { shallow, mount } from 'enzyme'

import SuccessModal from 'successModal'

const defaultProps = {
  isOpen: false,
  confirmLabel: 'Confirm',
  imageSrc: 'https://svgshare.com/i/AGz.svg',
  imageText: 'Illustration description',
  closeOnEsc: true,
}

describe('<SuccessModal>', () => {
  let mockClose
  let wrapper
  let wrapperOpen

  beforeEach(() => {
    mockClose = jest.fn()
    wrapper = shallow(<SuccessModal {...defaultProps} />)
    wrapperOpen = mount(
      <SuccessModal {...defaultProps} isOpen onClose={mockClose}>
        Success description
      </SuccessModal>,
    )
  })

  it('Should be not visible if isOpen is set to false', () => {
    expect(wrapper.find('.kirk-modal-dialog').exists()).toBe(false)
  })

  it('Should be visible if isOpen is set to true', () => {
    expect(wrapperOpen.find('.kirk-modal-dialog').exists()).toBe(true)
  })

  it('Should have proper linked id to the content text', () => {
    const ariaLabelledByValue = wrapperOpen.find('.kirk-successModal').prop('aria-labelledby')
    expect(wrapperOpen.find(`#${ariaLabelledByValue} h1`).text()).toEqual('Success description')
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    expect(wrapperOpen.find('.kirk-button-secondary').text()).toBe('Confirm')
  })

  it('Should have the proper image', () => {
    const image = wrapperOpen.find('.kirk-successModal-image')
    expect(image.prop('src')).toBe('https://svgshare.com/i/AGz.svg')
    expect(image.prop('alt')).toBe('Illustration description')
  })

  it("Shouldn't access the image with screen readers", () => {
    const image = wrapperOpen.find('.kirk-successModal-image')
    expect(image.prop('aria-hidden')).toBe(true)
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    const confirmButton = wrapperOpen.find('.kirk-button-secondary')
    expect(confirmButton.text()).toBe('Confirm')
    confirmButton.simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
})
