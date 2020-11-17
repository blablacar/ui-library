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

export type ColumnProps = ColumnProps
export { StyledColumn as Column }
export default StyledColumn
