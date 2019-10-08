import React from 'react'
import Item from '_utils/item'
import InfoIcon from 'icon/infoIcon'
import QuestionIcon from 'icon/questionIcon'
import Button, { ButtonStatus } from 'button'
import { TextDisplayType } from 'text'
import { color } from '_utils/branding'


interface DisclaimerProps {
    // Whether to use a decoration Info icon on the left side of the Disclaimer or not.
    readonly useInfoIcon?: boolean
    readonly children: string|JSX.Element
    // Whether this Disclaimer will be used as caption to another fragment of UI. In that case, it
    // will use some caption visual styles (e.g. smaller font)
    readonly isCaption?: boolean
    // Whether to use a clickable Question mark blue icon on the right side of the Disclaimer or
    // not. Activating this affordance will redirect to deprecatedHelpUrl.
    // This is deprecated, you should use inline links inside the Disclaimer content instead.
    readonly deprecatedHelpUrl?: string
}

const deprecatedHelpButtonIcon = (deprecatedHelpUrl: string): JSX.Element => {
    return <Button href={deprecatedHelpUrl} status={ButtonStatus.UNSTYLED} isBubble>
        <QuestionIcon iconColor={color.primary} />
    </Button>
}

const Disclaimer = ({
        useInfoIcon = true,
        isCaption = true,
        children,
        deprecatedHelpUrl = null}: DisclaimerProps) => (
    <Item
        leftBody={children}
        leftBodyDisplay={isCaption ? TextDisplayType.CAPTION : TextDisplayType.BODY}
        leftAddon={useInfoIcon ? <InfoIcon /> : null}
        rightAddon={deprecatedHelpUrl ? deprecatedHelpButtonIcon(deprecatedHelpUrl) : null}
    />
)

export default Disclaimer
