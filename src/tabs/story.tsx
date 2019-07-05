import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from 'button'

import Tabs from 'tabs'

const stories = storiesOf('Tabs', module)
stories.addDecorator(withKnobs)

const defaultTabsConfig = {
    activeTabId: 'tab1',
    tabs: [
        {
            id: 'tab1',
            label : 'Tab 1',
            panelContent : <div style={{padding: 30}}>Content for first tab</div>,
        },
        {
            id: 'tab2',
            label : 'Tab 2',
            panelContent : <div style={{padding: 30}}>
                <Button onMouseDown={()=>{window.alert('button clicked')}}>
                    Button inside panel 2.
                </Button>
            </div>,
        },
        {
            id: 'tab3',
            label : 'Tab 3',
            panelContent : <div style={{padding: 30}}>Content for first tab3</div>,
        },
    ]
}

const tabsConfigWithOVerflowingTabLabel = {
    activeTabId: 'tab1',
    tabs: [
        {
            id: 'tab1',
            label : 'Tab 1',
            panelContent : <div style={{padding: 30}}>Content for first tab</div>,
        },
        {
            id: 'tab2',
            label : 'Tab 2 which is very long very longvery long very longvery long very long',
            panelContent : <div style={{padding: 30}}>Content for second tab</div>,
        },
        {
            id: 'tab3',
            label : 'Tab 3',
            panelContent : <div style={{padding: 30}}>Content for third tab</div>,
        },
    ]
}

stories.add('default', () => (
    <div style={{width: 500}}>
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} ></Tabs>
    </div>
))

stories.add('Long tab label', () => (
    <div style={{width: 500}}>
        <Tabs tabs={tabsConfigWithOVerflowingTabLabel.tabs}
              activeTabId={tabsConfigWithOVerflowingTabLabel.activeTabId} ></Tabs>
    </div>
))
