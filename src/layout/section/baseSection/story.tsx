import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import BaseSection, { SectionContentSize } from './index'
import BlankSeparator from 'blankSeparator'

const stories = storiesOf('Sections|BaseSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Fragment>
    <BlankSeparator />
    <BaseSection>
      <div style={{ height: '100%', backgroundColor: 'lime' }}>Section 1 with small content</div>
    </BaseSection>
    <BlankSeparator />
    <BaseSection contentSize={SectionContentSize.LARGE}>
      <div style={{ height: '100%', backgroundColor: 'lime' }}>Section 2 with large content</div>
    </BaseSection>
    <BlankSeparator />
  </Fragment>
))
