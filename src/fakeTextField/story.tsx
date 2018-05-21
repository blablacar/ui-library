import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import FakeTextField from 'fakeTextField'
import IconSearch from 'icon/searchIcon'

const stories = storiesOf('FakeTextField', module)
stories.addDecorator(withKnobs)

stories.add(
  'Basic',
  withInfo('')(() => (
    <FakeTextField ellipsis={boolean('ellipsis', true)}>
      { text('label', 'I\'m a very long text so I should be cut off at the end of the line') }
    </FakeTextField>
  )),
)

stories.add(
  'With icon',
  withInfo('')(() => (
    <FakeTextField addOn={<IconSearch />} ellipsis={boolean('ellipsis', true)}>
      { text('label', 'Label') }
    </FakeTextField>
  )),
)

stories.add(
  'With simple link/anchor',
  withInfo('')(() => (
    <FakeTextField href="#foo">
      Simple anchor
    </FakeTextField>
  )),
)

stories.add(
  'With component link/anchor',
  withInfo('')(() => (
    <FakeTextField href={<a href="#bar" />}>
      Simple anchor
    </FakeTextField>
  )),
)
