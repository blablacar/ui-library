import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import Item from '_utils/item'
import RadioIcon from '_utils/radioIcon'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import { TextDisplayType } from 'text'

export enum ItemRadioStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemRadioProps extends A11yProps {
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
  readonly onClick?: (obj: OnChangeParameters) => void
  readonly status?: ItemRadioStatus
  readonly key?: string | number
  readonly chevron?: boolean
  readonly highlighted?: boolean
}

interface ItemRadioState {
  readonly focus: boolean
}

class ItemRadio extends Component<ItemRadioProps> {
  static defaultProps: Partial<ItemRadioProps> = {
    onChange() {},
    onClick() {},
    checked: false,
  }

  state: ItemRadioState = {
    focus: false,
  }

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  onClick = () => {
    const { name, value } = this.props
    this.props.onClick({ name, value })
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  onBlur = () => {
    this.setState({ focus: false })
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
      highlighted,
    } = this.props
    const a11yAttrs = pickA11yProps<ItemRadioProps>(this.props)
    const isLoading = status === ItemRadioStatus.LOADING
    const radio = (
      <Fragment>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={this.onChange}
          onClick={this.onClick}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled || isLoading}
        />
        {(!chevron || isLoading) && <RadioIcon isChecked={checked} isLoading={isLoading} />}
      </Fragment>
    )

    return (
      <Fragment>
        <Item
          className={cc(['kirk-item-radio', className, { focus: this.state.focus }])}
          leftTitle={labelTitle}
          leftBody={label}
          rightTitle={data}
          rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
          rightBody={dataInfo}
          tag={<label />}
          rightAddon={radio}
          chevron={chevron && !isLoading}
          highlighted={highlighted}
          isClickable
          {...a11yAttrs}
        />
      </Fragment>
    )
  }
}

export default ItemRadio
