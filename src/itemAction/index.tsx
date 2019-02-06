import React, { PureComponent } from 'react'
import Item from '_utils/item'

export interface ItempActionProps {
  readonly tag?: JSX.Element
  readonly className?: Classcat.Class
  readonly href?: string | JSX.Element
  readonly action?: string
  readonly subLabel?: string
  readonly leftAddon?: React.ReactNode
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
}

class ItemAction extends PureComponent<ItempActionProps> {
  render() {
    const {
      className,
      action,
      subLabel,
      leftAddon,
      tag,
      href,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
    } = this.props
    return (
      <Item
        highlighted
        className={className}
        leftAddon={leftAddon}
        leftTitle={action}
        leftBody={subLabel}
        href={href}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        tag={tag || <button />}
      />
    )
  }
}

export default ItemAction
