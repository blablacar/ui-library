import React from 'react'
import renderer from 'react-test-renderer'

import Radio from './index'

describe('Radio', () => {
  it('Should render an empty circle by default', () => {
    const radio = renderer.create(<Radio />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a check icon if isChecked is set to true', () => {
    const radio = renderer.create(<Radio isChecked />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a loader if isLoading is set to true', () => {
    const radio = renderer.create(<Radio isLoading />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a loader if isLoading and isChecked are set to true', () => {
    const radio = renderer.create(<Radio isChecked isLoading />).toJSON()
    expect(radio).toMatchSnapshot()
  })
})
