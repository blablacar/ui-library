import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Profile from 'profile'

const stories = storiesOf('Widgets|Profile', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <Profile
      title={text('name', 'Pepe le Pew')}
      ariaLabel={text('ariaLabel', 'Driver: Pepe le Pew, Charism +10')}
      info={text('info (if no rating)', 'Charism +10')}
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
