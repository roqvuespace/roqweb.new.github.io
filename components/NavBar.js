import { define, R } from "../roqvue.js"

export function NavBar({ logo, links = [] }) {
  const nav = document.createElement("nav")
  nav.className = "bg-white shadow-md sticky top-0 z-50"

  const container = document.createElement("div")
  container.className = "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"

  // Logo
  const logoEl = document.createElement("div")
  logoEl.className = "text-2xl font-bold text-indigo-600"
  logoEl.textContent = logo || "Roqvue"
  container.appendChild(logoEl)

  // Desktop links
  const linkContainer = document.createElement("div")
  linkContainer.className = "hidden md:flex space-x-6"

  links.forEach(link => {
    const a = document.createElement("a")
    a.href = link.href || "#"
    a.textContent = link.label
    a.className = "text-gray-700 hover:text-indigo-600 font-medium transition"
    linkContainer.appendChild(a)
  })
  container.appendChild(linkContainer)

  // Mobile menu button
  const mobileBtn = document.createElement("button")
  mobileBtn.className = "md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
  mobileBtn.innerHTML = "☰"
  container.appendChild(mobileBtn)

  // Mobile menu panel
  const mobileMenu = document.createElement("div")
  mobileMenu.className = "hidden flex-col space-y-2 mt-2 md:hidden"

  links.forEach(link => {
    const a = document.createElement("a")
    a.href = link.href || "#"
    a.textContent = link.label
    a.className = "block text-gray-700 hover:text-indigo-600 font-medium transition"
    mobileMenu.appendChild(a)
  })

  // Toggle mobile menu
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  nav.appendChild(container)
  nav.appendChild(mobileMenu)
  return nav
}

define("NavBar", NavBar)
