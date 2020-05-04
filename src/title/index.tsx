import styled from 'styled-components'

import { color, font, fontWeight } from '_utils/branding'

import Title from './Title'

const StyledTitle = styled(Title)`
  & {
    color: ${color.midnightGreen};
    font-size: ${font.xl.size};
    font-weight: ${fontWeight.medium};
    line-height: ${font.xl.lineHeight};
  }
`

export { TitleProps } from './Title'
export default StyledTitle
