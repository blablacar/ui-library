import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import Menu from 'menu'

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)

const menuItems = [
  {
    id: 'menu-item-1',
    label: 'Menu item 1',
    url: '#',
  },
  {
    id: 'menu-item-2',
    label: 'Menu item 2',
    url: '#',
  },
  {
    id: 'separator-1',
    separator: true,
  },
  {
    id: 'menu-item-3',
    label: 'Menu item 3',
    url: '#',
  },
]

stories.add(
  'default',
  withInfo('')(() => <Menu items={menuItems} />),
)
