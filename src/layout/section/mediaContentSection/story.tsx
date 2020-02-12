import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import MediaContentSection from './index'
import BlankSeparator from 'blankSeparator'

const stories = storiesOf('Sections|MediaContentSection', module)
stories.addDecorator(withKnobs)

const title = 'Vers plus de 300 villes, nos bus vous emmènent à petits prix.'
const content =
  'Chaque semaine, chaque mois. Pour une réunion importante ou juste parce que vous avez envie de voir un nouvel endroit. Avec une grande famille. Ou un gros bagage. Vers la mer comme vers les pistes de ski. Peu importe votre voyage, il sera toujours simple et abordable avec BlaBlaBus.'

stories.add('default', () => (
  <Fragment>
    <BlankSeparator />
    <MediaContentSection
      title={title}
      content={content}
      buttonLabel="Découvrez notre offre de bus"
      buttonHref="https://www.blablacar.fr/bus"
      mediaUrl="https://cdn.blablacar.com/kairos/assets/build/images/home_driver_large-1d8ac5fb672573235fc5f46ce0acc37c.jpg"
    />
    <BlankSeparator />
  </Fragment>
))
