import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { MediaSizeProvider } from '../../../_utils/mediaSizeProvider'
import { AutoCompleteExample } from '../../../autoComplete/story'
import { SearchForm } from '../../../searchForm'
import { HeroSection } from './index'

const stories = storiesOf('Sections|HeroSection', module)

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
      'https://cdn.blablacar.com/kairos/assets/build/images/home_summer_campaign_large-240e0d9fe2123506cca634c2acedce24.jpg',
    )}
    buttonText={text('buttonText', 'Rechercher un trajet')}
    buttonHref={text('buttonHref', 'http://google.fr')}
  />
))

stories.add('search form', () => (
  <MediaSizeProvider>
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
        'https://cdn.blablacar.com/kairos/assets/build/images/home_summer_campaign_large-240e0d9fe2123506cca634c2acedce24.jpg',
      )}
      bottomElement={
        // This should not be needed...
        // eslint-disable-next-line react/jsx-wrap-multilines
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
      }
    />
  </MediaSizeProvider>
))
