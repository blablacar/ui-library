import React from 'react'
import { shallow } from 'enzyme'

import ButtonGroup from './ButtonGroup'
import Button, { ButtonStatus } from 'button'

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
