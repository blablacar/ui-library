import React from 'react'
import cc from 'classcat'
import prefix from '_utils'
import ItemChoice from 'itemChoice'

interface AutoCompleteListItemDefaultProps {
  item: AutocompleteItem
}

const AutoCompleteListItemDefault = ({ item }:AutoCompleteListItemDefaultProps) => (
  <ItemChoice
    label={item.title}
    subLabel={item.description}
  />
)

export default AutoCompleteListItemDefault
