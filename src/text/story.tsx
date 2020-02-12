import React from 'react'

import { storiesOf } from '@storybook/react'
import { select, text, withKnobs, boolean } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import { color } from '_utils/branding'
import Text, { TextTagType, TextDisplayType } from 'text'

const stories = storiesOf('Widgets|Text', module)
stories.addDecorator(withKnobs)

stories.add('basic', () => (
  <Section>
    <Text
      display={select('Display', TextDisplayType, TextDisplayType.BODY)}
      tag={select('Tag', TextTagType, TextTagType.SPAN)}
      textColor={select('Color', color, 'primary')}
      newlineToBr={boolean('newlineToBr', true)}
      ariaLabel={text('Aria label', 'Aria label')}
    >
      {text('Text', 'This is an example')}
    </Text>
  </Section>
))
