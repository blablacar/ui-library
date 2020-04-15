import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import DatePickerOverlay from './datePicker/overlay'
import DatePickerSection from './datePicker/section'
import StepperOverlay from './stepper/overlay'
import StepperSection from './stepper/section'
import { AutoCompleteExample } from 'autoComplete/story'
import AutoCompleteOverlay from './autoComplete/overlay'
import AutoCompleteSection from './autoComplete/section'
import SearchForm from '.'
import MediaSizeProvider from '_utils/mediaSizeProvider'
import searchFormDocumentation from './specifications/searchForm.md'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection/'

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
    confirmLabel="Submit"
  />
))
stories.add('AutoCompleteOverlay', () => (
  <AutoCompleteOverlay name="from" renderAutocompleteComponent={() => <AutoCompleteExample />} />
))
stories.add('AutoCompleteSection', () => (
  <AutoCompleteSection name="from" renderAutocompleteComponent={() => <AutoCompleteExample />} />
))

stories.add(
  'SearchForm',
  () => (
    <MediaSizeProvider>
      <BaseSection contentSize={SectionContentSize.LARGE}>
        <SearchForm
          onSubmit={() => {}}
          autocompleteFromPlaceholder="Leaving From"
          autocompleteToPlaceholder="Going to"
          renderAutocompleteFrom={props => <AutoCompleteExample {...props} />}
          renderAutocompleteTo={props => <AutoCompleteExample {...props} placeholder="Going to" />}
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
