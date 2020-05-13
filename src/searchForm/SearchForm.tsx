import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import cc from 'classcat'
import { canUseDOM } from 'exenv'

import { color } from '../_utils/branding'
import { MediaSize, MediaSizeContext } from '../_utils/mediaSizeProvider'
import { AutoCompleteProps } from '../autoComplete'
import Bullet, { BulletTypes } from '../bullet'
import Divider from '../divider'
import { CalendarIcon } from '../icon/calendarIcon'
import { DoubleArrowIcon } from '../icon/doubleArrowIcon'
import SearchIcon from '../icon/searchIcon'
import { StandardSeat } from '../icon/standardSeat'
import TextTitle from '../typography/title'
import AutoCompleteOverlay, { AutoCompleteOverlayProps } from './autoComplete/overlay'
import AutoCompleteSection from './autoComplete/section'
import DatePickerOverlay from './datePicker/overlay'
import DatePickerSection from './datePicker/section'
import Overlay from './overlay'
import StepperOverlay from './stepper/overlay'
import StepperSection from './stepper/section'

export interface SearchFormProps {
  className?: string
  onSubmit: Function
  autocompleteFromPlaceholder: AutoCompleteProps['placeholder']
  autocompleteToPlaceholder: AutoCompleteProps['placeholder']
  renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent']
  datepickerProps: DatePickerProps
  stepperProps: StepperProps
}

interface DatePickerProps {
  defaultValue: string
  format?: (value: string) => string
}

interface StepperProps {
  min: number
  max: number
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
  confirmLabel: string
  format?: (value: number) => string
}

enum Elements {
  DATEPICKER = 'DATEPICKER',
  STEPPER = 'STEPPER',
  AUTOCOMPLETE_FROM = 'AUTOCOMPLETE_FROM',
  AUTOCOMPLETE_TO = 'AUTOCOMPLETE_TO',
}

type FormValues = {
  DATEPICKER: string
  STEPPER: number
  AUTOCOMPLETE_FROM?: AutocompleteOnChange
  AUTOCOMPLETE_TO?: AutocompleteOnChange
}

const SearchForm = ({
  className,
  onSubmit,
  autocompleteFromPlaceholder,
  autocompleteToPlaceholder,
  renderAutocompleteFrom,
  renderAutocompleteTo,
  datepickerProps,
  stepperProps,
}: SearchFormProps) => {
  // Use React.useContext syntax so we can mock it
  // https://github.com/enzymejs/enzyme/issues/2176#issuecomment-533582429
  const mediaSize = React.useContext(MediaSizeContext)

  const [elementOpened, setElementOpened] = useState('')
  const [formValues, setFormValues] = useState<FormValues>({
    [Elements.STEPPER]: stepperProps.defaultValue,
    [Elements.DATEPICKER]: datepickerProps.defaultValue,
  })

  const getStepperFormattedValue = () => stepperProps.format(formValues[Elements.STEPPER])

  const getDatepickerFormattedValue = () => datepickerProps.format(formValues[Elements.DATEPICKER])

  const selectedDate = new Date(formValues[Elements.DATEPICKER])

  const closeOpenedElement = () => {
    setElementOpened(null)
  }

  const datepickerConfig = {
    title: getDatepickerFormattedValue(),
    name: 'datepicker',
    initialDate: selectedDate,
    initialMonth: selectedDate,
    onChange: ({ value }: OnChangeParameters) => {
      closeOpenedElement()
      setFormValues({ ...formValues, [Elements.DATEPICKER]: value as string })
    },
  }

  const stepperConfig = {
    name: 'stepper',
    min: stepperProps.min,
    max: stepperProps.max,
    itemTitle: getStepperFormattedValue(),
    title: stepperProps.title,
    increaseLabel: stepperProps.increaseLabel,
    decreaseLabel: stepperProps.decreaseLabel,
    value: formValues[Elements.STEPPER],
    onChange: ({ value }: OnChangeParameters) => {
      closeOpenedElement()
      setFormValues({ ...formValues, [Elements.STEPPER]: value as number })
    },
  }

  const autocompleteFromConfig = {
    name: 'from',
    placeholder: autocompleteFromPlaceholder,
    renderAutocompleteComponent: renderAutocompleteFrom,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [Elements.AUTOCOMPLETE_FROM]: value })
      closeOpenedElement()
    },
  }

  const autocompleteToConfig = {
    name: 'to',
    placeholder: autocompleteToPlaceholder,
    renderAutocompleteComponent: renderAutocompleteTo,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [Elements.AUTOCOMPLETE_TO]: value })
      closeOpenedElement()
    },
  }

  const invertFromTo = () => {
    setFormValues({
      ...formValues,
      [Elements.AUTOCOMPLETE_FROM]: formValues[Elements.AUTOCOMPLETE_TO],
      [Elements.AUTOCOMPLETE_TO]: formValues[Elements.AUTOCOMPLETE_FROM],
    })
  }

  const autocompleteFromValue = formValues[Elements.AUTOCOMPLETE_FROM] as AutocompleteOnChange
  const autocompleteToValue = formValues[Elements.AUTOCOMPLETE_TO] as AutocompleteOnChange

  return (
    <form
      action=""
      noValidate
      className={cc(['kirk-searchForm', className])}
      role="search"
      method="post"
      onSubmit={evt => {
        evt.preventDefault()
        onSubmit(formValues)
      }}
    >
      <div className="kirk-searchForm-from-container">
        <div className="kirk-searchForm-from">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(Elements.AUTOCOMPLETE_FROM)}
          >
            <span className="kirk-bullet--searchForm">
              <Bullet type={BulletTypes.SEARCH} />
            </span>
            <TextTitle className={cc({ 'kirk-search-placeholder': !autocompleteFromValue })}>
              {autocompleteFromValue?.item.label || autocompleteFromPlaceholder}
            </TextTitle>
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
        <div className="kirk-searchForm-invert">
          <button type="button" className="kirk-search-button" onClick={invertFromTo}>
            <DoubleArrowIcon iconColor={color.blue} />
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
      </div>

      <Overlay
        shouldDisplay={
          mediaSize === MediaSize.LARGE && elementOpened === Elements.AUTOCOMPLETE_FROM
        }
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-from"
      >
        <AutoCompleteOverlay {...autocompleteFromConfig} />
      </Overlay>

      {mediaSize === MediaSize.SMALL &&
        elementOpened === Elements.AUTOCOMPLETE_FROM &&
        canUseDOM &&
        createPortal(
          <AutoCompleteSection {...autocompleteFromConfig} onClose={closeOpenedElement} />,
          document.body,
        )}

      <div className="kirk-searchForm-to">
        <button
          type="button"
          className="kirk-search-button"
          onClick={() => setElementOpened(Elements.AUTOCOMPLETE_TO)}
        >
          <span className="kirk-bullet--searchForm">
            <Bullet type={BulletTypes.SEARCH} />
          </span>
          <TextTitle className={cc({ 'kirk-search-placeholder': !autocompleteToValue })}>
            {autocompleteToValue?.item.label || autocompleteToPlaceholder}
          </TextTitle>
        </button>
        {mediaSize === MediaSize.SMALL && <Divider />}
      </div>

      <Overlay
        shouldDisplay={mediaSize === MediaSize.LARGE && elementOpened === Elements.AUTOCOMPLETE_TO}
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-to"
      >
        <AutoCompleteOverlay {...autocompleteToConfig} />
      </Overlay>

      {mediaSize === MediaSize.SMALL &&
        elementOpened === Elements.AUTOCOMPLETE_TO &&
        canUseDOM &&
        createPortal(
          <AutoCompleteSection {...autocompleteToConfig} onClose={closeOpenedElement} />,
          document.body,
        )}

      <div className="kirk-searchForm-dateSeat-container">
        <div className="kirk-searchForm-date">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(Elements.DATEPICKER)}
          >
            <CalendarIcon />
            <TextTitle>{getDatepickerFormattedValue()}</TextTitle>
          </button>
        </div>

        <Overlay
          shouldDisplay={mediaSize === MediaSize.LARGE && elementOpened === Elements.DATEPICKER}
          closeOnBlur={closeOpenedElement}
          className="kirk-searchForm-overlay kirk-searchForm-datepicker"
        >
          <DatePickerOverlay {...datepickerConfig} closeOnBlur={closeOpenedElement} />
        </Overlay>

        {elementOpened === Elements.DATEPICKER &&
          mediaSize === MediaSize.SMALL &&
          canUseDOM &&
          createPortal(
            <DatePickerSection {...datepickerConfig} onClose={closeOpenedElement} />,
            document.body,
          )}

        <div className="kirk-searchForm-seats">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(Elements.STEPPER)}
          >
            <StandardSeat />
            <TextTitle>{getStepperFormattedValue()}</TextTitle>
          </button>
        </div>
      </div>

      <Overlay
        shouldDisplay={mediaSize === MediaSize.LARGE && elementOpened === Elements.STEPPER}
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-stepper"
      >
        <StepperOverlay
          {...stepperConfig}
          onChange={({ value }) => {
            setFormValues({ ...formValues, [Elements.STEPPER]: value as number })
          }}
        />
      </Overlay>

      {elementOpened === Elements.STEPPER &&
        mediaSize === MediaSize.SMALL &&
        canUseDOM &&
        createPortal(
          <StepperSection
            {...stepperConfig}
            confirmLabel={stepperProps.confirmLabel}
            onClose={closeOpenedElement}
          />,
          document.body,
        )}

      <div className="kirk-searchForm-submit">
        <button type="submit" className="kirk-search-button">
          <SearchIcon iconColor={color.white} strokeWidth="2" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
