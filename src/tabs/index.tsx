import React, { createRef, Fragment, PureComponent, Ref, RefObject } from 'react'
import style from './style'
import cc from 'classcat'
import Badge from 'badge'

export enum TabStatus {
  SCROLLABLE = 'scrollable',
  FIXED = 'fixed',
}

interface Tab {
  readonly id: string
  readonly label: string
  readonly panelContent: JSX.Element
  readonly badgeContent?: string
  readonly badgeAriaLabel?: string
}

interface TabsProps {
  readonly tabs: Tab[]
  readonly activeTabId: string
  readonly onChange?: Function
  readonly status?: TabStatus
  readonly className?: Classcat.Class
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

const generateTabPanelId = (tab: Tab): string => {
  return `${tab.id}_panel`
}

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
  }

  state: TabsState = {
    activeTabId: this.props.activeTabId,
    tabIdToRefs: createTabIdToRefMap(this.props.tabs),
  }

  static STATUS = TabStatus

  handleTabClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.activateTabById((e.target as HTMLButtonElement).id)
  }

  handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const tabId = (e.target as HTMLButtonElement).id
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

  activateTabById = (activeTabId: string) => {
    this.setState({ activeTabId })
    this.props.onChange(activeTabId)
  }

  render() {
    const { tabs, className } = this.props

    if (tabs.length === 0) {
      return null
    }

    const { activeTabId } = this.state
    const selectedTab = tabs.find(tab => activeTabId === tab.id)
    const isFixedTabs = this.props.status === TabStatus.FIXED

    return (
      <div className={cc(['kirk-tabs', { 'kirk-tabs-fixed': isFixedTabs }, className])}>
        <div
          id="tablist"
          role="tablist"
          aria-orientation="horizontal"
          aria-multiselectable="false"
          className="kirk-tablist"
        >
          {tabs.map(tab => {
            const isSelected = selectedTab.id === tab.id
            return (
              <div
                className={cc(['kirk-tab-container', { 'kirk-tab-selected': isSelected }])}
                key={tab.id}
              >
                <div className="kirk-tab-relative">
                  <button
                    role="tab"
                    aria-controls={`${generateTabPanelId(tab)}`}
                    aria-selected={isSelected ? 'true' : 'false'}
                    title={`${tab.label}${tab.badgeAriaLabel ? ` ${tab.badgeAriaLabel}` : ''}`}
                    tabIndex={isSelected ? 0 : -1}
                    id={tab.id}
                    ref={this.state.tabIdToRefs.get(tab.id)}
                    onClick={this.handleTabClicked}
                    onKeyDown={this.handleTabKeyDown}
                    className={cc(['kirk-tab'])}
                  >
                    {tab.label}
                  </button>
                  {tab.badgeContent && (
                    <Badge ariaLabel={tab.badgeAriaLabel} className="kirk-tab-badge">
                      {tab.badgeContent}
                    </Badge>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {tabs.map(tab => {
          const isSelected = selectedTab.id === tab.id
          return (
            <div
              role="tabpanel"
              className="kirk-tab-panel"
              id={`${generateTabPanelId(tab)}`}
              key={tab.id}
              aria-labelledby={tab.id}
              hidden={!isSelected}
            >
              {tab.panelContent}
            </div>
          )
        })}
        <style jsx>{style}</style>
      </div>
    )
  }
}

export default Tabs
