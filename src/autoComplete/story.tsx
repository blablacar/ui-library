import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ItemChoiceStatus } from 'itemChoice'
import { withKnobs, number, text, boolean, select } from '@storybook/addon-knobs'

import AutoComplete from 'autoComplete'

const stories = storiesOf('AutoComplete', module)
stories.addDecorator(withKnobs)

const places: AutocompleteItem[] = [
  { id: '1', title: 'Paris Saint Lazare', description: 'Rue d’Amsterdam, Paris' },
  { id: '2', title: 'Paris Gare de Lyon', description: 'Rue d’Amsterdam, Paris' },
  { id: '3', title: 'Paris Rive Gauche' },
]

interface AutoCompleteExampleProps {
  readonly searchOnMount?: boolean
  readonly searchForItemsDelay?: number
  readonly renderEmptySearch?: AutocompleteItem[]
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

  defaultProps: AutoCompleteExampleProps = {
    searchOnMount: true,
    searchForItemsDelay: 0,
    renderEmptySearch: [],
  }

  searchForItems = (query: string) => {
    this.setState({ isSearching: true })

    setTimeout(() => {
      this.setState({
        items: places.filter(place => place.title.startsWith(query)),
        isSearching: false,
      })
    }, this.props.searchForItemsDelay)
  }

  render() {
    const error = boolean('error', false)

    return (
      <div>
        <p>
          Type <code>Paris</code> to test auto-completion.
        </p>
        <AutoComplete
          name="city"
          placeholder="Search here…"
          defaultValue={text('defaultValue')}
          searchOnMount={boolean('searchOnMount', true)}
          isSearching={this.state.isSearching}
          searchForItems={this.searchForItems}
          items={this.state.items}
          renderEmptySearch={this.props.renderEmptySearch}
          onSelect={action('onChange')}
          getItemValue={item => item.id}
          renderQuery={item => item.title}
          error={error ? text('error message', 'something went wrong') : ''}
          maxItems={number('maxItems', 5)}
          showList={boolean('showList', true)}
          searchForItemsMinChars={number('searchForItemsMinChars', 3)}
          selectedItemStatus={select(
            'selectedItemStatus',
            [ItemChoiceStatus.DEFAULT, ItemChoiceStatus.LOADING, ItemChoiceStatus.CHECKED],
            ItemChoiceStatus.DEFAULT,
          )}
          autoCorrect={select('autoCorrect', { on: 'on', off: 'off' }, 'off')}
          disabled={boolean('disabled', false)}
          readOnly={boolean('readOnly', false)}
          required={boolean('required', false)}
        />
      </div>
    )
  }
}

stories.add('Basic', () => <AutoCompleteExample />)

stories.add('With busy state', () => <AutoCompleteExample searchForItemsDelay={1500} />)

stories.add('With empty search', () => {
  const emptySearch = [
    { id: '1', title: 'Get my location', description: '' },
    { id: '2', title: 'Favorite address', description: '' },
  ]
  return <AutoCompleteExample renderEmptySearch={emptySearch} />
})
