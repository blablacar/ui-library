import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItemInfo from 'itemInfo'
import ClockIcon from 'icon/clockIcon'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|ItemInfo', module)
stories.addDecorator(withKnobs)

stories.add('ItemInfo', () => {
  const hasMainTitle = boolean('Title', true)
  const hasIcon = boolean('Icon', true)

  return (
    <Section>
      <ItemInfo
        mainInfo={text('Main info', 'Main information')}
        mainTitle={hasMainTitle ? text('Main title', 'Title') : null}
        icon={hasIcon ? <ClockIcon /> : null}
        tag={<li />}
        ariaLabel={text('Aria Label', 'Custom aria label')}
      />
    </Section>
  )
})
