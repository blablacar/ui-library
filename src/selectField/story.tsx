import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SelectField from 'selectField'

const stories = storiesOf('SelectField', module)
stories.addDecorator(withKnobs)

const phoneExtensionOptions = [
  { value: '+33', label: 'Fr (+33)', ariaLabel: 'France' },
  { value: '+34', label: 'Sp (+34)' },
]

const ref = React.createRef<HTMLDivElement>()

stories.add(
  'Default',
  withInfo('Phone extentions example')(() => (
    <SelectField
      id={text('id', 'selectFieldId')}
      name={text('name', 'selectFieldName')}
      className={text('className', 'additionalClass')}
      options={phoneExtensionOptions}
      ariaLabel={text('ariaLabel', 'selectLabel')}
      value={phoneExtensionOptions[1].value}
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      autoFocus={boolean('autoFocus', false)}
      forwardedRef={ref}
    />
  )),
)
