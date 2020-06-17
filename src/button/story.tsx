import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import { color } from '../_utils/branding'
import { ArrowIcon } from '../icon/arrowIcon'
import { LockIcon } from '../icon/lockIcon'
import { Button, ButtonStatus } from './index'

export default {
  title: 'Buttons|Button',
  component: Button,
}

const label = (defaultValue: string) => text('Label', defaultValue)
const hasIcon = () => boolean('icon', false)
const validation = () => boolean('validation', false)
const commonProps = {
  onClick: action('clicked'),
  onMouseDown: action('mouseDown'),
  onMouseUp: action('mouseUp'),
  onTouchStart: action('touchStart'),
  onTouchEnd: action('touchEnd'),
  onFocus: action('focused'),
  onBlur: action('blured'),
}

export const Primary = () => (
  <Button
    status={ButtonStatus.PRIMARY}
    isBubble={hasIcon()}
    shadowed={boolean('shadowed', false)}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Primary button')}
  </Button>
)

export const Secondary = () => (
  <Button
    status={ButtonStatus.SECONDARY}
    isBubble={hasIcon()}
    shadowed={boolean('shadowed', false)}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    {hasIcon() ? <ArrowIcon right iconColor={color.blue} /> : label('Secondary button')}
  </Button>
)

export const Tertiary = () => (
  <Button
    status={ButtonStatus.TERTIARY}
    isBubble={hasIcon()}
    shadowed={boolean('shadowed', false)}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    {hasIcon() ? <ArrowIcon right iconColor={color.blue} /> : label('Tertiary button')}
  </Button>
)

export const Loading = () => <Button status={ButtonStatus.LOADING} />

export const Valid = () => (
  <Button status={ButtonStatus.CHECKED} onDoneAnimationEnd={() => action('animation done')} />
)

export const Warning = () => (
  <Button
    status={ButtonStatus.WARNING}
    isBubble={hasIcon()}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Warning button')}
  </Button>
)

export const Unstyled = () => (
  <Button
    status={ButtonStatus.UNSTYLED}
    isBubble={hasIcon()}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    {hasIcon() ? <ArrowIcon right iconColor={color.blue} /> : label('Unstyled button')}
  </Button>
)

export const hadowed = () => (
  <Button
    {...commonProps}
    isBubble
    status={ButtonStatus.PRIMARY}
    shadowed={boolean('shadowed', true)}
    disabled={boolean('disabled', false)}
  >
    <ArrowIcon right iconColor={color.white} />
  </Button>
)

export const WithText = () => (
  <Button status={ButtonStatus.PRIMARY} {...commonProps}>
    <LockIcon iconColor={color.white} />
    {label('Content')}
  </Button>
)

export const AnchorButton = () => (
  <Button isBubble={hasIcon()} status={ButtonStatus.PRIMARY} href="#" {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.blue} /> : label('Anchor button')}
  </Button>
)

export const AnchorButtonWithLink = () => (
  <Button
    isBubble={hasIcon()}
    status={ButtonStatus.PRIMARY}
    href={<a href="#1">foo</a>}
    {...commonProps}
  >
    {label('Anchor button')}
  </Button>
)

export const AnchorButtonUnstyled = () => (
  <Button status={ButtonStatus.UNSTYLED} isBubble={hasIcon()} {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.blue} /> : label('Anchor button')}
  </Button>
)

class Validation extends React.Component {
  state = {
    loading: false,
    valid: false,
    icon: false,
  }

  validate = () => {
    this.setState({ loading: true, valid: false })
    setTimeout(() => {
      const newState = { loading: false, valid: false }
      if (validation()) {
        newState.valid = true
      }
      this.setState(newState)
    }, 2000)
  }

  renderChildren = () =>
    hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Click me to validate')

  render() {
    let status: ButtonStatus = ButtonStatus.PRIMARY
    if (this.state.loading) {
      status = ButtonStatus.LOADING
    }
    if (this.state.valid) {
      status = ButtonStatus.CHECKED
    }
    return (
      <Button
        status={status}
        isBubble={hasIcon() || this.state.icon}
        onClick={this.validate}
        onDoneAnimationEnd={() => action('animation done')}
      >
        {this.renderChildren()}
      </Button>
    )
  }
}

export const ValidateOnClick = () => {
  validation()
  return <Validation />
}
