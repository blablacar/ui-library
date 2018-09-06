import React from 'react'
import cc from 'classcat'
import ItemChoice from 'itemChoice'

interface AutoCompleteListItemDefaultProps {
  item: AutocompleteItem
}

const AutoCompleteListItemDefault = ({ item }:AutoCompleteListItemDefaultProps) => (
  <ItemChoice
    className={'kirk-autoComplete-item'}
    label={item.title}
    subLabel={item.description}
  />
)

export default AutoCompleteListItemDefault
