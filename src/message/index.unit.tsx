import React from 'react'
import Message from 'message'

it('Should have the correct attributes and text.', () => {
  const message = shallow(<Message active author="The author">blabla</Message>)
  expect(message.find('p').text()).toContain('blabla')
  expect(message.prop('className')).toContain('kirk-message kirk-active')
  expect(message.find('cite').text()).toContain('The author')
})

it('Should have the date.', () => {
  const message = mount(
    <Message
      active
      author="The author"
      isoDate="2017-08-07T14:10:40.526Z"
      date="05 jul - 17:39"
    >
      blabla
    </Message>,
  )
  expect(message.find('time')).toHaveLength(1)
  expect(message.find('time').text()).toBe('05 jul - 17:39')
  expect(message.find('time').prop('dateTime')).toBe('2017-08-07T14:10:40.526Z')
})
