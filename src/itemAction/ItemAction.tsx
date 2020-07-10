import React, { PureComponent } from 'react'
import cc from 'classcat'

import { Item, ItemStatus } from '../_internals/item'
import { prefix } from '../_utils'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { Loader } from '../loader/Loader'

export interface ItemActionProps extends A11yProps, NormalizeProps {
  readonly highlighted?: boolean
  readonly tag?: JSX.Element
  readonly className?: string
  readonly href?: string | JSX.Element
  readonly action?: string
  readonly subLabel?: string
  readonly status?: ItemStatus
  readonly leftAddon?: React.ReactNode
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onDoneAnimationEnd?: () => void
  readonly hideHoverBackground?: boolean
}

export class ItemAction extends PureComponent<ItemActionProps> {
  static defaultProps: Partial<ItemActionProps> = {
    highlighted: true,
    status: ItemStatus.DEFAULT,
    tag: <button />,
  }

  static STATUS = ItemStatus

  render() {
    const {
      highlighted,
      className,
      action,
      subLabel,
      leftAddon,
      tag,
      href,
      status,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
      onDoneAnimationEnd,
      hideHoverBackground = false,
      hasHorizontalSpacing = false,
    } = this.props
    const a11yAttrs = pickA11yProps<ItemActionProps>(this.props)

    let rightAddon

    if (status === ItemStatus.LOADING) {
      rightAddon = (
        <Loader
          className={cc(prefix({ chevron: true }))}
          size={24}
          onDoneAnimationEnd={onDoneAnimationEnd}
          inline
        />
      )
    }
    if (status === ItemStatus.CHECKED) {
      rightAddon = (
        <Loader
          className={cc(prefix({ chevron: true }))}
          size={24}
          onDoneAnimationEnd={onDoneAnimationEnd}
          done
          inline
        />
      )
    }

    return (
      <Item
        highlighted={highlighted}
        className={className}
        leftAddon={leftAddon}
        leftTitle={action}
        leftBody={subLabel}
        rightAddon={rightAddon}
        href={href}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        tag={tag}
        isClickable
        hideHoverBackground={hideHoverBackground}
        hasHorizontalSpacing={hasHorizontalSpacing}
        {...a11yAttrs}
      />
    )
  }
}
