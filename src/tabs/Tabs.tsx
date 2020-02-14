import React, { createRef, PureComponent, RefObject } from 'react'
import cc from 'classcat'
import Badge from 'badge'

export enum TabStatus {
  SCROLLABLE = 'scrollable',
  FIXED = 'fixed',
}

export interface Tab {
  readonly id: string
  readonly label: string
  readonly icon?: React.ReactElement<Icon>
  readonly showIconOnly?: boolean
  readonly panelContent: JSX.Element
  readonly badgeContent?: string
  readonly badgeAriaLabel?: string
}

export interface TabsProps {
  readonly tabs: Tab[]
  readonly activeTabId: string
  readonly onChange?: Function
  readonly status?: TabStatus
  readonly className?: Classcat.Class
  readonly tabsClassName?: Classcat.Class
}

interface TabsState {
  // The currently selected tab id
  activeTabId: string
  // A map from tab ids to refs, this is to allow focusing the next or previous tab when
  // keyboard navigating the tabs.
  tabIdToRefs: Map<string, RefObject<HTMLButtonElement>>
}

const getPreviousTabId = (tabId: string, tabIds: string[]): string => {
  const idIndex = tabIds.findIndex(currentTabId => currentTabId === tabId)
  if (idIndex !== null && idIndex >= 1) {
    return tabIds[idIndex - 1]
  }
  // User went left after the first tab, return id from the last tab.
  return tabIds[tabIds.length - 1]
}

const getNextTabId = (tabId: string, tabIds: string[]): string => {
  const idIndex = tabIds.findIndex(currentTabId => currentTabId === tabId)
  if (idIndex !== null && idIndex < tabIds.length - 1) {
    return tabIds[idIndex + 1]
  }
  // User went right after the last tab, return id from the first tab.
  return tabIds[0]
}

const createTabIdToRefMap = (tabs: Tab[]): Map<string, RefObject<HTMLButtonElement>> => {
  const tabIdToRef = new Map()
  tabs.forEach(tab => {
    tabIdToRef.set(tab.id, createRef())
  })
  return tabIdToRef
}

const generateTabPanelId = (tab: Tab): string => `${tab.id}_panel`

/**
 * A basic Tabs component made of:
 *  - a list of selectable tabs (only one can be selected at a time)
 *  - one panel: its content is controlled by the selected tab
 *
 * It follows most of the ARIA authoring recommendations for a Tabs component from:
 * https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 * In particular, it implements most of the recommended shortcuts, role structure and is using
 * a roving tabindex for the focus management.
 */
export class Tabs extends PureComponent<TabsProps, TabsState> {
  static defaultProps: Partial<TabsProps> = {
    onChange() {},
    status: TabStatus.SCROLLABLE,
    className: '',
    tabsClassName: '',
  }

  state: TabsState = {
    activeTabId: this.props.activeTabId,
    tabIdToRefs: createTabIdToRefMap(this.props.tabs),
  }

  highlightRef: RefObject<HTMLDivElement> = React.createRef()
  tabsGroupRef: RefObject<HTMLDivElement> = React.createRef()

  static STATUS = TabStatus

  handleTabClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.activateTabById((e.currentTarget as HTMLButtonElement).id)
  }

  handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const tabId = (e.currentTarget as HTMLButtonElement).id
    const tabIds = this.props.tabs.map(tab => tab.id)
    let nextTabId = null
    switch (e.key) {
      case 'ArrowLeft':
        nextTabId = getPreviousTabId(tabId, tabIds)
        break
      case 'ArrowRight':
        nextTabId = getNextTabId(tabId, tabIds)
        break
      case 'Home':
        nextTabId = '0'
        break
      case 'End':
        nextTabId = tabIds[tabIds.length - 1]
        break
    }

    if (nextTabId) {
      this.activateTabById(nextTabId)
      const tabRef = this.state.tabIdToRefs.get(nextTabId)
      tabRef.current.focus()
    }
  }

  moveHighlight = (activeTabId: string) => {
    const currentTab = this.state.tabIdToRefs.get(activeTabId).current
    const tabBounds = currentTab.getBoundingClientRect()

    // .kirk-tablist-wrapper needed to get the height of the whole component
    // because tabs can have different heights.
    const tabsGroup = this.tabsGroupRef.current

    // adapt to current tab width
    this.highlightRef.current.style.width = `${tabBounds.width}px`
    // top position, tablist-wrapper height - tablist-wrapper border height
    this.highlightRef.current.style.top = `${tabsGroup.clientHeight -
      (tabsGroup.offsetHeight - tabsGroup.clientHeight)}px`
    // left position, tab left position - parent wrapper left position
    this.highlightRef.current.style.left = `${tabBounds.left -
      tabsGroup.getBoundingClientRect().left}px`
  }

  activateTabById = (activeTabId: string) => {
    this.setState({ activeTabId })
    this.props.onChange(activeTabId)
  }

  componentDidUpdate(prevProps: TabsProps) {
    if (prevProps.activeTabId !== this.props.activeTabId) {
      this.activateTabById(this.props.activeTabId)
    }

    this.moveHighlight(this.state.activeTabId)
  }

  componentDidMount() {
    if (this.highlightRef && this.highlightRef.current) {
      this.moveHighlight(this.props.activeTabId)
    }
  }

  render() {
    const { tabs, className, tabsClassName } = this.props

    if (tabs.length === 0) {
      return null
    }

    const { activeTabId } = this.state
    const selectedTab = tabs.find(tab => activeTabId === tab.id)
    const isFixedTabs = this.props.status === TabStatus.FIXED
    const fixedTabContainerStyle: React.CSSProperties = {
      width: `calc(100% / ${tabs.length})`,
    }

    return (
      <div role="presentation" className={cc(className)}>
        <div
          ref={this.tabsGroupRef}
          className={cc(['kirk-tabs', tabsClassName, { 'kirk-tabs-fixed': isFixedTabs }])}
        >
          <div className={cc(['kirk-tablist-wrapper'])}>
            <div className="kirk-tab-highlight" ref={this.highlightRef} />
            <div
              role="tablist"
              aria-orientation="horizontal"
              aria-multiselectable="false"
              className={cc('kirk-tablist')}
            >
              {tabs.map(tab => {
                const isSelected = selectedTab.id === tab.id
                return (
                  <div
                    className={cc(['kirk-tab-container', { 'kirk-tab-selected': isSelected }])}
                    style={isFixedTabs ? fixedTabContainerStyle : null}
                    key={tab.id}
                  >
                    <button
                      role="tab"
                      aria-controls={generateTabPanelId(tab)}
                      aria-selected={isSelected ? 'true' : 'false'}
                      title={`${tab.label}${tab.badgeAriaLabel ? ` ${tab.badgeAriaLabel}` : ''}`}
                      tabIndex={isSelected ? 0 : -1}
                      id={tab.id}
                      ref={this.state.tabIdToRefs.get(tab.id)}
                      onClick={this.handleTabClicked}
                      onKeyDown={this.handleTabKeyDown}
                      className="kirk-tab"
                    >
                      {tab.icon}
                      {!tab.showIconOnly && (
                        <span
                          className={cc([
                            'kirk-tab-text',
                            { 'kirk-tab-text--with-icon': tab.icon && !tab.showIconOnly },
                          ])}
                        >
                          {tab.label}
                        </span>
                      )}
                      {tab.badgeContent && (
                        <Badge ariaLabel={tab.badgeAriaLabel} className="kirk-tab-badge">
                          {tab.badgeContent}
                        </Badge>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="kirk-panels-section" role="presentation">
          {tabs.map(tab => {
            const isSelected = selectedTab.id === tab.id
            return (
              <div
                role="tabpanel"
                className="kirk-tab-panel"
                id={generateTabPanelId(tab)}
                key={tab.id}
                aria-labelledby={tab.id}
                hidden={!isSelected}
              >
                {isSelected ? tab.panelContent : null}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
