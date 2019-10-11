import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'

import { HorizontalLayout, VerticalLayout, KirkTile } from '_utils/layout'
import ItemInfo from 'itemInfo'
import ItemData from 'itemData'
import Divider from 'divider'
import TheVoice from 'theVoice'
import ClockIcon from 'icon/clockIcon'
import BubbleIcon from 'icon/bubbleIcon'
import SmokeIcon from 'icon/smokeIcon'
import PetIcon from 'icon/petIcon'
import { status } from '_utils/icon/status'
import ItemAction from 'itemAction'
import SubHeader from 'subHeader'
import Itinerary from 'itinerary'
import ItemChoice from 'itemChoice'
import Avatar from 'avatar'

const stories = storiesOf('Pages', module)
stories.addDecorator(withKnobs)

stories.add('Ride details', () => (
    <div style={{width: '600px', margin: 'auto', border: 'lightgray 1px solid'}}>
         <VerticalLayout>
            <TheVoice>Ven. 11 octobre</TheVoice>
            <Itinerary
                fromAddon='Paris'
                toAddon='Marseille'
                places={[
                    {
                        mainLabel: 'Paris',
                        isoDate: '2017-12-11T09:00',
                        time: '09:00',
                        href: '#',
                    },
                    {
                        mainLabel: 'Marseille',
                        isoDate: '2017-12-11T12:00',
                        time: '17:00',
                    },
                ]}
                small={boolean('small', false)}
            />
            <ItemData data='17,50 €' dataInfo='Par place' mainInfo='3 places restantes'
            />
            <Divider />
            <ItemChoice label="Vince" rightAddon={<Avatar  />} href="#" />
            <ItemAction action='Contacter Vince' leftAddon={<BubbleIcon />} href="#"/>
            <Divider />
        </VerticalLayout>

        <VerticalLayout tag='ul'>
            <ItemInfo
                mainInfo="Fumer nest pas autporisé dans la voiture."
                icon={<SmokeIcon  status={status.OFF} />}
            />
            <ItemInfo
                mainInfo="Pas d'animaux dans la voiture."
                icon={<PetIcon status={status.OFF} />}
            />
        </VerticalLayout>

        <VerticalLayout>
            <Divider />
            <SubHeader>Passagers</SubHeader>
        </VerticalLayout>
        <VerticalLayout tag='ul'>
            <ItemChoice
                label="Jessica"
                labelInfo="Paris - Rennes"
                rightAddon={<Avatar  />} href="#" />
            <ItemChoice
                label="Joe"
                labelInfo="Paris - Lyon"
                rightAddon={<Avatar  />} href="#" />
        </VerticalLayout>

        <VerticalLayout>
            <Divider />
            <ItemAction action='Signaler ce trajet' href="#"/>
        </VerticalLayout>
    </div>
))
