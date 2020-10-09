import React from 'react'

import { render, screen } from '@testing-library/react'

import { Breadcrumb, CrumbProps } from './index'

const crumb1: CrumbProps = {
  url: 'http://www.goominet.com/unspeakable-vault/',
  name: 'Fhtagn',
}

const crumb2: CrumbProps = {
  url: 'http://www.goominet.com/unspeakable-vault/vault/1/',
  name: 'Cthulhu',
}

describe('Breadcrumb', () => {
  it('renders with 1 link and no separator', () => {
    render(<Breadcrumb crumbs={[crumb1]} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.getByRole('list')).toHaveTextContent('Fhtagn')
  })
  it('renders with 2 links and a separator', () => {
    render(<Breadcrumb crumbs={[crumb1, crumb2]} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByRole('list')).toHaveTextContent('Fhtagn › Cthulhu')
  })
})
