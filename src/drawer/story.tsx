import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Menu from 'menu'
import {
  BankIcon,
  BellIcon,
  BubbleIcon,
  CoinIcon,
  CrossDiscIcon,
  HomeIcon,
  NewspaperIcon,
  ProfileIcon,
  TicketIcon,
} from 'icon'
import Drawer from 'drawer'
import HamburgerButton from 'hamburgerButton'

const stories = storiesOf('Drawer', module)
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
    label: 'Rides offered',
    leftAddon: <NewspaperIcon />,
    href: 'menu-item-2',
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
    label: 'Awaiting transfers',
    leftAddon: <CoinIcon />,
    href: 'menu-item-7',
  },
  {
    id: 'menu-item-8',
    label: 'Payments and refunds',
    leftAddon: <BankIcon />,
    href: 'menu-item-8',
  },
  {
    id: 'menu-item-9',
    label: 'Logout',
    leftAddon: <CrossDiscIcon />,
    href: 'menu-item-9',
  },
]

class DrawerDemo extends Component {
  state = {
    isOpen: false,
  }

  toggleDrawer = () => {
    if (this.state.isOpen) {
      this.onCloseDrawer()
    } else {
      this.onOpenDrawer()
    }
  }
  onOpenDrawer = () => {
    this.setState({
      isOpen: true,
    })
  }
  onCloseDrawer = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div>
        <nav>
          <HamburgerButton onClick={this.toggleDrawer} open={this.state.isOpen} />
        </nav>
        <main>
          <Drawer
            open={this.state.isOpen}
            onOpen={this.onOpenDrawer}
            onClose={this.onCloseDrawer}
            width={text('width', '400px')}
          >
            <Menu items={menuItems} withSeparators />
          </Drawer>
        </main>
      </div>
    )
  }
}

stories.add('default', () => <DrawerDemo />)
