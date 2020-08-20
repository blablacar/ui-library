import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { MediaSizeProvider } from '../../../_utils/mediaSizeProvider'
import { AutoCompleteExample } from '../../../autoComplete/story'
import { SearchForm } from '../../../searchForm'
import { HeroSection } from './HeroSection'
import carpoolBlaBlaBusLarge from './images-for-stories/carpool-bbb-large.svg'
import carpoolBlaBlaBusSmall from './images-for-stories/carpool-bbb-small.svg'
import carpoolBlueBusLarge from './images-for-stories/carpool-blue-bus-large.svg'
import carpoolBlueBusSmall from './images-for-stories/carpool-blue-bus-small.svg'
import carpoolCoralBusLarge from './images-for-stories/carpool-coral-bus-large.svg'
import carpoolCoralBusSmall from './images-for-stories/carpool-coral-bus-small.svg'
import carpoolOnlyLarge from './images-for-stories/carpool-large.svg'
import carpoolOnlySmall from './images-for-stories/carpool-small.svg'

const stories = storiesOf('Sections|HeroSection', module)
stories.addDecorator(withKnobs)

const VISUALS = {
  'carpool-bla-bla-bus': {
    large: carpoolBlaBlaBusLarge,
    small: carpoolBlaBlaBusSmall,
  },
  'carpool-blue-bus': {
    large: carpoolBlueBusLarge,
    small: carpoolBlueBusSmall,
  },
  'carpool-coral-bus': {
    large: carpoolCoralBusLarge,
    small: carpoolCoralBusSmall,
  },
  'carpool-only': {
    large: carpoolOnlyLarge,
    small: carpoolOnlySmall,
  },
}

const bottomElement = (
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
)

stories.add('home', () => {
  const visual = select('Visual', VISUALS, VISUALS['carpool-bla-bla-bus'])

  return (
    <MediaSizeProvider>
      <HeroSection
        heroText={text('heroText', 'Et vous, qui allez-vous retrouver ?')}
        heroImageUrlSmall={visual.small}
        heroImageUrlLarge={visual.large}
        bottomElement={bottomElement}
      />
    </MediaSizeProvider>
  )
})

stories.add('bus', () => (
  <MediaSizeProvider>
    <HeroSection
      heroText={text(
        'heroText',
        'BlaBlaBus vous emmène à petit prix vers plus de 300 destinations.',
      )}
      heroImageUrl={text(
        'heroImageUrl',
        'https://cdn.blablacar.com/kairos/assets/build/images/hero_home_large-6dc40c07f51bd669fca3ce7719826f02.jpg',
      )}
      bottomElement={bottomElement}
    />
  </MediaSizeProvider>
))
