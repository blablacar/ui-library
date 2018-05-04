import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs'

import { color } from '_utils/branding'
import ProximityIcon from 'icon/proximityIcon'
import PushInfo from 'pushInfo'

const stories = storiesOf('PushInfo', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <PushInfo
      headline={text('headline', 'If it\'s green it\'s a win!')}
      content={text('content', 'Green icons show meeting points closest to you!')}
    />
  )),
)

stories.add(
  'with icon',
  withInfo('')(() => (
    <PushInfo
      icon={<ProximityIcon iconColor={color.success} title="" />}
      headline={text('headline', 'If it\'s green it\'s a win!')}
      content={text('content', 'Green icons show meeting points closest to you!')}
    />
  )),
)

