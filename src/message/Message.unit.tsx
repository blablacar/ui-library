import React from 'react'
import { shallow } from 'enzyme'

import { Message } from './Message'

it('Should have the correct attributes and text.', () => {
  const message = shallow(<Message active>blabla</Message>)
  expect(message.find('p').text()).toContain('blabla')
  expect(message.prop('className')).toContain('kirk-message kirk-active')
})

it('Should have an annotation.', () => {
  const message = shallow(
    <Message active messageAnnotation="Delivered - 15:00">
      some message with an annotation
    </Message>,
  )

  const annotation = message.find('.kirk-message-annotation')
  expect(annotation).toHaveLength(1)
  expect(annotation.exists()).toBe(true)
  expect(annotation.text()).toBe('Delivered - 15:00')
})
