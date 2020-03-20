import styled from 'styled-components'
import { color, space, modalSize, responsiveBreakpoints } from '_utils/branding'
import SuccessModal from './SuccessModal'

const footerHeight = '96px' /* = padding + content */

const StyledSuccessModal = styled(SuccessModal)`
  & .kirk-successModal {
    text-align: center;
    background-color: ${color.successBackground};
    color: ${color.white};
  }

  & .kirk-modal.kirk-successModal {
    .kirk-modal-dialog {
      margin: 0 auto;
      max-width: ${modalSize.m};
      height: 100%;
      padding: ${space.xl} 0 ${footerHeight} 0;
      background-color: ${color.successBackground}; /* override */
    }

    .kirk-modal-body {
      padding: ${space.xl};
      align-items: center;
    }
  }

  & .kirk-successModal-image {
    width: 80%;
    margin-bottom: ${space.xl};
  }

  & .kirk-successModal-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    padding: ${space.xl};
    text-align: center;
  }

  & .kirk-successModal-confirmButton {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }

  /* Stronger selector to override Modal component styling */
  &.kirk-modal-dimmer .kirk-modal.kirk-successModal .kirk-modal-dialog.kirk-modal-dialog {
    width: auto;
  }

  /* Small */

  & .kirk-modal--small .kirk-successModal-image {
    max-height: 33vh;
    object-fit: contain;
  }

  /* Large */

  @media (${responsiveBreakpoints.isMediaLarge}) {
    .kirk-successModal {
      .kirk-modal-body {
        position: relative;
        display: flex;
      }

      .kirk-modal-dialog {
        padding: ${space.xl} 0;
      }
    }

    .kirk-successModal-bodyItem {
      &:nth-child(odd) {
        padding-right: ${space.xl};
      }
      &:nth-child(even) {
        padding-left: ${space.xl};
      }
    }

    .kirk-successModal-bodyItem {
      width: 50%;
    }

    .kirk-successModal-image {
      margin-bottom: 0;
    }

    &.kirk-successModal .kirk-modal-dialog {
      padding: ${space.xl} 0;
    }

    .kirk-successModal-footer {
      position: relative;
      display: block;
      margin: 0 auto;

      .kirk-button {
        margin: ${space.l} ${space.xl} 0;
      }
    }
  }
`

export { SuccessModalProps } from './SuccessModal'
export default StyledSuccessModal
