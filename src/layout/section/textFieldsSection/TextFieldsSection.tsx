import React from 'react'
import styled from 'styled-components'

import { space } from '../../../_utils/branding'
import { TextFieldProps } from '../../../textField'
import { BaseSection, BaseSectionProps } from '../baseSection'

export type TextFieldsSectionProps = BaseSectionProps &
  Readonly<{
    children: React.ReactElement<TextFieldProps>[]
    className?: string
    tagName?: string
  }>

/**
 * Inputs Section: display two or more TextFieldProps on a row.
 */
const TextFieldsSectionDefinition = (props: TextFieldsSectionProps) => {
  const { className, children, tagName = 'div' } = props

  return (
    <BaseSection
      {...props}
      tagName={tagName}
      className={className}
      contentClassName="kirk-textfields-section-content"
    >
      {children}
    </BaseSection>
  )
}

// Keeping the style here to be able to have a dynamic tag on BaseSection (and not style.div)
export const TextFieldsSection = styled(TextFieldsSectionDefinition)`
  & .kirk-textfields-section-content {
    display: flex;
    justify-content: space-between;
  }

  & .kirk-textfields-section-content .kirk-textField {
    padding: 0 ${space.s};
    flex-grow: 1;
    flex: 1;
  }

  & .kirk-textfields-section-content .kirk-textField:first-child {
    padding: 0 ${space.s} 0 0;
  }

  & .kirk-textfields-section-content .kirk-textField:last-child {
    padding: 0 0 0 ${space.s};
  }
`
