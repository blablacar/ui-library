import styled from 'styled-components'
import SuccessModal from './SuccessModal'

import { color, space, responsiveBreakpoints, componentSizes } from '_utils/branding'

import Modal from 'modal'
import Button from 'button'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

  .kirk-modal-dialog {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    border-radius: 0;
    background-color: ${color.successBackground};
  }

  .kirk-modal-body {
    display: flex;
    min-height: 100vh;
    /* to avoid scroll on webkit browsers when they have a top bar */
    min-height: -moz-available;
    min-height: -webkit-fill-available;
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
  margin: 0;
  justify-content: center;
  align-items: center;
  padding-top: calc(2 * ${space.xxl});
  height: 33.33vh;
  min-height: 33.33vh;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding: 0;
    width: 33.33vh;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    flex: 1;
    width: 66.66vh;
    height: auto;
  }
`

/* SuccessModal Spacements */
const SuccessTitle = styled.h1`
  display: flex;
  flex: 1;
  padding: ${space.xl};
`

const SuccessAction = styled.div`
  padding: ${space.xl};
`

const SuccessButton = styled(Button)`
  justify-content: center;

  & {
    min-width: 8rem;
  }
`

const SuccessModalStyle = {
  StyledSuccessModal,
  Media,
  Figure,
  Content,
  SuccessTitle,
  SuccessAction,
  SuccessButton,
}

export { SuccessModalProps } from './SuccessModal'
export { SuccessModalStyle }
export default SuccessModal
