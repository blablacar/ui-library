import React from 'react'

import { space } from './branding'

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

const renderTabSpacing = (s: string) => (
  <tr key={s}>
    <td>{s}</td>
    <td>{space[s]}</td>
  </tr>
)

export const Basic = () => (
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
)

export default {
  title: 'Design Tokens|Spacing',
}
