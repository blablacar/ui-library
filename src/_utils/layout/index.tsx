import styled from 'styled-components'
import { space } from '_utils/branding'
import cc from 'classcat'
import React, { Fragment } from 'react'

// Root class for a Column element.
const KIRK_LAYOUT_COLUMN_CLASS = 'kirk-layout-column'

// Class for a fluid column item.
// The content of a fluid item will try to take all the hortizontal space of the column and will
// overlap the left and right spacing of the column.
// This class will be a noop if not contained inside a column with the class
// KIRK_LAYOUT_COLUMN_CLASS. We use this particularity to enable on demand the column layout.
export const KIRK_LAYOUT_FLUID_ITEM_CLASS = 'kirk-layout-fluid-item'

// Class for a solid column item.
// The content of a solid item has a visible frontier (a border, a shadow or delimiting background
// color). This content will not overlap the left and right padding of a column container.
// This class will be a noop if not contained inside a column with the class
// KIRK_LAYOUT_COLUMN_CLASS. We use this particularity to enable on demand the column layout.
export const KIRK_LAYOUT_SOLID_ITEM_CLASS = 'kirk-layout-solid-item'

// Helpers to make CSS below more concise.
const FLUID_COLUMN_ITEM = `.${KIRK_LAYOUT_FLUID_ITEM_CLASS}`
const SOLID_COLUMN_ITEM = `.${KIRK_LAYOUT_SOLID_ITEM_CLASS}`

const gutterWidth = space.l
const internalHorizontalPadding = space.m
export const columnItemHorizontalSpacing = `calc(${gutterWidth} + ${internalHorizontalPadding})`

const UnstyledColumn = ({className, children} : {className?: Classcat.Class, children: any}) =>
    <div className={cc([KIRK_LAYOUT_COLUMN_CLASS, className])}>
        <Fragment>{children}</Fragment>
    </div>
export const Column = styled(UnstyledColumn)`
  & ${FLUID_COLUMN_ITEM} {
    padding-left: ${columnItemHorizontalSpacing} !important;
    padding-right: ${columnItemHorizontalSpacing} !important;
  }
  
  & ${SOLID_COLUMN_ITEM} {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  & ${SOLID_COLUMN_ITEM} + ${SOLID_COLUMN_ITEM} {
    margin-top: 16px;
  }
  
  & ${SOLID_COLUMN_ITEM} {
    margin-left: ${columnItemHorizontalSpacing} !important;
    margin-right: ${columnItemHorizontalSpacing} !important;
  }
`
