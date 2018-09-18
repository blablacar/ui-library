import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { selectV2, text, withKnobs, boolean } from '@storybook/addon-knobs'

import Text, { TextTagType, TextDisplayType } from 'text'

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)

stories.add(
  'basic',
  withInfo('')(() => (
    <Text
      display={selectV2('Display', TextDisplayType, TextDisplayType.BODY)}
      tag={selectV2('Tag', TextTagType, TextTagType.SPAN)}
      newlineToBr={boolean('newlineToBr', true)}
    >
      {text('Text', 'This is an example')}
    </Text>
  )),
)
