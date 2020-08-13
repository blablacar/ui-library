import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { ProximityIcon } from '../icon/proximityIcon'
import { PushInfo } from './index'
import { animationDelay, animationDuration } from './PushInfo.style'

it('Should have the correct attributes and text.', () => {
  const pushInfo = renderer
    .create(
      <PushInfo
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )
    .toJSON()
  expect(pushInfo).toMatchSnapshot()
})

it('Should also have the correct icon.', () => {
  const pushInfo = renderer
    .create(
      <PushInfo
        icon={<ProximityIcon title="" />}
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )
    .toJSON()
  expect(pushInfo).toMatchSnapshot()
})

it('Should call the onAnimationEnd prop after some time', () => {
  jest.useFakeTimers()
  const onAnimationEnd = jest.fn()
  mount(
    <PushInfo
      headline="If it's green it's a win!"
      content="Green icons show meeting points closest to you!"
      onAnimationEnd={onAnimationEnd}
    />,
  )

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(onAnimationEnd, animationDuration + animationDelay)
})
