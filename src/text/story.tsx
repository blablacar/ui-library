import React from 'react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import Section from '../layout/section/baseSection'
import Text, { TextDisplayType, TextTagType } from '../text'

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
