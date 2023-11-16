window.addEventListener("load", async () => {
  // Show hidden elements
  document.querySelectorAll(".important_none")?.forEach(($el) => $el.classList.remove("important_none"))
})

import { gallery } from "./modules/gallery"
import { hero } from "./modules/hero"
import { products } from "./modules/products"
import { tabs } from "./modules/tabs"

hero()
products()
tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "tabs__header-item--active")
tabs(
  ".tabs-kitchen__header",
  ".tabs-kitchen__header-item",
  ".tabs-kitchen__content-item",
  "tabs-kitchen__header-item--active",
)
tabs(".tabs-blog__header", ".tabs-blog__header-item", ".tabs-blog__content-item", "tabs-blog__header-item--active")
gallery()
