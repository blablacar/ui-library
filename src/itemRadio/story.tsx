import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import TheVoice from '../theVoice'
import ItemRadio from '.'
import ItemRadioGroup from 'itemRadioGroup'
import Section from 'layout/section/baseSection'
import mainDoc from './specifications/doc.md'
import groupDoc from './specifications/group.md'
import { ItemRadioStatus } from './ItemRadio'

const stories = storiesOf('Widgets|ItemRadio', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isMainTitle = boolean('Title', false)
    const isDataInfo = boolean('Secondary info', false)

    return (
      <Section>
        <ItemRadio
          label={text('Label', 'Main information')}
          name={text('Name', 'InputName')}
          value={text('Value', 'InputValue')}
          data={text('Data', 'Data')}
          labelTitle={isMainTitle ? text('Label title', 'Title') : null}
          dataInfo={isDataInfo ? text('Data info', 'Info') : null}
          onChange={action('changed')}
          checked={boolean('isChecked', false)}
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
      ariaLabelledBy="id-title"
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
