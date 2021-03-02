import React, { useEffect } from 'react'
import cc from 'classcat'

import {
  animationDelay,
  animationDuration,
  StyledPushInfo,
  StyledPushInfoWrapper,
} from './PushInfo.style'

export type PushInfoProps = Readonly<{
  className?: string
  icon?: React.ReactNode
  headline: string
  content?: string
  onAnimationEnd?: Function
}>

export const PushInfo = ({
  className,
  icon,
  headline,
  content,
  onAnimationEnd,
}: PushInfoProps): JSX.Element => {
  useEffect(() => {
    if (onAnimationEnd) {
      setTimeout(onAnimationEnd, animationDuration + animationDelay)
    }
  }, [onAnimationEnd])

  return (
    <StyledPushInfoWrapper className={cc(['kirk-pushInfo', className])}>
      <StyledPushInfo>
        {icon && <div className="kirk-pushInfo-icon">{icon}</div>}
        <div>
          <h2
            className={cc([
              'kirk-pushInfo-headline',
              { 'kirk-pushInfo-headline--standalone': !content },
            ])}
          >
            {headline}
          </h2>
          {content && <p className="kirk-pushInfo-content">{content}</p>}
        </div>
      </StyledPushInfo>
    </StyledPushInfoWrapper>
  )
}
