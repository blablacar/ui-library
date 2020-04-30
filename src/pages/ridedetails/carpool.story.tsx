import React, { Fragment } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Avatar from 'avatar'
import Divider from 'divider'
import BubbleIcon from 'icon/bubbleIcon'
import PetIcon from 'icon/pet'
import SmokeIcon from 'icon/smokeIcon'
import ItemAction from 'itemAction'
import ItemChoice from 'itemChoice'
import ItemData from 'itemData'
import ItemInfo from 'itemInfo'
import Itinerary from 'itinerary'
import LayoutNormalizer from 'layout/layoutNormalizer'
import Section from 'layout/section/baseSection'
import SubHeader from 'subHeader'
import TheVoice from 'theVoice'

const stories = storiesOf('Pages|Ride details/Carpool', module)

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />
    <Section>
      <TheVoice>Ven. 11 octobre</TheVoice>
      <Itinerary
        fromAddon="Paris"
        toAddon="Marseille"
        places={[
          {
            mainLabel: 'Gare routière de Bercy',
            subLabel: 'Paris',
            isoDate: '2017-12-11T09:00',
            time: '09:00',
            href: '#',
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
      <ItemChoice label="Vince" rightAddon={<Avatar />} href="#" />
      <ItemAction action="Contacter Vince" leftAddon={<BubbleIcon />} href="#" />
      <Divider />
      <ul>
        <ItemInfo mainInfo="Fumer nest pas autporisé dans la voiture." icon={<SmokeIcon />} />
        <ItemInfo mainInfo="Pas d'animaux dans la voiture." icon={<PetIcon />} />
      </ul>
      <Divider />
      <SubHeader>Passagers</SubHeader>
      <ul>
        <ItemChoice label="Jessica" labelInfo="Paris - Rennes" rightAddon={<Avatar />} href="#" />
        <ItemChoice label="Joe" labelInfo="Paris - Lyon" rightAddon={<Avatar />} href="#" />
      </ul>
      <Divider />
      <ItemAction action="Signaler ce trajet" href="#" />
    </Section>
  </Fragment>
))
