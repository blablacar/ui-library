import styled from 'styled-components'

import Column from './column'

const StyledColumn = styled(Column)`
  & {
    flex: 1;
  }
`

export { ColumnProps } from './column'
export default StyledColumn
