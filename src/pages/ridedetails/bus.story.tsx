import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import Section from 'layout/section/baseSection'
import TheVoice from 'theVoice'
import Itinerary from 'itinerary'
import ItemData from 'itemData'
import Divider from 'divider'
import Avatar from 'avatar'

const stories = storiesOf('Pages|Ride details/Bus', module)

stories.add('Default', () => (
  <Fragment>
    <Section>
      <TheVoice>Ven. 11 octobre</TheVoice>
      <Itinerary
        isCollapsible
        collapsedLabel="2 stopovers"
        fromAddon="Lille"
        toAddon="Nice"
        places={[
          {
            mainLabel: 'Gare routière de Bercy',
            subLabel: 'Paris',
            isoDate: '2017-12-11T09:00',
            time: '09:00',
            href: '#',
          },
          {
            mainLabel: 'Mâcon',
            isoDate: '2017-12-11T10:00',
            time: '10:00',
          },
          {
            mainLabel: 'Lyon',
            isoDate: '2017-12-11T11:00',
            time: '11:00',
          },
          {
            mainLabel: 'Gare de Marseille Saint Charles',
            subLabel: 'Marseille',
            isoDate: '2017-12-11T20:00',
            time: '20:00',
            href: '#',
          },
        ]}
        small={false}
      />
      <ItemData data="17,50 €" mainInfo="Prix total pour 1 passager" />
      <Divider />
      <ItemData
        mainInfo="BlaBlaBus"
        data={<Avatar image="http://placehold.it/144x144" alt="Bus Logo" />}
      />
      <img width="100%" src="http://placehold.it/630x315" alt="Vehicle" />
    </Section>
  </Fragment>
))
