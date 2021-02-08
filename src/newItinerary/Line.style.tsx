import styled from 'styled-components'

import { LinePlacement, LineProps } from './Line'

export const StyledLineWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 32px;
  width: 10px;
`

export const StyledLine = styled.div`
  background-color: ${(props: LineProps) => props.line};
  width: 4px;
  flex: 1;

  ${(props: LineProps) =>
    props.placement === LinePlacement.TOP
      ? 'margin-bottom: 4px; border-radius: 0 0 4px 4px'
      : null};

  ${(props: LineProps) =>
    props.placement === LinePlacement.BOTTOM
      ? 'margin-top: 4px; border-radius: 4px 4px 0 0'
      : null};
`
