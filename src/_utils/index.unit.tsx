import React from 'react'
import { shallow } from 'enzyme'

import { prefix, replaceNewLineWithBR } from '_utils'

const multipleLineText = `line1
line2
line3`

const multipleLineTextWithBR = replaceNewLineWithBR(multipleLineText)

describe('prefix', () => {
  it('Should render prefix syntax with the base class', () => {
    expect(prefix({}, 'base')).toEqual('')
    expect(prefix({ modifiers: true }, 'base')).toEqual('base-modifiers')
    expect(prefix({ modifiers: false }, 'base')).toEqual('')
    expect(prefix({ 'modifier-1': true, 'modifier-2': false }, 'base')).toEqual('base-modifier-1')
  })
})

describe('replaceNewLineWithBR', () => {
  it('Should replace \n by br tags', () => {
    const wrapper = shallow(<p>{multipleLineTextWithBR}</p>)
    expect(wrapper.html()).toContain('<p>line1<br/>line2<br/>line3</p>')
  })
})
