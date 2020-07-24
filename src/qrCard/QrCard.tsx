import React from 'react'
import cc from 'classcat'

import { Card } from '../_internals/card'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { ItemInfo } from '../itemInfo'
import { SubHeader } from '../subHeader'

export interface QrCardProps extends A11yProps {
  readonly className?: string
  readonly imageUrl: string
  readonly itemMainTitle?: string
  readonly itemMainInfo?: string
  readonly title: string
}

export const QrCard = (props: QrCardProps) => {
  const { className, itemMainTitle, imageUrl, itemMainInfo, title } = props
  const a11yAttrs = pickA11yProps<QrCardProps>(props)

  return (
    <Card className={cc(['kirk-qrCard', className])}>
      <SubHeader>{title}</SubHeader>
      <img src={imageUrl} {...a11yAttrs} alt={a11yAttrs['aria-label']} />
      {(itemMainTitle || itemMainInfo) && (
        <ItemInfo mainTitle={itemMainTitle} mainInfo={itemMainInfo} />
      )}
    </Card>
  )
}
