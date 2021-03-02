import React from 'react'

import { render, screen } from '@testing-library/react'

import { ProximityIcon } from '../icon/proximityIcon'
import { PushInfo } from './index'
import { animationDelay, animationDuration } from './PushInfo.style'

describe('PushInfo', () => {
  it('Should have the correct attributes and text.', () => {
    render(
      <PushInfo
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )

    expect(screen.getByRole('heading', { name: "If it's green it's a win!" })).toBeInTheDocument()
    expect(screen.getByText('Green icons show meeting points closest to you!')).toBeInTheDocument()
  })

  it('Should also have the correct icon.', () => {
    render(
      <PushInfo
        icon={<ProximityIcon title="Proximity icon" />}
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )

    expect(screen.getByText('Proximity icon')).toBeInTheDocument()
  })

  it('Should call the onAnimationEnd prop after some time', () => {
    jest.useFakeTimers()
    const onAnimationEnd = jest.fn()

    render(<PushInfo headline="If it's green it's a win!" onAnimationEnd={onAnimationEnd} />)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(onAnimationEnd, animationDuration + animationDelay)
  })
})
