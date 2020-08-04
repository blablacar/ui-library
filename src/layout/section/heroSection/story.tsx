import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { MediaSizeProvider } from '../../../_utils/mediaSizeProvider'
import { AutoCompleteExample } from '../../../autoComplete/story'
import { SearchForm } from '../../../searchForm'
import { HeroSection } from './index'

const stories = storiesOf('Sections|HeroSection', module)
stories.addDecorator(withKnobs)

const bottomElement = (
  <MediaSizeProvider>
    <SearchForm
      onSubmit={() => {}}
      autocompleteFromPlaceholder="Leaving From"
      autocompleteToPlaceholder="Going to"
      renderAutocompleteFrom={props => <AutoCompleteExample {...props} />}
      renderAutocompleteTo={props => <AutoCompleteExample {...props} />}
      datepickerProps={{
        defaultValue: new Date().toISOString(),
        format: value => new Date(value).toLocaleDateString(),
      }}
      stepperProps={{
        defaultValue: 1,
        min: 1,
        max: 8,
        title: 'Choose your number of seats',
        increaseLabel: 'Increase the number of seats by 1',
        decreaseLabel: 'Decrease the number of seats by 1',
        format: value => `${value} seat(s)`,
        confirmLabel: 'Submit',
      }}
    />
  </MediaSizeProvider>
)

stories.add('homepage', () => (
  <HeroSection
    heroText={text('heroText', 'Your ride. Your choice.')}
    heroImageUrl={text(
      'heroImageUrl',
      'https://cdn.blablacar.com/kairos/assets/build/images/home_summer_campaign-1ea3207605913c1e26410e605a467eb7.jpg',
    )}
    bottomElement={bottomElement}
  />
))

stories.add('bus homepage', () => (
  <MediaSizeProvider>
    <HeroSection
      heroText={text(
        'heroText',
        'BlaBlaBus vous emmène à petit prix vers plus de 300 destinations.',
      )}
      heroImageUrl={text(
        'heroImageUrl',
        'https://cdn.blablacar.com/kairos/assets/build/images/hero_home-18a20dcaeda85e47ced19504c6fe3d32.jpg',
      )}
      bottomElement={bottomElement}
    />
  </MediaSizeProvider>
))

stories.add('bus homepage 2', () => (
  <MediaSizeProvider>
    <HeroSection
      heroText={text('heroText', 'Новый способ путешествовать дешево на BlaBlaCar – автобусы!')}
      heroImageUrl={text(
        'heroImageUrl',
        'https://cdn.blablacar.com/kairos/assets/build/images/hero_home_RU-d69e5f87881d6cc6b774d57ff97fc9dc.jpg',
      )}
      bottomElement={bottomElement}
    />
  </MediaSizeProvider>
))

stories.add('bus destination', () => (
  <MediaSizeProvider>
    <HeroSection
      heroText={text('heroText', 'Bus Bordeaux - Toulouse dès X,XX €')}
      heroImageUrl={text(
        'heroImageUrl',
        'https://cdn.blablacar.com/kairos/assets/build/images/hero-ca341b588121b495c3bf28a998e5440e.jpg',
      )}
      bottomElement={bottomElement}
    />
  </MediaSizeProvider>
))
