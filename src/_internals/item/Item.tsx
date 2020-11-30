import React from 'react'
import cc from 'classcat'

import { color } from '../../_utils/branding'
import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { Button } from '../../button/Button'
import { ChevronIcon } from '../../icon/chevronIcon'
import { NormalizeProps } from '../../layout/layoutNormalizer'
import { Text, TextDisplayType, TextTagType } from '../../text'

export enum ItemStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export type ItemProps = A11yProps &
  NormalizeProps &
  Readonly<{
    chevron?: boolean
    className?: string
    href?: string | JSX.Element
    highlighted?: boolean
    isClickable?: boolean
    isWrappable?: boolean
    leftTitle?: React.ReactNode
    leftTitleButtonAddon?: React.ReactElement<Button>
    leftTitleDisplay?: TextDisplayType
    leftTitleColor?: string
    leftBody?: string | React.ReactNode
    leftBodyDisplay?: TextDisplayType
    leftBodyColor?: string
    leftBodyAnnotation?: React.ReactNode
    leftBodyAnnotationDisplay?: TextDisplayType
    leftBodyAnnotationColor?: string
    leftAddon?: React.ReactNode
    rightTitle?: string | JSX.Element
    rightTitleDisplay?: TextDisplayType
    rightTitleStrikeThrough?: boolean
    rightTitleAriaProps?: A11yProps
    rightTitleColor?: string
    rightBody?: React.ReactNode
    rightBodyDisplay?: TextDisplayType
    rightBodyColor?: string
    rightAddon?: React.ReactNode
    tag?: JSX.Element
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
    hideHoverBackground?: boolean
    disabled?: boolean
  }>

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
    isWrappable,
    leftTitle,
    leftTitleButtonAddon,
    rightTitleStrikeThrough,
    rightTitleAriaProps,
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

  if (Tag === 'button') {
    // The code below make sure that if we use a HTML button, a proper type='button' or
    // type='submit' is added. type='button' is the default.
    // This type=button is needed to make sure non-submit buttons are not activated when
    // submitting forms.
    // See: https://stackoverflow.com/questions/4763638/enter-triggers-button-click
    const buttonType = tag.props.type || 'button'
    tagProps = { ...tagProps, type: buttonType }
  }

  const hasRightText = rightTitle || rightBody

  const getTextColor = (textColor: string) => (disabled ? color.gray : textColor)

  const getLeftTitle = (value: React.ReactNode): React.ReactNode => {
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
          'kirk-item--wrappable': isWrappable,
          'kirk-item--hideHoverBackground': hideHoverBackground,
        },
        className,
      ])}
      {...a11yAttrs}
    >
      <span className="kirk-item-leftWrapper">
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
              {...rightTitleAriaProps}
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
