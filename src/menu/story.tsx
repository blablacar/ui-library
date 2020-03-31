import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import Section from 'layout/section/baseSection'

import BellIcon from 'icon/bellIcon'
import BubbleIcon from 'icon/bubbleIcon'
import CheckShieldIcon from 'icon/checkShieldIcon'
import HomeIcon from 'icon/homeIcon'
import NewspaperIcon from 'icon/newspaperIcon'
import TicketIcon from 'icon/ticketIcon'

import Text from 'text'
import Menu from 'menu'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'

const stories = storiesOf('Widgets|Menu', module)
stories.addDecorator(withKnobs)

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
