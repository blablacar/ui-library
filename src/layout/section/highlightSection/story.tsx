import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BlankSeparator } from '../../../blankSeparator'
import { HighlightSection } from './index'

const stories = storiesOf('Sections|HighlightSection', module)

stories.add('default', () => (
  <Fragment>
    <BlankSeparator />
    <HighlightSection title="Section title">
      This some content for the highlighted section!
      <br />
      Some more content.
      <br />
      Some more more content.
    </HighlightSection>
    <BlankSeparator />
  </Fragment>
))
