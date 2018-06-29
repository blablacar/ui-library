import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, selectV2, text, withKnobs } from '@storybook/addon-knobs'

import Text, { TextDisplayType } from 'text'

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)

stories.add(
  'basic',
  withInfo('')(() => (
    <Text
      display={selectV2('Display', TextDisplayType, TextDisplayType.BODY)}
      div={boolean('div', false)}
    >
      {text('Text', 'This is an example')}
    </Text>
  )),
)
