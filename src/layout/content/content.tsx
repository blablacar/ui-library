import React, { Component } from 'react'

export interface MainContentProps {
  readonly children: React.ReactNode
  readonly topBarSelector?: string // document query selector
  readonly topBarHeight?: string // ex: "24px" - for CSS only
  readonly tag?: string
}

export class MainContent extends Component<MainContentProps> {
  mainContentRef = React.createRef<HTMLDivElement>()

  resizeTimeout: NodeJS.Timeout = null

  setContentHeight: (element?: HTMLElement) => void = (element = this.mainContentRef.current) => {
    const contentElement = element
    if (!contentElement) {
      return null
    }
    const topBar: HTMLElement = document.querySelector(this.props.topBarSelector)
    const height = topBar
      ? Math.floor(window.innerHeight - topBar.offsetHeight)
      : window.innerHeight

    contentElement.style.minHeight = `${height}px`
    contentElement.style.height = 'auto'

    if (contentElement.parentElement) {
      this.setContentHeight(contentElement.parentElement)
    }

    return null
  }

  onWindowResize: () => void = () => {
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(this.setContentHeight, 100)
  }

  componentDidMount(): void {
    if (window) {
      this.setContentHeight()
      window.addEventListener('resize', this.onWindowResize)
    }
  }

  componentWillUnmount(): void {
    if (window) {
      window.removeEventListener('resize', this.onWindowResize)
    }
  }

  render(): JSX.Element {
    const { children, tag = 'div', topBarSelector, ...props } = this.props

    return React.createElement(
      tag,
      {
        ref: this.mainContentRef,
        className: 'page-wrapper',
        role: 'presentation',
        ...props,
      },
      children,
    )
  }
}
