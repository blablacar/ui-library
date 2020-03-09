import styled from 'styled-components'
import { space, font } from '_utils/branding'

import autoComplete from './AutoCompleteSection'

const StyledAutoComplete = styled(autoComplete)`
  & {
    box-sizing: border-box;
  }

  & .kirk-textField-wrapper {
    background: transparent;
    border-radius: 0;
    border: 0;
  }

  & .kirk-textField-wrapper input {
    font-size: ${font.m.size}
    line-height: ${font.m.lineHeight}
    background: transparent;
    border-radius: 0;
  }

  & .kirk-items-list {
    padding: 0;
  }

  & .kirk-items-list.kirk-autoComplete-list .kirk-items-list-item::before {
    content: none;
  }

  & .kirk-items-list .kirk-items-list-item .kirk-item-choice {
    padding: ${space.m} ${space.l};
  }
`

export default StyledAutoComplete
