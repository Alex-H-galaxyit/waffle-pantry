/*
* The function is fixing ios field focus opening keyboard
*/
export const focusOnInput = ($input) => {
  const $parent = $input.parentNode

  const $inputHelper = document.createElement("input")
  $parent.appendChild($inputHelper)
  $inputHelper.focus()

  const event = new KeyboardEvent("touchstart", { "bubbles": true })
  $inputHelper.dispatchEvent(event)

  setTimeout(() => {
    $input.focus()
    $parent.removeChild($inputHelper)
  }, 100)
}
