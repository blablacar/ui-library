import styled from 'styled-components'
import { responsiveBreakpoints } from '_utils/branding'

import { MainContent as MainContentComponent } from './content'

export const Content = styled.div.attrs(() => ({
  role: 'presentation',
}))``

export const BottomContent = styled.div.attrs(() => ({
  role: 'presentation',
}))``

export const MainContent = styled(MainContentComponent)`
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
