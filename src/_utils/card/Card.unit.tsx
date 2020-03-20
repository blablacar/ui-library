import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Card component', () => {
  it('Should wrap in a li tag and have the base class', () => {
    const card = shallow(<Card />)
    const baseTag = card.first()

    expect(baseTag.type()).toEqual('li')
    expect(baseTag.hasClass('kirk-card')).toBe(true)
  })

  it('Should have the right children', () => {
    const card = shallow(
      <Card>
        <div />
      </Card>,
    )

    expect(
      card
        .find('div')
        .first()
        .exists(),
    ).toBe(true)
  })

  it('Should have the test class', () => {
    const card = shallow(<Card className="test" />)

    expect(card.hasClass('test')).toBe(true)
  })
})
