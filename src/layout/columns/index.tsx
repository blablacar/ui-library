import styled from 'styled-components'

import { responsiveBreakpoints } from '../../_utils/branding'
import { Columns } from './columns'

const StyledColumns = styled(Columns)`
  & {
    display: flex;
    flex-direction: row;

    /** Reset styles from <ul> */
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & {
      flex-direction: column;
    }
  }
`

export type ColumnsProps = ColumnsProps
export { StyledColumns as Columns }
export default StyledColumns
