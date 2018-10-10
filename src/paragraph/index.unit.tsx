import React from 'react'

import Paragraph from 'paragraph'
import Text, { TextTagType } from 'text'
import Button from 'button'

describe('Paragraph', () => {
  /* tslint:disable:max-line-length */
  const longText = 'Мы хотим узнать наших пользователей как можно лучше. Наша команда проверяет профили и отзывы. Личность каждого участника подтверждена. Так что вы знаете наверняка, с кем садитесь в машину.'
  const shortText = 'Short text'
  const ellipsedLongText = 'Мы хотим узнать наших пользователей как можно лучше. Наша команда проверяет профили и отзывы. Личность каждого участника подтверждена. Так что вы знаете наверняка, с кем садитесь в...'
  /* tslint:enable */

  it('Should display a Text (p) component by default', () => {
    const component = shallow(<Paragraph>{shortText}</Paragraph>)
    expect(component.is(Text)).toBe(true)
    expect(component.prop('tag')).toBe(TextTagType.PARAGRAPH)
  })

  describe('Expandable Paragraph', () => {
    it('Should ignore the expandable attribute if text is shorter than 180 chars', () => {
      const component = mount(<Paragraph expandable>{shortText}</Paragraph>)
      expect(component.find(Text).text()).toBe('Short text')
    })

    it('Should display an ellipsis after the first 180 chars', () => {
      const component = mount(<Paragraph expandable>{longText}</Paragraph>)
      expect(component.find(Text).text()).toBe(ellipsedLongText)
    })

    it('Should display a button with the given label', () => {
      const component = mount(<Paragraph expandable expandLabel="foo">{longText}</Paragraph>)
      const paragraph = component.instance()
      expect(component.find(Button).text()).toBe('foo')
      expect(component.find(Button).prop('onClick')).toBe(paragraph.expandParagraph)
    })

    it('Should show the full text when expanding the paragraph', () => {
      const component = mount(<Paragraph expandable>{longText}</Paragraph>)
      const paragraph = component.instance()
      paragraph.expandParagraph()
      expect(component.find(Text).text()).toBe(longText)
    })

    it('Should hide the button when expanding the paragraph', () => {
      const component = shallow(<Paragraph expandable>{longText}</Paragraph>)
      const paragraph = component.instance()
      paragraph.expandParagraph()
      expect(component.find(Button).exists()).toBe(false)
    })
  })
})
