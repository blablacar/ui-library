import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import cc from 'classcat'
import { canUseDOM } from 'exenv'

import { color } from '_utils/branding'
import SearchIcon from 'icon/searchIcon'
import { CalendarIcon } from 'icon/calendarIcon'
import Bullet, { BulletTypes } from 'bullet'
import { StandardSeat } from 'icon/standardSeat'
import { DoubleArrowIcon } from 'icon/doubleArrowIcon'
import Divider from 'divider'
import { MediaSize, MediaSizeContext } from '_utils/mediaSizeProvider'
import DatePickerOverlay from './datePicker/overlay'
import StepperOverlay from './stepper/overlay'
import AutoCompleteOverlay, { AutoCompleteOverlayProps } from './autoComplete/overlay'
import TextTitle from 'typography/title'
import DatePickerSection from './datePicker/section'
import StepperSection from './stepper/section'
import AutoCompleteSection from './autoComplete/section'
import { AutoCompleteProps } from 'autoComplete'

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

  const container = useRef(null)

  const getStepperFormattedValue = () => stepperProps.format(formValues[Elements.STEPPER])

  const getDatepickerFormattedValue = () => datepickerProps.format(formValues[Elements.DATEPICKER])

  const selectedDate = new Date(formValues[Elements.DATEPICKER])

  const datepickerConfig = {
    title: getDatepickerFormattedValue(),
    name: 'datepicker',
    initialDate: selectedDate,
    initialMonth: selectedDate,
    onChange: ({ value }: OnChangeParameters) => {
      setElementOpened(null)
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
      setElementOpened(null)
      setFormValues({ ...formValues, [Elements.STEPPER]: value as number })
    },
  }

  const autocompleteFromConfig = {
    name: 'from',
    placeholder: autocompleteFromPlaceholder,
    renderAutocompleteComponent: renderAutocompleteFrom,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [Elements.AUTOCOMPLETE_FROM]: value })
      setElementOpened(null)
    },
  }

  const autocompleteToConfig = {
    name: 'to',
    placeholder: autocompleteToPlaceholder,
    renderAutocompleteComponent: renderAutocompleteTo,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [Elements.AUTOCOMPLETE_TO]: value })
      setElementOpened(null)
    },
  }

  const invertFromTo = () => {
    setFormValues({
      ...formValues,
      [Elements.AUTOCOMPLETE_FROM]: formValues[Elements.AUTOCOMPLETE_TO],
      [Elements.AUTOCOMPLETE_TO]: formValues[Elements.AUTOCOMPLETE_FROM],
    })
  }

  useEffect(() => {
    function hideAllOverlays(e: Event) {
      if (!container.current.contains(e.target) && mediaSize === MediaSize.LARGE) {
        setElementOpened(null)
      }
    }

    document.addEventListener('click', hideAllOverlays)
    return () => {
      document.removeEventListener('click', hideAllOverlays)
    }
  }, [mediaSize])

  const autocompleteFromValue = formValues[Elements.AUTOCOMPLETE_FROM] as AutocompleteOnChange
  const autocompleteToValue = formValues[Elements.AUTOCOMPLETE_TO] as AutocompleteOnChange

  return (
    <form
      action=""
      noValidate
      className={cc(['kirk-searchForm', className])}
      ref={container}
      role="search"
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
            <DoubleArrowIcon iconColor={color.primary} />
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
      </div>

      {mediaSize === MediaSize.LARGE && elementOpened === Elements.AUTOCOMPLETE_FROM && (
        <AutoCompleteOverlay
          className="kirk-searchForm-overlay kirk-searchForm-autocomplete-from"
          {...autocompleteFromConfig}
        />
      )}

      {mediaSize === MediaSize.SMALL &&
        elementOpened === Elements.AUTOCOMPLETE_FROM &&
        canUseDOM &&
        createPortal(
          <AutoCompleteSection
            {...autocompleteFromConfig}
            onClick={() => {
              setElementOpened(null)
            }}
          />,
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

      {mediaSize === MediaSize.LARGE && elementOpened === Elements.AUTOCOMPLETE_TO && (
        <AutoCompleteOverlay
          className="kirk-searchForm-overlay kirk-searchForm-autocomplete-to"
          {...autocompleteToConfig}
        />
      )}

      {mediaSize === MediaSize.SMALL &&
        elementOpened === Elements.AUTOCOMPLETE_TO &&
        canUseDOM &&
        createPortal(
          <AutoCompleteSection
            {...autocompleteToConfig}
            onClick={() => {
              setElementOpened(null)
            }}
          />,
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

        {elementOpened === Elements.DATEPICKER && mediaSize === MediaSize.LARGE && (
          <DatePickerOverlay
            {...datepickerConfig}
            className="kirk-searchForm-overlay kirk-searchForm-datepicker"
          />
        )}

        {elementOpened === Elements.DATEPICKER &&
          mediaSize === MediaSize.SMALL &&
          canUseDOM &&
          createPortal(
            <DatePickerSection
              {...datepickerConfig}
              onClick={() => {
                setElementOpened(null)
              }}
            />,
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

      {elementOpened === Elements.STEPPER && mediaSize === MediaSize.LARGE && (
        <StepperOverlay
          {...stepperConfig}
          className="kirk-searchForm-overlay kirk-searchForm-stepper"
          onChange={({ value }) => {
            setFormValues({ ...formValues, [Elements.STEPPER]: value as number })
          }}
        />
      )}

      {elementOpened === Elements.STEPPER &&
        mediaSize === MediaSize.SMALL &&
        canUseDOM &&
        createPortal(
          <StepperSection
            {...stepperConfig}
            confirmLabel={stepperProps.confirmLabel}
            onBackButtonClick={() => {
              setElementOpened(null)
            }}
          />,
          document.body,
        )}

      <div className="kirk-searchForm-submit">
        <button type="button" className="kirk-search-button" onClick={() => onSubmit(formValues)}>
          <SearchIcon iconColor={color.textWithBackground} strokeWidth="2" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
