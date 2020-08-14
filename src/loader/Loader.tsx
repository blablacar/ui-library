import React, { PureComponent } from 'react'
import cc from 'classcat'

import { color, transition } from '../_utils/branding'
import { CheckIcon } from '../icon/checkIcon'
import { CircleIcon } from '../icon/circleIcon'
import { StyledLoader } from './Loader.style'

const FULLSCREEN_MODE_CSS_CLASSNAME = 'kirk-loader--fullScreen'
const INLINE_MODE_CSS_CLASSNAME = 'kirk-loader--inline'
const BLOCK_MODE_CSS_CLASSNAME = 'kirk-loader--block'

export enum LoaderLayoutMode {
  // In this mode, the loader will be centered in the middle of the viewport and a modal mask
  // will be applied to the viewport content.
  FULLSCREEN = 'fullscreen',
  // The loader will behave as an inline block.
  INLINE = 'inline',
  // The loader will behave as a block element with some vertical padding.
  // It will be horizontally and vertically centered in the block content.
  BLOCK = 'block',
}

export type LoaderProps = Readonly<{
  className?: string
  inline?: boolean // Deprecated, use layoutMode instead.
  size?: number
  done?: boolean
  layoutMode?: LoaderLayoutMode
  onDoneAnimationEnd?: () => void
  loadingAriaLabel?: string
  loadedAriaLabel?: string
}>

export class Loader extends PureComponent<LoaderProps> {
  static defaultProps: Partial<LoaderProps> = {
    className: '',
    inline: false,
    size: 48,
    done: false,
    onDoneAnimationEnd() {},
    loadingAriaLabel: 'Loading',
    loadedAriaLabel: 'Loaded',
  }

  validate = () => {
    const timeout = parseInt(transition.duration.fast, 10) + transition.callbackDelay
    setTimeout(this.props.onDoneAnimationEnd, timeout)
  }

  componentDidMount() {
    if (this.props.done) {
      this.validate()
    }
  }

  componentDidUpdate(prevProps: LoaderProps) {
    if (this.props.done && prevProps.done !== this.props.done) {
      this.validate()
    }
  }

  computeLayoutClass() {
    const { inline, layoutMode } = this.props
    if (inline) {
      // Support for legacy inline attribute.
      return INLINE_MODE_CSS_CLASSNAME
    }

    if (layoutMode) {
      switch (layoutMode) {
        case LoaderLayoutMode.INLINE:
          return INLINE_MODE_CSS_CLASSNAME
        case LoaderLayoutMode.BLOCK:
          return BLOCK_MODE_CSS_CLASSNAME
        case LoaderLayoutMode.FULLSCREEN:
        default:
          return FULLSCREEN_MODE_CSS_CLASSNAME
      }
    }

    // Legacy fallback to fullscreen.
    return FULLSCREEN_MODE_CSS_CLASSNAME
  }

  render() {
    const { className, size, done, loadingAriaLabel, loadedAriaLabel } = this.props
    const iconSize = {
      width: `${size}px`,
      height: `${size}px`,
    }
    const loaderStatusLabel = done ? loadedAriaLabel : loadingAriaLabel
    return (
      <StyledLoader className={cc([className, this.computeLayoutClass()])}>
        <div role="progressbar" aria-valuetext={loaderStatusLabel}>
          <div className={cc([{ 'kirk-loader--done': done }])} style={iconSize}>
            {!done && <CircleIcon iconColor={color.green} size={size} spinning />}
            {done && <CheckIcon iconColor={color.white} size={size / 2} validate />}
          </div>
        </div>
        {/*
          The progressbar role does not announce anything when changing state. We associate the
          role='progressbar' with a role='status' to get loading state's announcements.
        */}
        <div className="visually-hidden" role="status">
          {loaderStatusLabel}
        </div>
      </StyledLoader>
    )
  }
}
