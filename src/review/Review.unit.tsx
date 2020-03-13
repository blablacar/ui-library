import React from 'react'
import { mount } from 'enzyme'

import Review from './index'

const defaultReviewProps = {
  title: 'Review title',
  text: 'Review content',
  formattedDatetime: '05 jul - 17:39',
  isoDatetime: '2017-08-07T14:10:40.526Z',
}

function assertReview(
  review: any,
  expectedTitle: string,
  expectedText: string,
  expectedDate: string,
  isReviewResponse: boolean,
) {
  const title = review.find('h2')
  expect(title.text()).toBe('Review title')
  const paragraph = review.find('p')
  expect(paragraph.text()).toBe('Review content')
  const date = review.find('.kirk-caption')
  expect(date.text()).toBe('05 jul - 17:39')
  const reviewResponse = review.find('.kirk-is-review-response')
  expect(reviewResponse.exists()).toBe(isReviewResponse)
}

it('Should render basic review', () => {
  const review = mount(<Review {...defaultReviewProps} />)
  assertReview(review, 'Review title', 'Review content', '05 jul - 17:39', false)
})

it('Should render review response', () => {
  const review = mount(<Review {...defaultReviewProps} isResponse />)
  assertReview(review, 'Review title', 'Review content', '05 jul - 17:39', true)
})
