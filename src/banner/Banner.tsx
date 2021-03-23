import React from 'react'

import { QrCard, QrCardProps } from '../qrCard'
import { BannerElements, StyledBanner } from './Banner.style'

type Copy = Readonly<{ heading: string; paragraph: string }>

type CTALinks = Array<JSX.Element>
type CTAButtons = Array<JSX.Element>

export type BannerProps = Readonly<{
  copy: Copy
  actions?: CTALinks | CTAButtons
  qrcode?: QrCardProps
}>

export const Banner = ({ copy, actions, qrcode }: BannerProps) => (
  <StyledBanner>
    <BannerElements.Content>
      <BannerElements.Body>
        <BannerElements.Heading as="h1">{copy.heading}</BannerElements.Heading>
        <BannerElements.Paragraph as="p">{copy.paragraph}</BannerElements.Paragraph>
        {actions && <BannerElements.Actions>{actions}</BannerElements.Actions>}
      </BannerElements.Body>
      <BannerElements.Media>
        {qrcode && (
          <BannerElements.Frame>
            <QrCard imageUrl={qrcode.imageUrl} mainTitle={qrcode.mainTitle} />
          </BannerElements.Frame>
        )}
      </BannerElements.Media>
    </BannerElements.Content>
  </StyledBanner>
)
