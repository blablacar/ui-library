import React from 'react'
import renderer from 'react-test-renderer'

import { TextField } from '../../../textField'
import { TextFieldsSection } from './index'

describe('TextFieldsSection', () => {
  it('should render default textField section', () => {
    const section = (
      <TextFieldsSection>
        <TextField
          name="firstInputSecondRow"
          placeholder="In-section input"
          onChange={() => null}
        />
        <TextField
          name="secondInputSecondRow"
          placeholder="In-section input"
          onChange={() => null}
        />
      </TextFieldsSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render non-default textField section', () => {
    const props = {
      tagName: 'span',
      className: 'content',
    }
    const section = (
      <TextFieldsSection {...props}>
        <TextField
          name="firstInputSecondRow"
          placeholder="In-section input"
          onChange={() => null}
        />
        <TextField
          name="secondInputSecondRow"
          placeholder="In-section input"
          onChange={() => null}
        />
        <TextField
          name="thirdInputSecondRow"
          placeholder="In-section input"
          onChange={() => null}
        />
      </TextFieldsSection>
    )

    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
