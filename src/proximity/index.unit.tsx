import React from 'react'
import renderer from 'react-test-renderer'

import Proximity, { Distances } from 'proximity'

it('Should highlight FAR and have a title', () => {
  const proximity = renderer.create(<Proximity
    value={Distances.FAR}
    title="Pretty far from your place"
  />).toJSON()
  expect(proximity).toMatchSnapshot()
})

it('Should highlight MIDDLE without a title', () => {
  const proximity = renderer.create(<Proximity
    value={Distances.MIDDLE}
  />).toJSON()
  expect(proximity).toMatchSnapshot()
})

it('Should highlight CLOSE and have a title', () => {
  const proximity = renderer.create(<Proximity
    value={Distances.CLOSE}
    title="Pretty close to your place"
  />).toJSON()
  expect(proximity).toMatchSnapshot()
})
