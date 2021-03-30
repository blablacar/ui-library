import styled from 'styled-components'

import { color, componentSizes, radius, space } from '../../_utils/branding'
import { ITINERARY_ITEM_BASE_HEIGHT } from '../Itinerary.style'
import { Lines } from '../Lines'

const LINE_WIDTH = '4px'
const LINE_HEIGHT = '12px' // First line is 12px long, the second is flex.

export const StyledLineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${ITINERARY_ITEM_BASE_HEIGHT}px;
  margin: 0 ${space.m};
  width: ${space.m};
  flex-shrink: 0;
`

// Using background-image to display the dashed line for connection
const base64EncodedDash =
  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMDAiPjxsaW5lIHgxPSIyIiB4Mj0iMiIgeTE9IjUiIHkyPSIxMDAlIiBzdHJva2U9IiM3MDhDOTEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIuMDAxLCAxMCIvPjwvc3ZnPg=='

const lineToBackground: Readonly<{ [key in Lines]: string }> = {
  [Lines.NONE]: 'transparent',
  [Lines.ACTIVE]: color.midnightGreen,
  [Lines.INACTIVE]: color.gray,
  [Lines.CONNECTION]: `repeat-y url("data:image/svg+xml;base64,${base64EncodedDash}")`,
  [Lines.HIDDEN_STOPS]: color.midnightGreen,
}

export const StyledLine = styled.div<{ line: Lines }>`
  width: ${LINE_WIDTH};
  height: calc(${LINE_HEIGHT} + 1px); // Adding 1 magic px to have the line go under the bullet
  background: ${({ line }) => lineToBackground[line]};

  &:last-child {
    flex: 1;
  }

  // For hidden stops, render rounded bars with some margins.
  ${({ line }) =>
    line === Lines.HIDDEN_STOPS &&
    `
    &:first-child {
      height: calc(${LINE_HEIGHT} - ${space.s}); // 4px margin before the icon
      border-radius: 0 0 ${radius.s} ${radius.s};
    }

    &:last-child {
      margin-top: calc(${componentSizes.bulletSize} + ${space.s} + ${space.s}); // 10px bullet height + 4px margins each side
      border-radius: ${radius.s} ${radius.s} 0 0;
    }
  `}
`

export const StyledBullet = styled.div<{ isIcon: boolean }>`
  // Use absolute position to make sure the bullet goes over the line nicely.
  position: absolute;
  // Magic numbers to align the icon/bullet with the text
  top: ${({ isIcon }) => (isIcon ? '7px' : '12px')};
  // IE 11 needs a left position. Let's center the bullet with CSS then
  left: 50%;
  transform: translateX(-50%);
`
