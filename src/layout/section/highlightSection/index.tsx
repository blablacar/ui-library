import styled from 'styled-components'
import { color } from '_utils/branding'

import HighlightSection from './highlightSection'

const StyledHighlightSection = styled(HighlightSection)`
  & {
    background-color: ${color.success};
  }
`

export default StyledHighlightSection
