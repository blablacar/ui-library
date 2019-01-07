import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import UneditableTextField from 'uneditableTextField'
import IconSearch from 'icon/searchIcon'

const stories = storiesOf('UneditableTextField', module)
stories.addDecorator(withKnobs)

stories.add(
  'Basic',
  withInfo('')(() => (
    <UneditableTextField ellipsis={boolean('ellipsis', true)}>
      {text('label', "I'm a very long text so I should be cut off at the end of the line")}
    </UneditableTextField>
  )),
)

stories.add(
  'With icon',
  withInfo('')(() => (
    <UneditableTextField addOn={<IconSearch />} ellipsis={boolean('ellipsis', true)}>
      {text('label', 'Label')}
    </UneditableTextField>
  )),
)

stories.add(
  'With simple link/anchor',
  withInfo('')(() => <UneditableTextField href="#foo">Simple anchor</UneditableTextField>),
)

stories.add(
  'With component link/anchor',
  withInfo('')(() => (
    <UneditableTextField href={<a href="#bar" />}>Simple anchor</UneditableTextField>
  )),
)
