import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import Section from 'layout/section/baseSection'
import { MainContent, Content, BottomContent } from 'layout/content'
import TheVoice from 'theVoice'
import Button from 'button'
import TextField from 'textField'
import ItemCheckbox from 'itemCheckbox'
import ItemAction from 'itemAction'
import TopBar from 'topBar'
import AvatarIcon from 'icon/avatarIcon'

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
