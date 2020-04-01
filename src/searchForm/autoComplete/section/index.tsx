import styled from 'styled-components'
import { autoCompleteBaseStyle, sectionBaseStyle } from 'searchForm/baseStyles'

import autoComplete from './AutoCompleteSection'

const StyledAutoComplete = styled(autoComplete)`
  & {
    ${sectionBaseStyle};
    ${autoCompleteBaseStyle};
  }
`

export default StyledAutoComplete
