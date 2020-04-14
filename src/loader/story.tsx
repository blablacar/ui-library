import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Loader, { LoaderLayoutMode } from './index'

const stories = storiesOf('Widgets|Loader', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <Loader
      layoutMode={select('layoutMode', LoaderLayoutMode, LoaderLayoutMode.FULLSCREEN)}
      size={number('size', 48)}
      done={boolean('done', false)}
    />
  </Section>
))

stories.add('legacy inline prop', () => (
  <Section>
    <Loader
      inline={boolean('inline (deprecated - use layoutMode)', true)}
      layoutMode={select('layoutMode', LoaderLayoutMode, null)}
      size={number('size', 48)}
      done={boolean('done', false)}
    />
  </Section>
))
