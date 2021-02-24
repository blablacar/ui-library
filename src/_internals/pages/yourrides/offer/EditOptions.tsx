import React, { Fragment, useState } from 'react'

import { Button, ButtonStatus } from '../../../../button'
import { ContentDivider } from '../../../../divider/contentDivider'
import { ComfortIcon } from '../../../../icon/comfortIcon'
import { LadyIcon } from '../../../../icon/ladyIcon'
import { LightningIcon } from '../../../../icon/lightningIcon'
import { ItemCheckbox } from '../../../../itemCheckbox'
import { ItemInfo } from '../../../../itemInfo'
import { BottomContent, Content, MainContent } from '../../../../layout/content'
import { LayoutNormalizer } from '../../../../layout/layoutNormalizer'
import { BaseSection } from '../../../../layout/section/baseSection'
import { Stepper, StepperDisplay } from '../../../../stepper'
import { Textarea } from '../../../../textarea'
import { TheVoice } from '../../../../theVoice'
import { TextTitle } from '../../../../typography/title'

// Note: some hard-coded styles will be removed with the following tickets: BBC-7943, BBC-7944

export const EditOptions = () => {
  const [isComfort, setIsComfort] = useState(false)
  const [isLadyOnly, setIsLadyOnly] = useState(false)
  const [isInstantBooking, setIsInstantBooking] = useState(false)
  const [buttonStatus, setButtonStatus] = useState(ButtonStatus.PRIMARY)

  const save = () => {
    setButtonStatus(ButtonStatus.LOADING)
    setTimeout(() => setButtonStatus(ButtonStatus.CHECKED), 1000)
    setTimeout(() => setButtonStatus(ButtonStatus.PRIMARY), 3000)
  }

  return (
    <Fragment>
      <LayoutNormalizer useLegacyNormalization />

      <MainContent>
        <Content>
          <BaseSection noHorizontalSpacing>
            <TheVoice>Passengers options</TheVoice>
          </BaseSection>

          <BaseSection>
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
          </BaseSection>

          <BaseSection noHorizontalSpacing>
            <ContentDivider />

            <ItemCheckbox
              onChange={() => setIsComfort(!isComfort)}
              leftAddon={<ComfortIcon />}
              labelTitle="Max. 2 in the back seats"
              checked={isComfort}
              name="comfort"
            />
            <ItemCheckbox
              onChange={() => setIsLadyOnly(!isLadyOnly)}
              leftAddon={<LadyIcon />}
              labelTitle="Ladies only"
              checked={isLadyOnly}
              name="ladies"
            />
            <ItemCheckbox
              onChange={() => setIsInstantBooking(!isInstantBooking)}
              leftAddon={<LightningIcon />}
              labelTitle="Instant booking"
              checked={isInstantBooking}
              name="instant"
            />

            <ContentDivider />
            <ItemInfo mainTitle="Additional details" id="textarea-label" />

            <Textarea
              placeholder="Flexible about where and when to meet? Not taking the motorway? Got limited space in your boot? Keep passengers in the loop."
              onChange={() => {}}
              labelledBy="textarea-label"
            />
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
