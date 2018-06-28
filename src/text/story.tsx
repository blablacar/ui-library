import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, selectV2, text } from '@storybook/addon-knobs'

import Text from 'text'

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)

const displayTypes = [
  'button',
  'body',
  'bodyStrong',
  'caption',
  'display1',
  'display2',
  'subheader',
  'subheaderStrong',
  'title',
  'titleStrong',
]

stories.add(
  'basic',
  withInfo('')(() => (
    <Text
      display={selectV2('Display', displayTypes, 'body')}
    >
      {text('Text', 'This is an example')}
    </Text>
  )),
)
