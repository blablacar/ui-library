import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../_utils/branding'
import { Button } from '../button'
import { Modal } from '../modal'
import { TheVoice } from '../theVoice'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.green};

  .kirk-modal-dialog {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
    background-color: ${color.green};
    min-height: 100%;
  }

  .kirk-modal-body {
    display: flex;
    flex-direction: column;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`

/* LAYOUT: Media */
const Media = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    max-width: ${componentSizes.largeSectionWidth};
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const Figure = styled.figure`
  display: flex;
  margin-top: calc(2 * ${space.xxl});
  justify-content: center;
  align-items: center;
  height: 33.33%;
  max-height: 33.33%;

  img {
    height: 100%;
    max-width: 305px; /* Magic Numbers from spec */
    max-height: 240px; /* Magic Numbers from spec */
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    margin: 0;
    width: 33.33%;
    min-width: 33.33vh;

    img {
      width: 100%;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    height: auto;
    /* gutter */
    margin-left: ${space.l};
    max-width: ${componentSizes.smallSectionWidth};
  }
`

/* SuccessModal Spacements */
const SuccessTitle = styled(TheVoice).attrs({ isInverted: true })`
  display: flex;
  flex: 1;
  justify-content: center;
  white-space: pre-line;
`

const SuccessAction = styled.div`
  padding-bottom: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding-bottom: 0;
  }
`

const SuccessButton = styled(Button)`
  justify-content: center;
  margin: ${space.xl};

  /* to increase specificity since button is declared with high specificity */
  & {
    min-width: 8rem;
  }
`

export const SuccessModalElements = {
  StyledSuccessModal,
  Media,
  Figure,
  Content,
  SuccessTitle,
  SuccessAction,
  SuccessButton,
}
