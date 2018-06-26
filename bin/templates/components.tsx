${components.map(component => "import " + component.capitalized + " from '" + component.root + component.name + "'").join('\n')}

import branding from '_utils/branding'
import { flush, flushToHTML } from 'styled-jsx/server'

export * from 'icon/index'

export {
  ${components.map(component => component.capitalized).join(`,\n  `)},
  branding,
  flush,
  flushToHTML,
}
