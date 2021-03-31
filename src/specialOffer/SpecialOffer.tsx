import React from 'react'

import { Button, ButtonStatus } from '../button'
import { Disclaimer } from '../disclaimer'
import { InfoIcon } from '../icon/infoIcon'
import { Paragraph } from '../paragraph'
import { SubHeader } from '../subHeader'
import {
  StyledSpecialOffer,
  StyledSpecialOfferButton,
  StyledSpecialOfferButtons,
  StyledSpecialOfferContent,
  StyledSpecialOfferFigure,
  StyledSpecialOfferText,
} from './SpecialOffer.style'

type Picture = Readonly<{
  url: string
  alt: string
}>

type Link = Readonly<{
  label: string
  url: string
}>

type Button = Readonly<{
  label: string
  onClick: () => void
}>

type CTALinks = Array<Link>
type CTAButtons = Array<Button>

export type SpecialOfferProps = Readonly<{
  picture: Picture
  title: string
  description: string
  informationLink?: Link
  actions?: CTALinks | CTAButtons
}>

export const SpecialOffer = (props: SpecialOfferProps) => {
  const { picture, title, description, informationLink, actions = [] } = props

  return (
    <StyledSpecialOffer>
      <StyledSpecialOfferContent>
        <StyledSpecialOfferFigure>
          <img src={picture.url} alt={picture.alt} />
        </StyledSpecialOfferFigure>
      </StyledSpecialOfferContent>
      <StyledSpecialOfferContent>
        <StyledSpecialOfferText>
          <SubHeader>{title}</SubHeader>
          <Paragraph>{description}</Paragraph>
          {informationLink && (
            <Disclaimer icon={<InfoIcon />}>
              <Button status={ButtonStatus.UNSTYLED} href={informationLink.url}>
                {informationLink.label}
              </Button>
            </Disclaimer>
          )}
        </StyledSpecialOfferText>
        <StyledSpecialOfferButtons>
          {(actions as Array<Link | Button>).map(action => (
            <StyledSpecialOfferButton key={action.label}>
              {'onClick' in action ? (
                <Button onClick={action.onClick}>{action.label}</Button>
              ) : (
                <Button href={action.url}>{action.label}</Button>
              )}
            </StyledSpecialOfferButton>
          ))}
        </StyledSpecialOfferButtons>
      </StyledSpecialOfferContent>
    </StyledSpecialOffer>
  )
}
