import React from 'react'
import { shallow, mount } from 'enzyme'

import ConfirmationModal from 'confirmationModal'
import CrossIcon from 'icon/crossIcon'

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
  let wrapperWarning
  let wrapperWarningOpen

  beforeEach(() => {
    mockClose = jest.fn()
    mockConfirm = jest.fn()
    wrapperWarning = shallow(<ConfirmationModal {...defaultWarningProps} />)
    wrapperWarningOpen = mount(
      <ConfirmationModal
        {...defaultWarningProps}
        isOpen={true}
        onConfirm={mockConfirm}
        onClose={mockClose}
      />,
    )
  })

  it('Should be not visible if isOpen is set to false', () => {
    expect(wrapperWarning.find('.kirk-confirmationModal-dialog').exists()).toBe(false)
  })
  it('Should be visible if isOpen is set to true', () => {
    expect(wrapperWarningOpen.find('.kirk-confirmationModal-dialog').exists()).toBe(true)
  })
  it('Should have a close button and hide the ConfirmationModal when click on it', () => {
    wrapperWarningOpen.find(CrossIcon).simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('should have a confirm button with label and action', () => {
    const confirmButton = wrapperWarningOpen.find('.kirk-button-warning')
    expect(confirmButton.text()).toBe('Confirm')
    confirmButton.simulate('click')
    expect(mockConfirm).toHaveBeenCalledTimes(1)
  })
})

describe('<ConfirmationModal> with reminder status', () => {
  let mockClose
  let wrapperReminder
  let wrapperReminderOpen

  beforeEach(() => {
    mockClose = jest.fn()
    wrapperReminder = shallow(<ConfirmationModal {...defaultReminderProps} />)
    wrapperReminderOpen = mount(
      <ConfirmationModal {...defaultReminderProps} isOpen={true} onClose={mockClose} />,
    )
  })

  it('Should have no close button', () => {
    expect(wrapperReminderOpen.find(CrossIcon).exists()).toBe(false)
  })
})
