import React, { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'

import { CDN_FONTS_BASE_URL, color } from '../branding'

const DEFAULT_TEXT_COLOR = color.midnightGreen
const DEFAULT_LINK_COLOR = color.blue

// Custom CSS reset based on Eric Meyer solution:
// http://meyerweb.com/eric/tools/css/reset/ - v2.0 20110126, License: none (public domain)
const CssResetGlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input,
  option,
  select,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    line-height: 1;
    color: ${DEFAULT_TEXT_COLOR};
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  a {
    color: ${DEFAULT_LINK_COLOR};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  *,
  *::after,
  *::before {
    /* Apply a natural box layout model to all elements */
    box-sizing: border-box;
  }
`

const FontGlobalStyles = createGlobalStyle`
  /* Typeface: GT Eesti */
  @font-face {
    font-family: 'gt-eesti';
    font-weight: 400;
    src: url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Regular.woff2') format('woff2'),
      url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Regular.woff') format('woff'),
      url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Regular.ttf') format('truetype');
    font-style: normal;
  }
  
  @font-face {
    font-family: 'gt-eesti';
    font-weight: 500;
    src: url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Medium.woff2') format('woff2'),
      url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Medium.woff') format('woff'),
      url('${CDN_FONTS_BASE_URL}/GT-Eesti-Pro-Display-Medium.ttf') format('truetype');
    font-style: normal;
  }
  
  html {
    font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    quotes: '“' '”';
    /**
     * Prevent font scaling in landscape while allowing user zoom.
     * For details, see:
     *  - https://stackoverflow.com/questions/2710764/preserve-html-font-size-when-iphone-orientation-changes-from-portrait-to-landsca
     *  - https://jira.corp.blablacar.com/browse/BBC-5323
     */
    -webkit-text-size-adjust: 100%;
  }
  
  :lang(de) {
    quotes: '„' '“';
  }
  
  :lang(fr) {
    quotes: '« ' ' »';
  }
  
  :lang(es-ES) {
    quotes: '«' '»';
  }
  
  :lang(hu) {
    quotes: '„' '“';
  }
  
  :lang(pl) {
    quotes: '„' '“';
  }
  
  :lang(ru) {
    quotes: '« ' ' »';
  }
`

type ThemeProviderProps = Readonly<{
  children: ReactNode
}>

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <React.Fragment>
    <FontGlobalStyles />
    <CssResetGlobalStyles />
    {children}
  </React.Fragment>
)
