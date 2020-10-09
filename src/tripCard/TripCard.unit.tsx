import React from 'react'

import { render, screen } from '@testing-library/react'

import { WarningIcon } from '../icon/warningIcon'
import { TripCard, TripCardProps, User } from './TripCard'

function createPassengers(count: number): User[] {
  const passengers: User[] = []

  for (let index = 0; index < count; index += 1) {
    passengers.push({
      avatarUrl: '//placehold.it/500x500',
      firstName: `Jane ${index}`,
    })
  }

  return passengers
}

function createProps(props: Partial<TripCardProps> = {}): TripCardProps {
  return {
    href: '#',
    itinerary: [
      {
        mainLabel: 'Paris',
        subLabel: 'Porte de Vincennes',
        time: '09:00',
        isoDate: '2017-12-11T09:00',
        distanceFromPoint: '1,5km',
      },
      {
        mainLabel: 'Bordeaux',
        subLabel: 'Gare Bordeaux Saint-Jean',
        time: '12:00',
        isoDate: '2017-12-11T12:00',
        distanceFromPoint: '8km',
      },
    ],
    ...props,
  }
}

describe('TripCard', () => {
  it('should have aria-label attribute on the wrapper link', () => {
    const props = createProps({ 'aria-label': 'Trip label' })
    render(<TripCard {...props} />)

    expect(screen.getByRole('link', { name: 'Trip label' })).toBeInTheDocument()
  })

  it('Should have the test class', () => {
    const props = createProps({ className: 'test' })
    const { container } = render(<TripCard {...props} />)
    expect(container.firstChild).toHaveClass('test')
  })

  it('Should use the right element (specified in href prop)', () => {
    const props = createProps({ href: <div data-testid="href" /> })
    render(<TripCard {...props} />)
    expect(screen.getByTestId('href')).toBeInTheDocument()
  })

  it('Should not have the ladies only icon by default', () => {
    const props = createProps({
      titles: { ladiesOnly: 'Ladies only title' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByText('Ladies only title')).not.toBeInTheDocument()
  })

  it('Should have the ladies only icon', () => {
    const props = createProps({
      flags: { ladiesOnly: true },
      titles: { ladiesOnly: 'Ladies only title' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Ladies only title')).toBeInTheDocument()
  })

  it('Should not have the alone in the back icon by default', () => {
    const props = createProps({
      titles: { aloneInTheBack: 'Alone in the back' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByText('Alone in the back')).not.toBeInTheDocument()
  })

  it('Should have the alone in the back icon', () => {
    const props = createProps({
      flags: { aloneInTheBack: true },
      titles: { aloneInTheBack: 'Alone in the back' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Alone in the back')).toBeInTheDocument()
  })

  it('Should not have the max two icon by default', () => {
    const props = createProps({
      titles: { maxTwo: 'Max two' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByText('Max two')).not.toBeInTheDocument()
  })

  it('Should have the max two icon', () => {
    const props = createProps({
      flags: { maxTwo: true },
      titles: { maxTwo: 'Max two' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Max two')).toBeInTheDocument()
  })

  it('Should not have the auto approval icon by default', () => {
    const props = createProps({
      titles: { autoApproval: 'Auto approval' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByText('Auto approval')).not.toBeInTheDocument()
  })

  it('Should have the auto approval icon', () => {
    const props = createProps({
      flags: { autoApproval: true },
      titles: { autoApproval: 'Auto approval' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Auto approval')).toBeInTheDocument()
  })

  it('Should not render meta tags by default', () => {
    const props = createProps()
    render(<TripCard {...props} />)
    expect(screen.queryByRole('meta')).not.toBeInTheDocument()
  })

  it('Should render meta tags if provided', () => {
    const props = createProps({ metaUrl: 'blablacar.fr' })
    const { container } = render(<TripCard {...props} />)

    expect(
      container.querySelector('meta[itemprop="url"][content="blablacar.fr"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[itemprop="name"][content="Paris → Bordeaux"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[itemprop="startDate"][content="2017-12-11T09:00"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[itemprop="endDate"][content="2017-12-11T12:00"]'),
    ).toBeInTheDocument()
  })

  it("Should show the driver's name", () => {
    const props = createProps({
      driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Jane')).toBeInTheDocument()
  })

  it("Should show the driver's avatar", () => {
    const props = createProps({
      driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      },
    })

    const { container } = render(<TripCard {...props} />)
    expect(container.querySelector('img[src="//placehold.it/500x500"]')).toBeInTheDocument()
  })

  it("Should show the driver's ratings", () => {
    const props = createProps({
      driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
        rating: '3 stars',
      },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('3 stars')).toBeInTheDocument()
  })

  it("Should render driver's sub text", () => {
    const props = createProps({
      driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'BlaBlaCar',
        subText: '3 changes',
      },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('3 changes')).toBeInTheDocument()
  })

  it('Should render 3 passengers', () => {
    const props = createProps({ passengers: createPassengers(3) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d$/)).toHaveLength(3)
  })

  it('Should render 5 passengers', () => {
    const props = createProps({ passengers: createPassengers(5) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d$/)).toHaveLength(5)
  })

  it('Should render 4 passengers and a +6 icon', () => {
    const props = createProps({ passengers: createPassengers(10) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d+$/)).toHaveLength(4)
    expect(screen.getByText('+6')).toBeInTheDocument()
  })

  it('Should render status information', () => {
    const props = createProps({ statusInformation: { icon: <WarningIcon />, text: 'Warning!' } })
    render(<TripCard {...props} />)
    expect(screen.getByText('Warning!')).toBeInTheDocument()
  })

  it('Should render badge', () => {
    const props = createProps({ badge: 'Cheapest!' })
    render(<TripCard {...props} />)
    expect(screen.getByText('Cheapest!')).toBeInTheDocument()
  })

  it('Should render title', () => {
    const props = createProps({ title: 'Sun 3 march, 18:00' })
    render(<TripCard {...props} />)
    expect(screen.getByText('Sun 3 march, 18:00')).toBeInTheDocument()
  })
})
