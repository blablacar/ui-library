import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'

import { color } from '../_utils/branding'
import { Text, TextDisplayType, TextTagType } from '../text'

export default {
  title: 'Design Tokens|Text (legacy)/Text',
  component: Text,
}

export const Default = () => (
  <Text
    display={select('Display', TextDisplayType, TextDisplayType.BODY)}
    tag={select('Tag', TextTagType, TextTagType.SPAN)}
    textColor={select('Color', color, 'primary')}
    newlineToBr={boolean('newlineToBr', true)}
    ariaLabel={text('Aria label', 'Aria label')}
  >
    {text('Text', 'This is an example')}
  </Text>
)
