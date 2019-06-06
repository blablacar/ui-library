import React, { PureComponent } from 'react'
import cc from 'classcat'

import Item, { ItemStatus } from '_utils/item'
import { color } from '_utils/branding'
import { TextDisplayType } from 'text'
import ChevronIcon from 'icon/chevronIcon'
import Loader from 'loader'

export enum ItemChoiceStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RECOMMENDED = 'recommended',
}

export interface ItemChoiceProps {
  readonly title: string
  readonly titleInfo?: string
  readonly data?: string
  readonly dataInfo?: string
  readonly className?: Classcat.Class
  readonly href?: string | JSX.Element
  readonly status?: ItemStatus
  readonly style?: ItemChoiceStyle
  readonly disabled?: boolean
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onDoneAnimationEnd?: () => void
}

export class ItemChoice extends PureComponent<ItemChoiceProps> {
  static defaultProps: Partial<ItemChoiceProps> = {
    titleInfo: '',
    data: '',
    dataInfo: '',
    className: '',
    href: '',
    status: ItemStatus.DEFAULT,
    style: ItemChoiceStyle.PRIMARY,
    disabled: false,
  }

  static STATUS = ItemStatus
  static STYLE = ItemChoiceStyle

  get rightAddon() {
    const { status, onDoneAnimationEnd, disabled } = this.props
    if (status === ItemStatus.LOADING) {
      return <Loader inline size={24} />
    }
    if (status === ItemStatus.CHECKED) {
      return <Loader inline size={24} done onDoneAnimationEnd={onDoneAnimationEnd} />
    }
    return <ChevronIcon iconColor={disabled ? color.fadedText : color.secondaryText} />
  }

  get fullClassName() {
    const { className } = this.props
    return cc(['kirk-item-choice', className])
  }

  get titleColor() {
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
    const { title, titleInfo, data, dataInfo, href, onClick, style, disabled } = this.props
    const isRecommended = style === ItemChoiceStyle.RECOMMENDED

    return (
      <Item
        className={this.fullClassName}
        leftTitle={title}
        leftTitleDisplay={isRecommended ? TextDisplayType.SUBHEADER : TextDisplayType.TITLE}
        leftBody={titleInfo}
        leftBodyColor={disabled ? color.fadedText : color.secondaryText}
        leftTitleColor={this.titleColor}
        rightTitle={data}
        rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
        rightTitleColor={this.titleColor}
        rightBody={dataInfo}
        rightBodyColor={disabled ? color.fadedText : color.secondaryText}
        rightAddon={this.rightAddon}
        href={!disabled ? href : ''}
        tag={<button type="button" disabled={disabled} />}
        onClick={!disabled ? onClick : null}
        highlighted={isRecommended}
      />
    )
  }
}

export default ItemChoice
