import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Button, ButtonStatus } from '../../button'
import { ButtonGroup } from '../../buttonGroup'
import { BottomContent, Content, MainContent } from '../../layout/content'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { Modal, ModalSize } from '../../modal'
import { Paragraph } from '../../paragraph'
import { SubHeader } from '../../subHeader'

const stories = storiesOf('Sections|Content', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <MainContent onSubmit={() => {}} noValidate="" method="POST">
    <Content>
      <Section>
        <SubHeader>Some Lorem ipsum content</SubHeader>
      </Section>
      <Section noHorizontalSpacing>
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
        <Section>
          <SubHeader>Some Lorem ipsum content</SubHeader>
        </Section>
        <Section noHorizontalSpacing>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tristique sapien, eu
            placerat justo. Donec tempor, risus ac cursus fringilla, lorem ipsum facilisis tortor,
            vel molestie sapien justo nec orci.
          </Paragraph>
        </Section>
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
