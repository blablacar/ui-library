import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../_utils/branding'

export const StyledTopBar = styled.header<{ $zIndex: number }>`
  position: fixed;
  width: 100%;
  height: ${componentSizes.headerHeight.small};
  padding: 0 ${space.l};
  background-color: ${color.white};
  display: flex;
  align-items: center;
  top: 0;
  z-index: ${props => props.$zIndex}; /* z-index defined in main application, above drawer */

  &.kirk-topBar--scrolled {
    border-bottom: 1px solid ${color.gray};
  }

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
    padding: 0 ${space.xl};

    .kirk-topBar-inner {
      width: 1280px;
    }

    .kirk-topBar-inner div:nth-child(3n) {
      /* don't force the full text navigation links to grow on large media */
      flex: none;
    }
  }
`
