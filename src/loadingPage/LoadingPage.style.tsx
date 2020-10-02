import styled from 'styled-components'

import { color } from '../_utils/branding'

export const StyledLoadingPage = styled.div`
    {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex
        align-items: center;
        justify-content: center;
        background-color: ${color.white}
    }

    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content-container .logo {
        border-radius: 100%;
        width: 48px;
        height: 48px;
    }

    .content-container .logo svg {
        margin: 8px 9px;
        width: 30px;
        height: 30px;
    }

`
