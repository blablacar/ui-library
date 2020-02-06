import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Section from 'layout/section/baseSection'
import defaultDoc from './specifications/default.md'
import customDoc from './specifications/custom.md'
import PhoneField from '.'

const stories = storiesOf('Widgets|PhoneField', module)
stories.addDecorator(withKnobs)

const countryWhitelist = ['FR', 'ES']

const customCountryNames = {
  FR: 'fr label',
  ES: 'es label',
}

stories.add(
  'Default',
  () => (
    <Section>
      <PhoneField name={text('name', 'phoneField')} onChange={action('changed')} />
    </Section>
  ),
  {
    readme: { content: defaultDoc },
  },
)

stories.add(
  'Custom content',
  () => (
    <Section>
      <h1 id="labelId">Accessibility label</h1>
      <PhoneField
        id={text('id', 'phoneFieldId')}
        name={text('name', 'phoneField')}
        innerWrapperClassName={text('className', 'additionalClass')}
        ariaLabelledBy={text('ariaLabelledBy', 'labelId')}
        selectFieldLabel={text('selectFieldLabel', 'Phone country code')}
        textFieldTitle={text('textFieldTitle', 'Phone number')}
        textFieldPlaceholder={text('textFieldPlaceholder', 'Phone number')}
        defaultRegionValue={text('defaultRegionValue', 'FR')}
        defaultPhoneValue={text('defaultPhoneValue', '0778674534')}
        onChange={action('changed')}
        countryWhitelist={countryWhitelist}
        customCountryNames={customCountryNames}
        isInline={boolean('isInline', false)}
        focus={boolean('focus', true)}
        selectAutoFocus={boolean('selectAutoFocus', true)}
        error={text('error message', '')}
      />
    </Section>
  ),
  {
    readme: { content: customDoc },
  },
)
