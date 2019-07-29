import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import 'jest-styled-components'

Enzyme.configure({ adapter: new Adapter() })
