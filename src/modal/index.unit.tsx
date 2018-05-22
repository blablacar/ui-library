import React from 'react'
import Modal from 'modal'
import Button from 'button'

const defaultProps = {
  isOpen: false,
  fullscreen: false,
  closeOnEsc: true,
  closeOnOutsideClick: false,
  displayCloseButton: true,
  large: false,
  displayDimmer: true,
}

describe('<Modal>', () => {
  it('Should have default props with appropriate values', () => {
    const wrapper = mount(<Modal />)
    expect(wrapper.props()).toEqual(defaultProps)
    expect(wrapper.find('.kirk-modal-dimmer--visible').exists()).toBe(true)
  })
  it('Should be not visible if isOpen is set to false', () => {
    const wrapper = mount(<Modal />)
    expect(wrapper.find('.kirk-modal-dialog').exists()).toBe(false)
    expect(wrapper.find('.kirk-modal-dimmer--inactive').exists()).toBe(true)
  })
  it('Should be visible if isOpen is set to true', () => {
    const wrapper = mount(<Modal isOpen={true} />)
    expect(wrapper.find('.kirk-modal-dialog').exists()).toBe(true)
    expect(wrapper.find('.kirk-modal-dimmer--active').exists()).toBe(true)
  })
  it('Could be fullscreen displayed', () => {
    const wrapper = mount(<Modal isOpen={true} fullscreen={true} />)
    expect(wrapper.find('.kirk-modal-dimmer--fullscreen').exists()).toBe(true)
  })
  it('Could have an hidden dimmer', () => {
    const wrapper = mount(<Modal isOpen={true} displayDimmer={false} />)
    expect(wrapper.find('.kirk-modal-dimmer--hide').exists()).toBe(true)
    expect(wrapper.find('.kirk-modal-dimmer--visible').exists()).toBe(false)
  })
  it('Could edit the modal width', () => {
    const wrapper = mount(<Modal isOpen={true} large={true} />)
    expect(wrapper.find('.kirk-modal--large').exists()).toBe(true)
  })
  it('should hide the modal on close button click', () => {
    const mockClose = jest.fn()
    const wrapper = mount(<Modal isOpen={true} close={mockClose} />)
    wrapper.find(Button).simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
})
