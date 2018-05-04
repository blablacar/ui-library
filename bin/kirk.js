import { generateGetters, generateComponent, generateIcon, deleteComponent, deleteIcon } from './kirkHelpers'
import { log } from './utils'

const helpers = [
  {
    action: 'component',
    description: 'Create a new React component in the src/ folder.',
  },
  {
    action: 'icon',
    description: 'Create a new icon in the src/svg/svg folder.',
  },
  {
    action: 'delete',
    description: 'Remove a component in the list provided.',
  },
  {
    action: 'deleteIcon',
    description: 'Remove an icon in the list provided.',
  },
  {
    action: 'init',
    description: 'Recreate the getters in the export or for storybook.',
  },
]

switch (process.argv.slice(2)[0]) {
  case 'component':
    generateComponent()
    break

  case 'icon':
    generateIcon()
    break

  case 'delete':
    deleteComponent()
    break

  case 'deleteIcon':
    deleteIcon()
    break

  case 'init':
    generateGetters()
    break

  // Helper
  default:
    log('Welcome to the Generator Helper.\n\nYou can run several commands following the pattern "npm run kirk {action}".\nHere are the current available actions:\n', 'grey')

    helpers.forEach((helper) => {
      log(helper.action, 'white', false)
      log(`: ${helper.description}`, 'grey')
    })

    break
}
