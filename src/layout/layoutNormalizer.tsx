import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { horizontalSpace } from '../_utils/branding'

const horizontalPadding = (props: any): string =>
  props.hasHorizontalSpacing ? horizontalSpace.inner : horizontalSpace.global

const horizontalMargin = (props: any): string | number =>
  props.hasHorizontalSpacing ? horizontalSpace.outer : 0

export interface NormalizeProps {
  readonly hasHorizontalSpacing?: boolean
}
/**
 * Util method to normalize horizontal spacing
 * using !important because this should never be overridden
 */
export const normalizeHorizontally = (props: NormalizeProps): string => `
  padding-left: ${horizontalPadding(props)} !important;
  padding-right: ${horizontalPadding(props)} !important;
  margin-left: ${horizontalMargin(props)} !important;
  margin-right: ${horizontalMargin(props)} !important;
  `

// Legacy layout rules from production BBC.
const LegacyLayoutNormalizationGlobalStyles = createGlobalStyle`
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

export const LayoutNormalizer = ({ useLegacyNormalization = true }: LayoutNormalizerProps) => {
  if (useLegacyNormalization) {
    return <LegacyLayoutNormalizationGlobalStyles />
  }

  return <LayoutNormalizationGlobalStyles />
}

export default LayoutNormalizer
