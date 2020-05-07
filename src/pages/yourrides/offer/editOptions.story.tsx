/* eslint-disable react/jsx-curly-newline */
import React, { Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Button, { ButtonStatus } from 'button'
import Divider from 'divider'
import ComfortIcon from 'icon/comfortIcon'
import LadyIcon from 'icon/ladyIcon'
import LightningIcon from 'icon/lightningIcon'
import ItemCheckbox from 'itemCheckbox'
import ItemInfo from 'itemInfo'
import { BottomContent, Content, MainContent } from 'layout/content'
import LayoutNormalizer from 'layout/layoutNormalizer'
import Section from 'layout/section/baseSection'
import Stepper, { StepperDisplay } from 'stepper'
import SubHeader from 'subHeader'
import Textarea from 'textarea'
import TextTitle from 'typography/title'

const stories = storiesOf('Pages|Your rides/Offer/Edit/Options', module)

type EditOptionsState = Readonly<{
  isComfort: boolean
  isLadyOnly: boolean
  isInstantBooking: boolean
  buttonStatus: ButtonStatus
}>

// Note: some hard-coded styles will be removed with the following tickets: BBC-7943, BBC-7944

class EditOptions extends Component<{}, EditOptionsState> {
  state: EditOptionsState = {
    isComfort: false,
    isLadyOnly: false,
    isInstantBooking: false,
    buttonStatus: ButtonStatus.PRIMARY,
  }

  save = (): void => {
    this.setState({ buttonStatus: ButtonStatus.LOADING })

    setTimeout(() => this.setState({ buttonStatus: ButtonStatus.CHECKED }), 1000)
    setTimeout(() => this.setState({ buttonStatus: ButtonStatus.PRIMARY }), 3000)
  }

  render = (): JSX.Element => (
    <Fragment>
      <LayoutNormalizer useLegacyNormalization />

      <MainContent>
        <Content>
          <Section>
            <SubHeader>Passengers options</SubHeader>

            <div style={{ marginRight: '-14px' }}>
              <Stepper
                name="stepper"
                value={1}
                display={StepperDisplay.SMALL}
                increaseLabel="Add a seat"
                decreaseLabel="Remove a seat"
                leftAddon={<TextTitle>Number of passengers</TextTitle>}
              />
            </div>

            <Divider />

            <ItemCheckbox
              onChange={() =>
                this.setState((prevState: EditOptionsState) => ({
                  isComfort: !prevState.isComfort,
                }))
              }
              leftAddon={<ComfortIcon />}
              labelTitle="Max. 2 in the back seats"
              checked={this.state.isComfort}
            />
            <ItemCheckbox
              onChange={() =>
                this.setState((prevState: EditOptionsState) => ({
                  isLadyOnly: !prevState.isLadyOnly,
                }))
              }
              leftAddon={<LadyIcon />}
              labelTitle="Ladies only"
              checked={this.state.isLadyOnly}
            />
            <ItemCheckbox
              onChange={() =>
                this.setState((prevState: EditOptionsState) => ({
                  isInstantBooking: !prevState.isInstantBooking,
                }))
              }
              leftAddon={<LightningIcon />}
              labelTitle="Instant booking"
              checked={this.state.isInstantBooking}
            />

            <Divider />
            <ItemInfo mainTitle="Additional details" id="textarea-label" />
            <Textarea
              placeholder="Flexible about where and when to meet? Not taking the motorway? Got limited space in your boot? Keep passengers in the loop."
              onChange={() => {}}
              labelledBy="textarea-label"
            />
          </Section>
        </Content>
        <BottomContent style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
          <Button onClick={this.save} status={this.state.buttonStatus}>
            Save
          </Button>
        </BottomContent>
      </MainContent>
    </Fragment>
  )
}

stories.add('Default', () => <EditOptions />)
