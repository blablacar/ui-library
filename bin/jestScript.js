import './setupTests'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.mount = mount
