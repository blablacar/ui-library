import css from 'styled-jsx/css'
import { color, space } from '_utils/branding'

export default css`
  li:first-child > a {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  li:last-child > a {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  li > a {
    display: block;
    padding: ${space.l} ${space.xl};
    background-color: ${color.white};
    color: ${color.primary};
    text-decoration: none;
  }

  li > a:hover {
    background-color: ${color.lightBackground};
    color: ${color.primary};
  }

  .separator {
    position: relative;
    height: 16px;
    background-color: ${color.white};
  }

  .separator::after {
    content : '';
    position: absolute;
    top: 8px; /* Half of the separator height */
    right: 0;
    left: 0;
    border-bottom: 1px solid ${color.border};
  }
`
