import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import Button from 'button'
import { TabStatus } from 'tabs'
import TabsSection from './index'

const stories = storiesOf('Sections|TabsSection', module)
stories.addDecorator(withKnobs)

const panels = [
  <div>Content for first tab</div>,
  <div>
    <Button
      onClick={() => {
        action('onClickButton')
      }}
    >
      Button inside panel 2.
    </Button>
  </div>,
  <div>Content for tab3</div>,
]

const tabs = {
  activeTabId: 'tab1',
  status: select('status', TabStatus, TabStatus.FIXED),
  isWrapped: boolean('isWrapped', false),
  tabs: [
    {
      id: 'tab1',
      label: text('Tab label 1', 'Tab 1'),
      panelContent: panels[0],
      badgeContent: text('Badge content 1', ''),
    },
    {
      id: 'tab2',
      label: text('Tab label 2', 'Very Very Long Tab 2'),
      panelContent: panels[1],
      badgeContent: text('Badge content 2', '2'),
      badgeAriaLabel: 'Unread Message',
    },
    {
      id: 'tab3',
      label: text('Tab label 3', 'Tab 3'),
      panelContent: panels[2],
      badgeContent: text('Badge content 3', ''),
    },
  ],
}

stories.add('default', () => <TabsSection tabsProps={tabs} />)
