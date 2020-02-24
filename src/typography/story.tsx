import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Section from '../layout/section/baseSection'
// import TextBody from './body'
// import TextBodyStrong from './bodyStrong'
// import TextTitle from './title'
// import TextTitleStrong from './titleStrong'
// import TextSubHeader from './subHeader'
// import TextSubHeaderStrong from './subHeaderStrong'
// import TextCaption from './caption'
// import TextDisplay1 from './display1'
import TextDisplay2 from './display2'
// import TextButton from './button'

import { space } from '_utils/branding'

const stories = storiesOf('Brand|typography', module)

stories.add('ALL', () => (
  <Fragment>
    <Section>
      <h1 style={{ marginBottom: space.xxl }}>
        <p style={{ marginBottom: space.s }}>{/* <TextBody>Display2</TextBody> */}</p>
        <TextDisplay2>
          Medium 82px <br /> Height 82px
        </TextDisplay2>
      </h1>
      {/* <h2 style={{ marginBottom: space.xxl }}>
        <p style={{ marginBottom: space.s }}>
          <TextBody>Display1</TextBody>
        </p>
        <TextDisplay1>
          Medium 30px <br /> Height 32px
        </TextDisplay1>
      </h2>
      <h3 style={{ marginBottom: space.xxl }}>
        <p style={{ marginBottom: space.s }}>
          <TextBody>SubHeader</TextBody>
        </p>
        <TextSubHeader>
          Regular 22px <br /> Height 24px
        </TextSubHeader>
      </h3>
      <h3 style={{ marginBottom: space.xxl }}>
        <p style={{ marginBottom: space.s }}>
          <TextBody>SubHeaderStrong</TextBody>
        </p>
        <TextSubHeaderStrong>
          Medium 22px <br /> Height 24px
        </TextSubHeaderStrong>
      </h3>
      <p style={{ marginBottom: space.s }}>
        <TextBody>Title</TextBody>
      </p>
      <h4 style={{ marginTop: 0, marginBottom: space.xxl }}>
        <TextTitle>
          Regular 18px <br /> Height 20px
        </TextTitle>
      </h4>

      <p style={{ marginBottom: space.s }}>
        <TextBody>TitleStrong</TextBody>
      </p>
      <h4 style={{ marginTop: 0, marginBottom: space.xxl }}>
        <TextTitleStrong>
          Medium 18px <br /> Height 20px
        </TextTitleStrong>
      </h4>

      <p style={{ marginBottom: space.xxl }}>
        <TextBody>Body</TextBody>
        <br />
        <TextBody>
          Regurlar 16px <br /> Height 20px
        </TextBody>
      </p>

      <p style={{ marginBottom: space.xxl }}>
        <TextBody>bodyStrong</TextBody>
        <br />
        <TextBodyStrong>
          Medium 16px <br /> Height 20px
        </TextBodyStrong>
      </p>

      <figcaption>
        <p style={{ marginBottom: space.s }}>
          <TextBody>Caption</TextBody>
        </p>
        <TextCaption>
          Medium 13px <br /> Height 16px
        </TextCaption>
      </figcaption>

      <hr style={{ marginBottom: space.xxl, marginTop: space.xxl }} />

      <p style={{ marginBottom: 0 }}>
        <TextBody>Button</TextBody>
      </p>
      <p>
        <TextButton>
          Medium 16px <br /> Height 20px
        </TextButton>
      </p> */}
    </Section>
  </Fragment>
))

// stories.add('Display2', () => (
//   <Section>
//     <TextDisplay2>{text('Text', 'The quick brown fox jumps over the lazy dog')}</TextDisplay2>
//   </Section>
// ))
// stories.add('SubHeader', () => (
//   <Section>
//     <TextSubHeader>{text('Text', 'The quick brown fox jumps over the lazy dog')}</TextSubHeader>
//   </Section>
// ))
// stories.add('SubHeaderStrong', () => (
//   <Section>
//     <TextSubHeaderStrong>
//       {text('Text', 'The quick brown fox jumps over the lazy dog')}
//     </TextSubHeaderStrong>
//   </Section>
// ))
// stories.add('Title', () => (
//   <Section>
//     <TextTitle>{text('Text', 'This is an example de body')}</TextTitle>
//   </Section>
// ))
// stories.add('TitleStrong', () => (
//   <Section>
//     <TextTitleStrong>{text('Text', 'This is an example de body')}</TextTitleStrong>
//   </Section>
// ))
// stories.add('Caption', () => (
//   <Section>
//     <TextCaption>{text('Text', 'This is an example de body')}</TextCaption>
//   </Section>
// ))
// stories.add('Button', () => (
//   <Section>
//     <TextButton>{text('Text', 'This is an example de body')}</TextButton>
//   </Section>
// ))
