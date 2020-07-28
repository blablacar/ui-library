import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import { BaseSection as Section } from '../layout/section/baseSection'
import { Text, TextDisplayType, TextTagType } from '../text'

const stories = storiesOf('Text|', module)

stories.add('Default', () => (
  <Section>
    <Text
      display={select('Display', TextDisplayType, TextDisplayType.BODY)}
      tag={select('Tag', TextTagType, TextTagType.SPAN)}
      textColor={select('Color', color, 'primary')}
      newlineToBr={boolean('newlineToBr', true)}
      aria-label={text('Aria label', 'Aria label')}
    >
      {text('Text', 'This is an example')}
    </Text>
  </Section>
))
