import styled from 'styled-components'

import { color, space } from '../_utils/branding'

export const StyledSnackbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* above the modal */

  & .kirk-snackbar {
    display: flex;
    flex-direction: row;
    align-self: center; /* fix centering on IE11 */
    width: 100%;
    max-width: 614px;
    overflow: hidden;
    background-color: ${color.red};
    padding: ${space.l} ${space.xl};
  }

  & .kirk-snackbar .kirk-snackbar-content {
    flex: 1;
    margin: 0;
    color: ${color.white};
  }

  & .kirk-snackbar .kirk-snackbar-cross {
    padding: 0 0 0 ${space.m};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
