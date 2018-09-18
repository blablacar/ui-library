import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItemData from 'itemData'

const stories = storiesOf('ItemData', module)
stories.addDecorator(withKnobs)

stories.add(
  'Test',
  withInfo('')(() => {
    const isMainTitle = boolean('Title', false)
    const isDataInfo = boolean('Secondary info', false)

    return (
      <ul>
        <ItemData
          mainInfo={text('Main info', 'Main information')}
          data={text('Data', 'Data')}
          mainTitle={isMainTitle ? text('Main title', 'Title') : null}
          dataInfo={isDataInfo ? text('Data info', 'Info') : null}
          tag={<li />}
        />
        <ItemData
          mainTitle="Price"
          mainInfo="Price"
          data="24"
          dataInfo="per seat"
          tag={<li />}
        />
      </ul>
    )
  }),
)
