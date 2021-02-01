import React from 'react'
import { mount, shallow } from 'enzyme'

import { CrossIcon } from '../icon/crossIcon'
import { Button, ButtonStatus, eventHandler } from './Button'

jest.useFakeTimers()

describe('Button', () => {
  class TestLink extends React.PureComponent<{ readonly href?: string }> {
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

    const button = shallow(<Button status={ButtonStatus.WARNING}>blabla</Button>)
    expect(button.hasClass('kirk-button-warning')).toBe(true)
  })

  it('Should allow for an icon.', () => {
    const button = shallow(
      <Button isBubble>
        <CrossIcon />
      </Button>,
    )
    expect(button.hasClass('kirk-button-bubble')).toBe(true)
    expect(button.contains(<CrossIcon />)).toBe(true)
  })

  it('Should have proper attribute on loading state', () => {
    const button = shallow(<Button status={ButtonStatus.LOADING} />)
    expect(button.hasClass('kirk-button-loading')).toBe(true)
  })

  it('Should have no children for a loading state', () => {
    const button = mount(
      <Button status={ButtonStatus.LOADING}>
        <CrossIcon />
        blabla
      </Button>,
    )
    expect(button.contains(<CrossIcon />)).toBe(false)
    expect(button.text().includes('blabla')).toBe(false)
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

  it('fires the callback event when valid', () => {
    const event = jest.fn()
    mount(
      <Button onDoneAnimationEnd={event} status={ButtonStatus.CHECKED}>
        blabla
      </Button>,
    )
    expect(event).not.toBeCalled()
    jest.advanceTimersByTime(1500)
    expect(event).toBeCalled()
  })

  it('Should have no children for a checked state', () => {
    const button = mount(
      <Button status={ButtonStatus.CHECKED}>
        <CrossIcon />
        blabla
      </Button>,
    )
    expect(button.contains(<CrossIcon />)).toBe(false)
    expect(button.text().includes('blabla')).toBe(false)
  })

  describe('href', () => {
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
      const wrapper = shallow(
        <Button href={<TestLink href="/test-page">nothing</TestLink>}>link</Button>,
      )
      expect(wrapper.prop('href')).toBe('/test-page')
      expect(wrapper.html()).toContain('link')
    })
  })

  it('should be disabled while status is checked', () => {
    const wrapper = shallow(<Button status={ButtonStatus.CHECKED}>click me</Button>)
    expect(wrapper.prop('disabled')).toBe(true)
  })

  it('should be disabled while status is loading', () => {
    const wrapper = shallow(<Button status={ButtonStatus.LOADING}>click me</Button>)
    expect(wrapper.prop('disabled')).toBe(true)
  })
})
