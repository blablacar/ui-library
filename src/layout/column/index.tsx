import styled from 'styled-components'

import { Column } from './column'

const StyledColumn = styled(Column)`
  & {
    flex: 1;
    text-indent: 0;
    margin: 0;
    padding: 0;
  }
`

export { ColumnProps } from './column'
export { StyledColumn as Column }
