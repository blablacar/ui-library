import React from 'react'
import renderer from 'react-test-renderer'

import { TabsSection } from './index'

const tabs = {
  activeTabId: 'tab1',
  tabs: [
    {
      id: 'tab1',
      label: 'Tab label 1',
      panelContent: <div>panel 1</div>,
      badgeContent: 'Badge content 1',
    },
    {
      id: 'tab2',
      label: 'Tab label 2',
      panelContent: <div>panel 2</div>,
      badgeContent: '2',
      badgeAriaLabel: 'Unread Message',
    },
  ],
}

describe('TabsSection', () => {
  it('should render default TabsSection', () => {
    const section = <TabsSection tabsProps={tabs} />
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
