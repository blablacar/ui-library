// closest() polyfill, provided by Mozilla
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

function closest(s: string): HTMLElement | null {
  let el = this

  do {
    if (el.matches(s)) {
      return el
    }
    el = el.parentElement || el.parentNode
  } while (el !== null && el.nodeType === 1)
  return null
}

function matches(s: string): boolean {
  const m = (this.document || this.ownerDocument).querySelectorAll(s)
  let i = m.length - 1
  while (i >= 0 && m.item(i) !== this) {
    i -= 1
  }
  return i > -1
}

// Checking window for SSR
if (typeof window !== 'undefined' && !Element.prototype.closest) {
  Element.prototype.closest = closest
}

if (typeof window !== 'undefined' && !Element.prototype.matches) {
  Element.prototype.matches = matches
}
