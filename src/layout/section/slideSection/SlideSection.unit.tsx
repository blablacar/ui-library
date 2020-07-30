import React from 'react'

import { render } from '@testing-library/react'

import { SlideSection } from './index'

describe('SlideSection', () => {
  it('Should render the elements from media prop', () => {
    const { getByText } = render(
      <SlideSection media={<div>Media</div>}>{() => <div>Children</div>}</SlideSection>,
    )
    expect(getByText('Media')).toBeInTheDocument()
  })
  it('Should render the elements from reducedContent prop', () => {
    const { getByText } = render(
      <SlideSection media={<div>Media</div>} reducedContent={<div>ReducedContent</div>}>
        {() => <div>Children</div>}
      </SlideSection>,
    )
    expect(getByText('ReducedContent')).toBeInTheDocument()
  })
  it('Should render its children', () => {
    const { getByText } = render(
      <SlideSection media={<div>Media</div>}>{() => <div>Children</div>}</SlideSection>,
    )
    expect(getByText('Children')).toBeInTheDocument()
  })
  it('Should change the position when calling the children methods', () => {
    const { container, getByText } = render(
      <SlideSection media={<div>Media</div>}>
        {(setDefaultPosition, setReducedPosition, setExpandedPosition) => (
          <div>
            <button onClick={setDefaultPosition} type="button">
              default
            </button>
            <button onClick={setReducedPosition} type="button">
              reduce
            </button>
            <button onClick={setExpandedPosition} type="button">
              expand
            </button>
          </div>
        )}
      </SlideSection>,
    )
    getByText('reduce').click()
    expect(container.querySelector('.reduced')).toBeInTheDocument()

    getByText('expand').click()
    expect(container.querySelector('.expanded')).toBeInTheDocument()

    getByText('default').click()
    expect(container.querySelector('.default')).toBeInTheDocument()
  })
})
