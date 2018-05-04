import { configure, setAddon } from '@storybook/react'
import infoAddon, { setDefaults } from '@storybook/addon-info'

setAddon(infoAddon)

// addon-info
setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
  propTables: null, // no use for this since we don't use proptypes
})

configure(() => {
  require('../stories')
}, module)
