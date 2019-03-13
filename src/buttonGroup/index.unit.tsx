import React from 'react'
import { shallow } from 'enzyme'

import ButtonGroup from 'buttonGroup'
import Button from 'button'

describe('Button Group', () => {
  it('Should apply the row className if the inline prop is set to true', () => {
    const btnGroup = shallow(
      <ButtonGroup isInline>
        <Button>Hello</Button>
      </ButtonGroup>,
    )
    expect(btnGroup.prop('className')).toContain('kirk-button-group-row')
  })

  it('Should apply the column className if the inline prop is set to false', () => {
    const btnGroup = shallow(
      <ButtonGroup>
        <Button>Hello</Button>
      </ButtonGroup>,
    )
    expect(btnGroup.prop('className')).toContain('kirk-button-group-column')
  })

  it('Should apply the reverse className if the reverse prop is set to true', () => {
    const btnGroup = shallow(
      <ButtonGroup isReverse>
        <Button>Hello</Button>
      </ButtonGroup>,
    )
    expect(btnGroup.prop('className')).toContain('kirk-button-group-reverse')
  })

  it('Should allow additional class names', () => {
    const btnGroup = shallow(
      <ButtonGroup className="foo">
        <Button>Hello</Button>
      </ButtonGroup>,
    )
    expect(btnGroup.prop('className')).toContain('foo')
  })
})
