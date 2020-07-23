import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { BusIcon } from '../icon/busIcon'
import { CarpoolIcon } from '../icon/carpoolIcon'
import { FilterBar, FilterBarProps } from '.'

const defaultProps: FilterBarProps = {
  ctaText: 'See rides',
  supplyInfo: [
    {
      liquidity: 98,
      icon: CarpoolIcon,
      iconTitle: 'Carpooling',
      ariaLabel: 'Carpooling available',
    },
    {
      liquidity: 12,
      icon: BusIcon,
      iconTitle: 'Bus',
      isDisabled: true,
      ariaLabel: 'Bus available',
    },
  ],
  onClick: () => {},
}

function createProps(props: Partial<FilterBarProps> = {}): FilterBarProps {
  return { ...defaultProps, ...props }
}

describe('FilterBar', () => {
  it('should render icons & liquidity and cta', () => {
    const props = createProps()
    render(<FilterBar {...props} />)
    props.supplyInfo.forEach(supply => {
      const item = screen.getByLabelText(supply.ariaLabel)
      expect(item).toHaveTextContent(String(supply.liquidity))
      const icon = screen.getByTitle(supply.iconTitle)
      expect(icon).toBeInTheDocument()
    })
    expect(screen.getByRole('button', { name: 'See rides' })).toBeInTheDocument()
  })

  it('should call onCick when clicking on the button', () => {
    const props = createProps({ onClick: jest.fn() })
    render(<FilterBar {...props} />)
    fireEvent.click(screen.getByRole('button', { name: 'See rides' }))
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should not call onCick when isLoading', () => {
    const props = createProps({ isLoading: true, onClick: jest.fn() })
    render(<FilterBar {...props} />)
    fireEvent.click(screen.getByRole('button', { name: 'See rides' }))
    expect(props.onClick).not.toHaveBeenCalled()
  })
})
