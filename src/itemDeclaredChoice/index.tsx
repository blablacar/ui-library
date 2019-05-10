import React, { Component, Fragment } from 'react'

import Item from '_utils/item'
import { color } from '_utils/branding'
import { TextDisplayType } from 'text'
import Loader from 'loader'
import CircleIcon from 'icon/circleIcon'
import CheckIcon from 'icon/checkIcon'

import style from './style'

export enum ItemDeclaredChoiceStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemDeclaredChoiceProps {
  readonly label: string
  readonly name: string
  readonly value: string | number
  readonly data?: string
  readonly className?: Classcat.Class
  readonly labelTitle?: string
  readonly dataInfo?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly status?: ItemDeclaredChoiceStatus
  readonly key?: string | number
}

class ItemDeclaredChoice extends Component<ItemDeclaredChoiceProps> {
  static defaultProps: Partial<ItemDeclaredChoiceProps> = {
    onChange() {},
    checked: false,
  }

  static STATUS = ItemDeclaredChoiceStatus

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  render() {
    const {
      label,
      name,
      value,
      data,
      className,
      labelTitle,
      dataInfo,
      checked,
      disabled,
      status,
    } = this.props
    const isLoading = status === ItemDeclaredChoiceStatus.LOADING

    let radioIcon = <CircleIcon iconColor={color.primary} thin />
    if (checked) {
      radioIcon = <CheckIcon iconColor={color.white} backgroundColor={color.primary} thin />
    }
    if (isLoading) {
      radioIcon = <Loader size={24} inline />
    }
    const radio = (
      <Fragment>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={this.onChange}
          disabled={disabled || isLoading}
        />
        {radioIcon}
      </Fragment>
    )

    return (
      <Fragment>
        <Item
          className={className}
          leftTitle={labelTitle}
          leftBody={label}
          rightTitle={data}
          rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
          rightBody={dataInfo}
          tag={<label />}
          rightAddon={radio}
        />
        <style jsx>{style}</style>
      </Fragment>
    )
  }
}

export default ItemDeclaredChoice
