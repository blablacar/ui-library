import React from 'react'
import cc from 'classcat'

import { Card } from '../_internals/card'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { ItemInfo } from '../itemInfo'
import { SubHeader } from '../subHeader'
import { StyledQrCard } from './QrCard.style'

export type QrCardProps = A11yProps &
  Readonly<{
    className?: string
    imageUrl: string
    itemMainTitle?: string
    itemMainInfo?: string
    mainTitle: string
  }>

export const QrCard = (props: QrCardProps) => {
  const { className, itemMainTitle, imageUrl, itemMainInfo, mainTitle } = props
  const a11yAttrs = pickA11yProps<QrCardProps>(props)

  return (
    <StyledQrCard>
      <Card className={cc(['kirk-qrCard', className])}>
        <SubHeader>{mainTitle}</SubHeader>
        <img src={imageUrl} {...a11yAttrs} alt={a11yAttrs['aria-label']} />
        {(itemMainTitle || itemMainInfo) && (
          <ItemInfo mainTitle={itemMainTitle} mainInfo={itemMainInfo} />
        )}
      </Card>
    </StyledQrCard>
  )
}
