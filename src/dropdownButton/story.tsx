import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import DropdownButton from 'dropdownButton'
import Avatar from 'avatar'
import Menu from 'menu'

const stories = storiesOf('DropdownButton', module)
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
  withInfo('')(() => (
    <DropdownButton
      dropdown={<Menu items={menuItems} />}
      dropdownWithPointer={boolean('dropdownWithPointer', false)}
    >
      <Avatar />
    </DropdownButton>
  )),
)
