import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { color } from '_utils/branding'
import Section from 'layout/section/baseSection'
import ItemAction from 'itemAction'
import BubbleIcon from 'icon/bubbleIcon'
import spec from './specifications/index.md'

const stories = storiesOf('Widgets|ItemAction', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isSubLabel = boolean('Secondary info', false)
    return (
      <Section>
        <ItemAction
          action={text('Action', 'Action')}
          subLabel={isSubLabel ? text('Secondary info', 'Info') : null}
          onClick={action('onClick')}
          onBlur={action('onBlur')}
          onFocus={action('onFocus')}
          onMouseDown={action('onMouseDown')}
        />
        <ItemAction
          action="Action 2 – A title that is so long it takes 2 lines of text"
          subLabel={isSubLabel ? text('Secondary info', 'Info') : null}
          href="#"
        />
        <ItemAction
          action="Action 3 - An action without hover color."
          href="#"
          hideHoverBackground
        />
      </Section>
    )
  },
  {
    readme: { content: spec },
  },
)

stories.add('With left addon', () => {
  const isSubLabel = boolean('Secondary info', false)
  return (
    <Section>
      <ItemAction
        action={text('Action', 'Action')}
        subLabel={isSubLabel ? text('Secondary info', 'Info') : null}
        leftAddon={<BubbleIcon iconColor={color.primary} />}
        href="#"
      />
      <ItemAction
        action={text('Action', 'Action')}
        subLabel={isSubLabel ? text('Secondary info', 'Info') : null}
        leftAddon={<BubbleIcon />}
        href="#"
      />
    </Section>
  )
})

stories.add('With loading state', () => (
  <Section>
    <ItemAction
      action={text('Action', 'Action')}
      onClick={action('onClick')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      onMouseDown={action('onMouseDown')}
      status={ItemAction.STATUS.LOADING}
    />
    <ItemAction action="Action 2" subLabel="with subLabel" status={ItemAction.STATUS.CHECKED} />
  </Section>
))

stories.add('With/without highlight', () => (
  <Section>
    <ItemAction action={text('Action', 'Highlighted by default')} />

    <ItemAction
      highlighted={boolean('Highlighted', false)}
      action={text('Action', 'Not highlighted')}
    />
  </Section>
))
