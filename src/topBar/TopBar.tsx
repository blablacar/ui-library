import React, { ReactNode } from 'react'
import cc from 'classcat'

import { StyledTopBar } from './TopBar.style'

export type TopBarProps = Readonly<{
  className?: string
  zIndex: number
  leftItem?: ReactNode
  rightItem?: ReactNode
  centerItem?: ReactNode
  hasScrolled?: boolean
}>

export const TopBar = ({
  className,
  leftItem,
  rightItem,
  centerItem,
  zIndex,
  hasScrolled,
}: TopBarProps) => {
  const children = []
  if (leftItem) {
    children.push(
      <div key="leftItem" className="kirk-topBar-left">
        {leftItem}
      </div>,
    )
  }
  if (centerItem) {
    children.push(
      <div key="centerItem" className="kirk-topBar-center">
        {centerItem}
      </div>,
    )
  }
  if (rightItem) {
    children.push(
      <div key="rightItem" className="kirk-topBar-right">
        {rightItem}
      </div>,
    )
  }
  return (
    <StyledTopBar
      className={cc(['kirk-topBar', { 'kirk-topBar--scrolled': hasScrolled }, className])}
      $zIndex={zIndex}
    >
      <div className="kirk-topBar-inner">{children}</div>
    </StyledTopBar>
  )
}
