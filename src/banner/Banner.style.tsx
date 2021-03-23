import styled from 'styled-components'

import { color, componentSizes, space } from '../_utils/branding'
import { TextDisplay1 } from '../typography/display1'
import { TextTitle } from '../typography/title'

export const StyledBanner = styled.section`
  background-color: ${color.boostBlue};
  padding: ${space.xxl} ${space.xl};
  height: 19.625rem; //314px magic number
  overflow: hidden;
`

const Heading = styled(TextDisplay1)`
  margin-bottom: ${space.xl};
`
const Paragraph = styled(TextTitle)`
  margin-bottom: ${space.xl};
`
const Actions = styled.div`
  margin-top: ${space.xl};

  > button:first-child {
    margin-right: ${space.l};
  }
`

export const Frame = styled.div`
  padding: ${space.l} ${space.xxl} 0 ${space.xxl};
  background-image: url('./phone-frame.svg');
`
/** LAYOUT */
export const Content = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};
`
export const Media = styled.div``

export const Body = styled.div``

export const BannerElements = {
  Content,
  Media,
  Body,
  Heading,
  Paragraph,
  Frame,
  Actions,
}
