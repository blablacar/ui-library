import React, { Fragment } from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '_utils/branding'
import Section from 'layout/section/baseSection'
import readme from 'theVoice/specifications/theVoice.md'

import TheVoice from '.'

const stories = storiesOf('Widgets|TheVoice', module)
stories.addDecorator(withKnobs)

stories.add('Specifications', () => null, {
  readme: { content: readme },
})

stories.add('default', () => (
  <Fragment>
    <Section>
      <TheVoice id={text('id', 'MyId')} className={text('className', 'other-classes')}>
        {text(
          'TheVoice Content',
          'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible ver',
        )}
      </TheVoice>
    </Section>
    <Section>
      <div style={{ backgroundColor: color.green }}>
        <TheVoice isInverted={boolean('isInverted', true)}>This is inverted The Voice !</TheVoice>
      </div>
    </Section>
  </Fragment>
))
