import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { Caption } from './caption'
import { Review } from './index'

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
  const date = review.find(Caption)
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

it('Should render basic review with href link', () => {
  const review = mount(
    <Review
      {...defaultReviewProps}
      replyLinkLabel="Reply to this review"
      replyLinkHref="/edit_review"
    />,
  )
  const replyReviewLink = review.find('.kirk-button')
  expect(replyReviewLink.exists()).toBe(true)
  expect(replyReviewLink.text()).toBe('Reply to this review')
})

it('Should render basic review with onClick link', () => {
  const review = mount(
    <Review
      {...defaultReviewProps}
      replyLinkLabel="Reply to this review"
      replyLinkOnClick={() => {}}
    />,
  )
  const replyReviewLink = review.find('.kirk-button')
  expect(replyReviewLink.exists()).toBe(true)
  expect(replyReviewLink.text()).toBe('Reply to this review')
})

it('Should render review microdata annotations and HTML', () => {
  const reviewAndResponse = (
    <Fragment>
      <Review {...defaultReviewProps} />
      <Review {...defaultReviewProps} isResponse />
    </Fragment>
  )
  const component = renderer.create(reviewAndResponse).toJSON()
  expect(component).toMatchSnapshot()
})
