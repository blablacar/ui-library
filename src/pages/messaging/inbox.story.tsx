import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import TabsSection from 'layout/section/tabsSection'
import TheVoice from 'theVoice'
import ClockIcon from 'icon/clockIcon'
import ItemAction from 'itemAction'
import MessagingSummaryItem from 'messagingSummaryItem'
import LayoutNormalizer from 'layout/layoutNormalizer'

const stories = storiesOf('Pages|Messaging/Inbox', module)

const messagingSummaryItemConfig = {
  url: '#',
  pictureUrl: 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
  label: 'Some conversation title',
  subLabel: 'Paris vers Lyon',
  timeLabel: 'Il y a 3 heures',
  hasUnreadMessages: true,
}

const notificationConfig = {
  leftAddon: <ClockIcon />,
  action: 'Add a photo',
  subLabel: 'People like to put a face to a name.',
  href: '#',
}

const panel1 = (
  <ul>
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
    <MessagingSummaryItem {...messagingSummaryItemConfig} />
  </ul>
)

const panel2 = (
  <ul>
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
    <ItemAction {...notificationConfig} />
  </ul>
)

const defaultTabsConfig = {
  activeTabId: 'tab1',
  tabs: [
    {
      id: 'tab1',
      label: 'Messages',
      panelContent: panel1,
    },
    {
      id: 'tab2',
      label: 'Notifications',
      panelContent: panel2,
    },
  ],
}

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />
    <Section>
      <TheVoice>Inbox</TheVoice>
    </Section>
    <TabsSection tabsProps={defaultTabsConfig} />
  </Fragment>
))
