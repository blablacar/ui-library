import styled from 'styled-components'
import { color, font, radius, space } from '_utils/branding'

import AutoCompleteList from './AutoCompleteList'

const StyledAutoCompleteList = styled(AutoCompleteList)`
  & {
    margin-top: ${space.m};
    flex: 1;
  }

  & .kirk-item-choice {
    padding: ${space.m} ${space.xl};
  }

  & .kirk-autoComplete-primaryText {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  & .kirk-autoComplete-secondaryText {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    margin-top: ${space.s};
  }

  & .kirk-item-choice:hover,
  & .kirk-item-choice[aria-selected='true'] {
    background-color: ${color.lightBackground};
    border-radius: ${radius.l};
  }
`

export default StyledAutoCompleteList
