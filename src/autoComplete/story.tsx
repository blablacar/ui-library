import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, text, boolean, select } from '@storybook/addon-knobs'

import CircleIcon from 'icon/circleIcon'
import ItemChoice from 'itemChoice'
import AutoComplete from 'autoComplete'

const stories = storiesOf('AutoComplete', module)
stories.addDecorator(withKnobs)

const places:AutocompleteItem[] = [
  { id: '1', title: 'Paris Saint Lazare', description: 'Rue d’Amsterdam, Paris' },
  { id: '2', title: 'Paris Gare de Lyon', description: 'Rue d’Amsterdam, Paris' },
  { id: '3', title: 'Paris Rive Gauche' },
]

interface AutoCompleteExampleProps {
  readonly searchForItemsDelay?: number
  readonly renderEmptySearch?: JSX.Element[]
}

interface AutoCompleteExampleState {
  readonly isSearching: boolean
  readonly items: AutocompleteItem[]
}

class AutoCompleteExample extends Component<AutoCompleteExampleProps, AutoCompleteExampleState> {
  state:AutoCompleteExampleState = {
    isSearching: false,
    items: [],
  }

  defaultProps: AutoCompleteExampleProps = {
    searchForItemsDelay: 0,
    renderEmptySearch: [],
  }

  searchForItems = (query:string) => {
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
        <p>Type <code>Paris</code> to test auto-completion.</p>
        <AutoComplete
          name="city"
          placeholder="Search here…"
          defaultValue={text('defaultValue')}
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
          loadingItemIndex={number('loadingItemIndex', -1)}
          autoCorrect={select('autoCorrect', { on:'on', off:'off' }, 'off')}
          autoComplete={select('autoComplete', { on:'on', off:'off' }, 'off')}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          readOnly={boolean('readOnly', false)}
          required={boolean('required', false)}
        />
      </div>
    )
  }
}

stories.add(
  'AutoComplete',
  withInfo('AutoComplete')(() => <AutoCompleteExample />),
)

stories.add(
  'AutoComplete with busy state',
  withInfo('AutoComplete')(() => <AutoCompleteExample searchForItemsDelay={1500} />),
)

stories.add(
  'AutoComplete test',
  withInfo('AutoComplete')(() => {
    const emptySearch = [
      <ItemChoice label="Test 1" />,
      <ItemChoice label="Test 2" />,
      <ItemChoice
        label="Test 3"
        subLabel="Secondary info"
        leftAddon={<CircleIcon />}
      />,
    ]
    return <AutoCompleteExample renderEmptySearch={emptySearch} />
  }),
)
