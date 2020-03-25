import React, { PureComponent } from 'react'
import cc from 'classcat'

import Item, { ItemStatus } from '_utils/item'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import { color } from '_utils/branding'
import { TextDisplayType } from 'text'
import Loader from 'loader'

export enum ItemChoiceStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RECOMMENDED = 'recommended',
}

export const ItemChoiceStatus = ItemStatus

export interface ItemChoiceProps extends A11yProps {
  readonly label?: string
  readonly labelInfo?: string
  readonly data?: string
  readonly dataInfo?: string
  readonly leftAddon?: JSX.Element
  readonly rightAddon?: JSX.Element
  readonly className?: Classcat.Class
  readonly href?: string | JSX.Element
  readonly status?: ItemStatus
  readonly style?: ItemChoiceStyle
  readonly disabled?: boolean
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onDoneAnimationEnd?: () => void
  readonly ariaLabel?: string
}

export class ItemChoice extends PureComponent<ItemChoiceProps> {
  static defaultProps: Partial<ItemChoiceProps> = {
    label: '',
    labelInfo: '',
    data: '',
    dataInfo: '',
    className: '',
    href: '',
    status: ItemStatus.DEFAULT,
    style: ItemChoiceStyle.PRIMARY,
    disabled: false,
  }

  get rightAddon() {
    const { status, rightAddon, onDoneAnimationEnd } = this.props
    if (status === ItemStatus.LOADING) {
      return <Loader inline size={24} />
    }
    if (status === ItemStatus.CHECKED) {
      return <Loader inline size={24} done onDoneAnimationEnd={onDoneAnimationEnd} />
    }
    return rightAddon
  }

  get fullClassName() {
    const { className } = this.props
    return cc(['kirk-item-choice', className])
  }

  get labelColor() {
    const { style, disabled } = this.props
    if (disabled) {
      return color.fadedText
    }
    if (style === ItemChoiceStyle.RECOMMENDED) {
      return color.primary
    }
    if (style === ItemChoiceStyle.SECONDARY) {
      return color.secondaryText
    }
    return color.primaryText
  }

  render() {
    const {
      label,
      labelInfo,
      data,
      dataInfo,
      leftAddon,
      href,
      onClick,
      onFocus,
      onBlur,
      onMouseDown,
      style,
      status,
      disabled,
      ariaLabel,
    } = this.props
    const a11yAttrs = pickA11yProps<ItemChoiceProps>(this.props)
    const isRecommended = style === ItemChoiceStyle.RECOMMENDED

    return (
      <Item
        className={this.fullClassName}
        leftTitle={label}
        leftTitleDisplay={isRecommended ? TextDisplayType.SUBHEADER : TextDisplayType.TITLE}
        leftBody={labelInfo}
        leftBodyColor={disabled ? color.fadedText : color.secondaryText}
        leftTitleColor={this.labelColor}
        rightTitle={data}
        rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
        rightTitleColor={this.labelColor}
        rightBody={dataInfo}
        rightBodyColor={disabled ? color.fadedText : color.secondaryText}
        leftAddon={leftAddon}
        rightAddon={this.rightAddon}
        href={!disabled ? href : ''}
        tag={<button type="button" disabled={disabled} />}
        onClick={!disabled ? onClick : null}
        onFocus={!disabled ? onFocus : null}
        onBlur={!disabled ? onBlur : null}
        onMouseDown={!disabled ? onMouseDown : null}
        highlighted={isRecommended}
        chevron={status === ItemStatus.DEFAULT}
        isClickable={!disabled}
        ariaLabel={ariaLabel}
        {...a11yAttrs}
      />
    )
  }
}

export default ItemChoice
