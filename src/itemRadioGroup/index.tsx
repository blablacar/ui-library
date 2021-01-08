import React, { cloneElement, PureComponent } from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { OnChangeParameters } from '../_utils/onChange'
import { ItemRadioProps, ItemRadioStatus } from '../itemRadio/ItemRadio'
import { ItemsList } from '../itemsList'

export type ItemRadioGroupProps = A11yProps &
  Readonly<{
    name: string
    children: React.ReactElement<ItemRadioProps>[]
    className?: string
    value?: string | number | boolean
    onChange?: (obj: OnChangeParameters) => void
    onClick?: (obj: OnChangeParameters) => void
    status?: ItemRadioStatus
    withSeparators?: boolean
    withChevrons?: boolean
  }>

type ItemRadioGroupState = {
  value: string | number | boolean
}

export class ItemRadioGroup extends PureComponent<ItemRadioGroupProps, ItemRadioGroupState> {
  static defaultProps: Partial<ItemRadioGroupProps> = {
    value: '',
    className: '',
    onChange() {},
    onClick() {},
    withSeparators: false,
    withChevrons: false,
  }

  state: ItemRadioGroupState = {
    value: this.props.value,
  }

  static getDerivedStateFromProps(props: ItemRadioGroupProps, state: ItemRadioGroupState) {
    if (props.value !== state.value) {
      return {
        value: props.value,
      }
    }
    return null
  }

  onChange = ({ name, value }: OnChangeParameters) => {
    this.props.onChange({ name, value })
    this.setState({ value })
  }

  onClick = ({ name, value }: OnChangeParameters) => {
    this.props.onClick({ name, value })
  }

  render() {
    const { children, status, name, className, withSeparators, withChevrons } = this.props
    const a11yAttrs = pickA11yProps<ItemRadioGroupProps>(this.props)
    return (
      <ItemsList
        withSeparators={withSeparators}
        className={className}
        {...a11yAttrs}
        role="radiogroup"
      >
        {children.map(item => {
          const itemProps: Partial<ItemRadioProps> = item.props
          const checked = this.state.value === itemProps.value
          const props: Partial<ItemRadioProps> = {
            key: `${name}${itemProps.value}`,
            name,
            onChange: this.onChange,
            onClick: this.onClick,
            checked,
            status: checked ? status : ItemRadioStatus.DEFAULT,
            disabled: status === ItemRadioStatus.LOADING || itemProps.disabled,
            chevron: withChevrons,
          }
          return cloneElement(item, props)
        })}
      </ItemsList>
    )
  }
}

ItemRadioGroup
