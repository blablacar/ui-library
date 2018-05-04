import React from 'react'
import cc from 'classcat'

import prefix from '_utils'
import style from 'topBar/style'

interface TopBarProps {
  readonly className?: Classcat.Class,
  readonly leftItem?: JSX.Element,
  readonly rightItem?: JSX.Element,
  readonly centerItem?: JSX.Element,
  readonly fixed?: boolean,
  readonly bgTransparent?: boolean,
  readonly bgShadedTransparent?: boolean,
}

const TopBar = ({
  className,
  fixed = false,
  bgShadedTransparent = false,
  bgTransparent = false,
  leftItem,
  rightItem,
  centerItem,
}:TopBarProps) => (
  <header
    className={cc([prefix({
      topBar: true,
      'topBar--fixed': fixed,
      'topBar--bgShadedTransparent': bgShadedTransparent,
      'topBar--bgTransparent': bgTransparent,
    }), className])}
  >
    {
      leftItem ? (
        <div className={cc(prefix({ 'topBar-left': true }))}>
          {leftItem}
        </div>
      ) : null
    }
    {
      centerItem ? (
        <div className={cc(prefix({ 'topBar-center': true }))}>
          {centerItem}
        </div>
      ) : null
    }
    {
      rightItem ? (
        <div className={cc(prefix({ 'topBar-right': true }))}>
          {rightItem}
        </div>
      ) : null
    }
    <style jsx>{style}</style>
  </header>
)

export default TopBar
