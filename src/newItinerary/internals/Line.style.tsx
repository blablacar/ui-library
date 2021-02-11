import styled from 'styled-components'

import { color, space } from '../../_utils/branding'
import { Lines } from '../Lines'

export const StyledLineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 32px;
  width: 10px;
  margin-right: ${space.m};
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
  width: 4px;
  height: 12px;
  background: ${({ line }) => lineToBackground[line]};

  &:last-child {
    flex: 1;
  }

  // For hidden stops, render rounded bars with some margins.
  ${({ line }) =>
    line === Lines.HIDDEN_STOPS &&
    `
    &:first-child {
      height: 8px;
      margin-bottom: 6px;
      border-radius: 0 0 4px 4px;
    }

    &:last-child {
      margin-top: 12px;
      border-radius: 4px 4px 0 0;
    }
  `}
`

export const StyledBullet = styled.div`
  // Use absolute position to make sure the bullet goes over the line nicely.
  position: absolute;
  top: 12px;

  svg {
    position: relative;
    top: -3px;
  }
`
