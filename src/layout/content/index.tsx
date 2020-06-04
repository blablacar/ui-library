import styled from 'styled-components'

import { responsiveBreakpoints } from '../../_utils/branding'
import { MainContent } from './content'

export const Content = styled.div.attrs(() => ({
  role: 'presentation',
}))``

export const BottomContent = styled.div.attrs(() => ({
  role: 'presentation',
}))``

const StyledMainContent = styled(MainContent)`
  & {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - ${props => props.topBarHeight});
    min-height: stretch;
    justify-content: space-between;
  }

  & > *:not(${Content}, ${BottomContent}) {
    flex-grow: 1;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      justify-content: flex-start;
    }
  }
`

export { StyledMainContent as MainContent }
export default StyledMainContent
