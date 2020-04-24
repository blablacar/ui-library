import React from 'react'

import { TextDisplayType } from 'text'
import Item from '_utils/item'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import { color } from '_utils/branding'

export type ItemEditableInfoProps = A11yProps &
  Readonly<{
    className?: string
    // A label for a modifiable user value.
    label: string
    // A modifiable user value.
    value: string
    // A href to follow if the modifiable value is activated
    href?: string | JSX.Element
    // Prevent modification of the user input.
    // Used to trigger the behavior of the 'ItemEditableInfo non-editable' from the specs.
    readonly?: boolean
    ariaLabel?: string
  }>

const ItemEditableInfo = (props: ItemEditableInfoProps) => {
  const { className, label, value, href = null, readonly = false } = props
  const a11yAttrs = pickA11yProps<ItemEditableInfoProps>(props)

  const extraProps = {
    isClickable: true,
    href,
    // For the ItemEditableInfo, the value (entered previously by the user)
    // is the most important info and is visually bigger than the
    // label for it.
    leftTitleDisplay: TextDisplayType.BODY,
    leftBodyDisplay: TextDisplayType.TITLE,

    // The value is modifiable and get the primary color (i.e. the action
    // bright blue color).
    leftTitleColor: color.lightMidnightGreen,
    leftBodyColor: color.primary,
  }

  if (readonly) {
    delete extraProps.href
    extraProps.isClickable = false
    // Override the primary color from the non modifiable value.
    extraProps.leftBodyColor = color.primaryText
  }

  return (
    <Item className={className} leftTitle={label} leftBody={value} {...extraProps} {...a11yAttrs} />
  )
}

export default ItemEditableInfo
