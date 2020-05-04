import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
import InfoIcon from 'icon/infoIcon'
import ItemData from 'itemData'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|ItemData', module)
stories.addDecorator(withKnobs)

stories.add('Default', () => {
  const isMainTitle = boolean('Title', false)
  const ismainTitleButtonAddon = boolean('Title button info', true)
  const isDataInfo = boolean('Secondary info', false)
  const dataStrikeThrough = boolean('Data strikethrough', false)

  return (
    <Section>
      <ItemData
        ariaLabel={text('Aria label', 'Complementary info')}
        mainInfo={text('Main info', 'Main information')}
        data={text('Data', 'Data')}
        dataStrikeThrough={dataStrikeThrough}
        dataAriaLabel={text('Data aria label', 'Data aria label')}
        mainTitle={isMainTitle ? text('Main title', 'Title') : null}
        mainTitleButtonAddon={
          ismainTitleButtonAddon ? (
            <Button status={ButtonStatus.UNSTYLED} isBubble onClick={action('Info clicked')}>
              <InfoIcon iconColor={color.blue} title="More info" />
            </Button>
          ) : null
        }
        dataInfo={isDataInfo ? text('Data info', 'Info') : null}
        tag={<li />}
      />
    </Section>
  )
})
