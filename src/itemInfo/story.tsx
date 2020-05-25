import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { ClockIcon } from '../icon/clockIcon'
import { ItemInfo } from '../itemInfo'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Widgets|ItemInfo', module)
stories.addDecorator(withKnobs)

stories.add('ItemInfo', () => {
  const hasIcon = boolean('Icon', true)

  return (
    <Section>
      <ItemInfo
        mainTitle={text('Main title')}
        mainInfo={text('Main info', 'Main information')}
        icon={hasIcon ? <ClockIcon /> : null}
        tag={<li />}
        aria-label={text('Aria Label', 'Custom aria label')}
      />
    </Section>
  )
})
