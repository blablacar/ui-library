import React, { Fragment } from 'react'
import cc from 'classcat'

import style from 'topBar/style'

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
  fixed = false,
  bgShadedTransparent = false,
  bgTransparent = false,
  leftItem,
  rightItem,
  centerItem,
  innerWrapperClassName = null,
}: TopBarProps) => {
  const Wrapper = Boolean(innerWrapperClassName) ? 'div' : Fragment
  const wrapperProps: { className?: string } = {}
  if (Boolean(innerWrapperClassName)) {
    wrapperProps.className = cc([innerWrapperClassName])
  }
  return (
    <header
      className={cc([
        {
          'kirk-topBar': true,
          'kirk-topBar--fixed': fixed,
          'kirk-topBar--bgShadedTransparent': bgShadedTransparent,
          'kirk-topBar--bgTransparent': bgTransparent,
        },
        className,
      ])}
    >
      <Wrapper {...wrapperProps}>
        {leftItem ? <div className={cc({ 'kirk-topBar-left': true })}>{leftItem}</div> : null}
        {centerItem ? <div className={cc({ 'kirk-topBar-center': true })}>{centerItem}</div> : null}
        {rightItem ? <div className={cc({ 'kirk-topBar-right': true })}>{rightItem}</div> : null}
      </Wrapper>
      <style jsx>{style}</style>
    </header>
  )
}

export default TopBar
