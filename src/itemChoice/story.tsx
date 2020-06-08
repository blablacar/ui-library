import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { CheckIcon } from '../icon/checkIcon'
import { MyRidesIcon } from '../icon/myRides'
import { ItemChoice, ItemChoiceStatus, ItemChoiceStyle } from '../itemChoice'
import { BaseSection as Section } from '../layout/section/baseSection'
import specs from './specifications/index.md'

const stories = storiesOf('Widgets|ItemChoice', module)
stories.addDecorator(withKnobs)

stories.add(
  'Playground',
  () => {
    const isLink = boolean('Use as link', false)
    const withLeftIcon = boolean('With left icon', false)
    const withRightIcon = boolean('With right icon', false)
    const disabled = boolean('Disabled', false)

    return (
      <Section>
        <ItemChoice
          label={text('Title', 'Main title')}
          labelInfo={text('Title Info', 'Additional informations')}
          data={text('Data', 'Data')}
          dataInfo={text('Data Info', 'Info')}
          leftAddon={withLeftIcon ? <CheckIcon isDisabled={disabled} /> : null}
          rightAddon={withRightIcon ? <MyRidesIcon active isDisabled={disabled} /> : null}
          status={select('Status', ItemChoiceStatus, ItemChoiceStatus.DEFAULT)}
          style={select('Style', ItemChoiceStyle, ItemChoiceStyle.PRIMARY)}
          onDoneAnimationEnd={action('onDoneAnimationEnd')}
          onClick={action('onClick')}
          href={isLink ? <a href="#" /> : ''}
          disabled={disabled}
          ariaLabel={text('Aria label', 'Aria label')}
        />
      </Section>
    )
  },
  {
    readme: { content: specs },
  },
)
