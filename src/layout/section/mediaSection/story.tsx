import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import MediaSection from './index'

const stories = storiesOf('Sections|MediaSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Fragment>
    <MediaSection className={text('className', '')} role={text('role', undefined)}>
      <img
        src="https://s.abcnews.com/images/International/kangaroo-stock-gty-jef-191003_hpMain_16x9_992.jpg"
        alt="Kangaroo"
        width="100%"
      />
    </MediaSection>
  </Fragment>
))
