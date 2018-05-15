import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
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
      status={Button.STATUS.PRIMARY}
      icon={hasIcon()}
      shadowed={boolean('shadowed', false)}
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
      status={Button.STATUS.SECONDARY}
      icon={hasIcon()}
      shadowed={boolean('shadowed', false)}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Secondary button')}
    </Button>
  )),
)

stories.add(
  'loading',
  withInfo('')(() => (
    <Button status={Button.STATUS.LOADING} />
  )),
)

stories.add(
  'valid',
  withInfo('')(() => (
    <Button status={Button.STATUS.CHECKED} onCheckingEnd={() => action('animation done')} />
  )),
)

stories.add(
  'warning',
  withInfo('')(() => (
    <Button
      status={Button.STATUS.WARNING}
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
      status={Button.STATUS.UNSTYLED}
      icon={hasIcon()}
      {...commonProps}
    >
      { hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Unstyled button')}
    </Button>
  )),
)


stories.add(
  'shadowed',
  withInfo('')(() => (
    <Button
      {...commonProps}
      icon
      status={Button.STATUS.PRIMARY}
      shadowed={boolean('shadowed', true)}
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
      status={Button.STATUS.PRIMARY}
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
      status={Button.STATUS.PRIMARY}
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
      status={Button.STATUS.UNSTYLED}
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
    let status:ButtonStatus = Button.STATUS.PRIMARY
    if (this.state.valid) {
      status = Button.STATUS.CHECKED
    }
    if (this.state.loading) {
      status = Button.STATUS.LOADING
    }
    return (
      <Button
        status={status}
        icon={hasIcon() || this.state.icon}
        onClick={this.validate}
        onCheckingEnd={() => action('animation done')}
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
