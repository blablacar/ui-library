import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
import ArrowIcon from 'icon/arrowIcon'
import LockIcon from 'icon/lockIcon'
import Section from 'layout/section/baseSection'
import primaryDoc from './specifications/primary.md'
import secondaryDoc from './specifications/secondary.md'
import tertiaryDoc from './specifications/tertiary.md'

const stories = storiesOf('Widgets|Button', module).addDecorator(withKnobs)

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
    <Section>
      <Button
        status={ButtonStatus.PRIMARY}
        isBubble={hasIcon()}
        shadowed={boolean('shadowed', false)}
        {...commonProps}
      >
        {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Primary button')}
      </Button>
    </Section>
  ),
  {
    readme: { content: primaryDoc },
  },
)

stories.add(
  'secondary',
  () => (
    <Section>
      <Button
        status={ButtonStatus.SECONDARY}
        isBubble={hasIcon()}
        shadowed={boolean('shadowed', false)}
        {...commonProps}
      >
        {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Secondary button')}
      </Button>
    </Section>
  ),
  {
    readme: { content: secondaryDoc },
  },
)

stories.add(
  'tertiary',
  () => (
    <Section>
      <Button
        status={ButtonStatus.TERTIARY}
        isBubble={hasIcon()}
        shadowed={boolean('shadowed', false)}
        {...commonProps}
      >
        {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Tertiary button')}
      </Button>
    </Section>
  ),
  {
    readme: { content: tertiaryDoc },
  },
)

stories.add('loading', () => (
  <Section>
    <Button status={ButtonStatus.LOADING} />
  </Section>
))

stories.add('valid', () => (
  <Section>
    <Button status={ButtonStatus.CHECKED} onDoneAnimationEnd={() => action('animation done')} />
  </Section>
))

stories.add('warning', () => (
  <Section>
    <Button status={ButtonStatus.WARNING} isBubble={hasIcon()} {...commonProps}>
      {hasIcon() ? <ArrowIcon right iconColor={color.white} /> : label('Warning button')}
    </Button>
  </Section>
))

stories.add('unstyled', () => (
  <Section>
    <Button status={ButtonStatus.UNSTYLED} isBubble={hasIcon()} {...commonProps}>
      {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Unstyled button')}
    </Button>
  </Section>
))

stories.add('shadowed', () => (
  <Section>
    <Button
      {...commonProps}
      isBubble
      status={ButtonStatus.PRIMARY}
      shadowed={boolean('shadowed', true)}
    >
      <ArrowIcon right iconColor={color.white} />
    </Button>
  </Section>
))

stories.add('icon + text', () => (
  <Section>
    <Button status={ButtonStatus.PRIMARY} {...commonProps}>
      <LockIcon iconColor={color.white} />
      {label('Content')}
    </Button>
  </Section>
))

stories.add('anchor button', () => (
  <Section>
    <Button isBubble={hasIcon()} status={ButtonStatus.PRIMARY} href="#" {...commonProps}>
      {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
    </Button>
  </Section>
))

stories.add('anchor button with link element', () => (
  <Section>
    <Button
      isBubble={hasIcon()}
      status={ButtonStatus.PRIMARY}
      href={<a href="#1">foo</a>}
      {...commonProps}
    >
      {label('Anchor button')}
    </Button>
  </Section>
))

stories.add('anchor button unstyled', () => (
  <Section>
    <Button status={ButtonStatus.UNSTYLED} isBubble={hasIcon()} {...commonProps}>
      {hasIcon() ? <ArrowIcon right iconColor={color.primary} /> : label('Anchor button')}
    </Button>
  </Section>
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
      <Section>
        <Button
          status={status}
          isBubble={hasIcon() || this.state.icon}
          onClick={this.validate}
          onDoneAnimationEnd={() => action('animation done')}
        >
          {this.renderChildren()}
        </Button>
      </Section>
    )
  }
}

stories.add('validate on click', () => {
  validation()
  return <Validation />
})
