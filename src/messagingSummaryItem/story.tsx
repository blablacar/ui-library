import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { RideAxis } from '../_utils/rideAxis'
import { BaseSection as Section } from '../layout/section/baseSection'
import { MessagingSummaryItem } from './index'

const stories = storiesOf('Widgets|MessagingSummaryItem', module)
stories.addDecorator(withKnobs)

const pictureUrl = 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg'

stories.add('With unread messages', () => (
  <Section>
    <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={text('Sublabel', 'A long sub label here')}
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
  </Section>
))

stories.add('With all messages read', () => (
  <Section>
    <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={text('Sublabel', 'A long sub label here')}
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', false)}
    />
  </Section>
))

stories.add('With long sublabel', () => (
  <Section>
    <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={text(
        'Sublabel',
        'A very veryvery veryvery veryvery very very veryvery very  sub label here',
      )}
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
  </Section>
))

stories.add('With long sublabel without breaks', () => (
  <Section>
    <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={text('Sublabel', 'verylongsublabel'.repeat(30))}
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
  </Section>
))

stories.add('With html sublabel', () => (
  <Section>
    <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={
        <RideAxis from={text('from', 'Paris')} to={text('to', 'Cologne Bonn Airport, Köln')} />
      }
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
  </Section>
))
