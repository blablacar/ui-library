import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'
import style from 'radio/style'

export interface RadioProps {
  readonly id: string | number,
  readonly value: string,
  readonly children: string,
  readonly className?: Classcat.Class,
  readonly key?: string | number,
  readonly name?: string,
  readonly checked?: boolean,
  readonly highlighted?: boolean,
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
    status: ItemChoice.STATUS.DEFAULT,
  }

  static STATUS = ItemChoiceStatus

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  render() {
    const { className, name, value, subLabel, highlighted, checked, children, icon,
      status, onDoneAnimationEnd } = this.props

    return (
      <Fragment>
        <ItemChoice
          href={<label htmlFor={value}/>}
          label={children}
          subLabel={subLabel}
          highlighted={highlighted}
          leftAddon={icon}
          className={cc([prefix({ radio: true }), className])}
          status={status}
          onDoneAnimationEnd={onDoneAnimationEnd}
        />
        <input
          id={value}
          type="radio"
          name={name}
          checked={checked}
          value={value}
          onChange={this.onChange}
        />
        <style jsx>{style}</style>
      </Fragment>
    )
  }
}
