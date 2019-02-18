const Adapter = require('enzyme-adapter-react-16')
const { configure } = require('enzyme')

module.exports = () => {
  global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
  }

  configure({ adapter: new Adapter() })
}
