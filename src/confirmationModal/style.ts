import css from 'styled-jsx/css'
import { color, space, font } from '_utils/branding'

const footerHeight = '96px' /* = padding + content */

export default css`
  :global(.kirk-modal.kirk-confirmationModal) {
    background-color: rgba(5, 71, 82, 0.95);
    color: ${color.white};
  }

  :global(.kirk-modal.kirk-confirmationModal .kirk-modal-dialog) {
    background: transparent;
    width: auto !important;
    padding: 0;
    max-width: initial;
    margin: 0;
    display: flex;
    height: 100%;
  }

  :global(.kirk-modal.kirk-confirmationModal--large) {
    text-align: center;
  }

  :global(.kirk-modal .kirk-confirmationModal-dialog) {
    position: relative;
    margin: 0 auto;
    box-shadow: none;
    width: auto;
    min-height: 100%;
    padding-top: ${space.xl};
    padding-bottom: ${footerHeight};
  }

  :global(.kirk-modal.kirk-confirmationModal--large .kirk-confirmationModal-dialog) {
    max-width: 600px;
  }

  :global(.kirk-modal .kirk-confirmationModal-body) {
    padding: ${space.xl};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  :global(.kirk-modal .kirk-confirmationModal-icon) {
    margin-top: ${space.xl};
    margin-left: ${space.xl};
  }

  :global(.kirk-modal .kirk-confirmationModal-footer) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    display: flex;
    justify-content: flex-end;
    padding: ${space.xl};
    background-color: ${color.warningBackground};
  }

  :global(.kirk-modal.kirk-confirmationModal--large .kirk-confirmationModal-footer) {
    position: relative;
    display: block;
    margin: 0 auto;
    background: none;
  }

  :global(.kirk-modal .kirk-confirmationModal-footer) {
    justify-content: flex-end;
  }

  :global(.kirk-modal.kirk-confirmationModal--hasCloseButton .kirk-confirmationModal-footer) {
    justify-content: space-between;
  }

  :global(.kirk-modal.kirk-confirmationModal--large .kirk-confirmationModal-footer .kirk-button) {
    margin: ${space.l} ${space.xl} 0;
  }

  :global(.kirk-modal .kirk-confirmationModal-closeButton) {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`
