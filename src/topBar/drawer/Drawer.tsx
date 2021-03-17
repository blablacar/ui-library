import React, { Fragment, PureComponent } from 'react'
import cc from 'classcat'
import { canUseDOM } from 'exenv'
import { createGlobalStyle } from 'styled-components'

import { KEYCODES } from '../../_utils/keycodes'
import { StyledDimmer, StyledDrawer } from './Drawer.style'

const DrawerGlobalStyles = createGlobalStyle`
  .kirk-scroll-lock {
    overflow-y: hidden;
  }
`

export type DrawerProps = Readonly<{
  children: string | JSX.Element
  className?: string
  zIndex?: number
  onOpen?: () => void
  onClose?: () => void
  onTransitionEnd?: (open: boolean) => void
  width?: string
  open?: boolean
}>

export class Drawer extends PureComponent<DrawerProps> {
  private contentNode: HTMLDivElement
  static defaultProps: Partial<DrawerProps> = {
    width: '400px',
    zIndex: 2,
    onOpen() {},
    onClose() {},
    onTransitionEnd() {},
    open: false,
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleOutsideMouseClick)
    document.addEventListener('touchstart', this.handleOutsideMouseClick)
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentDidUpdate(prevProps: DrawerProps) {
    if (this.props.open !== prevProps.open) {
      this.props.open ? this.open() : this.close()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('mouseup', this.handleOutsideMouseClick)
    document.removeEventListener('touchstart', this.handleOutsideMouseClick)
  }

  open = () => {
    this.scrollLock()
    this.props.onOpen()
  }

  close = () => {
    this.scrollUnlock()
    this.props.onClose()
  }

  handleOutsideMouseClick = (e: MouseEvent) => {
    const isButton = e.button && e.button !== 0
    if (!this.contentNode || (e.target as Element).tagName !== 'ASIDE' || isButton) {
      return
    }
    this.close()
  }

  handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === KEYCODES.ESCAPE) {
      this.close()
    }
  }

  refContent = (contentNode: HTMLDivElement) => {
    this.contentNode = contentNode
  }

  scrollLock = () => {
    if (canUseDOM) {
      document.documentElement.classList.add('kirk-scroll-lock')
    }
  }

  scrollUnlock = () => {
    if (canUseDOM) {
      document.documentElement.classList.remove('kirk-scroll-lock')
    }
  }

  render() {
    const { open, className, zIndex, onTransitionEnd, children, width } = this.props
    return (
      <Fragment>
        <StyledDrawer
          className={cc([
            'kirk-drawer',
            {
              'kirk-drawer--open': open,
              'kirk-drawer--close': !open,
            },
            className,
          ])}
          $zIndex={zIndex}
        >
          <div
            ref={this.refContent}
            className="kirk-drawer-scrollableContent"
            style={{ width }}
            onTransitionEnd={() => onTransitionEnd(open)}
          >
            {children}
          </div>
          <DrawerGlobalStyles />
        </StyledDrawer>
        <StyledDimmer
          className={cc([['kirk-drawer-dimmer', { 'kirk-drawer-dimmer--active': open }]])}
          $zIndex={zIndex - 1}
          aria-hidden="true"
        />
      </Fragment>
    )
  }
}
