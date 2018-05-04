import css from 'styled-jsx/css'

// Workaround babel and ts not being able to parse "empty" files for sourcemaps
// https://github.com/babel/babel-loader/issues/188
const a:boolean = false

export default css`
  .kirk-loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kirk-loader--fullScreen {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .85);
    height: 100vh;
    width: 100vw;
    z-index: 4;
  }
`
