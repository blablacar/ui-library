import styled from 'styled-components'

import { color, space } from '../_utils/branding'

export const GRIP_HANDLE_HEIGHT = parseInt(space.xl, 10)

export const GripHandle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${space.xl};

  &::before {
    content: ' ';
    display: block;
    width: 44px;
    height: ${space.s};
    background-color: ${color.gray};
    border-radius: 100px;
  }
`
