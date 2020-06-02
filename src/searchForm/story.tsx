import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import MediaSizeProvider from '../_utils/mediaSizeProvider'
import { AutoCompleteExample } from '../autoComplete/story'
import DatePicker from '../datePicker'
import CrossIcon from '../icon/crossIcon'
import BaseSection, { SectionContentSize } from '../layout/section/baseSection'
import AutoCompleteOverlay from './autoComplete/overlay'
import AutoCompleteSection from './autoComplete/section'
import DatePickerOverlay from './datePicker/overlay'
import DatePickerSection from './datePicker/section'
import SearchForm from './index'
import searchFormDocumentation from './specifications/searchForm.md'
import StepperOverlay from './stepper/overlay'
import StepperSection from './stepper/section'

const stories = storiesOf('Widgets|SearchForm', module)

stories.addDecorator(withKnobs)

stories.add('DatepickerOverlay', () => (
  <DatePickerOverlay
    name="Datepicker"
    title="Today"
    renderDatePickerComponent={props => <DatePicker {...props} />}
  />
))

stories.add('DatePickerSection', () => (
  <DatePickerSection
    name="Datepicker"
    title="Today"
    onClose={() => {}}
    renderDatePickerComponent={props => <DatePicker {...props} />}
  />
))

stories.add('StepperOverlay', () => (
  <StepperOverlay
    name="Stepper"
    min={1}
    max={8}
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
    confirmLabel="Submit"
    onClose={() => {}}
  />
))

stories.add('AutoCompleteOverlay', () => (
  <AutoCompleteOverlay
    name="from"
    renderAutocompleteComponent={props => <AutoCompleteExample {...props} />}
  />
))

stories.add('AutoCompleteSection', () => (
  <AutoCompleteSection
    name="from"
    renderAutocompleteComponent={props => <AutoCompleteExample {...props} />}
    onClose={() => {}}
  />
))

stories.add(
  'SearchForm',
  () => (
    <MediaSizeProvider>
      <BaseSection contentSize={SectionContentSize.LARGE}>
        <SearchForm
          onSubmit={() => {}}
          autocompleteFromPlaceholder={text('autocompleteFromPlaceholder', 'Leaving From')}
          autocompleteToPlaceholder={text('autocompleteToPlaceholder', 'Going to')}
          renderAutocompleteFrom={props => (
            <AutoCompleteExample inputAddon={<CrossIcon />} autoFocus={false} {...props} />
          )}
          renderAutocompleteTo={props => <AutoCompleteExample {...props} />}
          datepickerProps={{
            defaultValue: new Date().toISOString(),
            format: value => new Date(value).toLocaleDateString(),
          }}
          stepperProps={{
            defaultValue: 1,
            min: 1,
            max: 8,
            title: 'Choose your number of seats',
            increaseLabel: 'Increase the number of seats by 1',
            decreaseLabel: 'Decrease the number of seats by 1',
            format: value => `${value} seat(s)`,
            confirmLabel: 'Submit',
          }}
        />
      </BaseSection>
    </MediaSizeProvider>
  ),
  {
    readme: { content: searchFormDocumentation },
  },
)
