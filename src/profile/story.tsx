import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Profile from 'profile'

const stories = storiesOf('Profile', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <Profile
      title={text('name', 'Pepe le Pew')}
      info={text('info (if no rating)', 'Charism +10')}
      picture={text(
        'picture',
        'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
      )}
      isIdChecked={boolean('isIdChecked', false)}
      isMedium={boolean('isMedium', false)}
      isLink={boolean('isLink', false)}
      score={number('score', null)}
      ratings={number('ratings', null)}
      ratingsLabel={text('ratingsLabel', null)}
    />),
  ),
)
