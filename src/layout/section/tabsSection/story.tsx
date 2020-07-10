import React from 'react'
import { action } from '@storybook/addon-actions'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Button } from '../../../button'
import ItemAction from '../../../itemAction'
import { TabStatus } from '../../../tabs'
import { BaseSection } from '../baseSection'
import { TabsSection } from './index'

const stories = storiesOf('Sections|TabsSection', module)
stories.addDecorator(withKnobs)

const panels = [
  <BaseSection>Content for first tab</BaseSection>,
  <BaseSection>
    <Button
      onClick={() => {
        action('onClickButton')
      }}
    >
      Button inside panel 2.
    </Button>
  </BaseSection>,
  <BaseSection noHorizontalSpacing>
    <ItemAction subLabel="Hello" />
  </BaseSection>,
]

const tabs = {
  activeTabId: 'tab1',
  status: select('status', TabStatus, TabStatus.FIXED),
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
