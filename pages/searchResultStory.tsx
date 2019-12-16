import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'

import { Column } from '_utils/layout'
import SubHeader from 'subHeader'
import UneditableTextField from 'uneditableTextField'
import Text from 'text'
import SearchIcon from 'icon/searchIcon'
import Item from '_utils/item'
import Button, { ButtonStatus } from 'button'
import BlankSeparator from 'blankSeparator'
import Disclaimer from 'disclaimer'
import TopTripCardList from 'topTripCardList'
import TripCard from 'tripCard'
import Tabs, { TabStatus } from 'tabs'
import CarpoolIcon from 'icon/carpoolIcon'
import BusIcon from 'icon/busIcon'

const stories = storiesOf('Pages|Search result page', module)
stories.addDecorator(withKnobs)

const tripCardConfig = ({highlighted = false} = {}) => ({
    href: '/',
    itinerary: [
        {
            mainLabel: 'Paris',
            subLabel: 'Porte de Vincennes',
            time: '09:00',
            isoDate: '2017-12-11T09:00',
            distanceFromPoint: '1,5km',
        },
        {
            mainLabel: 'Bordeaux',
            subLabel: 'Gare Bordeaux Saint-Jean',
            time: '12:00',
            isoDate: '2017-12-11T12:00',
            distanceFromPoint: '8km',
        },
    ],
    price: '8,00€',
    flags: {
        ladiesOnly: true,
        maxTwo: true,
        autoApproval: true,
    },
    highlighted: highlighted ? 'Closest match' : '',
    metaUrl: 'Meta URL',
    title: 'Sun march 8th, 18:00',
})

const tabPanel = <Fragment>
    <Item
        leftBody='930 trajets allant de Bordeaux à Toulouse publiés'
        leftBodyAnnotation='101 trajets complets'
        rightAddon={<Button status={ButtonStatus.UNSTYLED} href='#'>Filter</Button>}
    />
    <BlankSeparator />
    <ul>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
    </ul>
    <Disclaimer deprecatedHelpUrl='#'>
        Recommandation basée sur vos critères de recherche.
    </Disclaimer>
    <ul>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
    </ul>
    <SubHeader>Tomorrow</SubHeader>
    <ul>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
        <TripCard {...tripCardConfig()}/>
    </ul>
</Fragment>

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
        }
    ],
}

const topTripCardConfig = {
    ariaLabel: 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
    href: '/',
    itinerary: [
        {
            mainLabel: 'Paris',
            subLabel: 'Porte de Vincennes',
            time: '09:00',
            isoDate: '2017-12-11T09:00',
            distanceFromPoint: '1,5km',
        },
        {
            mainLabel: 'Bordeaux',
            subLabel: 'Gare Bordeaux Saint-Jean',
            time: '12:00',
            isoDate: '2017-12-11T12:00',
            distanceFromPoint: '8km',
        },
    ],
    price: '8,00€',
    flags: {
        ladiesOnly: true,
        maxTwo: true,
        autoApproval: true,
    },
    metaUrl: 'Meta URL',
    badge: 'Cheapest',
    title: '',
}

stories.add('default', () => (
    <div style={{width: '600px', margin: 'auto', border: 'lightgray 1px solid'}}>
        <Column>
            <UneditableTextField href='#' addOn={<SearchIcon />}>
                <div>
                    <Text>Top stuff</Text>
                    <Text>Bottom stuff</Text>
                </div>
            </UneditableTextField>

            <TopTripCardList isWrapped={boolean('isWrapped', false)}>
                <TripCard
                    enableColumnLayout={false}
                    {...topTripCardConfig} badge="Closest"/>
                <TripCard
                    enableColumnLayout={false}
                    {...topTripCardConfig} />
            </TopTripCardList>

            <Tabs {...defaultTabsConfig}></Tabs>
      </Column>
    </div>
))



