import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import ItemChoice from 'itemChoice'

const stories = storiesOf('ItemChoice', module)
stories.addDecorator(withKnobs)

stories.add('Playground', () => {
  const isLink = boolean('Use as link', false)

  return (
    <ItemChoice
      title={text('Title', 'Main title')}
      titleInfo={text('Title Info', 'Additional informations')}
      data={text('Data', 'Data')}
      dataInfo={text('Data Info', 'Info')}
      status={select('Status', ItemChoice.STATUS, ItemChoice.STATUS.DEFAULT)}
      style={select('Style', ItemChoice.STYLE, ItemChoice.STYLE.PRIMARY)}
      onDoneAnimationEnd={action('onDoneAnimationEnd')}
      onClick={action('onClick')}
      href={isLink ? <a href="#" /> : ''}
      disabled={boolean('Disabled', false)}
    />
  )
})
