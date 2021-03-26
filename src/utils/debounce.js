export const debounce = (func, wait, immediate, args) => {
  let timeout

  return () => {
    const context = this
    const callnow = immediate && !timeout
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callnow) func.apply(context, args)
  }
}
