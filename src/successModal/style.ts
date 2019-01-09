import css from 'styled-jsx/css'
import { color, space, font, modalMaxWidth } from '_utils/branding'

const footerHeight = '96px' /* = padding + content */

export default css`
  :global(.kirk-successModal) {
    background-color: ${color.successBackground};
    color: ${color.white};
  }

  :global(.kirk-modal--large) {
    text-align: center;
  }

  :global(.kirk-modal.kirk-successModal .kirk-modal-dialog) {
    margin: 0 auto;
    max-width: ${modalMaxWidth};
    height: 100%;
    padding: ${space.xl} 0 ${footerHeight} 0;
    background-color: ${color.successBackground};
  }

  /* Stronger selector to override Modal component styling */
  :global(.kirk-modal-dimmer .kirk-modal.kirk-successModal .kirk-modal-dialog.kirk-modal-dialog) {
    width: auto;
  }

  :global(.kirk-modal--large.kirk-successModal .kirk-modal-dialog) {
    padding: ${space.xl} 0;
  }

  :global(.kirk-modal.kirk-successModal .kirk-modal-body) {
    padding: ${space.xl};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
    text-align: center;
    align-items: center;
  }

  :global(.kirk-modal--large.kirk-successModal .kirk-modal-body) {
    position: relative;
    display: flex;
  }

  :global(.kirk-modal--large .kirk-successModal-bodyItem) {
    width: 50%;
  }

  :global(.kirk-modal--large .kirk-successModal-bodyItem:nth-child(odd)) {
    padding-right: ${space.xl};
  }

  :global(.kirk-modal--large .kirk-successModal-bodyItem:nth-child(even)) {
    padding-left: ${space.xl};
  }

  :global(.kirk-successModal-image) {
    width: 80%;
    margin-bottom: ${space.xl};
  }

  :global(.kirk-modal--large .kirk-successModal-image) {
    margin-bottom: 0;
  }

  :global(.kirk-successModal-footer) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${footerHeight};
    padding: ${space.xl};
    text-align: center;
  }

  :global(.kirk-modal--large .kirk-successModal-footer) {
    position: relative;
    display: block;
    margin: 0 auto;
  }

  :global(.kirk-modal--large .kirk-successModal-footer .kirk-button) {
    margin: ${space.l} ${space.xl} 0;
  }

  :global(.kirk-successModal-confirmButton) {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`
