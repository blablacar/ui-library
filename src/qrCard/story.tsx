import React from 'react'
import { text } from '@storybook/addon-knobs'

import { QrCard } from './index'

export default {
  title: 'Widgets|QrCard',
  component: QrCard,
}

export const WithTitleAndImage = () => (
  <QrCard
    imageUrl={text(
      'src',
      'https://www.textencode.com/create-qr-code/qr-generator/qrcodesticker79f6448652f32311241f5992bd184e22.png',
    )}
    title={text('Title', 'Jack James Dupont')}
    itemMainTitle={text('Label', '1st class')}
    itemMainInfo={text('SubLabel', 'Seat n°34')}
    ariaLabel={text('AriaLabel', 'Seat QR code')}
  />
)

export const WithALongDescription = () => (
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
    ariaLabel={text('AriaLabel', 'Seat QR code')}
  />
)
