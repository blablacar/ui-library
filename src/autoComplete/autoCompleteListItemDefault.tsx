import React from 'react'
import cc from 'classcat'
import prefix from '_utils'

interface AutoCompleteListItemDefaultProps {
  item: AutocompleteItem
}

const AutoCompleteListItemDefault = ({ item }: AutoCompleteListItemDefaultProps) => (
  <div>
    {item.title && (
      <div className={cc(prefix({ 'autoComplete-primaryText': true }))}>{item.title}</div>
    )}
    {item.description && (
      <div className={cc(prefix({ 'autoComplete-secondaryText': true }))}>{item.description}</div>
    )}
  </div>
)

export default AutoCompleteListItemDefault
