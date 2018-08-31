import React, { PureComponent } from 'react'
import cc from 'classcat'
import { ChevronIcon } from 'icon'
import { color } from '_utils/branding'
import style from './style'

const KEYCODES = {
  ESCAPE: 27,
}

export interface DropdownButtonProps {
  children: React.ReactNode,
  dropdown: React.ReactNode,
  dropdownPosition?: 'left' | 'right',
  dropdownWithPointer?: boolean,
  className?: Classcat.Class,
}

export interface DropdownButtonState {
  open: boolean,
}

class DropdownButton extends PureComponent <DropdownButtonProps, DropdownButtonState> {
  private dropdownNode: HTMLDivElement
  private buttonNode: HTMLDivElement

  static defaultProps: Partial<DropdownButtonProps> = {
    dropdownPosition: 'left',
    dropdownWithPointer: false,
  }

  state = {
    open: false,
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleOutsideMouseClick)
    document.addEventListener('touchstart', this.handleOutsideMouseClick)
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('mouseup', this.handleOutsideMouseClick)
    document.removeEventListener('touchstart', this.handleOutsideMouseClick)
  }

  close = () => {
    this.setState({ open: false })
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  handleOutsideMouseClick = (e: MouseEvent) => {
    if (!this.dropdownNode
      || this.dropdownNode.contains(e.target as Element)
      || this.buttonNode.contains(e.target as Element)
      || (e.button && e.button !== 0)) {
      return
    }
    this.close()
  }

  handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === KEYCODES.ESCAPE) {
      this.close()
    }
  }

  refButton = (ref: HTMLDivElement) => {
    this.buttonNode = ref
  }

  refDropdown = (ref: HTMLDivElement) => {
    this.dropdownNode = ref
  }

  render() {
    const { className, dropdown, dropdownPosition, dropdownWithPointer } = this.props

    return (
      <div ref={this.refButton} className="dropdownButton">
        <button type="button" className={cc(className)} onClick={this.toggle}>
          {this.props.children}
          <ChevronIcon iconColor={color.primary} down />
        </button>
        {
          this.state.open && (
            <div
              ref={this.refDropdown}
              className={cc([
                'dropdown',
                {
                  [`dropdown--${dropdownPosition}`]: true,
                  'dropdown--withPointer': dropdownWithPointer,
                },
              ])}
            >
              {dropdown}
            </div>
          )
        }
        <style jsx>{style}</style>
      </div>
    )
  }
}

export default DropdownButton
