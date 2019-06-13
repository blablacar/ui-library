import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import Item from '_utils/item'
import CheckboxIcon from '_utils/checkboxIcon'
import { TextDisplayType } from 'text'

import style from './style'

export enum ItemCheckboxStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemCheckboxProps {
  readonly label: string
  readonly name: string
  readonly data?: string
  readonly className?: Classcat.Class
  readonly labelTitle?: string
  readonly dataInfo?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly status?: ItemCheckboxStatus
  readonly key?: string | number
}

class ItemCheckbox extends Component<ItemCheckboxProps> {
  static defaultProps: Partial<ItemCheckboxProps> = {
    onChange() {},
    checked: false,
  }

  static STATUS = ItemCheckboxStatus

  onChange = () => {
    const { name, checked } = this.props
    this.props.onChange({ name, value: !checked })
  }

  render() {
    const {
      label,
      name,
      data,
      className,
      labelTitle,
      dataInfo,
      checked,
      disabled,
      status,
    } = this.props
    const isLoading = status === ItemCheckboxStatus.LOADING
    const checkbox = (
      <Fragment>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={this.onChange}
          disabled={disabled || isLoading}
        />
        <CheckboxIcon isChecked={checked} isLoading={isLoading} />
      </Fragment>
    )

    return (
      <Fragment>
        <Item
          className={cc(['kirk-item-checkbox', className])}
          leftTitle={labelTitle}
          leftBody={label}
          rightTitle={data}
          rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
          rightBody={dataInfo}
          tag={<label />}
          rightAddon={checkbox}
          isClickable
        />
        <style jsx>{style}</style>
      </Fragment>
    )
  }
}

export default ItemCheckbox
