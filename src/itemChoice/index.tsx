import React, { PureComponent, Fragment, Component } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

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
  readonly href?: string | JSX.Element
  readonly label?: string
  readonly subLabel?: string
  readonly highlighted?: boolean
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

export interface ComponentProps {
  readonly href?: string
  readonly role?: string
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
    status: ItemChoiceStatus.DEFAULT,
    href: '',
  }

  static STATUS = ItemChoiceStatus

  render() {
    const {
      className,
      highlighted,
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
        'kirk-itemChoice--highlighted': highlighted,
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
    let componentProps: ComponentProps = {}

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      Component = href.type
      componentProps = {
        ...href.props,
        onClick,
        onFocus,
        onBlur,
        onMouseDown,
      }
    } else if (!isEmpty(href)) {
      componentProps = { onClick, onFocus, onBlur, onMouseDown, href }
      Component = 'a'
    } else {
      componentProps = { onClick, onFocus, onBlur, onMouseDown }
      Component = 'li'
    }

    return (
      // <Component
      //   role="option"
      //   key={key}
      //   aria-selected={selected}
      //   {...typeProps}
      // >
      //   { leftAddon && (
      //     <div className={cc(prefix({ 'itemChoice-leftAddon': true }))}>{leftAddon}</div>
      //     )
      //   }
      //   {label && (
      //     <div>
      //       <div className={cc(prefix({ 'itemChoice-label': true }))}>{label}</div>
      //       {subLabel && (
      //         <div className={cc(prefix({ 'itemChoice-subLabel': true }))}>{subLabel}</div>
      //       )}
      //     </div>
      //   )}
      //   {children}
      //   <div className="kirk-itemChoice-right">
      //     {rightAddon && (
      //       <div className={cc(prefix({ 'itemChoice-rightAddon': true }))}>{rightAddon}</div>
      //     )}
      //     {rightIcon}
      //   </div>
      //   <style jsx>{style}</style>
      // </Component>
      <Fragment>
        <Item
          className={classNames}
          chevron={chevronDisplay}
          aria-selected={selected}
          leftAddon={leftAddon ? leftAddon : null}
          leftTitle={label ? label : null}
          leftBody={subLabel ? subLabel : null}
          rightAddon={rightAddon}
          tag={<Component {...componentProps} role="option" />}
        />
        <style jsx>{style}</style>
      </Fragment>
    )
  }
}

export default ItemChoice
