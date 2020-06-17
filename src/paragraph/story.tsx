import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Paragraph } from './index'

export default {
  title: 'Design Tokens|Text (legacy)/Paragraph',
  component: Paragraph,
}

const shortText = 'Short text (below max char)'
const longText =
  'Long text (above max char) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const LongText = () => (
  <Paragraph
    isExpandable={boolean('isExpandable', true)}
    expandLabel={text('expandLabel', 'Expand')}
  >
    {longText}
  </Paragraph>
)

export const ShortText = () => <Paragraph>{shortText}</Paragraph>
