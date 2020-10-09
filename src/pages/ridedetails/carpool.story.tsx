import React, { Fragment } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { RideAxis } from '../../_utils/rideAxis'
import { Avatar } from '../../avatar'
import { ContentDivider } from '../../divider/contentDivider'
import { BubbleIcon } from '../../icon/bubbleIcon'
import { PetIcon } from '../../icon/pet'
import { SmokeIcon } from '../../icon/smokeIcon'
import { ItemAction } from '../../itemAction'
import { ItemChoice } from '../../itemChoice'
import { ItemData } from '../../itemData'
import { ItemInfo } from '../../itemInfo'
import { Itinerary } from '../../itinerary'
import { LayoutNormalizer } from '../../layout/layoutNormalizer'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { SubHeader } from '../../subHeader'
import { TheVoice } from '../../theVoice'

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
    </Section>
    <Section noHorizontalSpacing>
      <ItemData data="17,50 €" mainInfo="Prix total pour 1 passager" />
      <ContentDivider />
      <ItemChoice label="Vince" rightAddon={<Avatar />} href="#" />
      <ItemAction
        action="Contacter Vince"
        leftAddon={<BubbleIcon iconColor={color.blue} />}
        href="#"
      />
      <ContentDivider />
      <ul>
        <ItemInfo mainInfo="Fumer nest pas autporisé dans la voiture." icon={<SmokeIcon />} />
        <ItemInfo mainInfo="Pas d'animaux dans la voiture." icon={<PetIcon />} />
      </ul>
      <ContentDivider />
    </Section>
    <Section>
      <SubHeader>Passagers</SubHeader>
    </Section>
    <Section noHorizontalSpacing>
      <ul>
        <ItemChoice
          label="Jessica"
          labelInfo={<RideAxis from="Paris" to="Rennes" />}
          rightAddon={<Avatar />}
          href="#"
        />
        <ItemChoice
          label="Joe"
          labelInfo={<RideAxis from="Paris" to="Lyon" />}
          rightAddon={<Avatar />}
          href="#"
        />
      </ul>
      <ContentDivider />
      <ItemAction action="Signaler ce trajet" href="#" />
    </Section>
  </Fragment>
))
