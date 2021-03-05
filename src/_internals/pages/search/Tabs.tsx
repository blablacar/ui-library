import React, { Fragment } from 'react'

import { Item } from '../../../_internals/item'
import { Button, ButtonStatus } from '../../../button'
import { Disclaimer } from '../../../disclaimer'
import { SpacingDivider } from '../../../divider/spacingDivider'
import { BusIcon } from '../../../icon/busIcon'
import { CarpoolIcon } from '../../../icon/carpoolIcon'
import { LayoutNormalizer } from '../../../layout/layoutNormalizer'
import { BaseSection as Section } from '../../../layout/section/baseSection'
import { CardsSection } from '../../../layout/section/cardsSection'
import { TabsSection } from '../../../layout/section/tabsSection'
import { Address, Itinerary } from '../../../newItinerary'
import { SearchRecap } from '../../../searchRecap'
import { SubHeader } from '../../../subHeader'
import { TabStatus } from '../../../tabs'
import { TripCard } from '../../../tripCard'

const createTripCardConfig = ({ highlighted = false } = {}) => ({
  href: '/',
  itinerary: (
    <Itinerary>
      <Address label="Paris" subLabel="Porte de Vincennes" time="09:00" />
      <Address label="Bordeaux" subLabel="Gare Bordeaux Saint-Jean" time="12:00" />
    </Itinerary>
  ),
  price: '8,00€',
  flags: {
    ladiesOnly: true,
    maxTwo: true,
    autoApproval: true,
  },
  highlighted: highlighted ? 'Closest match' : '',
})

const defaultSearchRecapConfig = {
  from: 'Bordeaux',
  to: 'Toulouse, centre ville',
  info: "Aujourd'hui 14h30, 2 passagers",
}

const filterButton = (
  <Button status={ButtonStatus.UNSTYLED} href="#">
    Filter
  </Button>
)
const tabPanel = (
  <Fragment>
    <Item
      leftBody="930 trajets allant de Bordeaux à Toulouse publiés"
      leftBodyAnnotation="101 trajets complets"
      rightAddon={filterButton}
    />
    <SpacingDivider />
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
    <Disclaimer deprecatedHelpUrl="#">
      Recommandation basée sur vos critères de recherche.
    </Disclaimer>
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
    <SubHeader>Tomorrow</SubHeader>
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
  </Fragment>
)

const defaultTabsConfig = {
  activeTabId: 'tab1',
  status: TabStatus.FIXED,
  tabs: [
    {
      id: 'tab1',
      label: 'All',
      panelContent: tabPanel,
    },
    {
      id: 'tab2',
      label: 'Car',
      panelContent: tabPanel,
      icon: <CarpoolIcon size="32" />,
    },
    {
      id: 'tab3',
      label: 'Bus',
      panelContent: tabPanel,
      icon: <BusIcon size="32" />,
    },
  ],
}

export const Tabs = (): JSX.Element => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={false} />

    <Section>
      <SearchRecap {...defaultSearchRecapConfig} />
    </Section>
    <CardsSection>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </CardsSection>
    <TabsSection tabsProps={defaultTabsConfig} />
  </Fragment>
)
