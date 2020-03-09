import styled from 'styled-components'
import { autoCompleteBaseStyle } from 'searchForm/baseStyles'

import autoComplete from './AutoCompleteSection'

const StyledAutoComplete = styled(autoComplete)`
  & {
    box-sizing: border-box;

    ${autoCompleteBaseStyle}
  }
`

export default StyledAutoComplete
