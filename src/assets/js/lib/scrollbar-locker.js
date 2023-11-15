class Scrollbar {
  constructor() {
    this.cssVar = "--current-scrollbar-width"
    this.lockClass = "_lock"
    this.scrollbarCurrentWidth = this.getScrollbarWidth
    this.isLocked = false
  }

  toggle() {
    if (this.isLocked) {
      this.lock()
    } else {
      this.unLock()
    }
  }

  getScrollbarWidth() {
    return window.innerWidth - document.body.offsetWidth
  }

  lock() {
    const scrollbarWidth = this.getScrollbarWidth

    document.documentElement.style.setProperty(this.cssVar, `${scrollbarWidth}px`)
    document.body.classList.add(this.lockClass)
    this.isLocked = true
  }

  unLock() {
    document.documentElement.style.setProperty(this.cssVar, "0px")
    document.body.classList.remove(this.lockClass)
    this.isLocked = false
  }
}

export const ScrollbarLocker = new Scrollbar()
