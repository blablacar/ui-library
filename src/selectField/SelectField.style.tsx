import styled from 'styled-components'

import { color, font, inputBorderSize, radius, selectHeight, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledSelectField = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  ${normalizeHorizontally};
  padding: ${space.m} 0;

  .kirk-selectField-background {
    position: relative;
    color: ${color.midnightGreen};
    background-color: ${color.lightGray};
    border-radius: ${radius.l};
    border: solid 1px ${color.lightGray};
    box-shadow: none;
    padding: 0 0 0 ${space.l};
  }

  & select {
    display: block;
    position: relative;
    width: 100%;
    height: ${selectHeight};
    margin: 0;
    padding: 0 calc(${space.m} + ${space.xl}) 0 0;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    color: ${color.midnightGreen};
    box-shadow: none;
    background: transparent;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: none;
    border-radius: ${radius.l};
    cursor: pointer;
    z-index: 1;
  }

  /* Remove native select arrow on Internet Explorer 10 and 11  */
  & select::-ms-expand {
    display: none;
  }

  & select:focus {
    outline: none;
  }

  & .kirk-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${space.m};
    background: ${color.lightGray};
    z-index: 0;
  }

  .kirk-selectField--hasFocus {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }

  .kirk-selectField--hasFocus select {
    height: calc(${selectHeight} - ${inputBorderSize.default} - ${inputBorderSize.focus});
  }
`
