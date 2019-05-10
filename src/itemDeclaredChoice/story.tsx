import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import ItemDeclaredChoice from 'itemDeclaredChoice'
import ItemDeclaredChoiceGroup from 'itemDeclaredChoiceGroup'

import mainDoc from './specifications/doc.md'
import groupDoc from './specifications/group.md'

const stories = storiesOf('ItemDeclaredChoice', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isMainTitle = boolean('Title', false)
    const isDataInfo = boolean('Secondary info', false)

    return (
      <ItemDeclaredChoice
        label={text('Label', 'Main information')}
        name={text('Name', 'InputName')}
        value={text('Value', 'InputValue')}
        data={text('Data', 'Data')}
        labelTitle={isMainTitle ? text('Label title', 'Title') : null}
        dataInfo={isDataInfo ? text('Data info', 'Info') : null}
        onChange={action('changed')}
        checked={boolean('isChecked', false)}
        status={select('status', ItemDeclaredChoice.STATUS, ItemDeclaredChoice.STATUS.DEFAULT)}
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
      <ItemDeclaredChoiceGroup
        name={text('Name', 'option')}
        status={select('status', ItemDeclaredChoice.STATUS, ItemDeclaredChoice.STATUS.DEFAULT)}
        value={2}
        onChange={action('changed group')}
      >
        <ItemDeclaredChoice label="Option 1" value={1} />
        <ItemDeclaredChoice label="Option 2" value={2} />
      </ItemDeclaredChoiceGroup>
    )
  },
  {
    readme: { content: groupDoc },
  },
)
