import React, { Component } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { ItemStatus } from '_utils/item'
import ItemChoice from 'itemChoice'
import style from 'radio/style'

export interface RadioProps {
  readonly value: string
  readonly children: string
  readonly className?: Classcat.Class
  readonly key?: string | number
  readonly name?: string
  readonly checked?: boolean
  readonly highlighted?: boolean
  readonly declared?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly subLabel?: string
  readonly icon?: JSX.Element
  readonly status?: ItemStatus
  readonly onDoneAnimationEnd?: () => void
}

export default class Radio extends Component<RadioProps> {
  static defaultProps: Partial<RadioProps> = {
    onChange() {},
    checked: false,
    highlighted: false,
    declared: false,
    status: ItemStatus.DEFAULT,
  }

  static STATUS = ItemStatus

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  render() {
    const {
      className,
      name,
      value,
      subLabel,
      highlighted,
      checked,
      children,
      icon,
      status,
      onDoneAnimationEnd,
      key,
      declared,
    } = this.props

    return (
      <ItemChoice
        key={key}
        href={<label />}
        label={children}
        subLabel={subLabel}
        highlighted={highlighted}
        className={cc([prefix({ radio: true }), className])}
        status={status}
        declared={declared}
        selected={checked}
        onDoneAnimationEnd={onDoneAnimationEnd}
      >
        <input type="radio" name={name} checked={checked} value={value} onChange={this.onChange} />
        {icon}
        <style jsx>{style}</style>
      </ItemChoice>
    )
  }
}
