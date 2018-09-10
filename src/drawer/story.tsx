import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
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
  private drawer: Drawer

  state = {
    isOpen: false,
  }

  onToggleDrawer = (open: boolean) => {
    this.setState({ isOpen: open })
  }

  toggleDrawer = () => {
    if (this.drawer) {
      this.drawer.close()
    } else {
      this.setState({ isOpen: true })
    }
  }

  refDrawer = (node: Drawer) => {
    this.drawer = node
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <nav>
          <HamburgerButton onClick={this.toggleDrawer} open={this.state.isOpen} />
        </nav>
        <main style={{ position: 'relative', minHeight: '100vh' }}>
          {this.state.isOpen && (
            <Drawer
              ref={this.refDrawer}
              onChange={this.onToggleDrawer}
              width={text('width', '400px')}
            >
              <Menu items={menuItems} />
            </Drawer>
          )}
        </main>
      </div>
    )
  }
}

stories.add('default', withInfo('')(() => <DrawerDemo />))
