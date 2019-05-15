import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from './index'

describe('Checkbox', () => {
  it('Should render an empty circle by default', () => {
    const checkbox = renderer.create(<Checkbox />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a check icon if isChecked is set to true', () => {
    const checkbox = renderer.create(<Checkbox isChecked />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a loader if isLoading is set to true', () => {
    const checkbox = renderer.create(<Checkbox isLoading />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a loader if isLoading and isChecked are set to true', () => {
    const checkbox = renderer.create(<Checkbox isChecked isLoading />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
})
