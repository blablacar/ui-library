import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { select, text, withKnobs, boolean } from '@storybook/addon-knobs'

import { color } from '_utils/branding'
import Text, { TextTagType, TextDisplayType } from 'text'

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)

stories.add('basic', () => (
  <Text
    display={select('Display', TextDisplayType, TextDisplayType.BODY)}
    tag={select('Tag', TextTagType, TextTagType.SPAN)}
    textColor={select('Color', color, 'primary')}
    newlineToBr={boolean('newlineToBr', true)}
  >
    {text('Text', 'This is an example')}
  </Text>
))
