import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import { Button, ButtonStatus } from '../button'
import { InfoIcon } from '../icon/infoIcon'
import { ItemData } from '../itemData'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Widgets|ItemData', module)
stories.addDecorator(withKnobs)

stories.add('Data', () => {
  const ismainTitleButtonAddon = boolean('Title button info', true)
  const dataStrikeThrough = boolean('Data strikethrough', false)
  const mainTitleButtonAddon = ismainTitleButtonAddon ? (
    <Button status={ButtonStatus.UNSTYLED} isBubble onClick={action('Info clicked')}>
      <InfoIcon iconColor={color.blue} title="More info" />
    </Button>
  ) : null

  return (
    <Section>
      <ItemData
        mainTitle={text(
          'mainTitle',
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        )}
        ariaLabel={text('Aria label', 'Additional info')}
        mainInfo={text('mainInfo', 'Main information')}
        data={text('data', 'Data')}
        dataInfo={text('dataInfo', 'Data info')}
        dataAriaLabel={text('dataAriaLabel', 'Data aria label')}
        dataStrikeThrough={dataStrikeThrough}
        disabled={boolean('Disabled', false)}
        mainTitleButtonAddon={mainTitleButtonAddon}
        tag={<li />}
      />
    </Section>
  )
})

stories.add('isDisabled', () => {
  const ismainTitleButtonAddon = boolean('Title button info', true)
  const dataStrikeThrough = boolean('Data strikethrough', true)
  const mainTitleButtonAddon = ismainTitleButtonAddon ? (
    <Button status={ButtonStatus.UNSTYLED} isBubble onClick={action('Info clicked')}>
      <InfoIcon iconColor={color.blue} title="More info" />
    </Button>
  ) : null

  return (
    <Section>
      <ItemData
        mainTitle={text(
          'mainTitle',
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        )}
        ariaLabel={text('Aria label', 'Additional info')}
        mainInfo={text('mainInfo', 'Main information')}
        data={text('data', 'Data')}
        dataInfo={text('dataInfo', 'Data info')}
        dataAriaLabel={text('dataAriaLabel', 'Data aria label')}
        dataStrikeThrough={dataStrikeThrough}
        disabled={boolean('disabled', true)}
        mainTitleButtonAddon={mainTitleButtonAddon}
        tag={<li />}
      />
    </Section>
  )
})

stories.add('withDataStrikeThrough', () => {
  const dataStrikeThrough = boolean('DdataStrikeThrough', true)

  return (
    <Section>
      <ItemData
        mainTitle={text('mainTitle', 'Main title')}
        ariaLabel={text('ariaLabel', 'Additional info')}
        mainInfo={text('mainInfo', 'Main information')}
        data={text('data', 'Data')}
        dataInfo={text('dataInfo', 'Data info')}
        dataAriaLabel={text('dataAriaLabel', 'Data aria label')}
        dataStrikeThrough={dataStrikeThrough}
        disabled={false}
      />
    </Section>
  )
})
