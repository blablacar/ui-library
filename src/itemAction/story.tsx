import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { color } from '_utils/branding'

import ItemAction from 'itemAction'
import BubbleIcon from 'icon/bubbleIcon'

const stories = storiesOf('ItemAction', module)
stories.addDecorator(withKnobs)

stories.add('Default', () => {
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
    </div>
  )
})

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
