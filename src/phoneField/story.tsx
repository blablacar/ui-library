import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import { PhoneField } from './index'

export default {
  title: 'Forms|PhoneField',
  component: PhoneField,
}

const countryWhitelist = ['FR', 'ES']

const customCountryNames = {
  FR: 'fr label',
  ES: 'es label',
}

export const Default = () => (
  <PhoneField name={text('name', 'phoneField')} onChange={action('changed')} />
)

export const Custom = () => (
  <Fragment>
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
  </Fragment>
)
