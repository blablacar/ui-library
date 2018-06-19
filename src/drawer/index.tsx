import React, { PureComponent } from 'react'
import cc from 'classcat'
import style from 'drawer/style'

const KEYCODES = {
  ESCAPE: 27,
}

export interface DrawerProps {
  readonly children: string,
  readonly className?: Classcat.Class,
  readonly onOpen?: () => void,
  readonly onClose?: () => void,
  readonly onChange?: (open: boolean) => void,
  readonly width?: string,
  readonly height?: string,
}

export interface DrawerState {
  open: boolean
}

export default class Drawer extends PureComponent <DrawerProps, DrawerState> {
  private contentNode: HTMLDivElement
  private contentStyles = {
    width: this.props.width,
    height: this.props.height,
  }

  static defaultProps: Partial<DrawerProps> = {
    width: '400px',
    onOpen: () => {},
    onClose: () => {},
    onChange: (isOpen) => {},
  }

  state: DrawerState = {
    open: false,
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleOutsideMouseClick)
    document.addEventListener('touchstart', this.handleOutsideMouseClick)
    document.addEventListener('keydown', this.handleKeydown)

    // Apply "open" CSS animation using requestAnimationFrame as browsers are not rerendering
    // stuff that changed in the same animation frame.
    requestAnimationFrame(() => {
      // This nested requestAnimationFrame here is only needed for Firefox
      requestAnimationFrame(this.open)
    })
  }

  componentWillReceiveProps({ width }: DrawerProps) {
    if (this.props.width !== width) {
      this.contentStyles.width = width
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('mouseup', this.handleOutsideMouseClick)
    document.removeEventListener('touchstart', this.handleOutsideMouseClick)
  }

  onTransitionEnd = () => {
    if (this.state.open) {
      this.props.onOpen()
    } else {
      this.props.onClose()
    }
    this.props.onChange(this.state.open)
  }

  open = () => {
    this.scrollReset()
    this.setState({ open: true })
  }

  close = () => {
    this.scrollRestore()
    this.setState({ open: false })
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }))
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

  private scrollPosition: number = 0

  scrollReset = () => {
    // store current scroll position
    this.scrollPosition = document.documentElement.scrollTop
    // scroll to top
    document.documentElement.scrollTop = 0
    // block html scroll
    document.querySelector('html').style.overflow = 'hidden'
  }

  scrollRestore = () => {
    // unblock html scroll
    document.querySelector('html').style.overflow = 'visible'
    // restore scroll position
    document.documentElement.scrollTop = this.scrollPosition
  }

  render() {
    return (
      <aside
        className={cc([
          'drawer', {
            'drawer--open': this.state.open,
            'drawer--close': !this.state.open,
          },
          this.props.className,
        ])}
      >
        <div
          ref={this.refContent}
          className="scrollableContent"
          style={this.contentStyles}
          onTransitionEnd={this.onTransitionEnd}
        >
          {this.props.children}
        </div>
        <style jsx>{style}</style>
      </aside>
    )
  }
}
