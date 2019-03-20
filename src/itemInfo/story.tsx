import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItemInfo from 'itemInfo'
import ClockIcon from 'icon/clockIcon'

const stories = storiesOf('ItemInfo', module)
stories.addDecorator(withKnobs)

stories.add('ItemInfo', () => {
  const hasMainTitle = boolean('Title', true)
  const hasIcon = boolean('Icon', true)

  return (
    <ItemInfo
      mainInfo={text('Main info', 'Main information')}
      mainTitle={hasMainTitle ? text('Main title', 'Title') : null}
      icon={hasIcon ? <ClockIcon /> : null}
      tag={<li />}
    />
  )
})
