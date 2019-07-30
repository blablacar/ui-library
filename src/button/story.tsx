import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
import ArrowIcon from 'icon/arrowIcon'

import primaryDoc from './specifications/primary.md'
import secondaryDoc from './specifications/secondary.md'
import tertiaryDoc from './specifications/tertiary.md'

const stories = storiesOf('Button', module).addDecorator(withKnobs)

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

stories.add(
  'primary',
  () => (
    <Button
      status={ButtonStatus.PRIMARY}
      isBubble={hasIcon()}
      shadowed={boolean('shadowed', false)}
      {...commonProps}
    >
      {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Primary button')}
    </Button>
  ),
  {
    readme: { content: primaryDoc },
  },
)

stories.add(
  'secondary',
  () => (
    <Button
      status={ButtonStatus.SECONDARY}
      isBubble={hasIcon()}
      shadowed={boolean('shadowed', false)}
      {...commonProps}
    >
      {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Secondary button')}
    </Button>
  ),
  {
    readme: { content: secondaryDoc },
  },
)

stories.add(
  'tertiary',
  () => (
    <Button
      status={ButtonStatus.TERTIARY}
      isBubble={hasIcon()}
      shadowed={boolean('shadowed', false)}
      {...commonProps}
    >
      {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Tertiary button')}
    </Button>
  ),
  {
    readme: { content: tertiaryDoc },
  },
)

stories.add('loading', () => <Button status={ButtonStatus.LOADING} />)

stories.add('valid', () => (
  <Button status={ButtonStatus.CHECKED} onDoneAnimationEnd={() => action('animation done')} />
))

stories.add('warning', () => (
  <Button status={ButtonStatus.WARNING} isBubble={hasIcon()} {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Warning button')}
  </Button>
))

stories.add('unstyled', () => (
  <Button status={ButtonStatus.UNSTYLED} isBubble={hasIcon()} {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Unstyled button')}
  </Button>
))

stories.add('shadowed', () => (
  <Button
    {...commonProps}
    isBubble
    status={ButtonStatus.PRIMARY}
    shadowed={boolean('shadowed', true)}
  >
    <ArrowIcon right iconColor={color.white} />
  </Button>
))

stories.add('icon + text', () => (
  <Button status={ButtonStatus.PRIMARY} {...commonProps}>
    <ArrowIcon right iconColor={color.white} />
    <span style={{ marginLeft: '20px' }}>{label('Content')}</span>
  </Button>
))

stories.add('anchor button', () => (
  <Button isBubble={hasIcon()} status={ButtonStatus.PRIMARY} href="#" {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
  </Button>
))

stories.add('anchor button with link element', () => (
  <Button
    isBubble={hasIcon()}
    status={ButtonStatus.PRIMARY}
    href={<a href="#1">foo</a>}
    {...commonProps}
  >
    {label('Anchor button')}
  </Button>
))

stories.add('anchor button unstyled', () => (
  <Button status={ButtonStatus.UNSTYLED} isBubble={hasIcon()} {...commonProps}>
    {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
  </Button>
))

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

stories.add('validate on click', () => {
  validation()
  return <Validation />
})
