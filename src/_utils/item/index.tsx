import React from 'react'
import cc from 'classcat'

import style from './style'
import Text, { TextTagType, TextDisplayType } from 'text'

export interface ItemProps {
  readonly chevron?: React.ReactNode
  readonly className?: Classcat.Class
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
  const Tag = tag.type
  const hasRightText = rightTitle || rightBody

  return (
    <Tag {...tag.props} className={cc(['kirk-item', className])}>
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
      {chevron && <div className="kirk-item-chevron">{chevron}</div>}
      <style jsx>{style}</style>
    </Tag>
  )
}

export default Item
