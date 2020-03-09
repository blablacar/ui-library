import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ItemStatus } from '_utils/item'
import { withKnobs, number, text, boolean, select } from '@storybook/addon-knobs'
import DatePickerOverlay from './datePicker/overlay'
import DatePickerSection from './datePicker/section'
import StepperOverlay from './stepper/overlay'
import StepperSection from './stepper/section'
import AutoCompleteOverlay from './autoComplete/overlay'
import AutoCompleteSection from './autoComplete/section'

const stories = storiesOf('Widgets|SearchForm', module)
stories.addDecorator(withKnobs)

const places: AutocompleteItem[] = [
  { id: '1', label: 'Paris Saint Lazare', labelInfo: 'Rue d’Amsterdam, Paris' },
  { id: '2', label: 'Paris Gare de Lyon', labelInfo: 'Rue d’Amsterdam, Paris' },
  { id: '3', label: 'Paris Rive Gauche' },
]

interface AutoCompleteExampleProps {
  readonly component?: typeof AutoCompleteOverlay | typeof AutoCompleteSection
  readonly searchForItemsDelay?: number
}

interface AutoCompleteExampleState {
  readonly isSearching: boolean
  readonly items: AutocompleteItem[]
}

class AutoCompleteExample extends Component<AutoCompleteExampleProps, AutoCompleteExampleState> {
  state: AutoCompleteExampleState = {
    isSearching: false,
    items: [],
  }

  static defaultProps: AutoCompleteExampleProps = {
    component: AutoCompleteOverlay,
    searchForItemsDelay: 0,
  }

  searchForItems = (query: string) => {
    this.setState({ isSearching: true })

    setTimeout(() => {
      this.setState({
        items: places.filter(place => place.label.startsWith(query)),
        isSearching: false,
      })
    }, this.props.searchForItemsDelay)
  }

  renderComponent = () => {
    const error = boolean('error', false)

    return React.createElement(this.props.component, {
      name: 'city',
      placeholder: 'Leaving from…',
      defaultValue: text('defaultValue'),
      isSearching: this.state.isSearching,
      searchForItems: this.searchForItems,
      items: this.state.items,
      onSelect: action('onChange'),
      getItemValue: (item: AutocompleteItem) => item.id,
      renderQuery: (item: AutocompleteItem) => item.label,
      error: error ? text('error message', 'something went wrong') : '',
      maxItems: number('maxItems', 5),
      showList: boolean('showList', true),
      searchForItemsMinChars: number('searchForItemsMinChars', 3),
      selectedItemStatus: select(
        'selectedItemStatus',
        [ItemStatus.DEFAULT, ItemStatus.LOADING, ItemStatus.CHECKED],
        ItemStatus.DEFAULT,
      ),
      autoCorrect: select('autoCorrect', { on: 'on', off: 'off' }, 'off'),
      disabled: boolean('disabled', false),
      readOnly: boolean('readOnly', false),
      required: boolean('required', false),
    })
  }

  render() {
    return (
      <div>
        <p>
          Type <code>Paris</code> to test auto-completion.
        </p>
        {this.renderComponent()}
      </div>
    )
  }
}

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
stories.add('AutoCompleteOverlay', () => <AutoCompleteExample component={AutoCompleteOverlay} />)
stories.add('AutoCompleteSection', () => <AutoCompleteExample component={AutoCompleteSection} />)
