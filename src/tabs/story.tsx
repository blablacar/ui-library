import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from 'button'

import Tabs, { TabStatus } from 'tabs'

const stories = storiesOf('Tabs', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const defaultTabsConfig = {
    activeTabId: 'tab1',
    status: select('status', TabStatus, TabStatus.SCROLLABLE),
    isWrapped: boolean('isWrapped', false),
    tabs: [
      {
        id: 'tab1',
        label: text('Tab label 1', 'Tab 1'),
        panelContent: <div style={{ padding: 30 }}>Content for first tab</div>,
        badgeContent: text('Badge content 1', ''),
      },
      {
        id: 'tab2',
        label: text('Tab label 2', 'Tab 2'),
        panelContent: (
          <div style={{ padding: 30 }}>
            <Button
              onClick={() => {
                action('onClickButton')
              }}
            >
              Button inside panel 2.
            </Button>
          </div>
        ),
        badgeContent: text('Badge content 2', '2'),
        badgeAriaLabel: 'Unread Message',
      },
      {
        id: 'tab3',
        label: text('Tab label 3', 'Tab 3'),
        panelContent: <div style={{ padding: 30 }}>Content for first tab3</div>,
        badgeContent: text('Badge content 3', ''),
      },
    ],
  }
  return (
    <Tabs
      onChange={action('onChange')}
      tabs={defaultTabsConfig.tabs}
      activeTabId={defaultTabsConfig.activeTabId}
      status={defaultTabsConfig.status}
      isWrapped={defaultTabsConfig.isWrapped}
    />
  )
})
