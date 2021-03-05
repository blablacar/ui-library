import styled from 'styled-components'

import { font, fontWeight, radius, responsiveBreakpoints, space } from '../../../_utils/branding'
import { Button } from '../../../button'
import { Column } from '../../../layout/column'
import { TextBody } from '../../../typography/body'
import { TextDisplay1 } from '../../../typography/display1'
import { TextTitle } from '../../../typography/title'
import { BaseSection } from '../baseSection'

const StyledTextTitle = styled(TextTitle)`
  padding-top: ${space.m};
  padding-bottom: ${space.s};
  margin: 0;
  font-weight: ${fontWeight.medium};
`

const StyledTextBody = styled(TextBody)`
  margin: 0;
`

const StyledTextDisplay1 = styled(TextDisplay1)`
  flex: 1;
  padding: ${space.xl} 0;
  margin: 0;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: center;
  }
`

const StyledColumn = styled(Column)`
  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: center;

    &:not(:first-child):not(:last-child) {
      margin-top: ${space.xl};
      margin-bottom: ${space.xl};
    }
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    &:not(:last-child) {
      margin-right: ${space.xxl};
    }
  }
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
`

const StyledTopLink = styled(Button)`
  @media (${responsiveBreakpoints.isMediaSmall}) {
    && {
      display: none;
    }
  }
`

const StyledFooterLink = styled(Button)`
  && {
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    padding-top: ${space.m};
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    && {
      text-align: center;
    }
  }
`

const StyledMediaElement = styled.div`
  text-align: left;
  margin-bottom: ${space.m};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: center;
  }
`

const StyledMediaCover = styled.a`
  & img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: ${radius.s};
  }
`

const StyledMediaFit = styled.div`
  text-align: center;
  margin-bottom: ${space.m};

  & img {
    width: 60%;
    border-radius: ${radius.s};
    margin-bottom: ${space.m};
  }
`

const StyledBaseSection = styled(BaseSection)`
  position: relative;
  margin: ${space.xl} 0;
`
export const StyledColumnedContentSection = {
  Section: StyledBaseSection,
  Header: StyledHeader,
  Title: StyledTextDisplay1,
  TopLink: StyledTopLink,
  Column: StyledColumn,
  ColumnTitle: StyledTextTitle,
  ColumnContent: StyledTextBody,
  ColumnFooter: StyledFooterLink,
  MediaElement: StyledMediaElement,
  MediaCover: StyledMediaCover,
  MediaFit: StyledMediaFit,
}
