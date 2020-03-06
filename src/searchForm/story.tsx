import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import DatePickerOverlay from './datePicker/datePickerOverlay'
import DatepickerFullScreen from './datePicker/datePickerFullScreen'
import StepperOverlay from './stepper/stepperOverlay'
import StepperFullScreen from './stepper/stepperFullScreen'

const stories = storiesOf('Widgets|SearchForm', module)
stories.addDecorator(withKnobs)

stories.add('DatepickerOverlay', () => <DatePickerOverlay name="Datepicker" title="Today" />)
stories.add('DatepickerFullScreen', () => <DatepickerFullScreen name="Datepicker" title="Today" />)
stories.add('StepperOverlay', () => (
  <StepperOverlay
    name="Stepper"
    itemTitle="1 seat"
    title="Choose your number of seats"
    increaseLabel="Increase"
    decreaseLabel="Decrease"
  />
))
stories.add('StepperFullScreen', () => (
  <StepperFullScreen
    name="Stepper"
    itemTitle="1 seat"
    title="Choose your number of seats"
    increaseLabel="Increase"
    decreaseLabel="Decrease"
  />
))
