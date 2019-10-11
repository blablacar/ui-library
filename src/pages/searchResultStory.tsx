import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'

import { HorizontalLayout, VerticalLayout, KirkTile } from '_utils/layout'
import ItemInfo from 'itemInfo'
import Divider from 'divider'
import TheVoice from 'theVoice'

import BubbleIcon from 'icon/bubbleIcon'
import SmokeIcon from 'icon/smokeIcon'
import PetIcon from 'icon/petIcon'
import { status } from '_utils/icon/status'
import ItemAction from 'itemAction'
import SubHeader from 'subHeader'
import Itinerary from 'itinerary'
import ItemChoice from 'itemChoice'
import Avatar from 'avatar'
import UneditableTextField from 'uneditableTextField'
import Text, {TextDisplayType} from 'text'
import ItemData from 'itemData'
import SearchIcon from 'icon/searchIcon'
import Item from '_utils/item'
import Button, { ButtonStatus } from 'button'
import BlankSeparator from 'blankSeparator'
import Disclaimer from 'disclaimer'
import TripCard from 'tripCard'

const stories = storiesOf('Pages', module)
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

stories.add('Search result page', () => (
    <div style={{width: '600px', margin: 'auto', border: 'lightgray 1px solid'}}>
        <VerticalLayout>
            <UneditableTextField href='#' addOn={<SearchIcon />}>
                <div>
                    <Text>Top stuff</Text>
                    <Text>Bottom stuff</Text>
                </div>
            </UneditableTextField>
            <Item
                leftBody='930 trajets allant de Bordeaux à Toulouse publiés'
                leftBodyAnnotation='101 trajets complets'
                rightAddon={<Button status={ButtonStatus.UNSTYLED} href='#'>Filter</Button>}
            />
            <BlankSeparator />
        </VerticalLayout>

        <VerticalLayout>
            <TripCard {...tripCardConfig({highlighted: true})}/>
            <Disclaimer deprecatedHelpUrl='#'>
                Recommandation basée sur vos critères de recherche.
            </Disclaimer>
        </VerticalLayout>
        <VerticalLayout tag='ul'>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
        </VerticalLayout>

        <VerticalLayout>
            <SubHeader>Tomorrow</SubHeader>
        </VerticalLayout>
        <VerticalLayout tag='ul'>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
            <TripCard {...tripCardConfig()}/>
        </VerticalLayout>
    </div>
))

