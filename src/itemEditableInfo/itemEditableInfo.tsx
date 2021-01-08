import React from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { TextDisplayType } from '../text'

export type ItemEditableInfoProps = A11yProps &
  Readonly<{
    className?: string
    // A label for a modifiable user value.
    label: string
    // A modifiable user value.
    value: string
    // A href to follow if the modifiable value is activated
    href?: string | JSX.Element
    tag?: JSX.Element
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    // Prevent modification of the user input.
    // Used to trigger the behavior of the 'ItemEditableInfo non-editable' from the specs.
    readonly?: boolean
  }>

export const ItemEditableInfo = (props: ItemEditableInfoProps) => {
  const { className, label, value, href = null, tag, readonly = false, onClick } = props
  const a11yAttrs = pickA11yProps<ItemEditableInfoProps>(props)
  const { focusVisible, onFocus, onBlur } = useFocusVisible()

  const extraProps = {
    isClickable: true,
    href,
    tag,
    // For the ItemEditableInfo, the value (entered previously by the user)
    // is the most important info and is visually bigger than the
    // label for it.
    leftTitleDisplay: TextDisplayType.BODY,
    leftBodyDisplay: TextDisplayType.TITLE,

    // The value is modifiable and get the primary color (i.e. the action
    // bright blue color).
    leftTitleColor: color.lightMidnightGreen,
    leftBodyColor: color.blue,
  }

  if (readonly) {
    delete extraProps.href
    extraProps.isClickable = false
    // Override the primary color from the non modifiable value.
    extraProps.leftBodyColor = color.midnightGreen
  }

  if (onClick && !href) {
    extraProps.tag = <button />
  }

  return (
    <Item
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cc([
        className,
        {
          'focus-visible': focusVisible,
        },
      ])}
      leftTitle={label}
      leftBody={value}
      {...extraProps}
      {...a11yAttrs}
    />
  )
}

ItemEditableInfo
