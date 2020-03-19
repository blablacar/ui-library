import React from 'react'
import cc from 'classcat'

import Card from '_utils/card'
import ItemInfo from 'itemInfo'
import SubHeader from 'subHeader'

export interface QrCardProps {
  readonly ariaLabel?: string
  readonly className?: Classcat.Class
  readonly imageUrl: string
  readonly itemMainTitle?: string
  readonly itemMainInfo?: string
  readonly title: string
}

const QrCard = ({
  ariaLabel,
  className,
  itemMainTitle,
  imageUrl,
  itemMainInfo,
  title,
}: QrCardProps) => (
  <Card className={cc(['kirk-qrCard', className])}>
    <SubHeader>{title}</SubHeader>
    <img src={imageUrl} aria-label={ariaLabel} alt={ariaLabel} />
    {(itemMainTitle || itemMainInfo) && (
      <ItemInfo mainTitle={itemMainTitle} mainInfo={itemMainInfo} />
    )}
  </Card>
)

export default QrCard
