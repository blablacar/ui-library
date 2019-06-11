import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import ItemChoice from 'itemChoice'
import ComfortIcon from 'icon/comfortIcon'

import specs from './specifications/index.md'

const stories = storiesOf('ItemChoice', module)
stories.addDecorator(withKnobs)

stories.add(
  'Playground',
  () => {
    const isLink = boolean('Use as link', false)
    const withLeftIcon = boolean('With left icon', false)
    const withRightIcon = boolean('With right icon', false)

    return (
      <ItemChoice
        label={text('Title', 'Main title')}
        labelInfo={text('Title Info', 'Additional informations')}
        data={text('Data', 'Data')}
        dataInfo={text('Data Info', 'Info')}
        leftAddon={withLeftIcon ? <ComfortIcon /> : null}
        rightAddon={withRightIcon ? <ComfortIcon /> : null}
        status={select('Status', ItemChoice.STATUS, ItemChoice.STATUS.DEFAULT)}
        style={select('Style', ItemChoice.STYLE, ItemChoice.STYLE.PRIMARY)}
        onDoneAnimationEnd={action('onDoneAnimationEnd')}
        onClick={action('onClick')}
        href={isLink ? <a href="#" /> : ''}
        disabled={boolean('Disabled', false)}
      />
    )
  },
  {
    readme: { content: specs },
  },
)
