import React from 'react'
import { mount } from 'enzyme'

import ConfirmationModal from 'confirmationModal'
import { CrossIcon } from 'icon/crossIcon'

const defaultProps = {
  isOpen: false,
  confirmLabel: 'Confirm',
  closeOnEsc: true,
  large: false,
}

const defaultWarningProps = {
  ...defaultProps,
  status: ConfirmationModal.STATUS.WARNING,
}

const defaultReminderProps = {
  ...defaultProps,
  status: ConfirmationModal.STATUS.REMINDER,
}

describe('<ConfirmationModal> with warning status', () => {
  let mockClose
  let mockConfirm

  beforeEach(() => {
    mockClose = jest.fn()
    mockConfirm = jest.fn()
  })

  it('Should have a close and confirm buttons triggering onClose & onConfirm', () => {
    const wrapper = mount(
      <ConfirmationModal
        {...defaultWarningProps}
        isOpen
        onConfirm={mockConfirm}
        onClose={mockClose}
      />,
    )

    const modalCross = wrapper.find(CrossIcon)
    expect(modalCross.exists()).toBe(true)
    wrapper.find(CrossIcon).simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('should have a confirm button with label and action', () => {
    const wrapper = mount(
      <ConfirmationModal
        {...defaultWarningProps}
        isOpen
        onConfirm={mockConfirm}
        onClose={mockClose}
      />,
    )

    const confirmButton = wrapper.find('.kirk-button-warning')
    expect(confirmButton.text()).toBe('Confirm')
    confirmButton.simulate('click')
    expect(mockConfirm).toHaveBeenCalledTimes(1)
  })
})

describe('<ConfirmationModal> with reminder status', () => {
  it('Should have a confirm button and no close button', () => {
    const wrapper = mount(<ConfirmationModal {...defaultReminderProps} isOpen />)
    const confirmButton = wrapper.find('.kirk-button-primary')

    expect(confirmButton.text()).toBe('Confirm')
    expect(wrapper.find(CrossIcon).exists()).toBe(false)
  })
})
