import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { color } from '_utils/branding'

import TopBar from 'topBar'
import Button, { ButtonStatus } from 'button'
import ArrowIcon from 'icon/arrowIcon'

const stories = storiesOf('Widgets|TopBar', module)
stories.addDecorator(withKnobs)

const leftAction = (
  <Button isBubble status={ButtonStatus.UNSTYLED} onClick={() => {}} aria-label="back">
    <ArrowIcon size="24" iconColor={color.primary} />
  </Button>
)

const rightAction = (
  <span
    style={{
      padding: '12px',
      fontSize: '18px',
      lineHeight: '20px',
      color: color.primary,
    }}
  >
    Need help?
  </span>
)

const centerContent = (
  <div>
    <span
      style={{
        fontSize: '16px',
        lineHeight: '20px',
        color: color.primaryText,
      }}
    >
      Trip
    </span>
    <span
      style={{
        display: 'block',
        fontSize: '13px',
        lineHeight: '20px',
        color: color.secondaryText,
      }}
    >
      Paris → Lyon
    </span>
  </div>
)

stories.add('default', () => {
  const left = boolean('left element', true)
  const right = boolean('right element', false)
  const center = boolean('center element', false)
  return (
    <TopBar
      leftItem={left ? leftAction : null}
      centerItem={center ? centerContent : null}
      rightItem={right ? rightAction : null}
      fixed={boolean('fixed mode', false)}
      bgTransparent={boolean('transparent background', false)}
      bgShadedTransparent={boolean('shaded transparent background', false)}
    />
  )
})
