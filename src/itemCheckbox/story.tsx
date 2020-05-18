import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import LadyIcon from '../icon/ladyIcon'
import ItemCheckbox, { ItemCheckboxStatus } from '../itemCheckbox'
import Section from '../layout/section/baseSection'
import specs from './specifications/index.md'

const stories = storiesOf('Widgets|ItemCheckbox', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const disabled = boolean('Disabled', false)

    return (
      <Section>
        <ItemCheckbox
          name={text('Name', 'InputName')}
          leftAddon={boolean('with icon', false) ? <LadyIcon isDisabled={disabled} /> : null}
          labelTitle={text('Label title')}
          label={text('Label', 'Main information')}
          data={text('Data', 'Data')}
          dataInfo={text('Data info')}
          onChange={action('changed')}
          checked={boolean('isChecked', false)}
          disabled={disabled}
          status={select('status', ItemCheckboxStatus, ItemCheckboxStatus.DEFAULT)}
        />
      </Section>
    )
  },
  {
    readme: { content: specs },
  },
)
