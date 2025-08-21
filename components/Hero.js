import { define } from "../roqvue.js"

export function Hero({ title, children }) {
  const container = document.createElement("header")
  container.style.border = "1px solid #ccc"
  container.style.padding = "1rem"
  container.style.borderRadius = "8px"

  const h1 = document.createElement("h1")
  h1.textContent = title
  container.appendChild(h1)

  children.forEach(c => container.appendChild(c))
  return container
}

define("Hero", Hero)
