import React from 'react'

import {
  fireEvent,
  getAllByRole,
  getByRole,
  queryByRole,
  render,
  screen,
} from '@testing-library/react'

import { Tab, Tabs, TabsProps } from './Tabs'

const defaultProps: TabsProps = {
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
      panelContent: <div style={{ padding: 30 }}>Content for third tab3</div>,
    },
  ],
}

function createProps(props: Partial<TabsProps> = {}): TabsProps {
  return { ...defaultProps, ...props }
}

describe('Rendering testing', () => {
  it('should render the tabs', () => {
    const props = createProps()
    render(<Tabs {...props} />)
    expect(screen.getAllByRole('tab')).toHaveLength(3)
    props.tabs.forEach((tab: Tab) => {
      expect(screen.getByRole('tab', { name: tab.label })).toHaveTextContent(tab.label)
    })
  })

  it('should render the active tab content', () => {
    const props = createProps()
    render(<Tabs {...props} />)
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1)
    expect(screen.getByRole('tabpanel', { name: props.tabs[0].label })).toHaveTextContent(
      'Content for first tab',
    )
  })

  it('should render the icon and label', () => {
    const props: TabsProps = {
      activeTabId: '1',
      tabs: [
        {
          id: '1',
          label: 'With icon',
          panelContent: <div />,
          icon: <span role="img" aria-label="image" />,
        },
      ],
    }

    render(<Tabs {...props} />)
    const tab = screen.getByRole('tab', { name: 'With icon' })
    expect(tab).toHaveTextContent('With icon')
    expect(getByRole(tab, 'img', { name: 'image' })).toBeInTheDocument()
  })

  it('should only render the icon when showIconOnly is true', () => {
    const props: TabsProps = {
      activeTabId: '1',
      tabs: [
        {
          id: '1',
          label: 'With icon',
          panelContent: <div />,
          icon: <span role="img" aria-label="image" />,
          showIconOnly: true,
        },
      ],
    }

    render(<Tabs {...props} />)
    const tab = screen.getByRole('tab', { name: 'With icon' })
    expect(tab).toHaveTextContent('')
    expect(getByRole(tab, 'img', { name: 'image' })).toBeInTheDocument()
  })

  it('Should render the second line', () => {
    const props: TabsProps = {
      activeTabId: '1',
      tabs: [
        {
          id: '1',
          label: 'With second line',
          panelContent: <div />,
          secondLine: 'Second line',
        },
      ],
    }

    render(<Tabs {...props} />)
    const tab = screen.getByRole('tab', { name: 'With second line' })
    expect(tab).toHaveTextContent('With second lineSecond line')
  })

  it('Should call onChange when a tab is selected', () => {
    const props = createProps({ onChange: jest.fn() })
    render(<Tabs {...props} />)
    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }))
    expect(props.onChange).toHaveBeenCalledWith('tab2')
  })

  it('Should update the tabpanel when a tab is selected', () => {
    const props = createProps()
    render(<Tabs {...props} />)
    fireEvent.click(screen.getByRole('tab', { name: props.tabs[1].label }))
    expect(screen.getByRole('tabpanel', { name: props.tabs[1].label })).toHaveTextContent(
      'Content for second tab',
    )
  })
})

describe('ARIA roles', () => {
  it('Should generate proper ARIA roles', () => {
    const props = createProps()
    render(<Tabs {...props} />)

    // Verify we have a tablist role element.
    const tablist = screen.getByRole('tablist')
    expect(tablist).toBeInTheDocument()

    // Verify we have correct tabs inside the tablist role element.
    const tabs = getAllByRole(tablist, 'tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-controls', 'tab1_panel')
    expect(tabs[1]).toHaveAttribute('aria-controls', 'tab2_panel')
    expect(tabs[2]).toHaveAttribute('aria-controls', 'tab3_panel')

    // Verify we have one tabpanel.
    const tabpanel = screen.getByRole('tabpanel', { name: 'Tab 1' })
    // Verify the tabpanel generated id (that should match the aria-controls
    // of the selected tab.
    expect(tabpanel).toHaveAttribute('id', 'tab1_panel')

    // Verify the tabpanel is not in the tablist or in a tab.
    expect(queryByRole(tablist, 'tabpanel')).not.toBeInTheDocument()

    // // Verify the selected tab ARIA state
    expect(screen.getByRole('tab', { name: 'Tab 1', selected: true })).toBeInTheDocument()
  })

  it('Should update ARIA attributes after switching tab', () => {
    const props = createProps()
    render(<Tabs {...props} />)

    // Verify that initial tab 1 is selected
    const tabs = screen.getAllByRole('tab')
    // Verify aria-selected
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
    // Verify tabIndexes
    expect(tabs[0]).toHaveAttribute('tabindex', '0')
    expect(tabs[1]).toHaveAttribute('tabindex', '-1')
    expect(tabs[2]).toHaveAttribute('tabindex', '-1')

    // Verify that the current tabpanel id is correct.
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'tab1_panel')

    // Simulate a click on tab 2.
    fireEvent.click(tabs[1])

    // Verify that now tab 2 is selected
    // Verify aria-selected
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
    // Verify tabIndexes
    expect(tabs[0]).toHaveAttribute('tabindex', '-1')
    expect(tabs[1]).toHaveAttribute('tabindex', '0')
    expect(tabs[2]).toHaveAttribute('tabindex', '-1')

    // Verify that the current tabpanel id is correct.
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'tab2_panel')
  })
})

describe('Keyboard navigation', () => {
  it('Should left/right keyboard navigate', () => {
    const props = createProps()
    render(<Tabs {...props} />)

    screen.getByRole('tab', { name: 'Tab 1', selected: true }).focus()

    // Simulate a right arrow keydown.
    fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' })

    // Tab 2 is now selected.
    expect(screen.getByRole('tab', { name: 'Tab 2', selected: true })).toHaveFocus()

    // Simulate a right arrow keydown.
    fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' })

    // Tab 3 is now selected.
    expect(screen.getByRole('tab', { name: 'Tab 3', selected: true })).toHaveFocus()

    // Simulate a left arrow keydown.
    fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' })

    // Tab 2 is now selected.
    expect(screen.getByRole('tab', { name: 'Tab 2', selected: true })).toHaveFocus()
  })

  it('should loop to the last tab when going left starting from the first tab', () => {
    const props = createProps()
    render(<Tabs {...props} />)

    // Verify that first tab is selected.
    screen.getByRole('tab', { name: 'Tab 1', selected: true }).focus()

    // Simulate a left arrow keydown.
    fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft' })

    // Last tab is now selected.
    expect(screen.getByRole('tab', { name: 'Tab 3', selected: true })).toHaveFocus()
  })

  it('should loop to the first tab when going right starting from the last tab', () => {
    // Set-up the last tab to be selected ('tab3')
    const props = createProps({ activeTabId: 'tab3' })
    render(<Tabs {...props} />)

    // Verify that last tab on the right is selected.
    screen.getByRole('tab', { name: 'Tab 3', selected: true }).focus()

    // Simulate a right arrow keydown.
    fireEvent.keyDown(document.activeElement, { key: 'ArrowRight' })

    // First tab is now selected.
    expect(screen.getByRole('tab', { name: 'Tab 1', selected: true })).toHaveFocus()
  })

  it('Should do nothing when tabbing', () => {
    const props = createProps()
    render(<Tabs {...props} />)

    // Verify that first tab is selected.
    screen.getByRole('tab', { name: 'Tab 1', selected: true }).focus()

    // Simulate a Tab keydown: The focus will just move outside the tablist and not
    // select another tab in the tablist.
    fireEvent.keyDown(document.activeElement, { key: 'Tab' })

    // Verify first tab is still selected.
    expect(screen.getByRole('tab', { name: 'Tab 1', selected: true })).toBeInTheDocument()
  })
})
