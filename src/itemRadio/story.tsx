import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import ItemRadio from 'itemRadio'
import ItemRadioGroup from 'itemRadioGroup'

import mainDoc from './specifications/doc.md'
import groupDoc from './specifications/group.md'

const stories = storiesOf('ItemRadio', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isMainTitle = boolean('Title', false)
    const isDataInfo = boolean('Secondary info', false)

    return (
      <ItemRadio
        label={text('Label', 'Main information')}
        name={text('Name', 'InputName')}
        value={text('Value', 'InputValue')}
        data={text('Data', 'Data')}
        labelTitle={isMainTitle ? text('Label title', 'Title') : null}
        dataInfo={isDataInfo ? text('Data info', 'Info') : null}
        onChange={action('changed')}
        checked={boolean('isChecked', false)}
        status={select('status', ItemRadio.STATUS, ItemRadio.STATUS.DEFAULT)}
      />
    )
  },
  {
    readme: { content: mainDoc },
  },
)

stories.add(
  'Multiple items',
  () => {
    return (
      <ItemRadioGroup
        name={text('Name', 'option')}
        status={select('status', ItemRadio.STATUS, ItemRadio.STATUS.DEFAULT)}
        value={2}
        onChange={action('changed group')}
      >
        <ItemRadio label="Option 1" value={1} name={text('Name', 'option')} />
        <ItemRadio label="Option 2" value={2} name={text('Name', 'option')} />
      </ItemRadioGroup>
    )
  },
  {
    readme: { content: groupDoc },
  },
)

stories.add('Multiple items with chevrons (form step with auto submit)', () => {
  return (
    <ItemRadioGroup
      name={text('Name', 'option')}
      status={select('status', ItemRadio.STATUS, ItemRadio.STATUS.DEFAULT)}
      value={2}
      onChange={action('changed group')}
      withSeparators
    >
      <ItemRadio label="Option 1" value={1} name={text('Name', 'option')} chevron />
      <ItemRadio label="Option 2" value={2} name={text('Name', 'option')} chevron />
    </ItemRadioGroup>
  )
})
