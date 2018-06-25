import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs'

import { color } from '_utils/branding'
import * as icons from 'icon/index'

const stories = storiesOf('Icons', module)
stories.addDecorator(withKnobs)

const c = Object.keys(color).reduce((acc, key) => ({
  ...acc,
  [color[key]]: key,
}), {})

const createIconKnobs = (props: {}) => (
  Object.entries(props).reduce((acc: { [key: string]: any }, [name, value]: [string, any]) => {
    if (typeof value === 'string') {
      if (name.toLowerCase().includes('color')) {
        acc[name] = select(name, c, value)
      } else {
        acc[name] = text(name, String(value))
      }
    }

    if (typeof value === 'boolean') {
      acc[name] = boolean(name, Boolean(value))
    }

    if (typeof value === 'number') {
      acc[name] = number(name, Number(value))
    }

    return acc
  }, {})
)

Object.entries(icons).forEach(([name, Component]) => {
  stories.add(
    name.replace('Icon', ''),
    withInfo('')(() => <Component { ...createIconKnobs(Component.defaultProps) } />),
  )
})
