import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { QrCard } from './index'

const stories = storiesOf('Widgets|QrCard', module)

stories.addDecorator(withKnobs)

const style: React.CSSProperties = {
  width: '400px',
  padding: '16px',
}

stories.add('with title and image', () => (
  <Section backgroundStyle={style}>
    <QrCard
      imageUrl={text(
        'src',
        'https://www.textencode.com/create-qr-code/qr-generator/qrcodesticker79f6448652f32311241f5992bd184e22.png',
      )}
      title={text('Title', 'Jack James Dupont')}
      itemMainTitle={text('Label', '1st class')}
      itemMainInfo={text('SubLabel', 'Seat n°34')}
      aria-label={text('AriaLabel', 'Seat QR code')}
    />
  </Section>
))

stories.add('with a long description', () => (
  <Section backgroundStyle={style}>
    <QrCard
      imageUrl={text(
        'src',
        'https://www.textencode.com/create-qr-code/qr-generator/qrcodesticker79f6448652f32311241f5992bd184e22.png',
      )}
      title={text('Title', 'Jack James Dupont')}
      itemMainTitle={text('Label', '1st class')}
      itemMainInfo={text(
        'SubLabel',
        'Can you add a case with a long text: Your seat number will be assigned to you 1 hour before departure.',
      )}
      aria-label={text('AriaLabel', 'Seat QR code')}
    />
  </Section>
))
