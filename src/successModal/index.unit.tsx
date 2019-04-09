import React from 'react'
import { shallow, mount } from 'enzyme'

import SuccessModal from 'successModal'

const defaultProps = {
  isOpen: false,
  confirmLabel: 'Confirm',
  imageSrc: 'https://svgshare.com/i/AGz.svg',
  imageText: 'Illustration description',
  closeOnEsc: true,
  large: false,
}

describe('<SuccessModal>', () => {
  let mockConfirm
  let wrapper
  let wrapperOpen

  beforeEach(() => {
    mockConfirm = jest.fn()
    wrapper = shallow(<SuccessModal {...defaultProps} />)
    wrapperOpen = mount(<SuccessModal {...defaultProps} isOpen={true} onConfirm={mockConfirm} />)
  })

  it('Should be not visible if isOpen is set to false', () => {
    expect(wrapper.find('.kirk-modal-dialog').exists()).toBe(false)
  })

  it('Should be visible if isOpen is set to true', () => {
    expect(wrapperOpen.find('.kirk-modal-dialog').exists()).toBe(true)
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    expect(wrapperOpen.find('.kirk-button-secondary').text()).toBe('Confirm')
  })

  it('Should have the proper image', () => {
    const image = wrapperOpen.find('.kirk-successModal-image')
    expect(image.prop('src')).toBe('https://svgshare.com/i/AGz.svg')
    expect(image.prop('alt')).toBe('Illustration description')
  })

  it('Should have a confirmation button and call the according function when click on it', () => {
    const confirmButton = wrapperOpen.find('.kirk-button-secondary')
    expect(confirmButton.text()).toBe('Confirm')
    confirmButton.simulate('click')
    expect(mockConfirm).toHaveBeenCalledTimes(1)
  })

  it('Should have the correct a11y attributes', () => {
    const wrapper = mount(
      <SuccessModal isOpen ariaLabelledBy="labelledBy" ariaDescribedBy="describedBy" />,
    )
    const modal = wrapper.find('[role="dialog"]')
    expect(modal.length).toBe(1)
    expect(modal.prop('aria-modal')).toBe('true')
    expect(modal.prop('aria-labelledby')).toBe('labelledBy')
    expect(modal.prop('aria-describedby')).toBe('describedBy')
  })
})
