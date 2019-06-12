import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Menu from 'menu'
import ItemChoice from 'itemChoice'
import { BellIcon, BubbleIcon, HomeIcon, NewspaperIcon, TicketIcon } from 'icon'
import Drawer from 'drawer'
import HamburgerButton from 'hamburgerButton'

const stories = storiesOf('Drawer', module)
stories.addDecorator(withKnobs)

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
            <Menu withSeparators>
              <ItemChoice label="Dashboard" leftAddon={<HomeIcon />} href="#" />
              <ItemChoice
                label="Rides offered (loading)"
                leftAddon={<NewspaperIcon />}
                status={ItemChoice.STATUS.LOADING}
                href="#"
              />
              <ItemChoice label="Rides booked" leftAddon={<TicketIcon />} href="#" />
              <ItemChoice label="Messages" leftAddon={<BubbleIcon />} href="#" />
              <ItemChoice label="Ride alerts" leftAddon={<BellIcon />} href="#" />
              <ItemChoice label="Menu item with onClick" href="#" />
            </Menu>
          </Drawer>
        </main>
      </div>
    )
  }
}

stories.add('default', () => <DrawerDemo />)
