import { createGlobalStyle } from 'styled-components'
import React from 'react'

// Legacy layout rules from production BBC.
const LegacyLayoutNormalizationGlobalStyles = createGlobalStyle`
    /* Items negative margins from legacy layouts. */
    .kirk-item.kirk-item--clickable {
        margin-left: -24px;
        margin-right: -24px;
        padding-left: 24px;
        padding-right: 24px;
    }

    button.kirk-item.kirk-item--clickable {
        width: calc(100% + 48px); /* fixes button width not scaling with negative margins */
    }

    .home-column .kirk-item.kirk-item--clickable,
    .user-menu-item.kirk-item.kirk-item--clickable {
        margin-left: 0;
        margin-right: 0;
    }

    .home-column button.kirk-item.kirk-item--clickable,
    button.user-menu-item.kirk-item.kirk-item--clickable {
        max-width: 100%;
    }
`

const LayoutNormalizationGlobalStyles = createGlobalStyle`
  // Add normalization styles.
`

export interface LayoutNormalizerProps {
  readonly useLegacyNormalization?: boolean
}

const LayoutNormalizer = ({ useLegacyNormalization = true }: LayoutNormalizerProps) => {
  if (useLegacyNormalization) {
    return <LegacyLayoutNormalizationGlobalStyles />
  }

  return <LayoutNormalizationGlobalStyles />
}

export default LayoutNormalizer
