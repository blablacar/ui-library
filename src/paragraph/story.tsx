import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import Paragraph from 'paragraph'

const stories = storiesOf('Paragraph', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default Paragraph',
  withInfo('')(() => (
    <Paragraph
      expandable={boolean('Expandable', false)}
      expandLabel={text('Expand label', 'Read more')}
    >
      {text('Text', 'This is an example')}
    </Paragraph>
  )),
)
