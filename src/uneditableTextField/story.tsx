import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import UneditableTextField from 'uneditableTextField'
import IconSearch from 'icon/searchIcon'

const stories = storiesOf('Widgets|UneditableTextField', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => (
  <Section>
    <UneditableTextField ellipsis={boolean('ellipsis', true)}>
      {text('label', "I'm a very long text so I should be cut off at the end of the line")}
    </UneditableTextField>
  </Section>
))

stories.add('With icon', () => (
  <Section>
    <UneditableTextField addOn={<IconSearch />} ellipsis={boolean('ellipsis', true)}>
      {text('label', 'Label')}
    </UneditableTextField>
  </Section>
))

stories.add('With simple link/anchor', () => (
  <Section>
    <UneditableTextField href="#foo">Simple anchor</UneditableTextField>
  </Section>
))

stories.add('With component link/anchor', () => (
  <Section>
    <UneditableTextField href={<a href="#bar" />}>Simple anchor</UneditableTextField>
  </Section>
))
