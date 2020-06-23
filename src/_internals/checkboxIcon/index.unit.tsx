import React from 'react'
import renderer from 'react-test-renderer'

import { CheckboxIcon } from './index'

describe('CheckboxIcon', () => {
  it('Should render an empty circle by default', () => {
    const checkbox = renderer.create(<CheckboxIcon />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a check icon if isChecked is set to true', () => {
    const checkbox = renderer.create(<CheckboxIcon isChecked />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a loader if isLoading is set to true', () => {
    const checkbox = renderer.create(<CheckboxIcon isLoading />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
  it('Should render a loader if isLoading and isChecked are set to true', () => {
    const checkbox = renderer.create(<CheckboxIcon isChecked isLoading />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })
})
