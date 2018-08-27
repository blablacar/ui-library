import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { BankIcon, BellIcon, BubbleIcon, CoinIcon, CrossDiscIcon,
  HomeIcon, NewspaperIcon, ProfileIcon, TicketIcon } from 'icon'

import Menu from 'menu'

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)

const menuItems = [
  {
    id: 'menu-item-1',
    label: 'Dashboard',
    leftAddon: <HomeIcon />,
    href: '#',
  },
  {
    id: 'menu-item-2',
    label: 'Rides offered',
    leftAddon: <NewspaperIcon />,
    href: '#',
  },
  {
    id: 'menu-item-3',
    label: 'Rides booked',
    leftAddon: <TicketIcon />,
    href: '#',
  },
  {
    id: 'menu-item-4',
    label: 'Messages',
    leftAddon: <BubbleIcon />,
    href: '#',
  },
  {
    id: 'menu-item-5',
    label: 'Rides alerts',
    leftAddon: <BellIcon />,
    href: '#',
  },
  {
    id: 'menu-item-6',
    label: 'Profile',
    leftAddon: <ProfileIcon />,
    href: '#',
  },
  {
    id: 'menu-item-7',
    label: 'Awaiting transfers',
    leftAddon: <CoinIcon />,
    href: '#',
  },
  {
    id: 'menu-item-8',
    label: 'Payments and refunds',
    leftAddon: <BankIcon />,
    href: '#',
  },
  {
    id: 'menu-item-9',
    label: 'Logout',
    leftAddon: <CrossDiscIcon />,
    href: '#',
  },
]

stories.add(
  'default',
  withInfo('')(() => <Menu items={menuItems} />),
)
