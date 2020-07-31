import React, { Component } from 'react'
import cc from 'classcat'

import { animationDelay, animationDuration, StyledPushInfo } from './PushInfo.style'

export interface PushInfoProps {
  readonly className?: string
  readonly icon?: React.ReactNode
  readonly headline: string
  readonly content?: string
  readonly onAnimationEnd?: Function
}

export class PushInfo extends Component<PushInfoProps> {
  componentDidMount() {
    if (this.props.onAnimationEnd) {
      setTimeout(this.props.onAnimationEnd, animationDuration + animationDelay)
    }
  }

  render() {
    const { className, icon, headline, content } = this.props
    return (
      <StyledPushInfo className={cc(['kirk-pushInfo', className])}>
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
    )
  }
}
