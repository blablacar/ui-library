import React from 'react'

import { render, screen } from '@testing-library/react'

import { FaqItemProps, FaqSection, FaqSectionProps } from './index'

const defaultItems: Array<FaqItemProps> = [
  {
    question: 'Question 1',
    answer: `${'Answer to the question '.repeat(30)}`,
  },
  {
    question: 'Question 2',
    answer: 'A short answer.',
  },
  {
    question: 'Question 3',
    answer: `${'Answer to the question '.repeat(50)}`,
  },
  {
    question: 'Question 4',
    answer: `${'Another answer '.repeat(50)}`,
  },
]

const minimalProps: FaqSectionProps = {
  items: defaultItems,
  expandLabel: 'Read more',
}

const allProps: FaqSectionProps = {
  ...minimalProps,
  mainTitle: 'section title',
  buttonLabel: 'button label',
  buttonHref: 'https://blablacar.com',
}

describe('FaqSection', () => {
  it('should render FaqSection section with minimal props', () => {
    render(<FaqSection {...minimalProps} />)

    expect(screen.getByRole('heading', { name: 'Question 1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Question 2' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Question 3' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Question 4' })).toBeInTheDocument()
    expect(screen.getAllByText('Read more')).toHaveLength(3)

    expect(screen.queryByRole('heading', { name: 'section title' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'button label' })).not.toBeInTheDocument()
  })

  it('should render FaqSection section with all props', () => {
    render(<FaqSection {...allProps} />)

    expect(screen.getByRole('heading', { name: 'section title' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'button label' })).toBeInTheDocument()
  })
})
