import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import {
  BankIcon,
  BellIcon,
  BubbleIcon,
  CoinIcon,
  CheckShieldIcon,
  CrossDiscIcon,
  HomeIcon,
  NewspaperIcon,
  ProfileIcon,
  TicketIcon,
} from 'icon'
import Text from 'text'

import Menu from 'menu'
import { ItemChoiceStatus } from 'itemChoice'

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)

const menuItems = [
  {
    id: 'menu-item-1',
    label: 'Dashboard',
    leftAddon: <HomeIcon />,
    href: 'menu-item-1',
  },
  {
    id: 'menu-item-2',
    label: 'Rides offered (loading)',
    leftAddon: <NewspaperIcon />,
    href: 'menu-item-2',
    status: ItemChoiceStatus.LOADING,
  },
  {
    id: 'menu-item-3',
    label: 'Rides booked',
    leftAddon: <TicketIcon />,
    href: 'menu-item-3',
  },
  {
    id: 'menu-item-4',
    label: 'Messages',
    leftAddon: <BubbleIcon />,
    href: 'menu-item-4',
  },
  {
    id: 'menu-item-5',
    label: 'Rides alerts',
    leftAddon: <BellIcon />,
    href: 'menu-item-5',
  },
  {
    id: 'menu-item-6',
    label: 'Profile',
    leftAddon: <ProfileIcon />,
    href: 'menu-item-6',
  },
  {
    id: 'menu-item-7',
    label: 'Profile',
    leftAddon: <CheckShieldIcon />,
    rightAddon: <Text>NEW</Text>,
    href: 'menu-item-7',
  },
  {
    id: 'menu-item-8',
    label: 'Awaiting transfers',
    leftAddon: <CoinIcon />,
    href: 'menu-item-8',
  },
  {
    id: 'menu-item-9',
    label: 'Payments and refunds',
    leftAddon: <BankIcon />,
    href: 'menu-item-9',
  },
  {
    id: 'menu-item-10',
    label: 'Logout',
    leftAddon: <CrossDiscIcon />,
    href: 'menu-item-10',
  },
  {
    id: 'menu-item-11',
    label: 'Menu item with onClick',
    onClick: action('onClick'),
  },
]

stories.add('default', withInfo('')(() => <Menu items={menuItems} />))
