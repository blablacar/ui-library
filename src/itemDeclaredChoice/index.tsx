import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import Item from '_utils/item'
import Checkbox from '_utils/checkbox'
import { TextDisplayType } from 'text'

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
        <Checkbox isChecked={checked} isLoading={isLoading} />
      </Fragment>
    )

    return (
      <Fragment>
        <Item
          className={cc(['kirk-item-declared-choice', className])}
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
