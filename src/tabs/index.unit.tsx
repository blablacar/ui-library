import React from 'react'
import { mount } from 'enzyme'

import Tabs from 'tabs'
import renderer from 'react-test-renderer'

const defaultTabsConfig = {
  activeTabId: 'tab1',
  tabs: [
    {
      id: 'tab1',
      label: 'Tab 1',
      panelContent: <div style={{ padding: 30 }}>Content for first tab</div>,
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      panelContent: <div style={{ padding: 30 }}>Content for second tab</div>,
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      panelContent: <div style={{ padding: 30 }}>Content for first tab3</div>,
    },
  ],
}

describe('Rendering testing', () => {
  it('should render properly', () => {
    const tabsAsJson = renderer
      .create(<Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />)
      .toJSON()
    expect(tabsAsJson).toMatchSnapshot()
  })

  it('Should update the panel content', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Tabs
        onChange={onChange}
        tabs={defaultTabsConfig.tabs}
        activeTabId={defaultTabsConfig.activeTabId}
      />,
    )

    let tabpanel = wrapper.find('[role="tabpanel"]').at(0)
    expect(tabpanel.text()).toBe('Content for first tab')

    // Simulate a click on tab 2.
    wrapper
      .find('[role="tab"]')
      .at(1)
      .simulate('click')

    expect(onChange).toHaveBeenCalledWith('tab2')

    tabpanel = wrapper.find('[role="tabpanel"]').at(1)
    expect(tabpanel.text()).toBe('Content for second tab')

    // Simulate a click on tab 1.
    wrapper
      .find('[role="tab"]')
      .at(0)
      .simulate('click')

    expect(onChange).toHaveBeenCalledWith('tab1')

    tabpanel = wrapper.find('[role="tabpanel"]').at(0)
    expect(tabpanel.text()).toBe('Content for first tab')
  })
})

describe('ARIA roles', () => {
  it('Should generate proper ARIA roles', () => {
    const wrapper = mount(
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />,
    )

    // Verify we have a tablist role element.
    const tablist = wrapper.find('[role="tablist"]')
    expect(tablist.exists()).toBe(true)
    expect(tablist.length).toBe(1)

    // Verify we have correct tabs inside the tablist role element.
    const tabs = tablist.find('[role="tab"]')
    expect(tabs.exists()).toBe(true)
    expect(tabs.length).toBe(3)
    expect(tabs.get(0).props['aria-controls']).toBe('tab1_panel')
    expect(tabs.get(1).props['aria-controls']).toBe('tab2_panel')
    expect(tabs.get(2).props['aria-controls']).toBe('tab3_panel')

    // Verify we have one tabpanel.
    const tabpanel = wrapper.find('[role="tabpanel"]')
    expect(tabpanel.exists()).toBe(true)
    expect(tabpanel.length).toBe(3)
    // Verify the tabpanel generated id (that should match the aria-controls
    // of the selected tab.
    const expectedTabPanelId = `${defaultTabsConfig.activeTabId}_panel`
    expect(tabpanel.get(0).props.id).toBe(expectedTabPanelId)
    expect(tabpanel.get(0).props['aria-labelledby']).toBe('tab1')

    // Verify the tabpanel is not in the tablist or in a tab.
    const panelInTabList = tablist.find('[role="tabpanel"]')
    expect(panelInTabList.exists()).toBe(false)
    const panelInTabs = tabs.find('[role="tabpanel"]')
    expect(panelInTabs.exists()).toBe(false)

    // Verify the selected tab ARIA state
    const activeTab = tablist.find('.kirk-tab-selected')
    expect(activeTab.exists()).toBe(true)
    expect(activeTab.length).toBe(1)
    expect(activeTab.find('[role="tab"]').prop('aria-selected')).toBe('true')
  })

  it('Should update ARIA attributes after switching tab', () => {
    const wrapper = mount(
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />,
    )

    // Verify that initial tab 1 is selected
    let tabs = wrapper.find('[role="tab"]')
    expect(tabs.exists()).toBe(true)
    expect(tabs.length).toBe(3)
    // Verify aria-selected
    expect(tabs.get(0).props['aria-selected']).toBe('true')
    expect(tabs.get(1).props['aria-selected']).toBe('false')
    expect(tabs.get(2).props['aria-selected']).toBe('false')
    // Verify tabIndexes
    expect(tabs.get(0).props['tabIndex']).toBe(0)
    expect(tabs.get(1).props['tabIndex']).toBe(-1)
    expect(tabs.get(2).props['tabIndex']).toBe(-1)

    // Verify that the current tabpanel id is correct.
    let tabpanel = wrapper.find('[role="tabpanel"]')
    expect(tabpanel.get(0).props.id).toBe('tab1_panel')

    // Simulate a click on tab 2.
    wrapper
      .find('[role="tab"]')
      .at(1)
      .simulate('click')

    // Verify that now tab 2 is selected
    tabs = wrapper.find('[role="tab"]')
    // Verify aria-selected
    expect(tabs.get(0).props['aria-selected']).toBe('false')
    expect(tabs.get(1).props['aria-selected']).toBe('true')
    expect(tabs.get(2).props['aria-selected']).toBe('false')
    // Verify tabIndexes
    expect(tabs.get(0).props['tabIndex']).toBe(-1)
    expect(tabs.get(1).props['tabIndex']).toBe(0)
    expect(tabs.get(2).props['tabIndex']).toBe(-1)

    // Verify that the current tabpanel id is correct.
    tabpanel = wrapper.find('[role="tabpanel"]')
    expect(tabpanel.get(1).props.id).toBe('tab2_panel')
  })
})

describe('Keyboard navigation', () => {
  it('Should left/right keyboard navigate', () => {
    const wrapper = mount(
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />,
    )

    let tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(0).props['aria-selected']).toBe('true')

    // Simulate a right arrow keydown.
    tabs.at(0).simulate('keydown', { key: 'ArrowRight' })

    // Tab 2 is now selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(1).props['aria-selected']).toBe('true')

    // Simulate a right arrow keydown.
    tabs.at(1).simulate('keydown', { key: 'ArrowRight' })

    // Tab 3 is now selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(2).props['aria-selected']).toBe('true')

    // Simulate a left arrow keydown.
    tabs.at(2).simulate('keydown', { key: 'ArrowLeft' })

    // Tab 2 is now selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(1).props['aria-selected']).toBe('true')
  })

  it('goes to the last tab when going left after the first tab', () => {
    const wrapper = mount(
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />,
    )

    // Verify that first tab is selected.
    let tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(0).props['aria-selected']).toBe('true')

    // Simulate a left arrow keydown.
    tabs.at(0).simulate('keydown', { key: 'ArrowLeft' })

    // Last tab is now selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(2).props['aria-selected']).toBe('true')
  })

  it('goes to first tab when going right after the last tab', () => {
    // Set-up the last tab to be selected ('tab3')
    const wrapper = mount(<Tabs tabs={defaultTabsConfig.tabs} activeTabId="tab3" />)

    // Verify that last tab on the right is selected.
    let tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(2).props['aria-selected']).toBe('true')

    // Simulate a right arrow keydown.
    tabs.at(2).simulate('keydown', { key: 'ArrowRight' })

    // First tab is now selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(0).props['aria-selected']).toBe('true')
  })

  it('Should do nothing when tabbing', () => {
    const wrapper = mount(
      <Tabs tabs={defaultTabsConfig.tabs} activeTabId={defaultTabsConfig.activeTabId} />,
    )

    // Verify that first tab is selected.
    let tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(0).props['aria-selected']).toBe('true')

    // Simulate a Tab keydown: The focus will just move outside the tablist and not
    // select another tab in the tablist.
    tabs.at(0).simulate('keydown', { key: 'Tab' })

    // Verify first tab is still selected.
    tabs = wrapper.find('[role="tab"]')
    expect(tabs.get(0).props['aria-selected']).toBe('true')
  })
})
