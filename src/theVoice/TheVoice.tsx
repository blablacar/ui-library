import React from 'react'
import Title from 'title'

interface TheVoiceProps {
    readonly className?: Classcat.Class
    readonly children: string
}

const TheVoice = ({ className, children }: TheVoiceProps) => {
    return <Title className={className} headingLevel='1'>{children}</Title>
}
export default TheVoice
