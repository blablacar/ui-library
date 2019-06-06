import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import ButtonGroup from 'buttonGroup'
import Button from 'button'

import spec from './specifications/index.md'

const stories = storiesOf('ButtonGroup', module)
stories.addDecorator(withKnobs)

stories.add(
  'Button Group - default',
  () => (
    <ButtonGroup
      isReverse={boolean('isReverse', false)}
      isInline={boolean('isInline', false)}
      loadingIndex={select(
        'loading button',
        { None: '', Hello: 'button_1', there: 'button_2' },
        '',
      )}
      className={text('className', 'custom-class-name')}
    >
      <Button
        index="button_1"
        status={select(
          'First button status',
          {
            [Button.STATUS.PRIMARY]: Button.STATUS.PRIMARY,
            [Button.STATUS.CHECKED]: Button.STATUS.CHECKED,
          },
          Button.STATUS.PRIMARY,
        )}>
        Hello
      </Button>
      <Button index="button_2" status={Button.STATUS.TERTIARY}>
        there
      </Button>
    </ButtonGroup>
  ),
  {
    readme: { content: spec },
  },
)
