import React from 'react'
import cc from 'classcat'

import style from './style'
import Text, { TextTagType, TextDisplayType } from 'text'

export interface ItemProps {
  readonly chevron?: React.ReactNode
  readonly className?: Classcat.Class
  readonly narrow?: boolean
  readonly highlighted?: boolean
  readonly leftTitle?: string
  readonly leftTitleDisplay?: TextDisplayType
  readonly leftBody?: string
  readonly leftBodyDisplay?: TextDisplayType
  readonly leftAddon?: React.ReactNode
  readonly rightTitle?: string
  readonly rightTitleDisplay?: TextDisplayType
  readonly rightBody?: string
  readonly rightBodyDisplay?: TextDisplayType
  readonly rightAddon?: React.ReactNode
  readonly tag?: JSX.Element
}

const Item = ({
  chevron,
  className,
  highlighted,
  narrow,
  leftTitle,
  leftBody,
  leftAddon,
  rightTitle,
  rightTitleDisplay = TextDisplayType.TITLE,
  rightBody,
  rightBodyDisplay = TextDisplayType.BODY,
  rightAddon,
  tag = <div />,
}: ItemProps) => {
  const Tag = tag.type
  const hasRightText = rightTitle || rightBody

  return (
    <Tag
      {...tag.props}
      className={cc([
        'kirk-item',
        {
          'kirk-item--highlighted': highlighted,
          'kirk-item--narrow': narrow,
        },
        className,
      ])}
    >
      {leftAddon && <div className="kirk-item-leftAddon">{leftAddon}</div>}
      <div className="kirk-item-leftText">
        {leftTitle && (
          <Text
            className={cc(['kirk-item-title', { 'kirk-item-title--withBody': leftBody }])}
            display={highlighted ? TextDisplayType.TITLESTRONG : TextDisplayType.TITLE}
            tag={TextTagType.DIV}
          >
            {leftTitle}
          </Text>
        )}
        {leftBody && (
          <Text className="kirk-item-body" display={TextDisplayType.BODY} tag={TextTagType.DIV}>
            {leftBody}
          </Text>
        )}
      </div>
      {hasRightText && (
        <div className="kirk-item-rightText">
          {rightTitle && (
            <Text
              className={cc(['kirk-item-title', { 'kirk-item-title--withBody': rightBody }])}
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
      {chevron && <div className="kirk-item-chevron">{chevron}</div>}
      <style jsx>{style}</style>
    </Tag>
  )
}

export default Item
