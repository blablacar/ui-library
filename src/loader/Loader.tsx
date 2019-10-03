import React, { PureComponent } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color, transition } from '_utils/branding'
import CircleIcon from 'icon/circleIcon'
import CheckIcon from 'icon/checkIcon'

interface LoaderProps {
  className?: Classcat.Class
  inline?: boolean
  size?: number
  done?: boolean
  onDoneAnimationEnd?: () => void
}

class Loader extends PureComponent<LoaderProps> {
  static defaultProps: Partial<LoaderProps> = {
    className: '',
    inline: false,
    size: 48,
    done: false,
    onDoneAnimationEnd() {},
  }

  validate = () => {
    const timeout = parseInt(transition.duration.fast, 10) + transition.callbackDelay
    setTimeout(this.props.onDoneAnimationEnd, timeout)
  }

  componentDidMount() {
    if (this.props.done) {
      this.validate()
    }
  }

  componentDidUpdate(prevProps: LoaderProps) {
    if (this.props.done && prevProps.done !== this.props.done) {
      this.validate()
    }
  }

  render() {
    const { className, inline, size, done } = this.props
    const sizes = {
      width: `${size}px`,
      height: `${size}px`,
    }
    return (
      <div
        className={cc([
          prefix({ loader: true, 'loader--fullScreen': !inline, 'loader--done': done }),
          className,
        ])}
        style={inline ? sizes : null}
      >
        {!done && <CircleIcon iconColor={color.success} size={size} spinning />}
        {done && <CheckIcon iconColor={color.white} size={size / 2} validate />}
      </div>
    )
  }
}

export default Loader
