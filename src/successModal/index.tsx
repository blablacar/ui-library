import styled from 'styled-components'
import SuccessModal from './SuccessModal'

const StyledSuccessModal = styled(SuccessModal)`
  /* Stronger selector to override Modal component styling */
  &.kirk-modal-dimmer .kirk-modal .kirk-modal-dialog.kirk-modal-dialog {
    width: auto;
  }
`

export { SuccessModalProps } from './SuccessModal'
export default StyledSuccessModal
