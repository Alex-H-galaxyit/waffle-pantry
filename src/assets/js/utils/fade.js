/**
 * @param { HTMLElement } $el
 * @param { number } delay
 * @param { function | undefined } callback
 *
 * @return void
 * */
const fadeIn = ($el, delay, callback) => {
  $el.style.opacity = "0"
  $el.style.display = "block"
  $el.style.transition = `opacity ${delay}ms`

  setTimeout(() => {
    $el.style.opacity = "1"

    callback && callback($el)
  }, delay)
}

/**
 * @param { HTMLElement } $el
 * @param { number } delay
 * @param { function | undefined } callback
 *
 * @return void
 * */
const fadeOut = ($el, delay, callback) => {
  $el.style.opacity = "0"
  $el.style.display = "none"
  $el.style.transition = `opacity ${delay}ms`

  setTimeout(() => {
    $el.style.opacity = "1"

    callback && callback($el)
  }, delay)
}

export { fadeIn, fadeOut }
