import React from 'react'
import renderer from 'react-test-renderer'
import Notification from 'notification'
import Button from 'button'
import exenv from 'exenv'

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
  it('should render the same layout on client and server side', () => {
    exenv.canUseDOM = false
    const serverSide = mount(<Notification isOpen close={close} />)
    exenv.canUseDOM = true
    const clientSide = mount(<Notification isOpen close={close} />)

    expect(serverSide.html()).toEqual(clientSide.html())
  })
  it('should not have changed', () => {
    exenv.canUseDOM = false
    const notificationServerSide = renderer
      .create(
        <Notification isOpen close={close}>
          Oups
        </Notification>,
      )
      .toJSON()
    exenv.canUseDOM = true
    expect(notificationServerSide).toMatchSnapshot()
  })
})
