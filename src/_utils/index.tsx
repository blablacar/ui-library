import React, { Fragment } from 'react'
import { canUseDOM } from 'exenv'

export const prefix = (
  modifiers: Classcat.ClassObject = {},
  baseClass: string = 'kirk',
): string[] => {
  const mods = Object.keys(modifiers).filter(elem => modifiers[elem])
  return [].concat(mods.map(modifier => `${baseClass}-${modifier}`))
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

export default prefix
