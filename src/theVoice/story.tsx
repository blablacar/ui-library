import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import TheVoice from '.'
import readme from 'theVoice/specifications/theVoice.md'

const stories = storiesOf('Widgets|TheVoice', module)
stories.addDecorator(withKnobs)

stories.add('Specifications', () => null, {
  readme: { content: readme },
})

stories.add('default', () => (
  <Fragment>
    <Section>
      <TheVoice id={text('id', 'MyId')} className={text('className', 'other-classes')}>
        This is the Voice !
      </TheVoice>
    </Section>
    <Section>
      <div style={{ backgroundColor: 'lightgreen' }}>
        <TheVoice isInverted={boolean('isInverted', true)}>This is inverted The Voice !</TheVoice>
      </div>
    </Section>
  </Fragment>
))
