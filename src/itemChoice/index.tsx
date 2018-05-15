import React, { PureComponent } from 'react'
import cc from 'classcat'
import prefix from '_utils'
import Button from 'button'
import ChevronIcon from 'icon/chevronIcon'
import Loader from 'loader'
import { transition } from '_utils/branding'
import style from './style'

interface TypeProps {
  readonly className?: Classcat.Class,
  readonly href?: string,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void,
}

export interface ItemChoiceProps {
  readonly className?: Classcat.Class,
  readonly href?: string | JSX.Element,
  readonly key?: string | number,
  readonly label?: string,
  readonly subLabel?: string,
  readonly children?: React.ReactNode,
  readonly leftAddon?: React.ReactNode,
  readonly rightAddon?: React.ReactNode,
  readonly loading?: boolean,
  readonly highlighted?: boolean,
  readonly selected?: boolean,
  readonly valid?: boolean,
  readonly validated?: () => void,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void,
}

class ItemChoice extends PureComponent <ItemChoiceProps> {
  render() {
    const {
      children, className, loading = false, highlighted = false, selected = false, valid = false,
      onClick, onBlur, onFocus, onMouseDown, href = '', label, subLabel, leftAddon, rightAddon,
      validated, key,
    } = this.props
    const classNames = cc([prefix({
      itemChoice: true,
      'itemChoice--highlighted': highlighted,
      'itemChoice--withSubLabel': !!subLabel,
    }), className])

    let rightIcon = <ChevronIcon className={cc(prefix({ chevron: true }))} />

    if (loading) {
      rightIcon = <Loader className={cc(prefix({ chevron: true }))} size={24} inline />
    }

    if (valid) {
      rightIcon = <Button
        className={cc(prefix({ 'itemChoice-checkmark': true }))}
        status={Button.STATUS.CHECKED}
        validated={validated}
      />
    }

    let Component: tag
    let typeProps: TypeProps

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      Component = href.type
      typeProps = {
        ...href.props,
        onClick,
        onFocus,
        onBlur,
        onMouseDown,
        className: cc([href.props.className, classNames]),
      }
    } else if (href.length > 0) {
      Component = 'a'
      typeProps = { onClick, onFocus, onBlur, onMouseDown, href, className: classNames }
    } else {
      Component = 'li'
      typeProps = { onClick, onFocus, onBlur, onMouseDown, className: classNames }
    }

    return (
      <Component
        role="option"
        key={key}
        aria-selected={selected}
        {...typeProps}
      >
        { leftAddon && (
          <div className={cc(prefix({ 'itemChoice-leftAddon': true }))}>{leftAddon}</div>
          )
        }
        {label && (
          <div>
            <div className={cc(prefix({ 'itemChoice-label': true }))}>{label}</div>
            {subLabel && (
              <div className={cc(prefix({ 'itemChoice-subLabel': true }))}>{subLabel}</div>
            )}
          </div>
        )}
        {children}
        {rightAddon && (
          <div className={cc(prefix({ 'itemChoice-rightAddon': true }))}>{rightAddon}</div>
        )}
        {rightIcon}
        <style jsx>{style}</style>
      </Component>
    )
  }
}

export default ItemChoice
