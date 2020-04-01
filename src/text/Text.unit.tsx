import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import * as React from 'react'

import Text, { TextTagType } from './Text'

const multipleLineText = `line1
line2
line3`

describe('Text', () => {
  it('should have change the DOM', () => {
    const text = renderer.create(<Text>text</Text>).toJSON()
    expect(text).toMatchSnapshot()
  })

  it('Should have the custom class', () => {
    const wrapper = shallow(<Text className="testClass">test</Text>)
    expect(wrapper.hasClass('testClass')).toBe(true)
  })

  it('Should render with the default span tag', () => {
    const wrapper = shallow(<Text>test</Text>)
    expect(wrapper.name()).toBe('span')
  })

  it('Should render with the div tag', () => {
    const wrapper = shallow(<Text tag={TextTagType.DIV}>test</Text>)
    expect(wrapper.name()).toBe('div')
  })

  it('Should have role attribute when present and undefined otherwise', () => {
    const wrapper = shallow(<Text>test</Text>)
    expect(wrapper.prop('role')).toBeUndefined()

    wrapper.setProps({ role: 'alert' })

    expect(wrapper.prop('role')).toBe('alert')
  })

  it('Should have aria-label attribute when present and undefined otherwise', () => {
    const wrapper = shallow(<Text>test</Text>)
    expect(wrapper.prop('ariaLabel')).toBeUndefined()

    wrapper.setProps({ ariaLabel: 'Complementary description' })

    expect(wrapper.prop('aria-label')).toBe('Complementary description')
  })

  it('Should accept ReactNode as children', () => {
    const wrapper = shallow(
      <Text tag={TextTagType.DIV}>
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

  it('Should replace \\n with br tags by default', () => {
    const wrapper = shallow(<Text>{multipleLineText}</Text>)
    expect(wrapper.html()).toContain(
      '<span class="kirk-text kirk-text-body">line1<br/>line2<br/>line3</span>',
    )
  })

  it('Should not replace \\n with br tags when newlineToBr is false', () => {
    const wrapper = shallow(<Text newlineToBr={false}>{multipleLineText}</Text>)
    expect(wrapper.html()).toContain(
      `<span class="kirk-text kirk-text-body">${multipleLineText}</span>`,
    )
  })

  it('Should display the text with color', () => {
    const wrapper = shallow(<Text textColor="#FFFFFF">test</Text>)
    expect(wrapper.prop('style')).toEqual({ color: '#FFFFFF' })
  })

  it('Should not display the text with color when color not hexa', () => {
    const wrapper = shallow(<Text textColor="#FFFGFF">test</Text>)
    expect(wrapper.prop('style')).toBeUndefined()
  })
})
