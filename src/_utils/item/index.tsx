import React from 'react'
import cc from 'classcat'

import style from './style'
import Text, { TextTagType, TextDisplayType } from 'text'
import ChevronIcon from 'icon/chevronIcon'

export interface ItemProps {
  readonly chevron?: boolean
  readonly className?: Classcat.Class
  readonly href?: string | JSX.Element
  readonly highlighted?: boolean
  readonly leftTitle?: string
  readonly leftTitleDisplay?: TextDisplayType
  readonly leftBody?: string | React.ReactNode
  readonly leftBodyDisplay?: TextDisplayType
  readonly leftAddon?: React.ReactNode
  readonly rightTitle?: string
  readonly rightTitleDisplay?: TextDisplayType
  readonly rightBody?: string | React.ReactNode
  readonly rightBodyDisplay?: TextDisplayType
  readonly rightAddon?: React.ReactNode
  readonly tag?: JSX.Element
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
}

const Item = ({
  chevron,
  className,
  href,
  onClick,
  onBlur,
  onFocus,
  onMouseDown,
  highlighted,
  leftTitle,
  leftTitleDisplay = TextDisplayType.TITLE,
  leftBody,
  leftBodyDisplay = TextDisplayType.BODY,
  leftAddon,
  rightTitle,
  rightTitleDisplay = TextDisplayType.TITLE,
  rightBody,
  rightBodyDisplay = TextDisplayType.BODY,
  rightAddon,
  tag = <div />,
}: ItemProps) => {
  let Tag = tag.type
  let tagProps = tag.props
  if (href) {
    if (typeof href !== 'string') {
      Tag = href.type
      tagProps = { ...tagProps, ...href.props }
    } else {
      Tag = 'a'
    }
  }
  const isClickable = !!href || !!onClick
  const hasRightText = rightTitle || rightBody

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      href={href}
      className={cc([
        'kirk-item',
        {
          'kirk-item--highlighted': highlighted,
          'kirk-item--clickable': isClickable,
        },
        className,
      ])}
    >
      {leftAddon && <div className="kirk-item-leftAddon">{leftAddon}</div>}
      <div className="kirk-item-leftText">
        {leftTitle && (
          <Text
            className={leftBody ? 'kirk-item-title' : null}
            display={leftTitleDisplay}
            tag={TextTagType.DIV}
          >
            {leftTitle}
          </Text>
        )}
        {leftBody && (
          <Text className="kirk-item-body" display={leftBodyDisplay} tag={TextTagType.DIV}>
            {leftBody}
          </Text>
        )}
      </div>
      {hasRightText && (
        <div className="kirk-item-rightText">
          {rightTitle && (
            <Text
              className={rightBody ? 'kirk-item-title' : null}
              display={rightTitleDisplay}
              tag={TextTagType.DIV}
            >
              {rightTitle}
            </Text>
          )}
          {rightBody && (
            <Text className="kirk-item-body" display={rightBodyDisplay} tag={TextTagType.DIV}>
              {rightBody}
            </Text>
          )}
        </div>
      )}
      {rightAddon && <div className="kirk-item-rightAddon">{rightAddon}</div>}
      {chevron && <div className="kirk-item-rightAddon">{<ChevronIcon />}</div>}
      <style jsx>{style}</style>
    </Tag>
  )
}

export default Item
