import { space, font, color, radius, componentSizes, shadow } from '_utils/branding'

export const overlayBaseStyle = `
  box-sizing: border-box;
  width: ${componentSizes.searchOverlayWidth};
  border: 1px solid ${color.border};
  border-radius: ${radius.l};
  padding: ${space.xl};
  padding-top: ${space.s};
  box-shadow: ${shadow.searchForm};
  background: ${color.defaultBackground};
`

export const autoCompleteBaseStyle = `
  .kirk-textField-wrapper {
    background: transparent;
    border-radius: 0;
    border: 0;

    input {
      font-size: ${font.m.size};
      line-height: ${font.m.lineHeight};
      background: transparent;
      border-radius: 0;
    }

    .kirk-loader {
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }

  .kirk-items-list.kirk-autoComplete-list {
    padding: 0;

    .kirk-items-list-item {
      &::before {
        content: none;
      }

      .kirk-item-choice {
        padding: ${space.m} ${space.l};
      }
    }
  }
`
