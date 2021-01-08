import styled from 'styled-components'

import { space } from '../../../_utils/branding'
import { autoCompleteBaseStyle, overlayBaseStyle } from '../../../searchForm/baseStyles'
import { AutoCompleteOverlay } from './AutoCompleteOverlay'

const StyledAutoComplete = styled(AutoCompleteOverlay)`
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

export { StyledAutoComplete as AutoCompleteOverlay }
