import styled from 'styled-components'

import { color, space } from '../../_utils/branding'
import { Lines } from '../Itinerary'
import { LineProps } from './Line'

export const StyledLineWrapper = styled.div<LineProps>`
  position: relative;
  min-height: 32px;
  width: 10px;
  margin-right: ${space.m};
  top: ${space.m};

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS
     ? 'background: white;'
     : ''};
`

// Using background-image to display the dashed line for connection
const base64EncodedDash = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMDAiPjxsaW5lIHgxPSIyIiB4Mj0iMiIgeTE9IjUiIHkyPSIxMDAlIiBzdHJva2U9IiM3MDhDOTEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIuMDAxLCAxMCIvPjwvc3ZnPg=='

export const StyledLine = styled.div<LineProps>`
  position: relative;
  width: 4px;
  height: calc(100% + 4px);
  left: 3px;
  top: 4px;

  ${(props: LineProps) => props.line === Lines.ACTIVE ? `background-color: ${color.midnightGreen};` : ''};
  ${(props: LineProps) => props.line === Lines.INACTIVE ? `background-color: ${color.gray};` : ''};

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS
      ? 'height: 8px; border-radius: 0 0 4px 4px; background-color: #054752; top: -6px;'
      : ''};

  & + & {
    ${(props: LineProps) =>
      props.line === Lines.HIDDEN_STOPS
        ? 'height: 24px; border-radius: 4px 4px 0 0; background-color: #054752; position: absolute; top: auto; bottom: -4px;'
        : ''};
  }

  ${(props: LineProps) =>
    props.line === Lines.CONNECTION
      ? 'background-image: url("data:image/svg+xml;base64,'+ base64EncodedDash +'");background-repeat: repeat-y;'
      : ''};
`

export const StyledBullet = styled.div`
   position: absolute;
   top: 4px;

   svg {
     position: relative;
     top: -3px;
     left: -3px;
   }
`
