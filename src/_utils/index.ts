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

export default prefix
