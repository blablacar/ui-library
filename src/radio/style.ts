import css from 'styled-jsx/css'

// Workaround babel and ts not being able to parse "empty" files for sourcemaps
// https://github.com/babel/babel-loader/issues/188
const a:boolean = false

export default css`
  :global(.kirk-radio input) {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`
