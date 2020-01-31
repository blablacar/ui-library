import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { color } from '_utils/branding'

import ItemAction from 'itemAction'
import BubbleIcon from 'icon/bubbleIcon'
import spec from './specifications/index.md'

const stories = storiesOf('ItemAction', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isSubLabel = boolean('Secondary info', false)
    return (
      <div>
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
          action="Action 3 - A action without hover color."
          href="#"
          hideHoverBackground
        />
      </div>
    )
  },
  {
    readme: { content: spec },
  },
)

stories.add('With left addon', () => {
  const isSubLabel = boolean('Secondary info', false)
  return (
    <div>
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
    </div>
  )
})

stories.add('With loading state', () => (
  <div>
    <ItemAction
      action={text('Action', 'Action')}
      onClick={action('onClick')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      onMouseDown={action('onMouseDown')}
      status={ItemAction.STATUS.LOADING}
    />
    <ItemAction action="Action 2" subLabel="with subLabel" status={ItemAction.STATUS.CHECKED} />
  </div>
))

stories.add('With/without highlight', () => (
  <div>
    <ItemAction action={text('Action', 'Highlighted by default')} />

    <ItemAction
      highlighted={boolean('Highlighted', false)}
      action={text('Action', 'Not highlighted')}
    />
  </div>
))
