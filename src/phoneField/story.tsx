import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import PhoneField from 'phoneField'

const stories = storiesOf('PhoneField', module)
stories.addDecorator(withKnobs)

const countriesWhiteList = ['FR', 'ES']

const customCountriesName = {
  FR: 'fr label',
  ES: 'es label',
}

stories.add('Default', () => (
  <PhoneField
    id={text('id', 'phoneFieldId')}
    name={text('name', 'phoneField')}
    className={text('className', 'additionalClass')}
    prefixLabel={text('prefixLabel', 'Phone country code')}
    title={text('title', 'Phone number')}
    placeholder={text('placeholder', 'Phone number')}
    defaultValue={text('defaultValue', '')}
    onChange={action('changed')}
    isInline={boolean('isInline', true)}
  />
))

stories.add('Custom content + separated display', () => (
  <div>
    <h1 id="labelId">Accessibility label</h1>
    <PhoneField
      id={text('id', 'phoneFieldId')}
      name={text('name', 'phoneField')}
      className={text('className', 'additionalClass')}
      prefixLabel={text('prefixLabel', 'Phone country code')}
      defaultPrefix={text('defaultPrefix', 'ES')}
      title={text('title', 'Phone number')}
      ariaLabelledBy={text('ariaLabelledBy', 'labelId')}
      placeholder={text('placeholder', 'Phone number')}
      defaultValue={text('defaultValue', '0778674534')}
      onChange={action('changed')}
      countriesWhiteList={countriesWhiteList}
      customCountriesName={customCountriesName}
      isInline={boolean('isInline', false)}
    />
  </div>
))
