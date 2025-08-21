import { define, R } from "../roqvue.js"

export function Stats({ items = [] }) {
  const section = document.createElement("section")
  section.className = "py-16 bg-gray-900" // bg-card equivalent

  const container = document.createElement("div")
  container.className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

  const grid = document.createElement("div")
  grid.className = "grid grid-cols-1 md:grid-cols-4 gap-8 text-center"

  items.forEach(item => {
    const col = document.createElement("div")

    const value = document.createElement("div")
    value.className = "text-4xl font-bold text-indigo-500 mb-2" // text-primary
    value.textContent = item.value
    col.appendChild(value)

    const label = document.createElement("div")
    label.className = "text-gray-400" // text-muted-foreground
    label.textContent = item.label
    col.appendChild(label)

    grid.appendChild(col)
  })

  container.appendChild(grid)
  section.appendChild(container)
  return section
}

define("Stats", Stats)
