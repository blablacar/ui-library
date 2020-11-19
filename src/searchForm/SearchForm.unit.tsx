import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import * as jestDateMock from 'jest-date-mock'

import { AutoComplete } from '../autoComplete/AutoComplete'
import { SearchForm, SearchFormProps } from './SearchForm'

function createProps(props: Partial<SearchFormProps> = {}): SearchFormProps {
  const today = new Date().toISOString()

  return {
    onSubmit: () => {},
    autocompleteFromPlaceholder: 'Leaving from',
    autocompleteToPlaceholder: 'Going to',
    renderAutocompleteFrom: p => <AutoComplete {...p} />,
    renderAutocompleteTo: p => <AutoComplete {...p} />,
    datepickerProps: {
      defaultValue: today,
    },
    stepperProps: {
      defaultValue: 1,
      min: 1,
      max: 8,
      increaseLabel: 'Increase',
      decreaseLabel: 'Decrease',
      title: 'Choose your number of seats',
      format: value => `${value} seat(s)`,
      confirmLabel: 'Submit',
    },
    ...props,
  }
}

describe('SearchForm', () => {
  beforeEach(() => {
    jestDateMock.advanceTo(Date.UTC(2020, 0, 1))
  })

  afterEach(() => {
    jestDateMock.clear()
  })

  describe('"From" field', () => {
    it('should hide the autocomplete by default', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    })

    it('should display the value in a button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Leaving from' })).toBeInTheDocument()
    })

    it('should open the autocomplete on click on the button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: 'Leaving from' }))
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should autofocus the input in the autocomplete', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: 'Leaving from' }))
      expect(screen.getByRole('searchbox')).toHaveFocus()
    })

    it('should display the given initial value', () => {
      const props = createProps({ initialFrom: 'Avignon' })
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Avignon' })).toBeInTheDocument()
    })

    it('should disable the field when disabledFrom is true', () => {
      const props = createProps({ disabledFrom: true })
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Leaving from' })).toBeDisabled()
    })
  })

  describe('"To" field', () => {
    it('should hide the autocomplete by default', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    })

    it('should display the value in a button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Going to' })).toBeInTheDocument()
    })

    it('should open the autocomplete on click on the button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: 'Going to' }))
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should autofocus the input in the autocomplete', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: 'Going to' }))
      expect(screen.getByRole('searchbox')).toHaveFocus()
    })

    it('should display the given initial value', () => {
      const props = createProps({ initialTo: 'Marseille' })
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Marseille' })).toBeInTheDocument()
    })

    it('should disable the field when disabledTo is true', () => {
      const props = createProps({ disabledTo: true })
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: 'Going to' })).toBeDisabled()
    })
  })

  describe('"Date" field', () => {
    it('should hide the dialog by default', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should display the value in a button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: '2020-01-01T00:00:00.000Z' })).toBeInTheDocument()
    })

    it('should open the datepicker on click on the button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: '2020-01-01T00:00:00.000Z' }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('should update to the selected date', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: '2020-01-01T00:00:00.000Z' }))
      fireEvent.click(screen.getByRole('gridcell', { name: 'Sat Jan 11 2020' }))
      expect(screen.getByRole('button', { name: '2020-01-11' })).toBeInTheDocument()
    })

    it('should format the date using the given formatter', () => {
      const props = createProps({
        datepickerProps: {
          defaultValue: new Date().toISOString(),
          format: value => new Date(value).toUTCString(),
        },
      })

      render(<SearchForm {...props} />)
      expect(
        screen.getByRole('button', { name: 'Wed, 01 Jan 2020 00:00:00 GMT' }),
      ).toBeInTheDocument()
    })
  })

  describe('"Seat count" field', () => {
    it('should hide the dialog by default', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should display the value in a button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      expect(screen.getByRole('button', { name: '1 seat(s)' })).toBeInTheDocument()
    })

    it('should open the stepper on click on the button', () => {
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: '1 seat(s)' }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('should update the value when clicking on the "Increase" button', () => {
      // Using small screen to force the "Submit" button.
      window.innerWidth = 360
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: '1 seat(s)' }))

      fireEvent.click(screen.getByRole('button', { name: 'Increase' }))
      fireEvent.click(screen.getByRole('button', { name: 'Increase' }))
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

      expect(screen.getByRole('button', { name: '3 seat(s)' })).toBeInTheDocument()
    })

    it('should update the value when clicking on the "Decrease" button', () => {
      // Using small screen to force the "Submit" button.
      window.innerWidth = 360
      const props = createProps()
      render(<SearchForm {...props} />)
      fireEvent.click(screen.getByRole('button', { name: '1 seat(s)' }))

      fireEvent.click(screen.getByRole('button', { name: 'Increase' }))
      fireEvent.click(screen.getByRole('button', { name: 'Increase' }))
      fireEvent.click(screen.getByRole('button', { name: 'Decrease' }))
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

      expect(screen.getByRole('button', { name: '2 seat(s)' })).toBeInTheDocument()
    })
  })
})
