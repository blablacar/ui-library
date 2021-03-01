import React from 'react'

import { render, screen } from '@testing-library/react'

import { MeetingPointIcon } from '../icon/meetingPoint'
import { Address } from './Address'
import { Distances, Proximity, ProximityDisplay } from './Proximity'

const CustomLinkElement = ({ href }: Readonly<{ href: string }>): JSX.Element => <a href={href} />

describe('Address', () => {
  it('Should render the list item', () => {
    render(<Address label="Paris" time="09:00" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(screen.getByText('09:00')).toBeInTheDocument()
  })

  it('Should render sublabel', () => {
    render(<Address label="6 rue ménars" time="09:00" subLabel="Paris" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('6 rue ménars')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(screen.getByText('09:00')).toBeInTheDocument()
  })

  it('Should use a11y attributes', () => {
    render(<Address label="Paris" time="09:00" aria-label="Departure at 09:00 from Paris" />)
    expect(
      screen.getByRole('listitem', { name: 'Departure at 09:00 from Paris' }),
    ).toBeInTheDocument()
  })

  it('Should render a link', () => {
    render(<Address label="Paris" time="09:00" href="https://blablacar.fr" />)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://blablacar.fr')
  })

  it('Should render a custom element as link', () => {
    render(
      <Address
        label="Paris"
        time="09:00"
        href={<CustomLinkElement href="https://blablacar.ru" />}
      />,
    )
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://blablacar.ru')
  })

  it('Should render proximity pills', () => {
    const proximity = <Proximity value={Distances.FAR} title="You'll have to take transports" />
    render(<Address label="6 rue ménars" time="09:00" proximity={proximity} />)
    expect(screen.getByText("You'll have to take transports")).toBeInTheDocument()
  })

  it('Should render proximity label', () => {
    const proximity = (
      <Proximity
        value={Distances.CLOSE}
        title="You'll get there by foot"
        display={ProximityDisplay.LABEL}
      />
    )
    render(<Address label="6 rue ménars" time="09:00" proximity={proximity} />)
    expect(screen.getByText("You'll get there by foot")).toBeInTheDocument()
  })

  it('Should render a custom icon', () => {
    render(<Address label="6 rue ménars" time="09:00" bullet={<MeetingPointIcon title="Here" />} />)
    expect(screen.getByText('Here')).toBeInTheDocument()
  })
})
