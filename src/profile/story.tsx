import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Profile from 'profile'

const stories = storiesOf('Profile', module)
stories.addDecorator(withKnobs)

stories.add(
  'Profile',
  withInfo('')(() => (<Profile
    title={text('name', 'Pepe le Pew')}
    // tslint:disable-next-line
    picture={text('picture', 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg')}
    alt={text('alternative text', 'Avatar')}
    isMedium={boolean('medium size', false)}
    isIdChecked={boolean('isIdChecked', false)}
    ratings={number('rating', 10)}
    score={number('score', 2.5)}
    ratingsLabel={text('ratings label', 'ratings')}
    info={text('secondary info', '')}
  />)),
)

stories.add(
  'Profile with action',
  withInfo('')(() => (<Profile
    title={text('name', 'Pepe le Pew')}
    isMedium={boolean('medium size', false)}
    info={text('secondary info', '')}
    action="/"
  />)),
)
