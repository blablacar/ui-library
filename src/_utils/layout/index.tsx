import styled from 'styled-components'
import { space } from '_utils/branding'
import cc from "classcat"
import React, {Fragment} from "react"

export interface TagWithExtraClassNameProps {
    readonly tag?: string
    readonly className?: Classcat.Class
    readonly children?: any

    readonly itemScope?: any
    readonly itemType?: any
}

const TagWithExtraClassName = (extraClassName:string) => {
    return ({ tag = 'div', className, children, ...initialProps }:
                TagWithExtraClassNameProps) => {
        const props = {
            className: cc([extraClassName, className]),
            ...initialProps,
        }
        return React.createElement(
            tag,
            props,
            <Fragment>{children}</Fragment>,
        )
    }
}

export const HorizontalLayout = TagWithExtraClassName('kirk-horizontal-layout')
export const KirkTile = TagWithExtraClassName('kirk-tile')
export const KirkCard = TagWithExtraClassName('kirk-card')

const UnstyledVerticalLayout = TagWithExtraClassName('kirk-vertical-layout')
const gutterWidth = space.l
const internalHorizontalPadding = space.m

export const VerticalLayout = styled(UnstyledVerticalLayout)`
  & > .kirk-tile {
    padding-left: calc(${gutterWidth} + ${internalHorizontalPadding}) !important;
    padding-right: calc(${internalHorizontalPadding} + ${gutterWidth}) !important;
  }
  
  & > .kirk-item {
    /* Override bad padding top/bottom values on kirk items and replace by min-height. */ 
    min-height: 56px !important; 
    padding-top: 0 !important;
    padding-bottom: 0 !important; 
  }
  
  & > .kirk-card {
  /*
    padding-left: ${internalHorizontalPadding} !important;
    padding-right: ${internalHorizontalPadding} !important;
    */
    margin-left: calc(${gutterWidth} + ${internalHorizontalPadding}) !important;
    margin-right: calc(${gutterWidth} + ${internalHorizontalPadding}) !important;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  & > .kirk-card + .kirk-card {
    margin-top: 16px;
  }
`
