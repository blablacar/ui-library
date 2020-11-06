import React, { useState } from 'react'

import { ItemStatus } from '../_internals/item'
import { ComfortIcon } from '../icon'
import Loader, { LoaderLayoutMode } from '../loader'
import { AutoComplete, AutocompleteItem, AutocompleteOnChange } from './index'

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

type AutoCompleteExampleProps = Readonly<{
  className?: string
  defaultValue?: string
  searchOnMount?: boolean
  searchForItemsDelay?: number
  renderEmptySearch?: AutocompleteItem[]
  inputAddon?: React.ReactElement
  onSelect?: (obj: AutocompleteOnChange) => void
  error?: string | JSX.Element
  embeddedInSearchForm?: boolean
}>

export const AutoCompleteExample = ({
  className,
  searchForItemsDelay = 0,
  renderEmptySearch = [],
  onSelect,
  inputAddon,
  error,
  defaultValue,
  embeddedInSearchForm,
}: AutoCompleteExampleProps) => {
  const [items, setItems] = useState([])
  const [isSearching, setSearching] = useState(false)

  const searchForItems = (query: string) => {
    setSearching(true)
    setTimeout(() => {
      setItems(places.filter(place => place.label.startsWith(query)))
      setSearching(false)
    }, searchForItemsDelay)
  }

  return (
    <AutoComplete
      className={className}
      name="city"
      placeholder="Search here"
      // indicates whether it should display a loading state
      isSearching={isSearching}
      // The default query
      defaultValue={defaultValue}
      // define if searchForItems is called on mount.
      // If a default value is present it will search for it.
      searchOnMount
      searchForItems={searchForItems} // method to trigger a search
      items={items} // Results of the search
      busyTimeout={500} // milliseconds before showing a loading state
      // custom loading display
      renderBusy={() => <Loader size={36} layoutMode={LoaderLayoutMode.INLINE} />}
      // allow to display default results when there is no results.
      renderEmptySearch={renderEmptySearch}
      // method called when an item is selected
      onSelect={onSelect}
      // Format the autocomplete selected value
      getItemValue={item => item.id}
      // Format the autocomplete display based on the selected item
      renderQuery={item => item.label}
      // An error message to display
      error={error}
      // max number of results that are display
      maxItems={5}
      // number of charachers required to trigger a search
      searchForItemsMinChars={3}
      // Display the status of the selected item, it can be loading or check
      selectedItemStatus={ItemStatus.DEFAULT}
      // Display a given icon in the input field
      inputAddon={inputAddon}
      embeddedInSearchForm={embeddedInSearchForm}
    />
  )
}
