import styled from 'styled-components'
import { color, radius, space, font } from '_utils/branding'

import autoComplete from './AutoCompleteOverlay'

const overlayWidth = '375px'

const StyledAutoComplete = styled(autoComplete)`
  & {
    box-sizing: border-box;
    width: ${overlayWidth};
    border: 1px solid ${color.border};
    border-radius: ${radius.l};
    padding: ${space.xl};
    /* Same as TripCard, we might need to have box-shadow specs so that we can move it to branding file */
    box-shadow: 0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08);
  }

  & .kirk-textField-wrapper {
    background: transparent;
    border-radius: 0;
    border: 0;
  }

  & .kirk-textField-wrapper .kirk-autoComplete-icon {
    padding: 0;
    line-height: 0;
    width: 48px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
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
