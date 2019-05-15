import React, { PureComponent, cloneElement, Fragment } from 'react'

import ItemDeclaredChoice, {
  ItemDeclaredChoiceStatus,
  ItemDeclaredChoiceProps,
} from 'itemDeclaredChoice'

export interface ItemDeclaredChoiceGroupProps {
  readonly name: string
  readonly value?: string | number | boolean
  readonly children?: React.ReactElement<ItemDeclaredChoiceProps>[]
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly status?: ItemDeclaredChoiceStatus
}

interface ItemDeclaredChoiceGroupState {
  value: string | number | boolean
}

class ItemDeclaredChoiceGroup extends PureComponent<
  ItemDeclaredChoiceGroupProps,
  ItemDeclaredChoiceGroupState
> {
  static defaultProps: Partial<ItemDeclaredChoiceGroupProps> = {
    value: '',
    children: [],
    onChange() {},
  }

  state: ItemDeclaredChoiceGroupState = {
    value: this.props.value,
  }

  onChange = ({ name, value }: OnChangeParameters) => {
    this.props.onChange({ name, value })
    this.setState({ value })
  }

  render() {
    const { children, status, name } = this.props
    return (
      <Fragment>
        {React.Children.toArray(children).map(item => {
          if (React.isValidElement(item)) {
            const itemProps: Partial<ItemDeclaredChoiceProps> = item.props
            const checked = this.state.value === itemProps.value
            const props: Partial<ItemDeclaredChoiceProps> = {
              key: `${name}${itemProps.value}`,
              name,
              onChange: this.onChange,
              checked,
              status: checked ? status : ItemDeclaredChoiceStatus.DEFAULT,
              disabled: status === ItemDeclaredChoiceStatus.LOADING || itemProps.disabled,
            }
            return cloneElement(
              item as React.ReactElement<ItemDeclaredChoice>,
              props as Partial<ItemDeclaredChoice>,
            )
          }
          return null
        })}
      </Fragment>
    )
  }
}

export default ItemDeclaredChoiceGroup
