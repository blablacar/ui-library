import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import { color } from '_utils/branding'
import Button from 'button'
import ArrowIcon from 'icon/arrowIcon'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

const label = (defaultValue: string) => text('Label', defaultValue)
const hasIcon = () => boolean('icon', false)
const validation = () => boolean('validation', false)
const commonProps = {
  onClick: action('clicked'),
  onFocus: action('focused'),
  onBlur: action('blured'),
}

stories.add(
  'primary',
  withInfo('')(() => (
    <Button
      primary
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Primary button')}
    </Button>
  )),
)

stories.add(
  'secondary',
  withInfo('')(() => (
    <Button
      secondary
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Secondary button')}
    </Button>
  )),
)

stories.add(
  'loading',
  withInfo('')(() => (
    <Button loading />
  )),
)

stories.add(
  'valid',
  withInfo('')(() => (
    <Button valid validated={() => action('animation done')} />
  )),
)

stories.add(
  'warning',
  withInfo('')(() => (
    <Button
      warning
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Warning button')}
    </Button>
  )),
)

stories.add(
  'unstyled',
  withInfo('')(() => (
    <Button
      unstyled
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Unstyled button')}
    </Button>
  )),
)


stories.add(
  'bordered & shadowed',
  withInfo('')(() => (
    <Button
      {...commonProps}
      icon
      primary
      bordered={boolean('bordered', true)}
    >
      <ArrowIcon right iconColor={color.white} />
    </Button>
  )),
)


stories.add(
  'anchor button',
  withInfo('')(() => (
    <Button
      icon={hasIcon()}
      primary
      href="#"
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
    </Button>
  )),
)

stories.add(
  'anchor button with link element',
  withInfo('')(() => (
    <Button
      icon={hasIcon()}
      primary
      href={
        <a href="#1">foo</a>
      }
      {...commonProps}
    >
      {label('Anchor button')}
    </Button>
  )),
)

stories.add(
  'anchor button unstyled',
  withInfo('')(() => (
    <Button
      unstyled
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
    </Button>
  )),
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

  renderChildren = () => (
    hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Click me to validate')
  )
  render() {
    return (
      <Button
        primary={!this.state.valid}
        loading={this.state.loading}
        valid={this.state.valid}
        icon={hasIcon() || this.state.icon}
        onClick={this.validate}
        validated={() => action('animation done')}
      >
        {this.renderChildren()}
      </Button>
    )
  }
}

stories.add(
  'validate on click',
  withInfo('')(() => {
    validation()
    return <div style={{ textAlign: 'center' }}><Validation /></div>
  }),
)
