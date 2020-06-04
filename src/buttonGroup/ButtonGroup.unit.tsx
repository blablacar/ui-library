import React from 'react'
import { mount, shallow } from 'enzyme'

import { Button, ButtonStatus } from '../button'
import { ButtonGroup } from './ButtonGroup'

describe('Button Group', () => {
  it('Should apply the base className ', () => {
    const btnGroup = mount(
      <ButtonGroup>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>,
    )

    // Can't use `expect(btnGroup.prop('className')).toContain('kirk-button-group')`
    // because `kirk-button-group` is contained in `kirk-button-group-column`.
    expect(btnGroup.getDOMNode().classList.contains('kirk-button-group')).toBe(true)
  })

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

  it('Should update children status and disabled props when loading', () => {
    const btnGroup = shallow(
      <ButtonGroup loadingIndex="button_1">
        <Button index="button_1" status={ButtonStatus.PRIMARY} disabled={false}>
          Button 1
        </Button>
        <Button index="button_2" status={ButtonStatus.TERTIARY} disabled={false}>
          Button 2
        </Button>
      </ButtonGroup>,
    )

    expect(
      btnGroup
        .find(Button)
        .at(0)
        .prop('status'),
    ).toEqual(ButtonStatus.LOADING)
    expect(
      btnGroup
        .find(Button)
        .at(0)
        .prop('disabled'),
    ).toEqual(false)
    expect(
      btnGroup
        .find(Button)
        .at(1)
        .prop('status'),
    ).toEqual(ButtonStatus.TERTIARY)
    expect(
      btnGroup
        .find(Button)
        .at(1)
        .prop('disabled'),
    ).toEqual(true)
  })
})
