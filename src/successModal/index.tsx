import styled from 'styled-components'
import { space, modalSize, responsiveBreakpoints } from '_utils/branding'
import SuccessModal from './SuccessModal'

const footerHeight = '96px' /* = padding + content */

const StyledSuccessModal = styled(SuccessModal)`
  & .kirk-modal {
    .kirk-modal-dialog {
      margin: 0 auto;
      max-width: ${modalSize.m};
      height: 100%;
      padding: ${space.xl} 0 ${footerHeight} 0;
    }

    .kirk-modal-body {
      padding: ${space.xl};
      align-items: center;
    }
  }

  /* Stronger selector to override Modal component styling */
  &.kirk-modal-dimmer .kirk-modal .kirk-modal-dialog.kirk-modal-dialog {
    width: auto;
  }

  /* Small */
  & .kirk-modal--small .kirk-successModal-image {
    max-height: 33vh;
    object-fit: contain;
  }

  /* Large */
  @media (${responsiveBreakpoints.isMediaLarge}) {
    .kirk-modal-body {
      position: relative;
      display: flex;
    }

    .kirk-modal-dialog {
      padding: ${space.xl} 0;
    }
  }
`

export { SuccessModalProps } from './SuccessModal'
export default StyledSuccessModal
