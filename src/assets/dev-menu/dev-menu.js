window.addEventListener("load", () => {
  const devMenu = document.querySelector(".dev-menu")

  if (!devMenu) return
  devMenu.style.display = "block"

  const devMenuToggler = document.querySelector(".dev-menu-toggler")
  const devMenuList = document.querySelector(".dev-menu-list")
  const devMenuLinks = devMenu.querySelectorAll(".dev-menu-link")
  let activeDevMenuLink = null

  devMenuLinks.length &&
  devMenuLinks.forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.classList.add("active")
      activeDevMenuLink = link
    } else if (window.location.pathname === "/" && link.pathname === "/index.html") {
      link.classList.add("active")
      activeDevMenuLink = link
    }
  })

  devMenuToggler &&
  devMenuToggler.addEventListener("click", () => {
    if (!devMenu) return
    devMenu.classList.toggle("active")

    if (activeDevMenuLink && devMenuList) {
      devMenuList.scroll({
        top: activeDevMenuLink.offsetTop - devMenuList.offsetHeight / 2,
        behavior: "smooth"
      })
    }
  })

  window.addEventListener("click", (event) => {
    if (!devMenu) return
    if (!devMenu.contains(event.target)) {
      devMenu.classList.remove("active")
    }
  })

  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code === "KeyI") {
      window.open("https://html.galaxy-it.net/h/gulp_examples/", "_blank")
    }
  })
})
