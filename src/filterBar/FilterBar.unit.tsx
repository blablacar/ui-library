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
      ariaLabel: 'Carpooling',
    },
    {
      liquidity: 12,
      icon: BusIcon,
      isDisabled: true,
      ariaLabel: 'Bus',
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
    props.supplyInfo.map(supply => {
      const item = screen.getByLabelText(supply.ariaLabel)
      expect(item).toHaveTextContent(String(supply.liquidity))
      return null
    })
    expect(screen.getByText('See rides')).toBeInTheDocument()
  })

  it('should call onCick when clicking on the button', () => {
    const props = createProps({ onClick: jest.fn() })
    render(<FilterBar {...props} />)
    fireEvent.click(screen.getByText('See rides'))
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should not call onCick when isLoading', () => {
    const props = createProps({ isLoading: true, onClick: jest.fn() })
    render(<FilterBar {...props} />)
    fireEvent.click(screen.getByText('See rides'))
    expect(props.onClick).not.toHaveBeenCalled()
  })
})
