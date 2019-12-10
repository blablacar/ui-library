import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItemData from 'itemData'

const stories = storiesOf('ItemData', module)
stories.addDecorator(withKnobs)

stories.add('Default', () => {
  const isMainTitle = boolean('Title', false)
  const isDataInfo = boolean('Secondary info', false)
  const dataStrikeThrough = boolean('Data strikethrough', false)

  return (
    <ItemData
      ariaLabel={text('Aria label', 'Complementary info')}
      mainInfo={text('Main info', 'Main information')}
      data={text('Data', 'Data')}
      dataStrikeThrough={dataStrikeThrough}
      mainTitle={isMainTitle ? text('Main title', 'Title') : null}
      dataInfo={isDataInfo ? text('Data info', 'Info') : null}
      tag={<li />}
    />
  )
})
