import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cc from 'classcat'
import { canUseDOM } from 'exenv'

import { color } from '../_utils/branding'
import { MediaSize, MediaSizeContext } from '../_utils/mediaSizeProvider'
import { OnChangeParameters } from '../_utils/onChange'
import { AutocompleteOnChange, AutoCompleteProps } from '../autoComplete'
import { Bullet, BulletTypes } from '../bullet'
import { DatePicker } from '../datePicker'
import { Divider } from '../divider'
import { CalendarIcon } from '../icon/calendarIcon'
import { DoubleArrowIcon } from '../icon/doubleArrowIcon'
import { SearchIcon } from '../icon/searchIcon'
import { StandardSeatIcon as StandardSeat } from '../icon/standardSeat'
import { TextTitle } from '../typography/title'
import { AutoCompleteOverlay, AutoCompleteOverlayProps } from './autoComplete/overlay'
import { AutoCompleteSection } from './autoComplete/section'
import { DatePickerOverlay, DatePickerOverlayProps } from './datePicker/overlay'
import { DatePickerSection } from './datePicker/section'
import { Overlay } from './overlay'
import { StepperOverlay } from './stepper/overlay'
import { StepperSection } from './stepper/section'
import { TRANSITION_SECTION_CLASS_NAME, transitionSectionTimeout } from './transitionConfig'

export interface SearchFormProps {
  className?: string
  onSubmit: (formValues: SearchFormValues) => void
  autocompleteFromPlaceholder: AutoCompleteProps['placeholder']
  autocompleteToPlaceholder: AutoCompleteProps['placeholder']
  renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderDatePickerComponent?: DatePickerOverlayProps['renderDatePickerComponent']
  datepickerProps: SearchFormDatePickerProps
  stepperProps: SearchFormStepperProps
}

export interface SearchFormDatePickerProps {
  defaultValue: string
  format?: (value: string) => string
}

export interface SearchFormStepperProps {
  min: number
  max: number
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
  confirmLabel: string
  format?: (value: number) => string
}

export enum SearchFormElements {
  DATEPICKER = 'DATEPICKER',
  STEPPER = 'STEPPER',
  AUTOCOMPLETE_FROM = 'AUTOCOMPLETE_FROM',
  AUTOCOMPLETE_TO = 'AUTOCOMPLETE_TO',
}

export type SearchFormValues = {
  DATEPICKER: string
  STEPPER: number
  AUTOCOMPLETE_FROM?: AutocompleteOnChange
  AUTOCOMPLETE_TO?: AutocompleteOnChange
}

export const SearchForm = ({
  className,
  onSubmit,
  autocompleteFromPlaceholder,
  autocompleteToPlaceholder,
  renderAutocompleteFrom,
  renderAutocompleteTo,
  renderDatePickerComponent = props => <DatePicker {...props} />,
  datepickerProps,
  stepperProps,
}: SearchFormProps) => {
  // Use React.useContext syntax so we can mock it
  // https://github.com/enzymejs/enzyme/issues/2176#issuecomment-533582429
  const mediaSize = React.useContext(MediaSizeContext)

  const [elementOpened, setElementOpened] = useState('')
  const [formValues, setFormValues] = useState<SearchFormValues>({
    [SearchFormElements.STEPPER]: stepperProps.defaultValue,
    [SearchFormElements.DATEPICKER]: datepickerProps.defaultValue,
  })

  const getStepperFormattedValue = () => {
    if (stepperProps.format == null) {
      return `${formValues[SearchFormElements.STEPPER]}`
    }

    return stepperProps.format(formValues[SearchFormElements.STEPPER])
  }

  const getDatepickerFormattedValue = () => {
    if (datepickerProps.format == null) {
      return formValues[SearchFormElements.DATEPICKER]
    }

    return datepickerProps.format(formValues[SearchFormElements.DATEPICKER])
  }

  const selectedDate = new Date(formValues[SearchFormElements.DATEPICKER])

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
      setFormValues({ ...formValues, [SearchFormElements.DATEPICKER]: value as string })
    },
    renderDatePickerComponent,
  }

  const stepperConfig = {
    name: 'stepper',
    min: stepperProps.min,
    max: stepperProps.max,
    itemTitle: getStepperFormattedValue(),
    title: stepperProps.title,
    increaseLabel: stepperProps.increaseLabel,
    decreaseLabel: stepperProps.decreaseLabel,
    value: formValues[SearchFormElements.STEPPER],
    onChange: ({ value }: OnChangeParameters) => {
      closeOpenedElement()
      setFormValues({ ...formValues, [SearchFormElements.STEPPER]: value as number })
    },
  }

  const autocompleteFromConfig = {
    name: 'from',
    placeholder: autocompleteFromPlaceholder,
    renderAutocompleteComponent: renderAutocompleteFrom,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [SearchFormElements.AUTOCOMPLETE_FROM]: value })
      closeOpenedElement()
    },
  }

  const autocompleteToConfig = {
    name: 'to',
    placeholder: autocompleteToPlaceholder,
    renderAutocompleteComponent: renderAutocompleteTo,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues({ ...formValues, [SearchFormElements.AUTOCOMPLETE_TO]: value })
      closeOpenedElement()
    },
  }

  const transitionSectionConfig = {
    classNames: TRANSITION_SECTION_CLASS_NAME,
    timeout: transitionSectionTimeout,
    mountOnEnter: true,
    unmountOnExit: true,
  }

  const invertFromTo = () => {
    setFormValues({
      ...formValues,
      [SearchFormElements.AUTOCOMPLETE_FROM]: formValues[SearchFormElements.AUTOCOMPLETE_TO],
      [SearchFormElements.AUTOCOMPLETE_TO]: formValues[SearchFormElements.AUTOCOMPLETE_FROM],
    })
  }

  const autocompleteFromValue = formValues[
    SearchFormElements.AUTOCOMPLETE_FROM
  ] as AutocompleteOnChange
  const autocompleteToValue = formValues[SearchFormElements.AUTOCOMPLETE_TO] as AutocompleteOnChange

  const showInvertButton =
    formValues[SearchFormElements.AUTOCOMPLETE_FROM] != null ||
    formValues[SearchFormElements.AUTOCOMPLETE_TO] != null

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
            onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_FROM)}
          >
            <span className="kirk-bullet--searchForm">
              <Bullet type={BulletTypes.SEARCH} />
            </span>
            <TextTitle
              className={cc([
                'kirk-search-ellipsis',
                { 'kirk-search-placeholder': !autocompleteFromValue },
              ])}
            >
              {autocompleteFromValue?.item.label || autocompleteFromPlaceholder}
            </TextTitle>
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>

        <div className="kirk-searchForm-invert">
          <button
            type="button"
            className="kirk-search-button"
            onClick={invertFromTo}
            // We need to keep it the DOM to preserve the form size.
            disabled={!showInvertButton}
          >
            <DoubleArrowIcon iconColor={color.blue} />
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
      </div>

      <Overlay
        shouldDisplay={
          mediaSize === MediaSize.LARGE && elementOpened === SearchFormElements.AUTOCOMPLETE_FROM
        }
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-from"
      >
        <AutoCompleteOverlay {...autocompleteFromConfig} />
      </Overlay>

      {mediaSize === MediaSize.SMALL &&
        canUseDOM &&
        createPortal(
          <CSSTransition
            in={elementOpened === SearchFormElements.AUTOCOMPLETE_FROM}
            {...transitionSectionConfig}
          >
            <AutoCompleteSection {...autocompleteFromConfig} onClose={closeOpenedElement} />
          </CSSTransition>,
          document.body,
        )}

      <div className="kirk-searchForm-to">
        <button
          type="button"
          className="kirk-search-button"
          onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_TO)}
        >
          <span className="kirk-bullet--searchForm">
            <Bullet type={BulletTypes.SEARCH} />
          </span>
          <TextTitle
            className={cc([
              'kirk-search-ellipsis',
              { 'kirk-search-placeholder': !autocompleteToValue },
            ])}
          >
            {autocompleteToValue?.item.label || autocompleteToPlaceholder}
          </TextTitle>
        </button>
        {mediaSize === MediaSize.SMALL && <Divider />}
      </div>

      <Overlay
        shouldDisplay={
          mediaSize === MediaSize.LARGE && elementOpened === SearchFormElements.AUTOCOMPLETE_TO
        }
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-to"
      >
        <AutoCompleteOverlay {...autocompleteToConfig} />
      </Overlay>

      {mediaSize === MediaSize.SMALL &&
        canUseDOM &&
        createPortal(
          <CSSTransition
            in={elementOpened === SearchFormElements.AUTOCOMPLETE_TO}
            {...transitionSectionConfig}
          >
            <AutoCompleteSection {...autocompleteToConfig} onClose={closeOpenedElement} />
          </CSSTransition>,
          document.body,
        )}

      <div className="kirk-searchForm-dateSeat-container">
        <div className="kirk-searchForm-date">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.DATEPICKER)}
          >
            <CalendarIcon />
            <TextTitle className="kirk-search-ellipsis">{getDatepickerFormattedValue()}</TextTitle>
          </button>
        </div>

        <Overlay
          shouldDisplay={
            mediaSize === MediaSize.LARGE && elementOpened === SearchFormElements.DATEPICKER
          }
          closeOnBlur={closeOpenedElement}
          className="kirk-searchForm-overlay kirk-searchForm-datepicker"
        >
          <DatePickerOverlay {...datepickerConfig} />
        </Overlay>

        {mediaSize === MediaSize.SMALL &&
          canUseDOM &&
          createPortal(
            <CSSTransition
              in={elementOpened === SearchFormElements.DATEPICKER}
              {...transitionSectionConfig}
            >
              <DatePickerSection {...datepickerConfig} onClose={closeOpenedElement} />
            </CSSTransition>,
            document.body,
          )}

        <div className="kirk-searchForm-seats">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.STEPPER)}
          >
            <StandardSeat />
            <TextTitle className="kirk-search-ellipsis">{getStepperFormattedValue()}</TextTitle>
          </button>
        </div>
      </div>

      <Overlay
        shouldDisplay={
          mediaSize === MediaSize.LARGE && elementOpened === SearchFormElements.STEPPER
        }
        closeOnBlur={closeOpenedElement}
        className="kirk-searchForm-overlay kirk-searchForm-stepper"
      >
        <StepperOverlay
          {...stepperConfig}
          onChange={({ value }) => {
            setFormValues({ ...formValues, [SearchFormElements.STEPPER]: value as number })
          }}
        />
      </Overlay>

      {mediaSize === MediaSize.SMALL &&
        canUseDOM &&
        createPortal(
          <CSSTransition
            in={elementOpened === SearchFormElements.STEPPER}
            {...transitionSectionConfig}
          >
            <StepperSection
              {...stepperConfig}
              confirmLabel={stepperProps.confirmLabel}
              onClose={closeOpenedElement}
            />
          </CSSTransition>,
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
