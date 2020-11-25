import React from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'

export type ItemActionTitleProps = NormalizeProps &
  A11yProps &
  Readonly<{
    className?: string
    leftAddon?: React.ReactNode
    labelTitle?: string | JSX.Element
    subLabel?: string
    action?: string
    href?: string | JSX.Element
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  }>

export const ItemActionTitle = (props: ItemActionTitleProps) => {
  const {
    className,
    labelTitle,
    subLabel,
    action,
    leftAddon,
    href,
    onClick,
    onMouseDown,
    hasHorizontalSpacing = false,
  } = props
  const a11yAttrs = pickA11yProps<ItemActionTitleProps>(props)
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <Item
      className={cc([
        {
          'focus-visible': focusVisible,
        },
        className,
      ])}
      leftAddon={leftAddon}
      leftTitle={labelTitle}
      leftBody={subLabel}
      rightBody={action}
      rightBodyColor={color.blue}
      href={href}
      tag={!href ? <button type="button" /> : undefined}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      isClickable
      isWrappable
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
