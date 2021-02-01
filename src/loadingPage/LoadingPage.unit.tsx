import React from 'react'
import renderer from 'react-test-renderer'

import { color } from '../_utils/branding'
import { LockIcon } from '../icon/lockIcon'
import { LoadingPage } from './LoadingPage'

it('Should have the correct attributes and text when all props.', () => {
  const loadingPage = renderer
    .create(
      <LoadingPage
        icon={LockIcon}
        iconColor={color.white}
        iconBackground={color.green}
        title="Entering a secure page"
      />,
    )
    .toJSON()

  expect(loadingPage).toMatchSnapshot()
})

it('Should have the correct attributes and text when no icon.', () => {
  const loadingPage = renderer.create(<LoadingPage title="Entering a secure page" />).toJSON()

  expect(loadingPage).toMatchSnapshot()
})
