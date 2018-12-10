import css from 'styled-jsx/css'
import { color, space, font } from '_utils/branding'

const footerHeight = '96px' /* = padding + content */

export default css`
  .kirk-warningModal {
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

  .kirk-warningModal--large {
    text-align: center;
  }

  .kirk-warningModal-dialog {
    position: relative;
    margin: 0 auto;
    box-shadow: none;
    width: auto;
    min-height: 100%;
    padding-top: ${space.xl};
    padding-bottom: ${footerHeight};
  }

  .kirk-warningModal--large .kirk-warningModal-dialog {
    max-width: 600px;
  }

  .kirk-warningModal-body {
    padding: ${space.xl};
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  :global(.kirk-warningModal-title) {
    padding: ${space.xl};
    margin: 0;
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
    color: ${color.white};
  }

  .kirk-warningModal-footer {
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

  .kirk-warningModal--large .kirk-warningModal-footer {
    position: relative;
    display: block;
    margin: 0 auto;
    background: none;
  }

  .kirk-warningModal--hasCloseButton .kirk-warningModal-footer {
    justify-content: space-between;
  }

  :global(.kirk-warningModal--large .kirk-warningModal-footer .kirk-button) {
    margin: ${space.l} ${space.xl} 0;
  }

  :global(.kirk-warningModal-closeButton) {
    vertical-align: bottom; /* vertical alignment to be fixed in Button */
    border: 0; /* content alignment to be fixed in Button */
  }
`
