import styled from 'styled-components'

export const StyledItineraryItem = styled.li<{ minHeight: number }>`
  display: flex;
  min-height: ${props => props.minHeight}px;
`
