import React, { Fragment } from 'react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Divider from 'divider'
import StarIcon from 'icon/starIcon'
import Section from 'layout/section/baseSection'
import Profile from 'profile'

const stories = storiesOf('Widgets|Profile', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <Profile
      title={text('name', 'Pepe le Pew (small size)')}
      ariaLabel={text('ariaLabel', 'Driver: Pepe le Pew, Charism +10')}
      info={text('info (if no rating)', 'Charism +10')}
      picture={text(
        'picture',
        'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
      )}
      isIdChecked={boolean('isIdChecked', false)}
      isLink={boolean('isLink', true)}
      href={text('href', '#')}
      score={number('score', null)}
      ratings={number('ratings', null)}
      ratingsLabel={text('ratingsLabel', null)}
    />
    <Divider />
    <Profile
      title={text('name', 'Pepe le Pew (medium size)')}
      ariaLabel={text('ariaLabel', 'Driver: Pepe le Pew, Charism +10')}
      info={text('info (if no rating)', 'Charism +10')}
      picture={text(
        'picture',
        'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
      )}
      isIdChecked={boolean('isIdChecked', false)}
      isMedium
      isLink={boolean('isLink', true)}
      href={text('href', '#')}
      score={number('score', null)}
      ratings={number('ratings', null)}
      ratingsLabel={text('ratingsLabel', null)}
    />
  </Section>
))

const rating = (
  <Fragment>
    <StarIcon size={12} fill={1} /> 4.5/5 - 17 ratings
  </Fragment>
)

stories.add('with ratings', () => (
  <Section>
    <Profile
      title={text('name', 'Pepe le Pew')}
      ariaLabel={text('ariaLabel', 'Driver: Pepe le Pew, Charism +10')}
      info={rating}
      picture={text(
        'picture',
        'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
      )}
      isIdChecked={boolean('isIdChecked', false)}
      isMedium={boolean('isMedium', false)}
      isLink={boolean('isLink', true)}
      href={text('href', '#')}
      score={number('score', null)}
      ratings={number('ratings', null)}
      ratingsLabel={text('ratingsLabel', null)}
    />
  </Section>
))
