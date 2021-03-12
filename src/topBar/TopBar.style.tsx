import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints } from '../_utils/branding'

export const StyledTopBar = styled.header<{ zIndex?: number }>`
  position: fixed;
  width: 100%;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  top: 0;
  height: ${componentSizes.headerHeight.small};
  z-index: ${props => props.zIndex || 3}; /* z-index overridden in main application, above drawer */

  .kirk-topBar-inner {
    display: flex;
    width: 100%;
    margin: auto;
    font-weight: 500;
  }

  .kirk-topBar-left,
  .kirk-topBar-right {
    flex: 1;
    display: flex;
  }

  .kirk-topBar-left {
    justify-content: flex-start;
  }

  .kirk-topBar-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .kirk-topBar-right {
    justify-content: flex-end;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    height: ${componentSizes.headerHeight.large};

    .kirk-topBar-inner {
      width: 1280px;
    }

    .kirk-topBar-inner div:nth-child(3n) {
      /* don't force the full text navigation links to grow on large media */
      flex: none;
    }
  }
`
