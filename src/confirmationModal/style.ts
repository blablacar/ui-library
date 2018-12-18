import css from 'styled-jsx/css'
import { color, space, font } from '_utils/branding'

const footerHeight = '96px' /* = padding + content */

export default css`
  .kirk-confirmationModal {
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgba(5, 71, 82, 0.95);
    color: ${color.white};
  }

  .kirk-confirmationModal--large {
    text-align: center;
  }

  .kirk-confirmationModal-dialog {
    position: relative;
    margin: 0 auto;
    box-shadow: none;
    width: auto;
    min-height: 100%;
    padding-top: ${space.xl};
    padding-bottom: ${footerHeight};
  }

  .kirk-confirmationModal--large .kirk-confirmationModal-dialog {
    max-width: 600px;
  }

  .kirk-confirmationModal-body {
    padding: ${space.xl};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  :global(.kirk-confirmationModal-icon) {
    margin-top: ${space.xl};
    margin-left: ${space.xl};
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
    background-color: ${color.warningBackground};
  }

  .kirk-confirmationModal--large .kirk-confirmationModal-footer {
    position: relative;
    display: block;
    margin: 0 auto;
    background: none;
  }

  .kirk-confirmationModal-footer {
    justify-content: flex-end;
  }

  .kirk-confirmationModal--hasCloseButton .kirk-confirmationModal-footer {
    justify-content: space-between;
  }

  :global(.kirk-confirmationModal--large .kirk-confirmationModal-footer .kirk-button) {
    margin: ${space.l} ${space.xl} 0;
  }

  :global(.kirk-confirmationModal-closeButton) {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`
