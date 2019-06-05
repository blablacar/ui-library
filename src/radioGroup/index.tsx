import React, { PureComponent, cloneElement } from 'react'
import cc from 'classcat'

import style from 'radioGroup/style'
import Radio, { RadioProps } from 'radio'
import { ItemStatus } from '_utils/item'

export interface RadioGroupProps {
  readonly name: string
  readonly className?: Classcat.Class
  readonly value?: string | number | boolean
  readonly children?: JSX.Element[]
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly highlightedValue?: string
  readonly status?: ItemStatus
  readonly onDoneAnimationEnd?: () => void
}

export type value = string | number | boolean
export interface RadioGroupState {
  readonly value: value
}

class RadioGroup extends PureComponent<RadioGroupProps, RadioGroupState> {
  state: RadioGroupState = {
    value: this.props.value,
  }

  static defaultProps: Partial<RadioGroupProps> = {
    className: '',
    value: '',
    children: [],
    onChange() {},
    highlightedValue: '',
  }

  componentWillReceiveProps(newProps: RadioGroupProps) {
    if (newProps.value !== this.props.value) {
      this.onChangeGroup({ name: this.props.name, value: newProps.value })
    }
  }

  onChangeGroup = ({ value }: OnChangeParameters) => {
    this.setState({ value })
    this.props.onChange({ name: this.props.name, value })
  }

  render() {
    const { className, name, highlightedValue, status, onDoneAnimationEnd, children } = this.props
    return (
      <div
        className={cc([
          'kirk-radioGroup',
          { 'kirk-radioGroup--hasHighlight': !!highlightedValue },
          className,
        ])}
      >
        {React.Children.toArray(children).map((radio, index) => {
          if (React.isValidElement(radio)) {
            const radioProps: Partial<RadioProps> = radio.props
            const props: Partial<RadioProps> = {
              key: index,
              name,
              onChange: this.onChangeGroup,
              checked: this.state.value === radioProps.value,
              highlighted: highlightedValue === radioProps.value,
              status: this.state.value === radioProps.value ? status : Radio.STATUS.DEFAULT,
              onDoneAnimationEnd,
            }
            return cloneElement(radio as React.ReactElement<Radio>, props as Partial<Radio>)
          }
          return null
        })}
        <style jsx>{style}</style>
      </div>
    )
  }
}

export default RadioGroup
