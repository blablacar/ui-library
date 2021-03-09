import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { A11yProps } from '../_utils/interfaces'
import { HintBubble } from './HintBubble'
import { Hint, HintBubblePosition } from './index'

const testChild = (a11yAttrs: A11yProps): React.ReactNode => <p {...a11yAttrs}>I have an hint.</p>

const defaultProps = {
  mainTitle: 'Hint Title',
  closeButtonTitle: 'Close',
  description: 'Hint Description',
}

describe('Hint', () => {
  it('Default rendering (above)', () => {
    const hint = renderer.create(<Hint {...defaultProps}>{testChild}</Hint>).toJSON()
    expect(hint).toMatchSnapshot()
  })
  it('Default rendering (below)', () => {
    const hint = renderer
      .create(
        <Hint {...defaultProps} position={HintBubblePosition.BELOW}>
          {testChild}
        </Hint>,
      )
      .toJSON()
    expect(hint).toMatchSnapshot()
  })
  it('Should render a HintBubble', () => {
    const hint = shallow(<Hint {...defaultProps}>{testChild}</Hint>)
    expect(hint.find(HintBubble)).toHaveLength(1)
  })
  it('Should not render a HintBubble if prop hidden is set to true', () => {
    const hint = shallow(
      <Hint {...defaultProps} hidden>
        {testChild}
      </Hint>,
    )
    expect(hint.find(HintBubble)).toHaveLength(0)
  })
})
