import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import HeroSection from './index'

const stories = storiesOf('Sections|HeroSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <HeroSection
    heroDescription={text(
      'heroDescription',
      'Bus ou covoiturage : choisissez le trajet qui vous convient le mieux',
    )}
    heroText={text('heroText', 'Et vous, qui allez-vous retrouver ?')}
    heroImageUrl={text(
      'heroImageUrl',
      'https://cdn.blablacar.com/kairos/assets/build/images/home_summer_campaign-1ea3207605913c1e26410e605a467eb7.jpg',
    )}
    heroImageUrlLarge={text(
      'heroImageUrlLarge',
      'https://cdn.blablacar.com/kairos/assets/build/images/home_summer_campaign-1ea3207605913c1e26410e605a467eb7.jpg',
    )}
    buttonText={text('buttonText', 'Rechercher un trajet')}
    buttonHref={text('buttonHref', 'http://google.fr')}
  />
))
