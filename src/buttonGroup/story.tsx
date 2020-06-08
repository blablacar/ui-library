import React from 'react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Button, ButtonStatus } from '../button'
import { ButtonGroup } from '../buttonGroup'
import { BaseSection as Section } from '../layout/section/baseSection'
import spec from './specifications/index.md'

const stories = storiesOf('Widgets|ButtonGroup', module)
stories.addDecorator(withKnobs)

stories.add(
  'Button Group - default',
  () => (
    <Section>
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
              [ButtonStatus.PRIMARY]: ButtonStatus.PRIMARY,
              [ButtonStatus.CHECKED]: ButtonStatus.CHECKED,
            },
            ButtonStatus.PRIMARY,
          )}
        >
          Hello
        </Button>
        <Button index="button_2" status={ButtonStatus.TERTIARY}>
          there
        </Button>
      </ButtonGroup>
    </Section>
  ),
  {
    readme: { content: spec },
  },
)
