import React from 'react'

import { render, screen, within } from '@testing-library/react'

import {
  ColumnedContentSection,
  ColumnedContentSectionProps,
  ColumnedSectionContentMediaKind,
} from './index'

const DEFAULT_TOP_LINK_HREF = 'http://link'
const DEFAULT_TOP_LINK_LABEL = 'top link label'

const columnContent: any = {
  title: 'title',
  content: 'content',
}
const defaultProps: ColumnedContentSectionProps = {
  title: 'section title',
  columnContentList: [columnContent, columnContent, columnContent],
}

describe('ColumnedContentSection', () => {
  it('should render top link', () => {
    const props = {
      ...defaultProps,
      topLinkHref: DEFAULT_TOP_LINK_HREF,
      topLinkLabel: DEFAULT_TOP_LINK_LABEL,
    }
    render(<ColumnedContentSection {...props} />)
    const link = screen.getByRole('link', { name: DEFAULT_TOP_LINK_LABEL })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', DEFAULT_TOP_LINK_HREF)
  })

  it('should not render top link', () => {
    render(<ColumnedContentSection {...defaultProps} />)
    expect(screen.queryByText('top link label')).not.toBeInTheDocument()
  })

  it('should render title', () => {
    render(<ColumnedContentSection {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2, name: 'section title' })).toBeInTheDocument()
  })

  it('should not render title', () => {
    render(<ColumnedContentSection {...defaultProps} title={null} />)
    expect(
      screen.queryByRole('heading', { level: 2, name: 'section title' }),
    ).not.toBeInTheDocument()
  })

  it('should render 3 basic columns', () => {
    render(<ColumnedContentSection {...defaultProps} />)
    const columns = screen.getAllByRole('listitem')
    expect(columns).toHaveLength(3)

    columns.forEach(column => {
      expect(column).toHaveTextContent('title')
      expect(column).toHaveTextContent('content')
    })
  })

  it('should render columns with images of various media kinds', () => {
    const column1 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.ELEMENT,
        element: <svg role="img" />,
      },
    }

    const column2 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.COVER,
        pictureUrl: 'http://pic2',
        href: 'http://link2',
      },
    }

    const column3 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.FIT,
        pictureUrl: 'http://pic3',
      },
    }

    const props = {
      ...defaultProps,
      columnContentList: [column1, column2, column3],
    }

    render(<ColumnedContentSection {...props} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('role', 'img')
    expect(images[1]).toHaveAttribute('src', 'http://pic2')
    expect(images[2]).toHaveAttribute('src', 'http://pic3')

    const columns = screen.getAllByRole('listitem')
    expect(within(columns[1]).getByRole('link')).toHaveAttribute('href', 'http://link2')
  })
})
