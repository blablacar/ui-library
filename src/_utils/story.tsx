import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { color, space, font } from '_utils/branding'

const stories = storiesOf('Brand|', module)
stories.addDecorator(withKnobs)

const styles: { [name: string]: React.CSSProperties } = {
  main: {
    margin: '20px',
    overflow: 'hidden',
  },
  colorTile: {
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '150px',
    width: '150px',
  },
  fontTile: {
    marginBottom: '10px',
  },
  fontTableTile: {
    width: '100%',
    textAlign: 'center',
  },
}

function getBrightness(hex: string) {
  /* eslint-disable no-bitwise */
  const rgb = parseInt(hex.substring(1), 16) // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue

  return 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
  /* eslint-enable no-bitwise */
}

const renderColors = (c: string) => {
  const style = {
    ...styles.colorTile,
    color: getBrightness(color[c]) < 120 ? '#FFF' : '#000',
    backgroundColor: color[c],
  }
  return (
    <div key={c} style={style}>
      {c}
      <br />
      {color[c]}
    </div>
  )
}

const renderFonts = (f: string) => {
  const placeholder = text(
    'Default text',
    `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Quisquam consequatur aspernatur provident minus praesentium et amet
  ab, quas architecto. Tempore vitae voluptate, harum modi temporibus! Est temporibus
  explicabo facere, vitae!`,
  )
  const style = {
    ...styles.fontTile,
    fontSize: font[f].size,
    lineHeight: font[f].lineHeight,
  }
  return (
    <div key={f} style={style}>
      <strong style={{ backgroundColor: color.lightGray }}>{f}</strong>
      <p style={{ backgroundColor: color.lightGray }}>{placeholder}</p>
    </div>
  )
}

const renderTabFonts = (f: string) => (
  <tr key={f}>
    <td>{f}</td>
    <td>{font[f].size}</td>
    <td>{font[f].lineHeight}</td>
  </tr>
)

const renderTabSpacing = (s: string) => (
  <tr key={s}>
    <td>{s}</td>
    <td>{space[s]}</td>
  </tr>
)

stories.add(
  'Colors',
  () => (
    <div style={styles.main}>
      <div>{Object.keys(color).map(renderColors)}</div>
    </div>
  ),
  { info: '☹️ no emojis' },
)

stories.add('Fonts', () => (
  <div style={styles.main}>
    <table style={styles.fontTableTile}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Font-size</th>
          <th>Line-height</th>
        </tr>
        {Object.keys(font).map(renderTabFonts)}
      </tbody>
    </table>
    {Object.keys(font).map(renderFonts)}
  </div>
))

stories.add('Spacing', () => (
  <div style={styles.main}>
    <table style={styles.fontTableTile}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Space</th>
        </tr>
        {Object.keys(space).map(renderTabSpacing)}
      </tbody>
    </table>
  </div>
))
