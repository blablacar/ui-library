import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import exenv from 'exenv'

import Button from '../button'
import StyledSnackbar from './index'
import Snackbar from './Snackbar'

const close = jest.fn()

describe('Snackbar', () => {
  it('should not have changed', () => {
    exenv.canUseDOM = false
    const snackbarServerSide = renderer
      .create(
        <StyledSnackbar isOpen close={close}>
          Oups
        </StyledSnackbar>,
      )
      .toJSON()
    exenv.canUseDOM = true
    expect(snackbarServerSide).toMatchSnapshot()
  })

  it('should show the snackbar when isOpen is true', () => {
    const wrapper = shallow(<Snackbar isOpen close={close} />)
    expect(wrapper.find('.kirk-snackbar').exists()).toBe(true)
  })

  it('should not show the snackbar when isOpen is false', () => {
    const wrapper = shallow(<Snackbar isOpen={false} close={close} />)
    expect(wrapper.find('.kirk-snackbar').exists()).toBe(false)
  })

  it('should call close method when click on cross button', () => {
    const wrapper = shallow(<Snackbar isOpen close={close} />)
    wrapper.find(Button).simulate('click')
    expect(close).toHaveBeenCalled()
  })

  it('should render the same layout on client and server side', () => {
    exenv.canUseDOM = false
    const serverSide = mount(<Snackbar isOpen close={close} />)
    exenv.canUseDOM = true
    const clientSide = mount(<Snackbar isOpen close={close} />)

    expect(serverSide.html()).toEqual(clientSide.html())
  })
})
