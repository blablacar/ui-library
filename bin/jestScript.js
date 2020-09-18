import { config } from 'react-transition-group'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import '@testing-library/jest-dom'
import 'jest-date-mock'
import 'jest-styled-components'

// Make sure transitions are immediate.
config.disabled = true

Enzyme.configure({ adapter: new Adapter() })

let previousInnerWidth

beforeEach(() => {
  previousInnerWidth = window.innerWidth
})

afterEach(() => {
  window.innerWidth = previousInnerWidth
})
