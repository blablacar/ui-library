import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import DatePickerOverlay from './datePicker/overlay'
import DatePickerSection from './datePicker/section'
import StepperOverlay from './stepper/overlay'
import StepperSection from './stepper/section'

const stories = storiesOf('Widgets|SearchForm', module)
stories.addDecorator(withKnobs)

stories.add('DatepickerOverlay', () => <DatePickerOverlay name="Datepicker" title="Today" />)
stories.add('DatePickerSection', () => <DatePickerSection name="Datepicker" title="Today" />)
stories.add('StepperOverlay', () => (
  <StepperOverlay
    name="Stepper"
    itemTitle="1 seat"
    title="Choose your number of seats"
    increaseLabel="Increase"
    decreaseLabel="Decrease"
  />
))
stories.add('StepperSection', () => (
  <StepperSection
    name="Stepper"
    itemTitle="1 seat"
    title="Choose your number of seats"
    increaseLabel="Increase"
    decreaseLabel="Decrease"
  />
))
