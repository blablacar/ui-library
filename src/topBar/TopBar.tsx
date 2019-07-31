import React, { Fragment } from 'react'
import cc from 'classcat'

interface TopBarProps {
  readonly className?: Classcat.Class
  readonly leftItem?: JSX.Element
  readonly rightItem?: JSX.Element
  readonly centerItem?: JSX.Element
  readonly fixed?: boolean
  readonly bgTransparent?: boolean
  readonly bgShadedTransparent?: boolean
  readonly innerWrapperClassName?: Classcat.Class
}

const TopBar = ({
  className,
  leftItem,
  rightItem,
  centerItem,
  fixed = false,
  bgShadedTransparent = false,
  bgTransparent = false,
  innerWrapperClassName = null,
}: TopBarProps) => {
  const Wrapper = Boolean(innerWrapperClassName) ? (
    <div className={cc([innerWrapperClassName])} />
  ) : (
    <Fragment />
  )
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
    <header
      className={cc([
        'kirk-topBar',
        {
          'kirk-topBar--fixed': fixed,
          'kirk-topBar--bgShadedTransparent': bgShadedTransparent,
          'kirk-topBar--bgTransparent': bgTransparent,
        },
        className,
      ])}
    >
      {React.cloneElement(Wrapper, {}, children)}
    </header>
  )
}

export default TopBar
