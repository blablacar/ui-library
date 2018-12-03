import React from 'react'
import Text from 'text'

const multipleLineText = `line1
line2
line3`

describe('Text', () => {
  it('Should have the default classes', () => {
    const wrapper = shallow(<Text>{'test'}</Text>)
    expect(wrapper.hasClass('kirk-text')).toBe(true)
    expect(wrapper.hasClass('kirk-text-body')).toBe(true)
  })

  it('Should have the custom class', () => {
    const wrapper = shallow(<Text className="testClass">{'test'}</Text>)
    expect(wrapper.hasClass('testClass')).toBe(true)
  })

  it('Should render with the default span tag', () => {
    const wrapper = shallow(<Text>{'test'}</Text>)
    expect(wrapper.name()).toBe('span')
  })

  it('Should render with the div tag', () => {
    const wrapper = shallow(<Text tag="div">{'test'}</Text>)
    expect(wrapper.name()).toBe('div')
  })

  it('Should accept ReactNode as children', () => {
    const wrapper = shallow(
      <Text tag="div">
        <span>test</span>
      </Text>,
    )
    expect(
      wrapper
        .children()
        .first()
        .name(),
    ).toBe('span')
  })

  it('Should replace \n by br tags', () => {
    const wrapper = shallow(<Text>{multipleLineText}</Text>)
    expect(wrapper.html()).toContain(
      '<span class="kirk-text kirk-text-body">line1<br/>line2<br/>line3</span>',
    )
  })

  it('Should not replace \n by br tags when newlineToBr is false', () => {
    const wrapper = shallow(<Text newlineToBr={false}>{multipleLineText}</Text>)
    expect(wrapper.html()).toContain(
      `<span class="kirk-text kirk-text-body">${multipleLineText}</span>`,
    )
  })

  it('Should not display the text with color', () => {
    const wrapper = shallow(<Text textColor="#FFFFFF">{'test'}</Text>)
    expect(wrapper.prop('style')).toEqual({ color: '#FFFFFF' })
  })

  it('Should not display the text with color when color not hexa', () => {
    const wrapper = shallow(<Text textColor="#FFFGFF">{'test'}</Text>)
    expect(wrapper.prop('style')).toBeUndefined()
  })
})
