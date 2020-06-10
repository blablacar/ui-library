import React from 'react'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Review } from './index'

const stories = storiesOf('Widgets|Review', module)

const longComment = 'This is very long review which is cool and etc. '.repeat(5)
const reviewProps = {
  title: 'Outstanding',
  text: longComment,
  formattedDatetime: '05 jul - 17:39',
  isoDatetime: '2017-08-07T14:10:40.526Z',
}

const reviewResponseProps = {
  title: "Reply's from Karen",
  text: 'Thanks for the comment !',
  formattedDatetime: '06 jul - 18:39',
  isoDatetime: '2017-08-07T18:39:40.526Z',
  isResponse: true,
}

stories.add('default', () => (
  <Section>
    <Review {...reviewProps} />
    <Review {...reviewResponseProps} />
  </Section>
))
