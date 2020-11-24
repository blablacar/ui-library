import React from 'react'

import { render, screen } from '@testing-library/react'

import { Breadcrumb, CrumbProps, DividerPosition } from './index'

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
  it('renders with 2 links and a separator between them', () => {
    render(<Breadcrumb crumbs={[crumb1, crumb2]} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByRole('list')).toHaveTextContent('Fhtagn › Cthulhu')
  })
  it('renders with no divider ', () => {
    render(<Breadcrumb crumbs={[crumb1]} />)
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })
  it('renders with a divider before', () => {
    const breadcrumb = render(<Breadcrumb crumbs={[crumb1]} divider={DividerPosition.TOP} />)
      .container
    expect(breadcrumb.querySelector('div')).toStrictEqual(breadcrumb.childNodes[0])
    expect(breadcrumb.querySelector('ol')).toStrictEqual(breadcrumb.childNodes[1])
  })
  it('renders with a divider after', () => {
    const breadcrumb = render(<Breadcrumb crumbs={[crumb1]} divider={DividerPosition.BOTTOM} />)
      .container
    expect(breadcrumb.querySelector('ol')).toStrictEqual(breadcrumb.childNodes[0])
    expect(breadcrumb.querySelector('div')).toStrictEqual(breadcrumb.childNodes[1])
  })
})
