import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Drawer from 'drawer'
import HamburgerButton from 'hamburgerButton'

const stories = storiesOf('Drawer', module)
stories.addDecorator(withKnobs)

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
          <HamburgerButton
            onClick={this.toggleDrawer}
            open={this.state.isOpen}
          />
        </nav>
        <main style={{ position: 'relative', minHeight: '100vh' }}>
          {this.state.isOpen && (
            <Drawer
              ref={this.refDrawer}
              onChange={this.onToggleDrawer}
              width={text('width', '400px')}
              height={text('height', '')}
            >
              {text('children', 'Drawer content')}
            </Drawer>
          )}
        </main>
      </div>
    )
  }
}

stories.add(
  'default',
  withInfo('')(() => <DrawerDemo />),
)
