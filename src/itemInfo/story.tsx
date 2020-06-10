import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { ClockIcon } from '../icon/clockIcon'
import { ItemInfo } from '../itemInfo'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Widgets|ItemInfo', module)

stories.add('ItemInfo', () => {
  const hasIcon = boolean('Icon', true)

  return (
    <Section>
      <ItemInfo
        mainTitle={text('Main title')}
        mainInfo={text('Main info', 'Main information')}
        icon={hasIcon ? <ClockIcon /> : null}
        tag={<li />}
        ariaLabel={text('Aria Label', 'Custom aria label')}
      />
    </Section>
  )
})
