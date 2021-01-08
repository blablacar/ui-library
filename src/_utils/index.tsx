import React, { Fragment } from 'react'
import { canUseDOM } from 'exenv'

const DEFAULT_CLASS_PREFIX = 'kirk'

export const prefix = (modifiers: Classcat.ClassObject, baseClass?: string): string => {
  const mods = Object.keys(modifiers).filter(elem => modifiers[elem])

  let classPrefix = DEFAULT_CLASS_PREFIX

  if (baseClass != null) {
    classPrefix = `${classPrefix}-${baseClass}`
  }

  return mods.map(modifier => `${classPrefix}-${modifier}`).join(' ')
}

export const isTouchEventsAvailable = () =>
  canUseDOM && 'ontouchstart' in window && 'ontouchend' in window

export const replaceNewLineWithBR = (str: string): React.ReactNode =>
  str
    .split('\n')
    .map(line => <Fragment>{line}</Fragment>)
    .reduce((acc, curr) => (
      <Fragment>
        {acc}
        <br />
        {curr}
      </Fragment>
    ))
