import styled from 'styled-components'

export const GripHandle = styled.div`
  & {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  &::before {
    content: ' ';
    display: block;
    width: 44px;
    height: 4px;
    background-color: #ddd;
    border-radius: 100px;
  }
`
