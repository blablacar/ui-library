import React from 'react'
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'
import { color } from '_utils/branding'

export default {
  title: 'Design Tokens/Color',
  component: ColorPalette,
}

export const swatches = () => (
  <ColorPalette>
    <ColorItem
      title="theme.color.primary"
      subtitle="BlaBlaBlue"
      colors={[color.primary, color.primaryActive]}
    />
    <ColorItem title="theme.color.secondary" subtitle="Ocean" colors={[color.primaryText]} />
    <ColorItem title="theme.color.positive" subtitle="Green" colors={[color.successBackground]} />
    <ColorItem title="theme.color.danger" subtitle="Cherry" colors={[color.danger]} />
    <ColorItem title="theme.color.inputError" subtitle="Blosson" colors={[color.inputError]} />
    <ColorItem title="theme.color.proximityFar" subtitle="Far" colors={[color.proximityFar]} />
    <ColorItem
      title="theme.color.proximityFar"
      subtitle="Middle"
      colors={[color.proximityMiddle]}
    />
    <ColorItem
      title="theme.color.greyscale"
      subtitle="Some of the greys"
      colors={[
        color.white,
        color.disabled,
        color.border,
        color.inputPlaceholder,
        color.polylinePrimary,
      ]}
    />
  </ColorPalette>
)

export const withPrimary = () => {
  const primaries = [
    color.primary,
    color.link,
    color.accent,
    color.info,
    color.inputCaret,
    color.inputBorderFocus,
  ]
  return primaries.map(color => (
    <ColorItem title={`theme.color.name`} subtitle={color} colors={[color]} />
  ))
}

export const withGreyScale = () => {
  const greys = [
    color.white,
    color.disabled,
    color.divider,
    color.lightBackground,
    color.inputBorder,
    color.inputBackground,
    color.hover,
    color.proximityDisabled,
    color.secondaryActive,
    color.fadedText,
    color.border,
    color.polylineSecondary,
    color.polylinePrimary,
    color.inputPlaceholder,
    color.icon,
    color.polylineStrokeSecondary,
  ]

  return greys.map(grey => <ColorItem title={`theme.color.grey`} subtitle={grey} colors={[grey]} />)
}
