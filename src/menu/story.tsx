import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { BellIcon } from '../icon/bellIcon'
import { BubbleIcon } from '../icon/bubbleIcon'
import { CheckShieldIcon } from '../icon/checkShieldIcon'
import { HomeIcon } from '../icon/homeIcon'
import { NewspaperIcon } from '../icon/newspaperIcon'
import { TicketIcon } from '../icon/ticketIcon'
import { ItemChoice, ItemChoiceStatus } from '../itemChoice'
import { BaseSection as Section } from '../layout/section/baseSection'
import { Menu } from '../menu'
import { Text } from '../text'

const stories = storiesOf('Widgets|Menu', module)

stories.add('With all separators', () => (
  <Section>
    <Menu withSeparators>
      <ItemChoice label="Dashboard" leftAddon={<HomeIcon />} href="#" />
      <ItemChoice
        label="Rides offered (loading)"
        leftAddon={<NewspaperIcon />}
        status={ItemChoiceStatus.LOADING}
        href="#"
      />
      <ItemChoice label="Rides booked" leftAddon={<TicketIcon />} href="#" />
      <ItemChoice label="Messages" leftAddon={<BubbleIcon />} href="#" />
      <ItemChoice label="Ride alerts" leftAddon={<BellIcon />} href="#" />
      <ItemChoice
        label="Profile"
        leftAddon={<CheckShieldIcon />}
        rightAddon={<Text>NEW</Text>}
        href="#"
      />
      <ItemChoice label="Menu item with onClick" onClick={action('onClick')} href="#" />
    </Menu>
  </Section>
))

stories.add('With custom separators', () => (
  <Section>
    <Menu>
      <ItemChoice label="Dashboard" leftAddon={<HomeIcon />} href="#" />
      <Menu.Divider />
      <ItemChoice
        label="Rides offered (loading)"
        leftAddon={<NewspaperIcon />}
        status={ItemChoiceStatus.LOADING}
        href="#"
      />
      <ItemChoice label="Rides booked" leftAddon={<TicketIcon />} href="#" />
      <Menu.Divider />
      <ItemChoice label="Messages" leftAddon={<BubbleIcon />} href="#" />
      <ItemChoice label="Ride alerts" leftAddon={<BellIcon />} href="#" />
      <Menu.Divider />
      <ItemChoice
        label="Profile"
        leftAddon={<CheckShieldIcon />}
        rightAddon={<Text>NEW</Text>}
        href="#"
      />
      <Menu.Divider />
      <ItemChoice label="Menu item with onClick" onClick={action('onClick')} href="#" />
    </Menu>
  </Section>
))
