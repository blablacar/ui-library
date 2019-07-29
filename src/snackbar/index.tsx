import styled from 'styled-components'
import { color, space } from '_utils/branding'
import Snackbar from './Snackbar'

const StyledSnackbar = styled(Snackbar)`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .kirk-snackbar {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 614px;
    margin: 0 auto;
    bottom: 0;
    overflow: hidden;
    background-color: ${color.danger};
    padding: ${space.l} ${space.xl};
    z-index: 1000; /* above the modal */
  }

  & .kirk-snackbar-content {
    flex: 1;
    margin: 0;
    color: ${color.white};
  }

  & .kirk-snackbar-cross {
    padding: 0 0 0 ${space.m};
    display: flex;
    flex-direction: column;
    algin-items: flex-start;
  }
`

export default StyledSnackbar
