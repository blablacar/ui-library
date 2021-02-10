import styled from 'styled-components'

import { color } from '../../_utils/branding'
import { Lines } from '../Itinerary'
import { LineProps } from './Line'

export const StyledLineWrapper = styled.div`
  position: relative;
  min-height: 32px;
  width: 10px;
`

// Using background-image to display the dashed line for connection
const base64EncodedDash = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMDAiPjxsaW5lIHgxPSIyIiB4Mj0iMiIgeTE9IjUiIHkyPSIxMDAlIiBzdHJva2U9IiM3MDhDOTEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIuMDAxLCAxMCIvPjwvc3ZnPg=='

export const StyledLine = styled.div`
  position: relative;
  width: 4px;
  height: calc(100% + 4px);
  left: 3px;
  top: 4px;

  ${(props: LineProps) => props.line === Lines.ACTIVE ? `background-color: ${color.midnightGreen};` : ''};
  ${(props: LineProps) => props.line === Lines.INACTIVE ? `background-color: ${color.gray};` : ''};

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS_TOP
      ? 'height: 8px; border-radius: 0 0 4px 4px; background-color: #054752;'
      : ''};

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS_BOTTOM
      ? 'height: 8px; border-radius: 4px 4px 0 0; background-color: #054752; position: absolute; top: 30px; left: -7px;'
      : ''};

  ${(props: LineProps) =>
    props.line === Lines.CONNECTION
      ? 'background-image: url("data:image/svg+xml;base64,'+ base64EncodedDash +'");background-repeat: repeat-y;'
      : ''};
`

export const StyledBullet = styled.div`
   position: absolute;
   top: 4px;

   ${(props: LineProps) =>
     props.line === Lines.HIDDEN_STOPS_TOP
       ? 'top: 50%;'
       : ''};
`
