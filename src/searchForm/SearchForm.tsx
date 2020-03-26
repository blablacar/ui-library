import React, { useContext, useState, useEffect, useRef } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import SearchIcon from 'icon/searchIcon'
import { CalendarIcon } from 'icon/calendarIcon'
import { Bullet } from 'index'
import { BulletTypes } from 'bullet'
import { StandardSeat } from 'icon/standardSeat'
import { DoubleArrowIcon } from 'icon/doubleArrowIcon'
import Divider from 'divider'
import { MediaSize, MediaSizeContext } from '_utils/mediaSizeProvider/MediaSizeProvider'
import DatePickerOverlay from './datePicker/overlay'
import StepperOverlay from './stepper/overlay'
import AutoCompleteOverlay from './autoComplete/overlay'
import TextBody from 'typography/body'

export interface SearchFormProps {
  className?: string
  onSubmit: Function
  autocompleteFromProps: AutocompleteProps
  autocompleteToProps: AutocompleteProps
  datepickerProps: FieldProps
  stepperProps: StepperProps
}

interface FieldProps {
  defaultValue?: string | number | Date
  format?: (value: string | number | Date) => string
}

interface AutocompleteProps extends FieldProps {
  placeholder: string
}

interface StepperProps extends FieldProps {
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
}

enum Elements {
  DATEPICKER = 'DATEPICKER',
  STEPPER = 'STEPPER',
  AUTOCOMPLETE_FROM = 'AUTOCOMPLETE_FROM',
  AUTOCOMPLETE_TO = 'AUTOCOMPLETE_TO',
}

type FormValues = {
  [key in keyof typeof Elements]?: string | number | boolean | Date
}

const SearchForm = ({
  className,
  onSubmit,
  autocompleteFromProps,
  autocompleteToProps,
  datepickerProps,
  stepperProps,
}: SearchFormProps) => {
  const mediaSize = useContext(MediaSizeContext)

  const [elementOpened, setElementOpened] = useState('')
  const [formValues, setFormValues] = useState<FormValues>({
    [Elements.STEPPER]: stepperProps.defaultValue,
    [Elements.DATEPICKER]: datepickerProps.defaultValue,
  })

  const container = useRef(null)

  const getStepperFormattedValue = () => stepperProps.format(formValues[Elements.STEPPER] as string)

  const getDatepickerFormattedValue = () =>
    datepickerProps.format(formValues[Elements.DATEPICKER] as string)

  const selectedDate = new Date(formValues[Elements.DATEPICKER] as string)

  useEffect(() => {
    function hideAllOverlays(e: Event) {
      if (!container.current.contains(e.target)) {
        setElementOpened(null)
      }
    }

    document.addEventListener('click', hideAllOverlays)
    return () => {
      document.removeEventListener('click', hideAllOverlays)
    }
  }, [])

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
            <Bullet type={BulletTypes.SEARCH} className="kirk-bullet--searchForm" />{' '}
            <TextBody>
              {formValues[Elements.AUTOCOMPLETE_FROM] || autocompleteFromProps.placeholder}
            </TextBody>
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
        <div className="kirk-searchForm-invert">
          <button type="button" className="kirk-search-button">
            <DoubleArrowIcon iconColor={color.primary} />
          </button>
          {mediaSize === MediaSize.SMALL && <Divider />}
        </div>
      </div>

      {elementOpened === Elements.AUTOCOMPLETE_FROM && (
        <AutoCompleteOverlay
          className="kirk-searchForm-overlay kirk-searchForm-autocomplete-from"
          name="from"
          searchOnMount={false}
          isSearching={false}
          searchForItems={() => {}}
          autoFocus
        />
      )}

      <div className="kirk-searchForm-to">
        <button
          type="button"
          className="kirk-search-button"
          onClick={() => setElementOpened(Elements.AUTOCOMPLETE_TO)}
        >
          <Bullet type={BulletTypes.SEARCH} className="kirk-bullet--searchForm" />{' '}
          <TextBody>
            {formValues[Elements.AUTOCOMPLETE_TO] || autocompleteToProps.placeholder}
          </TextBody>
        </button>
        {mediaSize === MediaSize.SMALL && <Divider />}
      </div>

      {elementOpened === Elements.AUTOCOMPLETE_TO && (
        <AutoCompleteOverlay
          className="kirk-searchForm-overlay kirk-searchForm-autocomplete-to"
          name="to"
          searchOnMount={false}
          isSearching={false}
          searchForItems={() => {}}
          autoFocus
        />
      )}

      <div className="kirk-searchForm-dateSeat-container">
        <div className="kirk-searchForm-date">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(Elements.DATEPICKER)}
          >
            <CalendarIcon />
            <TextBody>{getDatepickerFormattedValue()}</TextBody>
          </button>
        </div>

        {elementOpened === Elements.DATEPICKER && (
          <DatePickerOverlay
            title={getDatepickerFormattedValue()}
            name="datepicker"
            initialDate={selectedDate}
            initialMonth={selectedDate} // Needed to open the Datepicker on the selected month
            className="kirk-searchForm-overlay kirk-searchForm-datepicker"
            onChange={({ value }) => {
              setElementOpened(null)
              setFormValues({ ...formValues, [Elements.DATEPICKER]: value })
            }}
          />
        )}

        <div className="kirk-searchForm-seats">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(Elements.STEPPER)}
          >
            <StandardSeat />
            <TextBody>{getStepperFormattedValue()}</TextBody>
          </button>
        </div>
      </div>

      {elementOpened === Elements.STEPPER && (
        <StepperOverlay
          name="stepper"
          itemTitle={getStepperFormattedValue()}
          title={stepperProps.title}
          increaseLabel={stepperProps.increaseLabel}
          decreaseLabel={stepperProps.decreaseLabel}
          className="kirk-searchForm-overlay kirk-searchForm-stepper"
          value={formValues[Elements.STEPPER] as number}
          onChange={({ value }) => {
            setFormValues({ ...formValues, [Elements.STEPPER]: value })
          }}
        />
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
