import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import HighlightSection from './index'
import BlankSeparator from 'blankSeparator'

const stories = storiesOf('Sections|HighlightSection', module)
stories.addDecorator(withKnobs)

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
