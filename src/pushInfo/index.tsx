import React from 'react'
import cc from 'classcat'

import prefix from '_utils'
import style from 'pushInfo/style'

interface PushInfoProps {
  readonly className?: Classcat.Class
  readonly icon?: React.ReactNode
  readonly headline: string
  readonly content?: string
}

const PushInfo = ({ className, icon, headline, content }: PushInfoProps) => (
  <div className={cc(['kirk-pushInfo', className])}>
    {icon && (
      <div className="kirk-pushInfo-icon">{icon}</div>
    )
    }
    <div>
      <h2 className={cc([
        'kirk-pushInfo-headline',
        { 'kirk-pushInfo-headline--standalone': !content },
      ])}>
        {headline}
      </h2>
      {content && <p className="kirk-pushInfo-content">{content}</p>}
    </div>
    <style jsx>{style}</style>
  </div>
)

export default PushInfo

