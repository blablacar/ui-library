import React from 'react'
import Item from '_utils/item'
import InfoIcon from 'icon/infoIcon'
import { TextDisplayType } from 'text'

interface DisclaimerProps {
    readonly useInfoIcon: boolean
    readonly children: string|JSX.Element
}

const Disclaimer = ({ useInfoIcon, children}: DisclaimerProps) => (
    <Item
        leftBody={children}
        leftBodyDisplay={TextDisplayType.CAPTION}
        leftAddon={useInfoIcon ? <InfoIcon /> : null}
    />
)

export default Disclaimer
