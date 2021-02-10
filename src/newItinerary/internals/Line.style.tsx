import styled from 'styled-components'

import { Lines } from '../Itinerary'
import { LinePlacement, LineProps } from './Line'

export const StyledLineWrapper = styled.div`
  position: relative;
  min-height: 32px;
  width: 10px;
`

export const StyledLine = styled.div`
  position: relative;
  background-color: ${(props: LineProps) => props.line};
  width: 4px;
  height: calc(100% + 4px);
  left: 3px;
  top: 4px;

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS_TOP
      ? 'height: 8px; border-radius: 0 0 4px 4px; background-color: #054752;'
      : ''};

  ${(props: LineProps) =>
    props.line === Lines.HIDDEN_STOPS_BOTTOM
      ? 'height: 18px; border-radius: 4px 4px 0 0; background-color: #054752; position: absolute; top: 30px; left: -7px;'
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
