import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import Item from '_utils/item'
import RadioIcon from '_utils/radioIcon'
import { TextDisplayType } from 'text'

export enum ItemRadioStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemRadioProps {
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
  readonly status?: ItemRadioStatus
  readonly key?: string | number
  readonly chevron?: boolean
}

class ItemRadio extends Component<ItemRadioProps> {
  static defaultProps: Partial<ItemRadioProps> = {
    onChange() {},
    checked: false,
  }

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
      chevron,
    } = this.props
    const isLoading = status === ItemRadioStatus.LOADING
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
        {(!chevron || isLoading) && <RadioIcon isChecked={checked} isLoading={isLoading} />}
      </Fragment>
    )

    return (
      <Fragment>
        <Item
          className={cc(['kirk-item-radio', className])}
          leftTitle={labelTitle}
          leftBody={label}
          rightTitle={data}
          rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
          rightBody={dataInfo}
          tag={<label />}
          rightAddon={radio}
          chevron={chevron && !isLoading}
          isClickable
        />
      </Fragment>
    )
  }
}

export default ItemRadio
