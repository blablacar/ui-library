import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Button } from '../button'
import { BusIcon } from '../icon/busIcon'
import { CarpoolIcon } from '../icon/carpoolIcon'
import { BaseSection as Section } from '../layout/section/baseSection'
import { Tabs, TabsProps, TabStatus } from '../tabs'

const stories = storiesOf('Widgets|Tabs', module)
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

stories.add('default', () => {
  const defaultTabsConfig = {
    activeTabId: 'tab1',
    status: select('status', TabStatus, TabStatus.SCROLLABLE),
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
  return (
    <Section>
      <Tabs
        onChange={action('onChange')}
        tabs={defaultTabsConfig.tabs}
        activeTabId={defaultTabsConfig.activeTabId}
        status={defaultTabsConfig.status}
      />
    </Section>
  )
})

stories.add('with icons', () => {
  const iconTabsConfig = {
    activeTabId: 'tab1',
    status: select('status', TabStatus, TabStatus.FIXED),
    tabs: [
      {
        id: 'tab1',
        label: text('Tab label 1', 'Text only'),
        panelContent: panels[0],
        badgeContent: text('Badge content 1', ''),
      },
      {
        id: 'tab2',
        label: text('Tab label 2', 'Multiple words with an icon'),
        icon: <CarpoolIcon size="32" />,
        showIconOnly: boolean('showIconOnly Tab 2', false),
        panelContent: panels[1],
        badgeContent: text('Badge content 2', '2'),
        badgeAriaLabel: 'Unread Message',
      },
      {
        id: 'tab3',
        label: text('Tab label 3', 'Tremendouslylongwording'),
        icon: <BusIcon size="32" />,
        showIconOnly: boolean('showIconOnly Tab 3', false),
        panelContent: panels[2],
        badgeContent: text('Badge content 3', ''),
      },
      {
        id: 'tab4',
        label: text('Tab label 4', 'Icon only'),
        icon: <BusIcon size="32" />,
        showIconOnly: boolean('showIconOnly Tab 4', true),
        panelContent: panels[2],
        badgeContent: text('Badge content 4', ''),
      },
    ],
  }
  return (
    <Section>
      <Tabs
        onChange={action('onChange')}
        tabs={iconTabsConfig.tabs}
        activeTabId={iconTabsConfig.activeTabId}
        status={iconTabsConfig.status}
      />
    </Section>
  )
})

stories.add('with second line', () => {
  const activeTabId = 'tab1'
  const status = select('status', TabStatus, TabStatus.FIXED)
  const tabs: TabsProps['tabs'] = [
    {
      id: 'tab1',
      label: text('Tab label 1', 'Text only'),
      panelContent: panels[0],
      badgeContent: text('Badge content 1', ''),
      secondLine: text('Second line 1', '11'),
    },
    {
      id: 'tab2',
      label: text('Tab label 2', 'Multiple words with an icon'),
      icon: <CarpoolIcon size="32" />,
      showIconOnly: boolean('showIconOnly Tab 2', false),
      panelContent: panels[1],
      badgeContent: text('Badge content 2', '2'),
      badgeAriaLabel: 'Unread Message',
      secondLine: text('Second line 2', '6'),
    },
    {
      id: 'tab3',
      label: text('Tab label 3', 'Tremendouslylongwording'),
      icon: <BusIcon size="32" />,
      showIconOnly: boolean('showIconOnly Tab 3', false),
      panelContent: panels[2],
      badgeContent: text('Badge content 3', ''),
      secondLine: text('Second line 3', '-'),
    },
    {
      id: 'tab4',
      label: text('Tab label 4', 'Icon only'),
      icon: <BusIcon size="32" />,
      showIconOnly: boolean('showIconOnly Tab 4', true),
      panelContent: panels[2],
      badgeContent: text('Badge content 4', ''),
      secondLine: text('Second line 4', '100 000 000 000 000 000'),
    },
  ]

  return (
    <Section>
      <Tabs onChange={action('onChange')} tabs={tabs} activeTabId={activeTabId} status={status} />
    </Section>
  )
})
