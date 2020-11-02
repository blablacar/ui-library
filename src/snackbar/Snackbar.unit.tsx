import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import exenv from 'exenv'

import { fireEvent, render, screen } from '@testing-library/react'

import { Snackbar as StyledSnackbar } from './index'
import { Snackbar } from './Snackbar'

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
    render(
      <Snackbar isOpen close={close}>
        Oups
      </Snackbar>,
    )

    const snackbar = screen.getByRole('alert')
    expect(snackbar).toBeInTheDocument()
    expect(snackbar).toHaveTextContent('Oups')
  })

  it('should npt show the snackbar when isOpen is false', () => {
    render(
      <Snackbar isOpen={false} close={close}>
        Oups
      </Snackbar>,
    )

    const snackbar = screen.queryByRole('alert')
    expect(snackbar).not.toBeInTheDocument()
  })

  it('should call close method when click on cross button', () => {
    render(<Snackbar isOpen close={close} />)

    fireEvent.click(screen.getByRole('button'))

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
