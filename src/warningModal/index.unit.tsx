import React from 'react'
import WarningModal from 'warningModal'

const defaultProps = {
  isOpen: false,
  closeOnEsc: true,
  displayCloseButton: true,
  large: false,
}

describe('<WarningModal>', () => {
  it('Should have default props with appropriate values', () => {
    const wrapper = mount(<WarningModal />)
    expect(wrapper.props()).toEqual(defaultProps)
  })
  it('Should be not visible if isOpen is set to false', () => {
    const wrapper = mount(<WarningModal />)
    expect(wrapper.find('.kirk-warningModal-dialog').exists()).toBe(false)
  })
  it('Should be visible if isOpen is set to true', () => {
    const wrapper = mount(<WarningModal isOpen={true} />)
    expect(wrapper.find('.kirk-warningModal-dialog').exists()).toBe(true)
  })
  it('should hide the close button', () => {
    const wrapper = mount(<WarningModal isOpen={true} displayCloseButton={false} />)
    expect(wrapper.find('.kirk-button-icon')).toHaveLength(0)
  })
  it('should hide the warningModal on close button click', () => {
    const mockClose = jest.fn()
    const wrapper = mount(<WarningModal isOpen={true} close={mockClose} />)
    wrapper.find('.kirk-button-icon').simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
  it('should have a confirm button with label and action', () => {
    const mockConfirm = jest.fn()
    const buttonLabel = 'Yes'
    const wrapper = mount(
      <WarningModal isOpen={true} confirm={mockConfirm} confirmLabel={buttonLabel} />,
    )
    const confirmButton = wrapper.find('.kirk-button-warning')
    expect(confirmButton.text()).toBe(buttonLabel)
    confirmButton.simulate('click')
    expect(mockConfirm).toHaveBeenCalledTimes(1)
  })
})
