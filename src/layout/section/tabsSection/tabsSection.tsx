import React from 'react'
import cc from 'classcat'
import Tabs, { TabsProps } from 'tabs'

export interface TabsSectionProps {
  readonly className?: Classcat.Class
  readonly tabsProps: TabsProps
}

/**
 * A specialized section based on the Tabs component.
 * The tabs section will visually separate (i.e. section) the page horizontally
 * with a line between the tabs and their panels.
 *
 * If you need the non full-width tabs (to use a in a multi column layout), use the <Tabs> widget
 * directly instead.
 */
const TabsSection = (props: TabsSectionProps) => {
  const { className, tabsProps } = props
  return <Tabs className={cc(className)} {...tabsProps} />
}

export default TabsSection
