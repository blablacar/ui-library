import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'

import { Button, ButtonStatus } from '../button'
import { ButtonGroup } from '../buttonGroup'

export default { title: 'Buttons|ButtonGroup', component: ButtonGroup }

export const Default = () => (
  <ButtonGroup
    isReverse={boolean('isReverse', false)}
    isInline={boolean('isInline', false)}
    loadingIndex={select('loading button', { None: '', Hello: 'button_1', there: 'button_2' }, '')}
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
)
