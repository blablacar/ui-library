import React, { PureComponent } from 'react'
import cc from 'classcat'
import { canUseEventListeners } from 'exenv'

import { color } from '../../_utils/branding'
import { KEYCODES } from '../../_utils/keycodes'
import { Place } from '../../_utils/place'
import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { Bullet, BulletTypes } from '../../bullet'
import { Text, TextDisplayType, TextTagType } from '../../text'
import { computeKeyFromPlace, ItineraryLocation } from '../itineraryLocation'

export interface ItineraryCollapsibleProps extends A11yProps {
  readonly places: Place[]
  readonly className?: string
  readonly label?: string
}

interface ItineraryCollapsibleState {
  readonly collapsed: boolean
}

const collapsibleLocationSize = 32 // default size of a collapsible ItineraryLocation

export class ItineraryCollapsible extends PureComponent<ItineraryCollapsibleProps> {
  static defaultProps: Partial<ItineraryCollapsibleProps> = {
    className: '',
    label: '',
  }

  state: ItineraryCollapsibleState = {
    collapsed: true,
  }

  componentDidMount() {
    this.addListeners()
  }

  componentWillUnmount() {
    this.removeListeners()
  }

  addListeners() {
    if (canUseEventListeners) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  removeListeners() {
    if (canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === KEYCODES.ENTER || event.keyCode === KEYCODES.SPACEBAR) {
      this.onClick()
    }
  }

  onClick = () => {
    const prevState = this.state.collapsed
    this.setState({ collapsed: !prevState })
  }

  render() {
    const { places, className, label } = this.props
    const a11yAttrs = pickA11yProps<ItineraryCollapsibleProps>(this.props)
    const baseClassName = 'kirk-itineraryCollapsible'
    const classNames = cc([
      baseClassName,
      {
        [`${baseClassName}--collapsed`]: this.state.collapsed,
        [`${baseClassName}--extended`]: !this.state.collapsed,
      },
      className,
    ])

    return (
      /* TODO: BBC-7412 fix a11y issues */
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        className={classNames}
        onClick={this.onClick}
        aria-pressed={!this.state.collapsed}
        aria-expanded={!this.state.collapsed}
        {...a11yAttrs}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
      >
        <div aria-hidden={!this.state.collapsed} className="kirk-itineraryCollapsible-collapsed">
          <Bullet type={BulletTypes.SMALL} />
          <Text tag={TextTagType.PARAGRAPH} display={TextDisplayType.BODY} textColor={color.blue}>
            {label}
          </Text>
        </div>
        <ul
          aria-hidden={this.state.collapsed}
          className="kirk-itineraryCollapsible-extended"
          style={{
            height: `${places.length * collapsibleLocationSize}px`, // used for the animation
          }}
        >
          {places.map(place => (
            <ItineraryLocation
              place={place}
              displaySubLabelOnly
              isSmall
              key={`${computeKeyFromPlace(place)}-collapsible`}
            />
          ))}
        </ul>
      </li>
    )
  }
}
