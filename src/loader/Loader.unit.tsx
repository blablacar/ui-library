import React from 'react'

import { render, screen } from '@testing-library/react'

import { Loader, LoaderLayoutMode } from './Loader'

jest.useFakeTimers()

describe('Loader', () => {
  it('render the loader with aria attributes', () => {
    render(<Loader done={false} ariaLabel="loader" />)

    const loader = screen.getByLabelText('loader')
    expect(loader).toHaveAttribute('aria-busy', 'true')
    expect(loader).toHaveAttribute('aria-live', 'polite')
  })

  it('render the check icon with aria attributes', () => {
    render(<Loader done ariaLabel="loader" />)

    const loader = screen.getByLabelText('loader')
    expect(loader).toHaveAttribute('aria-busy', 'false')
    expect(loader).toHaveAttribute('aria-live', 'polite')
  })

  it('Should have a custom className', () => {
    const customClassName = 'custom-loader'

    render(<Loader className={customClassName} ariaLabel="loader" />)

    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe(`${customClassName} kirk-loader--fullScreen`)
  })

  it('Should be fullscreen by default', () => {
    render(<Loader ariaLabel="loader" />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--fullScreen')
  })

  it('Should be inline when using the prop', () => {
    render(<Loader ariaLabel="loader" inline />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--inline')
  })

  it('Should override layoutMode when inline prop is set', () => {
    render(<Loader ariaLabel="loader" inline layoutMode={LoaderLayoutMode.BLOCK} />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--inline')
  })

  it('Should use correctly inline layout mode', () => {
    render(<Loader ariaLabel="loader" layoutMode={LoaderLayoutMode.INLINE} />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--inline')
  })

  it('Should use correctly block layout mode', () => {
    render(<Loader ariaLabel="loader" layoutMode={LoaderLayoutMode.BLOCK} />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--block')
  })

  it('Should use correctly fullscreen layout mode', () => {
    render(<Loader ariaLabel="loader" layoutMode={LoaderLayoutMode.FULLSCREEN} />)
    const loader = screen.getByLabelText('loader')
    expect(loader.parentElement.className).toBe('kirk-loader--fullScreen')
  })

  it('Should fire the callback event when done', () => {
    const callback = jest.fn()
    const { rerender } = render(<Loader onDoneAnimationEnd={callback} />)

    rerender(<Loader onDoneAnimationEnd={callback} done />)

    expect(callback).not.toBeCalled()
    jest.advanceTimersByTime(1500)
    expect(callback).toBeCalled()
  })
})
