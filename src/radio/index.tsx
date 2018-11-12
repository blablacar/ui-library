import React, { Component } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'
import style from 'radio/style'

export interface RadioProps {
  readonly value: string,
  readonly children: string,
  readonly className?: Classcat.Class,
  readonly key?: string | number,
  readonly name?: string,
  readonly checked?: boolean,
  readonly highlighted?: boolean,
  readonly declared?: boolean,
  readonly onChange?: (obj: onChangeParameters) => void,
  readonly subLabel?: string,
  readonly icon?: JSX.Element,
  readonly status?: ItemChoiceStatus,
  readonly onDoneAnimationEnd?: () => void,
}

export default class Radio extends Component <RadioProps> {
  static defaultProps:Partial<RadioProps> = {
    onChange() {},
    checked: false,
    highlighted: false,
    declared: false,
    status: ItemChoice.STATUS.DEFAULT,
  }

  static STATUS = ItemChoiceStatus

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  render() {
    const { className, name, value, subLabel, highlighted, checked, children, icon,
      status, onDoneAnimationEnd, key, declared } = this.props

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
        <input
          type="radio"
          name={name}
          checked={checked}
          value={value}
          onChange={this.onChange}
        />
        {icon}
        <style jsx>{style}</style>
      </ItemChoice>
    )
  }
}
