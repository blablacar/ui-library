import React, { PureComponent, Fragment } from 'react'
import cc from 'classcat'

import Loader from 'loader'
import style from './style'

import Item from '_utils/item'
import ChevronIcon from 'icon/chevronIcon'

export enum ItemChoiceStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export interface ItemChoiceProps {
  readonly className?: Classcat.Class
  readonly href: string | JSX.Element
  readonly label?: string
  readonly subLabel?: string
  readonly highlighted?: boolean
  readonly narrow?: boolean
  readonly selected?: boolean
  readonly disabled?: boolean
  readonly status?: ItemChoiceStatus
  readonly leftAddon?: React.ReactNode
  readonly rightAddon?: React.ReactNode
  readonly onDoneAnimationEnd?: () => void
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
}

class ItemChoice extends PureComponent<ItemChoiceProps> {
  static defaultProps: Partial<ItemChoiceProps> = {
    disabled: false,
    highlighted: false,
    selected: false,
    narrow: false,
    status: ItemChoiceStatus.DEFAULT,
    href: '',
  }

  static STATUS = ItemChoiceStatus

  render() {
    const {
      className,
      highlighted,
      narrow,
      selected,
      disabled,
      status,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
      href,
      label,
      subLabel,
      leftAddon,
      rightAddon,
      onDoneAnimationEnd,
    } = this.props

    const classNames = cc([
      {
        'kirk-itemChoice': true,
        'kirk-itemChoice--disabled': disabled,
      },
      className,
    ])

    const chevronDisplay =
      status === ItemChoiceStatus.DEFAULT ? (
        <ChevronIcon />
      ) : (
        <Loader
          size={24}
          onDoneAnimationEnd={onDoneAnimationEnd}
          inline
          done={status === ItemChoiceStatus.CHECKED}
        />
      )

    let Component: tag
    const listenerProps: Partial<ItemChoiceProps> = { onClick, onFocus, onBlur, onMouseDown }
    let componentProps: Partial<ItemChoiceProps> = {}

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      Component = href.type
      componentProps = { ...listenerProps, ...href.props }
    } else {
      Component = 'a'
      componentProps = { ...listenerProps, href }
    }

    return (
      <Fragment>
        <Item
          className={classNames}
          chevron={chevronDisplay}
          aria-selected={selected}
          highlighted={highlighted}
          narrow={narrow}
          leftAddon={leftAddon ? leftAddon : null}
          leftTitle={label ? label : null}
          leftBody={subLabel ? subLabel : null}
          rightAddon={rightAddon}
          tag={disabled ? <div aria-disabled="true" /> : <Component {...componentProps} />}
        />
        <style jsx>{style}</style>
      </Fragment>
    )
  }
}

export default ItemChoice
