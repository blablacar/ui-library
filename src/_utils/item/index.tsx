import React from 'react'
import cc from 'classcat'

import style from './style'
import Text, { TextTagType, TextDisplayType } from 'text'
import ChevronIcon from 'icon/chevronIcon'

export interface ItemProps {
  readonly chevron?: boolean,
  readonly className?: Classcat.Class,
  readonly leftTitle?: string,
  readonly leftTitleDisplay?: TextDisplayType,
  readonly leftBody?: string,
  readonly leftBodyDisplay?: TextDisplayType,
  readonly leftAddon?: React.ReactNode,
  readonly rightTitle?: string,
  readonly rightTitleDisplay?: TextDisplayType,
  readonly rightBody?: string,
  readonly rightBodyDisplay?: TextDisplayType,
  readonly rightAddon?: React.ReactNode,
  readonly tag?: string,
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
  tag = 'div',
}:ItemProps) => {
  const Tag = tag
  const baseClassName = 'kirk-item'
  const hasRightText = rightTitle || rightBody

  return (
    <Tag
      className={cc([baseClassName, className])}
    >
      { leftAddon && (
          <div className="kirk-item-leftAddon">{leftAddon}</div>
        )
      }
      <div className="kirk-item-leftText">
        { leftTitle && (
          <Text
            className={leftBody ? 'kirk-item-title' : null}
            display={leftTitleDisplay}
            tag={TextTagType.DIV}
          >
            {leftTitle}
          </Text>
        )}
        { leftBody && (
          <Text
            className="kirk-item-body"
            display={leftBodyDisplay}
            tag={TextTagType.DIV}
          >
            {leftBody}
          </Text>
        )}
      </div>
      { hasRightText && (
        <div className="kirk-item-rightText">
          { rightTitle && (
            <Text
              className={rightBody ? 'kirk-item-title' : null}
              display={rightTitleDisplay}
              tag={TextTagType.DIV}
            >
              {rightTitle}
            </Text>
          )}
          { rightBody && (
            <Text
              className="kirk-item-body"
              display={rightBodyDisplay}
              tag={TextTagType.DIV}
            >
              {rightBody}
            </Text>
          )}
        </div>
      )}
      { rightAddon && (
          <div className="kirk-item-rightAddon">{rightAddon}</div>
        )
      }
      { chevron && (
          <div className="kirk-item-rightAddon">{<ChevronIcon />}</div>
        )
      }
      <style jsx>{style}</style>
    </Tag>
  )
}

export default Item
