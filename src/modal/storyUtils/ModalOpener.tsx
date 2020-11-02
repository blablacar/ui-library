import React, { Component, createRef } from 'react'

import FilterBar from '../../filterBar'
import { CarpoolIcon } from '../../icon'
import ItemCheckbox from '../../itemCheckbox'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { SubHeader } from '../../subHeader/SubHeader'
import { TheVoice } from '../../theVoice'
import { Modal, ModalBody, ModalFog, ModalFooter, ModalProps } from '../index'

export class ModalOpener extends Component<ModalProps> {
  state = {
    modalOpen: false,
    modalOpen2: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal2 = () => {
    this.setState({ modalOpen2: true })
  }

  closeModal2 = () => {
    this.setState({ modalOpen2: false })
  }

  ref = createRef<HTMLDivElement>()

  render() {
    return (
      <Section>
        <button onClick={this.openModal}>Open modal 1</button>
        <button onClick={this.openModal2}>Open modal using Layout components</button>
        <Modal {...this.props} onClose={this.closeModal} isOpen={this.state.modalOpen}>
          <div>
            <h1 id="label1">Modal 1</h1>
            <p id="description1">This is the description of my modal</p>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="A kitten" />
          </div>
        </Modal>

        <Modal
          {...this.props}
          onClose={this.closeModal2}
          isOpen={this.state.modalOpen2}
          noHorizontalSpacing
          layoutModeEnabled
        >
          <ModalBody>
            <ModalFog aria-hidden="true" isLoading={this.props.isLoading} />
            <TheVoice>Filters</TheVoice>
            <Section>
              <SubHeader>Amenities & Services</SubHeader>
            </Section>
            <Section noHorizontalSpacing>
              <ItemCheckbox name="ladies" label="Ladies only" />
              <ItemCheckbox name="automatic" label="Automatic Approval" />
              <ItemCheckbox name="wifi" label="Wifi" />
              <ItemCheckbox name="air" label="Air conditioning" />
              <ItemCheckbox name="reclining" label="Reclining seats" />
              <ItemCheckbox name="personal" label="Personal power outlets" />
              <ItemCheckbox name="ladies" label="Ladies only" />
              <ItemCheckbox name="automatic" label="Automatic Approval" />
              <ItemCheckbox name="wifi" label="Wifi" />
              <ItemCheckbox name="air" label="Air conditioning" />
              <ItemCheckbox name="reclining" label="Reclining seats" />
              <ItemCheckbox name="personal" label="Personal power outlets" />
            </Section>
          </ModalBody>
          <ModalFooter>
            <FilterBar
              ctaText="See rides"
              supplyInfo={[
                {
                  icon: CarpoolIcon,
                  iconTitle: 'Carpooling',
                  liquidity: 20,
                  ariaLabel: 'Carpool available',
                },
              ]}
              onClick={() => {}}
            />
          </ModalFooter>
        </Modal>
      </Section>
    )
  }
}
