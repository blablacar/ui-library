import React from 'react'
import isEmpty from 'lodash.isempty'
import styled from 'styled-components'

export type IllustrationProps = Readonly<{
  title?: string
}>

type BaseIllustrationProps = IllustrationProps &
  Readonly<{
    children: React.ReactNode
  }>

const StyledIllustration = styled.svg`
  max-height: 33vh;
  width: 100%;
  object-fit: contain;
`

export const Illustration = ({ children, title = '' }: BaseIllustrationProps): JSX.Element => (
  <StyledIllustration
    viewBox="0 0 375 204"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={isEmpty(title)}
  >
    {title && <title>{title}</title>}
    {children}
  </StyledIllustration>
)
