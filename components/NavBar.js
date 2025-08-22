import { define } from "../roqvue.js"

export function NavBar({ logo, links = [] }) {
  const nav = document.createElement("nav")
  nav.style.background = "transparent"
  nav.style.boxShadow = "none"
  nav.className = "sticky top-0 z-50"

  const container = document.createElement("div")
  container.className = "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"

  // Logo
  const logoLink = document.createElement("a")
  logoLink.href = "/" // root
  logoLink.className = "text-2xl font-bold text-white"
  logoLink.textContent = logo || "Roqvue"
  logoLink.setAttribute("aria-label", "Home")

  logoLink.addEventListener("click", (e) => {
    e.preventDefault()        // Prevent default SPA routing
    window.location.href = "/" // Force full page reload
  })

  container.appendChild(logoLink)

  // Desktop links
  const linkContainer = document.createElement("div")
  linkContainer.className = "hidden md:flex space-x-6"
  links.forEach(link => {
    const a = document.createElement("a")
    a.href = link.href || "#"
    a.textContent = link.label
    a.className = "text-white hover:text-indigo-400 font-medium transition"
    linkContainer.appendChild(a)
  })
  container.appendChild(linkContainer)

  // Mobile menu button
  const mobileBtn = document.createElement("button")
  mobileBtn.className = "md:hidden text-white hover:text-indigo-400 focus:outline-none"
  mobileBtn.innerHTML = "☰"
  container.appendChild(mobileBtn)

  // Mobile menu panel
  const mobileMenu = document.createElement("div")
  mobileMenu.className = "hidden flex-col space-y-2 mt-2 md:hidden bg-black/70 rounded-lg p-4"
  links.forEach(link => {
    const a = document.createElement("a")
    a.href = link.href || "#"
    a.textContent = link.label
    a.className = "block text-white hover:text-indigo-400 font-medium transition"
    mobileMenu.appendChild(a)
  })

  mobileBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"))

  nav.appendChild(container)
  nav.appendChild(mobileMenu)
  return nav
}

define("NavBar", NavBar)
