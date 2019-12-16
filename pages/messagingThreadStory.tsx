import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import ClockIcon from 'icon/clockIcon'
import InfoIcon from 'icon/infoIcon'
import SendIcon from 'icon/sendIcon'
import { Column } from '_utils/layout'
import ItemAction from 'itemAction'
import TheVoice from 'theVoice'
import Tabs from 'tabs'
import MessagingSummaryItem from "messagingSummaryItem"
import ItemChoice from 'itemChoice'
import Disclaimer from 'disclaimer'
import Textarea from 'textarea'
import Message from 'message'
import ItemInfo from 'itemInfo'
import Avatar from 'avatar'

export default {
    title: 'Design System|Atoms/Button',
}

const stories = storiesOf('Pages|Messaging', module)
stories.addDecorator(withKnobs)

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

const defaultTabsConfig = {
    activeTabId: 'tab1',
    tabs: [
        {
            id: 'tab1',
            label: 'Messages',
            panelContent: <ul>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
                <MessagingSummaryItem {...messagingSummaryItemConfig}/>
            </ul>,
        },
        {
            id: 'tab2',
            label: 'Notifications',
            panelContent: <ul>
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
                <ItemAction {...notificationConfig} />
            </ul>,
        }
    ],
}

stories.add('Inbox', () => (
    <div style={{width: '600px', margin: 'auto', border: 'lightgray 1px solid'}}>
        <Column>
            <TheVoice>Inbox</TheVoice>
            <Tabs {...defaultTabsConfig}></Tabs>
        </Column>
    </div>
))

stories.add('Conversation view', () => (
    <div style={{width: '600px', margin: 'auto', border: 'lightgray 1px solid'}}>
        <Column>
            <ItemChoice
                label="Paris to Bordeaux"
                labelInfo='Thu, 5 March 2020, 00:00'
                leftAddon={<InfoIcon />} href="#" />

            <Disclaimer useInfoIcon={false}>
                We may moderate messages. You can also report
                inappropriate ones from our guidelines.
            </Disclaimer>

            <div style={{minHeight: '300px'}}>
                <ItemInfo
                    mainInfo="Vince"
                    icon={<Avatar />}
                />
                <ul>
                    <Message active={false}>msg</Message>
                    <Message active={false}>msg</Message>
                    <Message active={false}>msg</Message>
                    <Message active={false}>msg</Message>
                    <Message active={false}>msg</Message>
                </ul>
                <ul>
                    <Message active>msg</Message>
                    <Message active>msg</Message>
                </ul>
                <ItemInfo
                    mainInfo="Vince"
                    icon={<Avatar />}
                />
                <ul>
                    <Message active={false}>msg</Message>
                </ul>
            </div>
            <Textarea
                defaultValue=''
                fitContent
                placeholder='Your message'
                buttonIcon={<SendIcon />}
                buttonTitle='send'
                onButtonClick={() => {}}
            />
        </Column>
    </div>
))
