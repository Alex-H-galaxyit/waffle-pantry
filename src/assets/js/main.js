window.addEventListener("load", async () => {
  // Show hidden elements
  document.querySelectorAll(".important_none")?.forEach(($el) => $el.classList.remove("important_none"))
})

import { Hero } from "./modules/hero"
import { tabs } from "./modules/tabs"

Hero()
tabs(
  ".tabs-kitchen__header",
  ".tabs-kitchen__header-item",
  ".tabs-kitchen__content-item",
  "tabs-kitchen__header-item--active",
)
tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "tabs__header-item--active")
