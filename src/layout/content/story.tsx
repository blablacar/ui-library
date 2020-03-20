import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import { MainContent, Content, BottomContent } from 'layout/content'
import SubHeader from 'subHeader'
import Paragraph from 'paragraph'
import ButtonGroup from 'buttonGroup'
import Button, { ButtonStatus } from 'button'
import Modal, { ModalSize } from 'modal'

const stories = storiesOf('Sections|Content', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <MainContent>
    <Content>
      <Section>
        <SubHeader>Some Lorem ipsum content</SubHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tristique sapien, eu
          placerat justo. Donec tempor, risus ac cursus fringilla, lorem ipsum facilisis tortor, vel
          molestie sapien justo nec orci.
        </Paragraph>
      </Section>
    </Content>
    <BottomContent>
      <Section>
        <ButtonGroup>
          <Button status={ButtonStatus.PRIMARY}>Primary button</Button>
          <Button status={ButtonStatus.TERTIARY}>Secondary button</Button>
        </ButtonGroup>
      </Section>
    </BottomContent>
  </MainContent>
))

stories.add('Inside a modal', () => (
  <Modal isOpen size={ModalSize.FULLSCREEN}>
    <MainContent>
      <Content>
        <SubHeader>Some Lorem ipsum content</SubHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tristique sapien, eu
          placerat justo. Donec tempor, risus ac cursus fringilla, lorem ipsum facilisis tortor, vel
          molestie sapien justo nec orci.
        </Paragraph>
      </Content>
      <BottomContent>
        <ButtonGroup>
          <Button status={ButtonStatus.PRIMARY}>Primary button</Button>
          <Button status={ButtonStatus.TERTIARY}>Secondary button</Button>
        </ButtonGroup>
      </BottomContent>
    </MainContent>
  </Modal>
))
