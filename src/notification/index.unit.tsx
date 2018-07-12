import React from 'react'
import renderer from 'react-test-renderer'
import Notification from 'notification'
import Button from 'button'

const close = jest.fn()

describe('Notification', () => {
  it('should show the notification when isOpen is true', () => {
    const wrapper = mount(<Notification isOpen close={close} />)
    expect(wrapper.find('.kirk-notification').exists()).toBe(true)
  })
  it('should not show the notification when isOpen is false', () => {
    const wrapper = mount(<Notification isOpen={false} close={close} />)
    expect(wrapper.find('.kirk-notification').exists()).toBe(false)
  })
  it('should call close method when click on cross button', () => {
    const wrapper = mount(<Notification isOpen close={close} />)
    wrapper.find(Button).simulate('click')
    expect(close).toHaveBeenCalled()
  })
})
