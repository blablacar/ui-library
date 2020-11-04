import styled from 'styled-components'

import { color, modalSize, responsiveBreakpoints, space } from '../_utils/branding'
import { Modal } from '../modal'

const footerHeight = '96px' /* = padding + content */

export const StyledConfirmationModal = styled(Modal)`
  .kirk-confirmationModal {
    background-color: rgba(5, 71, 82, 0.95);
    color: ${color.white};
  }

  .kirk-confirmationModal-dialog {
    position: relative;
    margin: 0 auto;
    padding: ${footerHeight} ${space.xl};
    width: auto;
    min-height: 100%;
    box-shadow: none;
  }

  .kirk-confirmationModal .kirk-modal-dialog {
    background: transparent;
    width: auto !important;
    padding: 0;
    max-width: initial;
    margin: 0;
    display: flex;
    height: 100%;
  }

  .kirk-confirmationModal-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    display: flex;
    justify-content: flex-end;
    padding: ${space.xl};
    background-color: ${color.midnightGreen};
  }

  .kirk-confirmationModal-footer {
    justify-content: flex-end;
  }

  .kirk-confirmationModal--hasCloseButton .kirk-confirmationModal-footer {
    justify-content: space-between;
  }

  .kirk-confirmationModal-closeButton {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: center;

    .kirk-confirmationModal-dialog {
      justify-content: center;
      align-content: center;
    }

    .kirk-confirmationModal-dialog {
      max-width: ${modalSize.m};
    }

    .kirk-confirmationModal-body {
      padding: ${space.xl};
    }

    .kirk-confirmationModal-footer {
      position: relative;
      display: block;
      margin: 0 auto;
      background: none;
    }

    .kirk-confirmationModal-footer .kirk-button {
      margin: ${space.l} ${space.xl} 0;
    }

    .kirk-confirmationModal-confirmButton {
      min-width: 128px;
      justify-content: center;
    }
  }
`
