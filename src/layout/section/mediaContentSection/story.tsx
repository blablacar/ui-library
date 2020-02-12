import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import MediaContentSection from './index'

const stories = storiesOf('Sections|MediaContentSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Fragment>
    <MediaContentSection
      title="Where do you want to drive to?"
      content="Let's make this your least expensive journey ever."
      buttonLabel="Offer a ride"
      buttonHref="https://www.blablacar.fr/bus"
      mediaUrl="https://cdn.blablacar.com/kairos/assets/build/images/home_driver_large-1d8ac5fb672573235fc5f46ce0acc37c.jpg"
    />
    <MediaContentSection
      title="Vers plus de 300 villes, nos bus vous emmènent à petits prix."
      content="Chaque semaine, chaque mois. Pour une réunion importante ou juste parce que vous avez envie de voir un nouvel endroit. Avec une grande famille. Ou un gros bagage. Vers la mer comme vers les pistes de ski. Peu importe votre voyage, il sera toujours simple et abordable avec BlaBlaBus."
      buttonLabel="Découvrez notre offre de bus"
      buttonHref="https://www.blablacar.fr/bus"
      mediaUrl="https://cdn.blablacar.com/kairos/assets/build/images/blablabus2_large-611071cd4e9502579e94f6bc24391eda.jpg"
    />
    <MediaContentSection
      title="Ouibus devient BlaBlaBus"
      content="Désormais réservez vos billets de BlaBlaBus (Ouibus) directement sur BlaBlaCar. Profitez de plus de 300 destinations à travers l'Europe dans des bus tout confort. Wifi, prises électriques, 2 bagages en soute et toilettes à bord. Et le tout à petit prix. BlaBlaBus, le nouveau service de BlaBlaCar."
      buttonLabel="Réserver votre prochain voyage"
      buttonHref="https://www.blablacar.fr/bus"
      mediaUrl="https://cdn.blablacar.com/kairos/assets/build/images/blablabus_bus_logo_large-4717a333c3a2184a5849b0cbb6da75cb.png"
    />
  </Fragment>
))
