import styled from 'styled-components'
import { space } from '_utils/branding'
import { overlayBaseStyle, autoCompleteBaseStyle } from 'searchForm/baseStyles'

import autoComplete from './AutoCompleteOverlay'

const StyledAutoComplete = styled(autoComplete)`
  & {
    ${overlayBaseStyle}

    ${autoCompleteBaseStyle}

    .kirk-textField-wrapper {
      padding-top: ${space.s};

      .kirk-autoComplete-icon {
        padding: 0;
        height: auto;
        display: flex;
        margin-right: ${space.m};
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export { AutoCompleteOverlayProps } from './AutoCompleteOverlay'

export default StyledAutoComplete
