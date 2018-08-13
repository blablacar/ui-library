import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItemInfo from 'itemInfo'
import PetIcon from 'icon/petIcon'

const stories = storiesOf('ItemInfo', module)
stories.addDecorator(withKnobs)

stories.add(
  'Test',
  withInfo('')(() => {
    const hasMainTitle = boolean('Title', true)
    const hasIcon = boolean('Icon', true)

    return (
      <ItemInfo
        mainInfo={text('Main info', 'Main information')}
        mainTitle={hasMainTitle ? text('Main title', 'Title') : null}
        icon={hasIcon ? <PetIcon /> : null}
        tag="li"
      />
    )
  }),
)
