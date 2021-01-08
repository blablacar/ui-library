import styled from 'styled-components'

import { autoCompleteBaseStyle, sectionBaseStyle } from '../../../searchForm/baseStyles'
import { AutoCompleteSection } from './AutoCompleteSection'

const StyledAutoComplete = styled(AutoCompleteSection)`
  & {
    ${sectionBaseStyle};
    ${autoCompleteBaseStyle};
  }
`

export { StyledAutoComplete as AutoCompleteSection }
