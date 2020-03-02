import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import IllustratedSection from './index'
import TheVoice from 'theVoice'
import ItemRadioGroup from 'itemRadioGroup'
import ItemRadio from 'itemRadio'

const stories = storiesOf('Sections|IllustratedSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <IllustratedSection illustrationUrl="https://cdn.blablacar.com/kairos/assets/build/images/max_2_in_the_back-d1b1da56d9d48d78e0365ff586c68f92.svg">
    <TheVoice>Keep the middle seat empty so that your passengers are comfortable</TheVoice>
    <ItemRadioGroup name="2mitb" withSeparators withChevrons>
      <ItemRadio name="2mitb" value="true" labelTitle="Yes, sure!" highlighted />
      <ItemRadio name="2mitb" value="false" labelTitle="No, I'll squeeze in 3." />
    </ItemRadioGroup>
  </IllustratedSection>
))

stories.add('avatar version', () => (
  <IllustratedSection
    illustrationUrl="https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-f-02.svg"
    isAvatar
  >
    <TheVoice>Keep the middle seat empty so that your passengers are comfortable</TheVoice>
    <ItemRadioGroup name="2mitb" withSeparators withChevrons>
      <ItemRadio name="2mitb" value="true" labelTitle="Yes, sure!" highlighted />
      <ItemRadio name="2mitb" value="false" labelTitle="No, I'll squeeze in 3." />
    </ItemRadioGroup>
  </IllustratedSection>
))
