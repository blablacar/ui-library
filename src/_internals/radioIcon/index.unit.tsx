import React from 'react'
import renderer from 'react-test-renderer'

import { RadioIcon } from './index'

describe('RadioIcon', () => {
  it('Should render an empty circle by default', () => {
    const radio = renderer.create(<RadioIcon />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a check icon if isChecked is set to true', () => {
    const radio = renderer.create(<RadioIcon isChecked />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a loader if isLoading is set to true', () => {
    const radio = renderer.create(<RadioIcon isLoading />).toJSON()
    expect(radio).toMatchSnapshot()
  })
  it('Should render a loader if isLoading and isChecked are set to true', () => {
    const radio = renderer.create(<RadioIcon isChecked isLoading />).toJSON()
    expect(radio).toMatchSnapshot()
  })
})
