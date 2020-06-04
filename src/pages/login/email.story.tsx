import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../../button'
import { AvatarIcon } from '../../icon/avatarIcon'
import { ItemAction } from '../../itemAction'
import { ItemCheckbox } from '../../itemCheckbox'
import { BottomContent, Content, MainContent } from '../../layout/content'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextField } from '../../textField'
import { TheVoice } from '../../theVoice'
import { TopBar } from '../../topBar'

const stories = storiesOf('Pages|Login', module)

stories.add('Default', () => (
  <Fragment>
    <TopBar className="topBarReference" centerItem={<AvatarIcon />} />
    <MainContent topBarSelector=".topBarReference">
      <Content>
        <Section>
          <TheVoice>What's your email and password?</TheVoice>
          <TextField />
          <TextField />
          <ItemCheckbox labelTitle="Remember me" />
          <ItemAction href="#" action="Forgot password?" />
        </Section>
      </Content>
      <BottomContent>
        <Section>
          <Button>Log in</Button>
        </Section>
      </BottomContent>
    </MainContent>
  </Fragment>
))
