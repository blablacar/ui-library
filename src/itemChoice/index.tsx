import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import prefix from '_utils'
import Loader from 'loader'
import style from './style'

import Item, { ItemProps } from '_utils/item'

export enum ItemChoiceStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
  CHECKED = 'checked',
}

interface TypeProps {
  readonly className?: Classcat.Class,
  readonly href?: string,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void,
}

export interface ItemChoiceProps extends ItemProps {
  readonly className?: Classcat.Class,
  readonly href?: string | JSX.Element,
  readonly key?: string | number,
  readonly label?: string,
  readonly subLabel?: string,
  readonly highlighted?: boolean,
  readonly selected?: boolean,
  readonly status?: ItemChoiceStatus,
  readonly onDoneAnimationEnd?: () => void,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void,
}

class ItemChoice extends PureComponent <ItemChoiceProps> {
  static defaultProps: Partial<ItemChoiceProps> = {
    highlighted: false,
    selected: false,
    status: ItemChoiceStatus.DEFAULT,
    href: '',
  }

  static STATUS = ItemChoiceStatus

  render() {
    const {
      className, highlighted, selected, status,
      onClick, onBlur, onFocus, onMouseDown, href, label, subLabel, leftAddon, rightAddon,
      onDoneAnimationEnd, key,
    } = this.props

    const classNames = cc([prefix({
      itemChoice: true,
      'itemChoice--highlighted': highlighted,
    }), className])

    const rightIcon = status !== ItemChoiceStatus.DEFAULT ?
      <Loader
        className={cc(prefix({ chevron: true }))}
        size={24}
        onDoneAnimationEnd={onDoneAnimationEnd}
        inline
        done={status === ItemChoiceStatus.CHECKED}
      /> :
      null

    let component: tag
    let typeProps: TypeProps

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      component = href.type
      typeProps = {
        ...href.props,
        onClick,
        onFocus,
        onBlur,
        onMouseDown,
        className: cc([href.props.className, classNames]),
      }
    } else if (!isEmpty(href)) {
      component = 'a'
      typeProps = { onClick, onFocus, onBlur, onMouseDown, href, className: classNames }
    } else {
      component = 'li'
      typeProps = { onClick, onFocus, onBlur, onMouseDown, className: classNames }
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
      <Item
        chevron
        key={key}
        leftAddon={leftAddon ? leftAddon : null}
        leftTitle={label}
        leftBody={subLabel ? subLabel : null}
        rightAddon={rightIcon}
        tag={String(component)}
        {...typeProps}
      />
    )
  }
}

export default ItemChoice
