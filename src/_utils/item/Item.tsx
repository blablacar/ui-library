import React from 'react'
import cc from 'classcat'

import { Button } from '../../button/Button'
import { ChevronIcon } from '../../icon/chevronIcon'
import { Text, TextDisplayType, TextTagType } from '../../text'
import { color } from '../branding'
import { A11yProps, pickA11yProps } from '../interfaces'

export enum ItemStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export interface ItemProps extends A11yProps {
  readonly chevron?: boolean
  readonly className?: string
  readonly href?: string | JSX.Element
  readonly highlighted?: boolean
  readonly isClickable?: boolean
  readonly leftTitle?: React.ReactNode
  readonly leftTitleButtonAddon?: React.ReactElement<Button>
  readonly leftTitleDisplay?: TextDisplayType
  readonly leftTitleColor?: string
  readonly leftBody?: string | React.ReactNode
  readonly leftBodyDisplay?: TextDisplayType
  readonly leftBodyColor?: string
  readonly leftBodyAnnotation?: string | React.ReactNode
  readonly leftBodyAnnotationDisplay?: TextDisplayType
  readonly leftBodyAnnotationColor?: string
  readonly leftAddon?: React.ReactNode
  readonly rightTitle?: string | JSX.Element
  readonly rightTitleDisplay?: TextDisplayType
  readonly rightTitleStrikeThrough?: boolean
  readonly rightTitleAriaLabel?: string
  readonly rightTitleColor?: string
  readonly rightBody?: string | React.ReactNode
  readonly rightBodyDisplay?: TextDisplayType
  readonly rightBodyColor?: string
  readonly rightAddon?: React.ReactNode
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  readonly hideHoverBackground?: boolean
  readonly disabled?: boolean
}

export const Item = (props: ItemProps) => {
  const {
    chevron,
    className,
    href,
    onClick,
    onBlur,
    onFocus,
    onMouseDown,
    highlighted,
    isClickable,
    leftTitle,
    leftTitleButtonAddon,
    rightTitleStrikeThrough,
    rightTitleAriaLabel,
    leftTitleDisplay = TextDisplayType.TITLE,
    leftTitleColor,
    leftBody,
    leftBodyDisplay = TextDisplayType.BODY,
    leftBodyColor,
    leftBodyAnnotation,
    leftBodyAnnotationDisplay,
    leftBodyAnnotationColor,
    leftAddon,
    rightTitle,
    rightTitleDisplay = TextDisplayType.TITLE,
    rightTitleColor,
    rightBody,
    rightBodyDisplay = TextDisplayType.BODY,
    rightBodyColor,
    rightAddon,
    tag = <div />,
    ariaLabel,
    hideHoverBackground = false,
    disabled = false,
  } = props
  const a11yAttrs = pickA11yProps<ItemProps>(props)
  let Tag = tag.type
  let tagProps = tag.props
  if (href) {
    if (typeof href !== 'string') {
      Tag = href.type
      tagProps = { ...tagProps, ...href.props }
    } else {
      Tag = 'a'
      tagProps = { href }
    }
  }
  const hasRightText = rightTitle || rightBody

  const getTextColor = (textColor: string) => (disabled ? color.gray : textColor)

  const getLeftTitle = (value: React.ReactNode) => {
    if (React.isValidElement(value)) {
      return leftTitle
    }
    return (
      <Text
        className={leftTitleButtonAddon ? 'kirk-item-title--withButtonAddon' : null}
        display={leftTitleDisplay}
        textColor={getTextColor(leftTitleColor)}
        tag={TextTagType.SPAN}
      >
        {leftTitle}
        {/* In case of a clickable Item don't display the addon button */}
        {!href && leftTitleButtonAddon}
      </Text>
    )
  }

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      className={cc([
        'kirk-item',
        {
          'kirk-item--highlighted': highlighted,
          'kirk-item--clickable': isClickable,
          'kirk-item--hideHoverBackground': hideHoverBackground,
        },
        className,
      ])}
      {...a11yAttrs}
      aria-label={ariaLabel}
    >
      {leftAddon && <span className="kirk-item-leftAddon">{leftAddon}</span>}
      <span className="kirk-item-leftText">
        {leftTitle && getLeftTitle(leftTitle)}
        {leftBody && (
          <Text
            className="kirk-item-body"
            display={leftBodyDisplay}
            textColor={getTextColor(leftBodyColor)}
            tag={TextTagType.SPAN}
          >
            {leftBody}
          </Text>
        )}
        {leftBodyAnnotation && (
          <Text
            className="kirk-item-body-annotation"
            display={leftBodyAnnotationDisplay}
            textColor={getTextColor(leftBodyAnnotationColor)}
            tag={TextTagType.SPAN}
          >
            {leftBodyAnnotation}
          </Text>
        )}
      </span>
      {hasRightText && (
        <span className="kirk-item-rightText">
          {rightTitle && (
            <Text
              className={cc([
                'kirk-item-title',
                {
                  'kirk-item--strikethrough': rightTitleStrikeThrough,
                },
              ])}
              display={rightTitleDisplay}
              textColor={getTextColor(rightTitleColor)}
              tag={TextTagType.DIV}
              ariaLabel={rightTitleAriaLabel}
            >
              {rightTitle}
            </Text>
          )}
          {rightBody && (
            <Text
              className="kirk-item-body"
              display={rightBodyDisplay}
              textColor={getTextColor(rightBodyColor)}
              tag={TextTagType.DIV}
            >
              {rightBody}
            </Text>
          )}
        </span>
      )}
      {rightAddon && <span className="kirk-item-rightAddon">{rightAddon}</span>}
      {chevron && (
        <span className="kirk-item-rightAddon">
          <ChevronIcon iconColor={!isClickable ? color.gray : color.lightMidnightGreen} />
        </span>
      )}
    </Tag>
  )
}
