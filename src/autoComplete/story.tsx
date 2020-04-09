import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { ItemStatus } from '_utils/item'
import { withKnobs, number, text, boolean, select } from '@storybook/addon-knobs'

import AutoComplete from '.'
import ComfortIcon from 'icon/comfortIcon'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|AutoComplete', module)
stories.addDecorator(withKnobs)

const places: AutocompleteItem[] = [
  {
    id: '1',
    label: 'Paris Saint Lazare',
    labelInfo: 'Rue d’Amsterdam, Paris',
    leftAddon: <ComfortIcon />,
  },
  { id: '2', label: 'Paris Gare de Lyon', labelInfo: 'Rue d’Amsterdam, Paris' },
  { id: '3', label: 'Paris Rive Gauche' },
]

interface AutoCompleteExampleProps {
  readonly searchOnMount?: boolean
  readonly searchForItemsDelay?: number
  readonly renderEmptySearch?: AutocompleteItem[]
  readonly className?: Classcat.Class
  readonly inputAddon?: React.ReactElement
  readonly onSelect?: (obj: AutocompleteOnChange) => void
  readonly autoFocus?: boolean
  readonly placeholder?: string
  readonly embeddedInSearchForm?: boolean
}

interface AutoCompleteExampleState {
  readonly isSearching: boolean
  readonly items: AutocompleteItem[]
}

export class AutoCompleteExample extends Component<
  AutoCompleteExampleProps,
  AutoCompleteExampleState
> {
  state: AutoCompleteExampleState = {
    isSearching: false,
    items: [],
  }

  defaultProps: AutoCompleteExampleProps = {
    searchOnMount: true,
    searchForItemsDelay: 0,
    renderEmptySearch: [],
    onSelect() {},
    autoFocus: false,
    placeholder: 'Search here',
    embeddedInSearchForm: false,
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

  render() {
    const error = boolean('error', false)

    return (
      <AutoComplete
        className={this.props.className}
        name="city"
        placeholder={this.props.placeholder}
        defaultValue={text('defaultValue')}
        searchOnMount={boolean('searchOnMount', true)}
        isSearching={this.state.isSearching}
        searchForItems={this.searchForItems}
        items={this.state.items}
        renderEmptySearch={this.props.renderEmptySearch}
        onSelect={this.props.onSelect}
        getItemValue={item => item.id}
        renderQuery={item => item.label}
        error={error ? text('error message', 'something went wrong') : ''}
        maxItems={number('maxItems', 5)}
        showList={boolean('showList', true)}
        searchForItemsMinChars={number('searchForItemsMinChars', 3)}
        selectedItemStatus={select(
          'selectedItemStatus',
          [ItemStatus.DEFAULT, ItemStatus.LOADING, ItemStatus.CHECKED],
          ItemStatus.DEFAULT,
        )}
        autoCorrect={select('autoCorrect', { on: 'on', off: 'off' }, 'off')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        required={boolean('required', false)}
        inputAddon={this.props.inputAddon}
        autoFocus={this.props.autoFocus}
        embeddedInSearchForm={this.props.embeddedInSearchForm}
      />
    )
  }
}

stories.add('Basic', () => (
  <Section>
    <p>
      Type <code>Paris</code> to test auto-completion.
    </p>
    <AutoCompleteExample />
  </Section>
))

stories.add('With busy state', () => (
  <Section>
    <p>
      Type <code>Paris</code> to test auto-completion.
    </p>
    <AutoCompleteExample searchForItemsDelay={1500} />
  </Section>
))

stories.add('With empty search', () => {
  const emptySearch = [
    { id: '1', label: 'Get my location', labelInfo: '' },
    { id: '2', label: 'Favorite address', labelInfo: '' },
  ]

  return (
    <Section>
      <p>
        Type <code>Paris</code> to test auto-completion.
      </p>
      <AutoCompleteExample renderEmptySearch={emptySearch} />
    </Section>
  )
})
