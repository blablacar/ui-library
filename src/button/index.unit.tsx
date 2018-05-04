import React from 'react'

import Button, { eventHandler } from 'button'
import ItemChoice from 'itemChoice'
import CrossIcon from 'icon/crossIcon'

describe('Button', () => {
  class TestLink extends React.PureComponent {
    render() {
      return <a href={this.props.href}>{this.props.children}</a>
    }
  }

  it('Should have the proper text.', () => {
    const button = shallow(<Button>blabla</Button>)
    expect(button.prop('type')).toBe('button')
    expect(button.text()).toContain('blabla')
  })

  it('Should have a title attribute.', () => {
    const button = shallow(<Button title="blabla">blabla</Button>)
    expect(button.prop('title')).toBe('blabla')
  })

  it('Should be able to change the type.', () => {
    const button = shallow(<Button type="submit">blabla</Button>)
    expect(button.prop('type')).toBe('submit')
  })

  it('Should render the modifiers.', () => {
    const buttonClassName = shallow(<Button className="addClass">blabla</Button>)
    expect(buttonClassName.hasClass('addClass')).toBe(true)

    const button = shallow(<Button primary warning>blabla</Button>)
    expect(button.hasClass('kirk-button-primary kirk-button-warning')).toBe(true)
  })

  it('Should allow for an icon.', () => {
    const button = shallow(<Button icon><CrossIcon /></Button>)
    expect(button.hasClass('kirk-button-icon')).toBe(true)
    expect(button.contains(<CrossIcon />)).toBe(true)
  })

  it('should allow for a loading state', () => {
    const button = shallow(<Button loading><CrossIcon /></Button>)
    expect(button.hasClass('kirk-button-loading')).toBe(true)
  })

  it('Simulates a click action.', () => {
    const onButtonClick = jest.fn()
    const button = shallow(<Button onClick={onButtonClick}>blabla</Button>)
    button.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('Simulates a blur event.', () => {
    const onButtonBlur = jest.fn()
    const button = shallow(<Button onBlur={onButtonBlur}>blabla</Button>)
    button.find('button').simulate('blur')
    expect(onButtonBlur).toHaveBeenCalledTimes(1)
  })

  it('Simulates a focus event.', () => {
    const onButtonFocus = jest.fn()
    const wrapper = shallow(<Button onFocus={onButtonFocus}>blabla</Button>)
    wrapper.find('button').simulate('focus')
    expect(onButtonFocus).toHaveBeenCalledTimes(1)
  })

  it('Does not fire events in eventhandler', () => {
    const firstEvent = jest.fn()
    const secondEvent = jest.fn()
    eventHandler(firstEvent, secondEvent)
    expect(firstEvent).not.toHaveBeenCalled()
    expect(secondEvent).not.toHaveBeenCalled()
  })

  it('Fires both events in eventhandler', () => {
    const firstEvent = jest.fn()
    const secondEvent = jest.fn()
    eventHandler(firstEvent, secondEvent)()
    expect(firstEvent).toHaveBeenCalledTimes(1)
    expect(secondEvent).toHaveBeenCalledTimes(1)
  })

  jest.useFakeTimers()

  it('fires the callback event when valid', () => {
    const event = jest.fn()
    const button = shallow(<Button validated={event}>blabla</Button>)
    button.setProps({ valid: true })
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][0]).toBe(event)
    expect(setTimeout.mock.calls[0][1]).toBe(500 + 1000) // duration + delay
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  describe('#href', () => {
    it('Should be a link.', () => {
      const button = shallow(<Button href="/test-page">link</Button>)
      expect(button.prop('href')).toBe('/test-page')
      expect(button.text()).toContain('link')
    })

    it('Should be a link if we pass it as a tag.', () => {
      const button = shallow(<Button href={<a href="/test-page">nothing</a>}>link</Button>)
      expect(button.prop('href')).toBe('/test-page')
      expect(button.text()).toContain('link')
    })

    it('Should be a link if we pass it as a React element.', () => {
      const wrapper = shallow((
        <Button radio href={<TestLink href="/test-page">nothing</TestLink>}>link</Button>
      ))
      expect(wrapper.prop('href')).toBe('/test-page')
      expect(wrapper.html()).toContain('link')
    })
  })
})
