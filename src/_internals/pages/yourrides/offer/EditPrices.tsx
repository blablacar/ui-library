import React, { Fragment, useState } from 'react'

import { Button, ButtonStatus } from 'button'
import { ContentDivider } from 'divider/contentDivider'
import { Itinerary } from 'itinerary'
import { BottomContent, Content, MainContent } from 'layout/content'
import { LayoutNormalizer } from 'layout/layoutNormalizer'
import { BaseSection } from 'layout/section/baseSection'
import { Stepper, StepperDisplay } from 'stepper'
import { TheVoice } from 'theVoice'

type EditPriceProps = Readonly<{
  withStopovers?: boolean
}>

const smallStepperProps = {
  display: StepperDisplay.SMALL,
  increaseLabel: 'Add a seat',
  decreaseLabel: 'Remove a seat',
  format: (price: number): string => `$${price}`,
}

export const EditPrices = ({ withStopovers = false }: EditPriceProps): JSX.Element => {
  const [buttonStatus, setButtonStatus] = useState(ButtonStatus.PRIMARY)

  const save = (): void => {
    setButtonStatus(ButtonStatus.LOADING)
    setTimeout(() => setButtonStatus(ButtonStatus.CHECKED), 1000)
    setTimeout(() => setButtonStatus(ButtonStatus.PRIMARY), 3000)
  }

  const renderMultiple = (): JSX.Element => (
    <Fragment>
      <Stepper
        {...smallStepperProps}
        name="stepper-main"
        value={56}
        leftAddon={<Itinerary places={[{ mainLabel: 'Paris' }, { mainLabel: 'Marseilles' }]} />}
      />

      <ContentDivider />

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

  const renderSingle = (): JSX.Element => (
    <Stepper {...smallStepperProps} display={StepperDisplay.LARGE} name="stepper-main" value={56} />
  )

  return (
    <Fragment>
      <LayoutNormalizer useLegacyNormalization />

      <MainContent>
        <Content>
          <BaseSection noHorizontalSpacing>
            <TheVoice>Price per passenger</TheVoice>
          </BaseSection>
          <BaseSection>
            {withStopovers && renderMultiple()}
            {!withStopovers && renderSingle()}
          </BaseSection>
        </Content>
        <BottomContent style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
          <Button onClick={save} status={buttonStatus}>
            Save
          </Button>
        </BottomContent>
      </MainContent>
    </Fragment>
  )
}
