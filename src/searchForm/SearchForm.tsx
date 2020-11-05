import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cc from 'classcat'
import { canUseDOM } from 'exenv'

import { OnChangeParameters } from '../_internals/onChange'
import { color } from '../_utils/branding'
import { MediaSize, MediaSizeContext } from '../_utils/mediaSizeProvider'
import { AutocompleteOnChange, AutoCompleteProps } from '../autoComplete'
import { Bullet, BulletTypes } from '../bullet'
import { DatePicker } from '../datePicker'
import { ContentDivider } from '../divider/contentDivider'
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
import { StyledSearchForm } from './SearchForm.style'
import { SlideSwitchTransition, SlideSwitchTransitionSide } from './SlideSwitchTransition'
import { StepperOverlay } from './stepper/overlay'
import { StepperSection } from './stepper/section'
import { TRANSITION_SECTION_CLASS_NAME, transitionSectionTimeout } from './transitionConfig'

export type SearchFormProps = Readonly<{
  className?: string
  onSubmit: (formValues: SearchFormValues) => void
  disabledFrom?: boolean
  disabledTo?: boolean
  initialFrom?: string
  initialTo?: string
  autocompleteFromPlaceholder: AutoCompleteProps['placeholder']
  autocompleteToPlaceholder: AutoCompleteProps['placeholder']
  renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderDatePickerComponent?: DatePickerOverlayProps['renderDatePickerComponent']
  datepickerProps: SearchFormDatePickerProps
  stepperProps: SearchFormStepperProps
}>

export type SearchFormDatePickerProps = Readonly<{
  defaultValue: string
  format?: (value: string) => string
}>

export type SearchFormStepperProps = Readonly<{
  min: number
  max: number
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
  confirmLabel: string
  format?: (value: number) => string
}>

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

const getPlaceholderText = (
  initial: string,
  autocompleted: string,
  placeholder: string,
): string => {
  if (autocompleted) {
    return autocompleted
  }
  if (initial) {
    return initial
  }

  return placeholder
}

export const SearchForm = ({
  className,
  onSubmit,
  initialFrom,
  initialTo,
  disabledFrom,
  disabledTo,
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

  // Used as "trigger" each time the value is changed for the invert animation.
  // Only the change resulting from the invert button should be animated.
  const animationKey = React.useRef(0)

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
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.DATEPICKER]: value as string,
        }),
      )
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
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.STEPPER]: value as number,
        }),
      )
    },
  }

  const autocompleteFromConfig = {
    name: 'from',
    placeholder: autocompleteFromPlaceholder,
    renderAutocompleteComponent: renderAutocompleteFrom,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.AUTOCOMPLETE_FROM]: value,
        }),
      )
      closeOpenedElement()
    },
  }

  const autocompleteToConfig = {
    name: 'to',
    placeholder: autocompleteToPlaceholder,
    renderAutocompleteComponent: renderAutocompleteTo,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.AUTOCOMPLETE_TO]: value,
        }),
      )
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
    // Trigger the animation for the next update.
    animationKey.current += 1

    setFormValues(
      (currentFormValues: SearchFormValues): SearchFormValues => ({
        ...currentFormValues,
        [SearchFormElements.AUTOCOMPLETE_FROM]: formValues[SearchFormElements.AUTOCOMPLETE_TO],
        [SearchFormElements.AUTOCOMPLETE_TO]: formValues[SearchFormElements.AUTOCOMPLETE_FROM],
      }),
    )
  }

  const autocompleteFromValue = formValues[SearchFormElements.AUTOCOMPLETE_FROM]
  const autocompleteToValue = formValues[SearchFormElements.AUTOCOMPLETE_TO]

  const showInvertButton =
    formValues[SearchFormElements.AUTOCOMPLETE_FROM] != null ||
    formValues[SearchFormElements.AUTOCOMPLETE_TO] != null

  return (
    <StyledSearchForm
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
          <SlideSwitchTransition
            side={
              mediaSize === MediaSize.SMALL
                ? SlideSwitchTransitionSide.BOTTOM
                : SlideSwitchTransitionSide.RIGHT
            }
            childrenKey={animationKey.current}
          >
            <button
              type="button"
              className="kirk-search-button"
              onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_FROM)}
              disabled={disabledFrom}
            >
              <span className="kirk-bullet--searchForm">
                <Bullet type={BulletTypes.SEARCH} />
              </span>

              <TextTitle
                className={cc([
                  'kirk-search-ellipsis',
                  { 'kirk-search-placeholder': !autocompleteFromValue && !initialFrom },
                ])}
              >
                {getPlaceholderText(
                  initialFrom,
                  autocompleteFromValue?.item.label,
                  autocompleteFromPlaceholder,
                )}
              </TextTitle>
            </button>
          </SlideSwitchTransition>
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
        </div>
      </div>

      {mediaSize === MediaSize.SMALL && <ContentDivider />}

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
        <SlideSwitchTransition
          side={
            mediaSize === MediaSize.SMALL
              ? SlideSwitchTransitionSide.TOP
              : SlideSwitchTransitionSide.LEFT
          }
          childrenKey={animationKey.current}
        >
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_TO)}
            disabled={disabledTo}
          >
            <span className="kirk-bullet--searchForm">
              <Bullet type={BulletTypes.SEARCH} />
            </span>
            <TextTitle
              className={cc([
                'kirk-search-ellipsis',
                { 'kirk-search-placeholder': !autocompleteToValue && !initialTo },
              ])}
            >
              {getPlaceholderText(
                initialTo,
                autocompleteToValue?.item.label,
                autocompleteToPlaceholder,
              )}
            </TextTitle>
          </button>
        </SlideSwitchTransition>
      </div>

      {mediaSize === MediaSize.SMALL && <ContentDivider />}

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
            setFormValues(
              (currentFormValues: SearchFormValues): SearchFormValues => ({
                ...currentFormValues,
                [SearchFormElements.STEPPER]: value as number,
              }),
            )
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
    </StyledSearchForm>
  )
}
