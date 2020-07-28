import React from 'react'
import { mount, shallow } from 'enzyme'

import { render } from '@testing-library/react'

import { Grip } from '../../../grip'
import { SlideSection } from './index'

describe('SlideSection', () => {
  it('Should render a Grip component', () => {
    const container = shallow(
      <SlideSection media={<div>Media</div>}>{() => <div>Children</div>}</SlideSection>,
    )
    expect(container.find(Grip).exists()).toBe(true)
  })
  it('Should render the elements from media prop', () => {
    const container = mount(
      <SlideSection media={<div>Media</div>}>{() => <div>Children</div>}</SlideSection>,
    )
    expect(container.text()).toContain('Media')
  })
  it('Should render the elements from reducedContent prop', () => {
    const container = mount(
      <SlideSection media={<div>Media</div>} reducedContent={<div>ReducedContent</div>}>
        {() => <div>Children</div>}
      </SlideSection>,
    )
    expect(container.text()).toContain('ReducedContent')
  })
  it('Should render its children', () => {
    const container = mount(
      <SlideSection media={<div>Media</div>}>{() => <div>Children</div>}</SlideSection>,
    )
    expect(container.text()).toContain('Children')
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
    expect(container.querySelector('.reduced')).toMatchSnapshot()

    getByText('expand').click()
    expect(container.querySelector('.expanded')).toMatchSnapshot()

    getByText('default').click()
    expect(container.querySelector('.default')).toMatchSnapshot()
  })
})
