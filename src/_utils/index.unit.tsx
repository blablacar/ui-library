import React from 'react'
import { shallow } from 'enzyme'

import { prefix, replaceNewLineWithBR } from './index'

const multipleLineText = `line1
line2
line3`

const multipleLineTextWithBR = replaceNewLineWithBR(multipleLineText)

describe('prefix', () => {
  it('Should add a prefix to all classes', () => {
    expect(prefix({ 'modifier-1': true, 'modifier-2': true })).toEqual(
      'kirk-modifier-1 kirk-modifier-2',
    )
  })

  it('Should add a base class to the prefix', () => {
    expect(prefix({ 'modifier-1': true, 'modifier-2': true }, 'base-class')).toEqual(
      'kirk-base-class-modifier-1 kirk-base-class-modifier-2',
    )
  })

  it('Should ignore falsy conditions', () => {
    expect(prefix({ a: false, b: 0, c: null, d: undefined, e: '' })).toEqual('')
  })

  it('Should include truthy conditions', () => {
    expect(prefix({ a: true, b: 1, c: 'c', d: {} })).toEqual('kirk-a kirk-b kirk-c kirk-d')
  })
})

describe('replaceNewLineWithBR', () => {
  it('Should replace \n by br tags', () => {
    const wrapper = shallow(<p>{multipleLineTextWithBR}</p>)
    expect(wrapper.html()).toContain('<p>line1<br/>line2<br/>line3</p>')
  })
})
