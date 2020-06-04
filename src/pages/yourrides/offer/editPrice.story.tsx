/* eslint-disable react/jsx-curly-newline */
import React, { Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Button, ButtonStatus } from '../../../button'
import { Divider } from '../../../divider'
import { Itinerary } from '../../../itinerary'
import { BottomContent, Content, MainContent } from '../../../layout/content'
import { LayoutNormalizer } from '../../../layout/layoutNormalizer'
import { BaseSection as Section } from '../../../layout/section/baseSection'
import { Stepper, StepperDisplay } from '../../../stepper'
import { SubHeader } from '../../../subHeader'

const stories = storiesOf('Pages|Your rides/Offer/Edit/Price', module)

type EditPriceProps = Readonly<{
  withStopovers?: boolean
}>

type EditPriceState = Readonly<{
  buttonStatus: ButtonStatus
}>

const smallStepperProps = {
  display: StepperDisplay.SMALL,
  increaseLabel: 'Add a seat',
  decreaseLabel: 'Remove a seat',
  format: (price: number): string => `$${price}`,
}

class EditPrice extends Component<EditPriceProps, EditPriceState> {
  static defaultProps: Partial<EditPriceProps> = {
    withStopovers: false,
  }

  state: EditPriceState = {
    buttonStatus: ButtonStatus.PRIMARY,
  }

  save = (): void => {
    this.setState({ buttonStatus: ButtonStatus.LOADING })

    setTimeout(() => this.setState({ buttonStatus: ButtonStatus.CHECKED }), 1000)
    setTimeout(() => this.setState({ buttonStatus: ButtonStatus.PRIMARY }), 3000)
  }

  renderMultiple = (): JSX.Element => (
    <Fragment>
      <Stepper
        {...smallStepperProps}
        name="stepper-main"
        value={56}
        leftAddon={<Itinerary places={[{ mainLabel: 'Paris' }, { mainLabel: 'Marseilles' }]} />}
      />

      <Divider />

      <Stepper
        {...smallStepperProps}
        name="stepper-1"
        value={24}
        leftAddon={<Itinerary places={[{ mainLabel: 'Paris' }, { mainLabel: 'Lyon' }]} />}
      />

      <Stepper
        {...smallStepperProps}
        name="stepper-2"
        value={30}
        leftAddon={<Itinerary places={[{ mainLabel: 'Lyon' }, { mainLabel: 'Marseilles' }]} />}
      />
    </Fragment>
  )

  renderSingle = (): JSX.Element => (
    <Stepper {...smallStepperProps} display={StepperDisplay.LARGE} name="stepper-main" value={56} />
  )

  render = (): JSX.Element => (
    <Fragment>
      <LayoutNormalizer useLegacyNormalization />

      <MainContent>
        <Content>
          <Section>
            <SubHeader>Price per passenger</SubHeader>

            {this.props.withStopovers && this.renderMultiple()}
            {!this.props.withStopovers && this.renderSingle()}
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

stories.add('With stopovers', () => <EditPrice withStopovers />)
stories.add('Without stopovers', () => <EditPrice />)
