// closest() polyfill, provided by Mozilla
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

function closest(s: string): HTMLElement | null {
  let el = this

  do {
    if (el.matches(s)) return el
    el = el.parentElement || el.parentNode
  } while (el !== null && el.nodeType === 1)
  return null
}

// Checking window for SSR
if (typeof window !== 'undefined' && !Element.prototype.closest) {
  Element.prototype.closest = closest
}
