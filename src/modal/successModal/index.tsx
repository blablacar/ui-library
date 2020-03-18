import styled from 'styled-components'
import { color, font, space, modalSize, responsiveBreakpoints } from '_utils/branding'
import SuccessModal from './SuccessModal'

const footerHeight = '96px' /* = padding + content */

const StyledSuccessModal = styled(SuccessModal)`
  & {
    text-align: center;
  }

  & .kirk-successModal {
    background-color: ${color.successBackground};
    color: ${color.white};
  }

  & .kirk-modal.kirk-successModal {
    .kirk-modal-dialog {
      margin: 0 auto;
      max-width: ${modalSize.m};
      height: 100%;
      padding: ${space.xl} 0 ${footerHeight} 0;
    }
    .kirk-modal-body {
      padding: ${space.xl};
      font-size: ${font.l.size};
      line-height: ${font.l.lineHeight};
      text-align: center;
      align-items: center;
    }
  }

  & .kirk-successModal-image {
    width: 80%;
    margin-bottom: ${space.xl};
  }

  /* Stronger selector to override Modal component styling */
  &.kirk-modal-dimmer .kirk-modal.kirk-successModal .kirk-modal-dialog.kirk-modal-dialog {
    width: auto;
  }

  & .kirk-modal--small .kirk-successModal-image {
    max-height: 33vh;
    object-fit: contain;
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

  /* @media: LARGE */

  @media (${responsiveBreakpoints.isMediaLarge}) {
    &.kirk-successModal {
      background: red !important;

      .kirk-modal-dialog {
        padding: ${space.xl} 0;
      }

      .kirk-modal-body {
        position: relative;
        display: flex;
      }
    }

    .kirk-successModal-footer {
      position: relative;
      display: block;
      margin: 0 auto;

      .kirk-button {
        margin: ${space.l} ${space.xl} 0;
      }
    }

    .kirk-successModal-image {
      margin-bottom: 0;
    }

    & .kirk-successModal-bodyItem {
      width: 50%;

      &:nth-child(odd) {
        padding-right: ${space.xl};
      }

      &:nth-child(even) {
        padding-left: ${space.xl};
      }
    }
  }
`

export { SuccessModalProps } from './SuccessModal'
export default StyledSuccessModal
