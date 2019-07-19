import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import ChevronIcon from 'icon/chevronIcon'
import MessagingSummaryItem from 'messagingSummaryItem'

const stories = storiesOf('MessagingSummaryItem', module)
stories.addDecorator(withKnobs)

const pictureUrl = 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg'
const htmlSubLabel = <Fragment>Paris <ChevronIcon /> Bordeaux</Fragment>

stories.add('With unread messages', () => (
  <MessagingSummaryItem
      url={text('url', 'http://google.com')}
      pictureUrl={text('url', pictureUrl)}
      label={text('Label', 'Label')}
      subLabel={text('Sublabel', 'A long sub label here')}
      timeLabel={text('Time label', '3 hours ago')}
      hasUnreadMessages={boolean('hasUnreadMessages', true)}
  />
))

stories.add('With all messages read', () => (
    <MessagingSummaryItem
        url={text('url', 'http://google.com')}
        pictureUrl={text('url', pictureUrl)}
        label={text('Label', 'Label')}
        subLabel={text('Sublabel', 'A long sub label here')}
        timeLabel={text('Time label', '3 hours ago')}
        hasUnreadMessages={boolean('hasUnreadMessages', false)}/>
))

stories.add('With long sublabel', () => (
    <MessagingSummaryItem
        url={text('url', 'http://google.com')}
        pictureUrl={text('url', pictureUrl)}
        label={text('Label', 'Label')}
        subLabel={text('Sublabel',
            'A very veryvery veryvery veryvery very very veryvery very  sub label here')}
        timeLabel={text('Time label', '3 hours ago')}
        hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
))

stories.add('With html sublabel', () => (
    <MessagingSummaryItem
        url={text('url', 'http://google.com')}
        pictureUrl={text('url', pictureUrl)}
        label={text('Label', 'Label')}
        subLabel={htmlSubLabel}
        timeLabel={text('Time label', '3 hours ago')}
        hasUnreadMessages={boolean('hasUnreadMessages', true)}
    />
))


