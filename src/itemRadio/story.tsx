import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { LadyIcon } from '../icon/ladyIcon'
import { ItemRadioGroup } from '../itemRadioGroup'
import { BaseSection as Section } from '../layout/section/baseSection'
import { TheVoice } from '../theVoice'
import { ItemRadio } from '.'
import { ItemRadioStatus } from './ItemRadio'
import mainDoc from './specifications/doc.md'
import groupDoc from './specifications/group.md'

const stories = storiesOf('Widgets|ItemRadio', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const disabled = boolean('Disabled', false)

    return (
      <Section>
        <ItemRadio
          name={text('Name', 'InputName')}
          value={text('Value', 'InputValue')}
          leftAddon={boolean('with icon', false) ? <LadyIcon isDisabled={disabled} /> : null}
          labelTitle={text('Label title')}
          label={text('Label', 'Main information')}
          data={text('Data', 'Data')}
          dataInfo={text('Data info')}
          onChange={action('changed')}
          checked={boolean('isChecked', false)}
          disabled={disabled}
          status={select('status', ItemRadioStatus, ItemRadioStatus.DEFAULT)}
        />
      </Section>
    )
  },
  {
    readme: { content: mainDoc },
  },
)

stories.add(
  'Multiple items',
  () => (
    <Section>
      <ItemRadioGroup
        name={text('Name', 'option')}
        status={select('status', ItemRadioStatus, ItemRadioStatus.DEFAULT)}
        value={2}
        onChange={action('changed group')}
      >
        <ItemRadio label="Option 1" value={1} name={text('Name', 'option')} />
        <ItemRadio label="Option 2" value={2} name={text('Name', 'option')} />
      </ItemRadioGroup>
    </Section>
  ),
  {
    readme: { content: groupDoc },
  },
)

stories.add('Multiple items with chevrons (form step with auto submit)', () => (
  <Section>
    <TheVoice id="id-title">Select your option</TheVoice>
    <ItemRadioGroup
      name={text('Name', 'option')}
      status={select('status', ItemRadioStatus, ItemRadioStatus.DEFAULT)}
      value={2}
      onChange={action('changed group')}
      withSeparators
      withChevrons
      aria-labelledBy="id-title"
    >
      <ItemRadio
        labelTitle="Title 1"
        label="Option 1"
        value={1}
        name={text('Name', 'option')}
        highlighted={boolean('highlighted option 1', false)}
      />
      <ItemRadio
        labelTitle="Title 2"
        label="Multiline text that should be correctly displayed"
        value={2}
        name={text('Name', 'option')}
        highlighted={boolean('highlighted option 2', false)}
      />
    </ItemRadioGroup>
  </Section>
))
