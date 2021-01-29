import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { SpecialOffer } from './SpecialOffer'

const picture = {
  url:
    'https://cdn.blablacar.com/kairos/assets/build/images/blablasure_logo-459e4b952a6cc04b72ea0e12f98ec673.svg',
  alt: 'The BlaBlaSure offer logo',
}

const title = 'A wonderful offer'
const description =
  'Once you receive your first rating, receive a 30€ voucher on Total spring green electricity offer for your home. So come back here to enjoy it !'

const informationLink = {
  label: 'Learn more about the conditions',
  url: 'http://example.com/learn-more',
}

const ctaLink = {
  label: 'Register for option 1!',
  url: 'http://example.com/register1',
}
const ctaLink2 = {
  label: 'Register for option 2!',
  url: 'http://example.com/register2',
}

describe('SpecialOffer', () => {
  it('should display the corresponding picture', () => {
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        actions={[ctaLink]}
      />,
    )

    expect(screen.getByAltText(picture.alt)).toBeInTheDocument()
    expect(screen.getByAltText(picture.alt)).toHaveAttribute('src', picture.url)
  })

  it('should display the title', () => {
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        actions={[ctaLink]}
      />,
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should display the description', () => {
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        actions={[ctaLink]}
      />,
    )

    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('should display the information link', () => {
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        informationLink={informationLink}
        actions={[ctaLink]}
      />,
    )

    expect(screen.getByText(informationLink.label)).toHaveAttribute('href', informationLink.url)
  })

  it('should display the cta links', () => {
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        actions={[ctaLink, ctaLink2]}
      />,
    )

    expect(screen.getByText(ctaLink.label)).toHaveAttribute('href', ctaLink.url)
    expect(screen.getByText(ctaLink2.label)).toHaveAttribute('href', ctaLink2.url)
  })

  it('should display the cta buttons', () => {
    const ctaButton = {
      label: 'Register for option 1!',
      onClick: jest.fn(),
    }
    const ctaButton2 = {
      label: 'Register for option 2!',
      onClick: jest.fn(),
    }
    render(
      <SpecialOffer
        picture={picture}
        title={title}
        description={description}
        actions={[ctaButton, ctaButton2]}
      />,
    )

    fireEvent.click(screen.getByText(ctaButton.label))
    expect(ctaButton.onClick).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText(ctaButton2.label))
    expect(ctaButton2.onClick).toHaveBeenCalledTimes(1)
  })
})
