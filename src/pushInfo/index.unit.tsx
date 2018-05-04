import React from 'react'
import renderer from 'react-test-renderer'

import { color } from '_utils/branding'
import ProximityIcon from 'icon/proximityIcon'
import PushInfo from 'pushInfo'

it('Should have the correct attributes and text.', () => {
  const pushInfo = renderer.create(<PushInfo
    headline={'If it\'s green it\'s a win!'}
    content={'Green icons show meeting points closest to you!'}
  />).toJSON()
  expect(pushInfo).toMatchSnapshot()
})

it('Should also have the correct icon.', () => {
  const pushInfo = renderer.create(<PushInfo
    icon={<ProximityIcon iconColor={color.success} title="" />}
    headline={'If it\'s green it\'s a win!'}
    content={'Green icons show meeting points closest to you!'}
  />).toJSON()
  expect(pushInfo).toMatchSnapshot()
})
