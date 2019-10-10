import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import spec from 'blankSeparator/specifications/blankSeparator.md'
import BlankSeparator from 'blankSeparator'
import { BlankSeparatorSize } from './BlankSeparator'

const stories = storiesOf('BlankSeparator', module)
stories.addDecorator(withKnobs)
stories.add('Specifications', () => <BlankSeparator />, { readme: spec })

stories.add('default', () => (
  <div>
    Some content to separate with a small blank space...
    <BlankSeparator size={BlankSeparatorSize.SMALL} />
    ...Rest of the divided content. Below, this is a large separator:
    <BlankSeparator size={BlankSeparatorSize.LARGE} />
    Rest of the content below the large blank separator. Finally a medium speartor below:
    <BlankSeparator size={BlankSeparatorSize.MEDIUM} />
    This is it.
  </div>
))
