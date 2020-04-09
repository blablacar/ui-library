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

export const sectionBaseStyle = `
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${color.defaultBackground};`

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
  }
`
