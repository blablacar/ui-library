import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledButtonGroup = styled.div`
  display: flex;
  ${normalizeHorizontally};
  padding-top: ${space.m};
  padding-bottom: ${space.m};

  &.kirk-button-group-column {
    flex-direction: column;
  }
  &.kirk-button-group-column .kirk-button {
    justify-content: center;
  }
  &.kirk-button-group-column > .kirk-button + .kirk-button {
    margin-top: ${space.m};
  }
  &.kirk-button-group-column > .kirk-button.kirk-button-loading,
  &.kirk-button-group-column > .kirk-button.kirk-button-checked {
    margin-left: auto;
    margin-right: auto;
  }

  &.kirk-button-group-column.kirk-button-group-reverse {
    flex-direction: column-reverse;
  }
  &.kirk-button-group-column.kirk-button-group-reverse > .kirk-button + .kirk-button {
    margin-bottom: ${space.m};
    margin-top: 0;
  }

  &.kirk-button-group-row {
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${space.xl};
    padding-bottom: ${space.xl};
  }
  &.kirk-button-group-row > .kirk-button {
    flex-grow: 1;
    justify-content: center;
  }
  &.kirk-button-group-row > .kirk-button + .kirk-button {
    margin-left: ${space.l};
  }

  &.kirk-button-group-row.kirk-button-group-reverse {
    flex-direction: row-reverse;
  }
  &.kirk-button-group-row.kirk-button-group-reverse > .kirk-button + .kirk-button {
    margin-right: ${space.l};
    margin-left: 0;
  }
`
