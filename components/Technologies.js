import { define } from "../roqvue.js"

// Utility to create an SVG icon
function createIcon(svg) {
  const wrapper = document.createElement("div")
  wrapper.className = "mx-auto mb-4 p-3 bg-indigo-100 rounded-full w-fit"
  wrapper.innerHTML = svg
  return wrapper
}

// Utility to create a card
function createCard({ icon, title, description, features }) {
  const card = document.createElement("div")
  card.className = "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800 text-white rounded-xl p-6 flex flex-col items-center text-center"

  card.appendChild(createIcon(icon))

  const h3 = document.createElement("h3")
  h3.className = "text-xl font-bold mb-2"
  h3.textContent = title
  card.appendChild(h3)

  const desc = document.createElement("p")
  desc.className = "text-sm text-gray-300 mb-4"
  desc.textContent = description
  card.appendChild(desc)

  const ul = document.createElement("ul")
  ul.className = "space-y-1 text-sm text-gray-400"
  features.forEach(f => {
    const li = document.createElement("li")
    li.textContent = `• ${f}`
    ul.appendChild(li)
  })
  card.appendChild(ul)

  return card
}

export function Technologies() {
  const container = document.createElement("section")
  container.className = "py-20 bg-gray-900" // dark background

  const inner = document.createElement("div")
  inner.className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

  // Header
  const header = document.createElement("div")
  header.className = "text-center mb-16"

  const h2 = document.createElement("h2")
  h2.className = "text-4xl md:text-5xl font-bold text-white mb-6"
  h2.textContent = "Our Technologies"
  header.appendChild(h2)

  const p = document.createElement("p")
  p.className = "text-xl text-gray-300 max-w-3xl mx-auto"
  p.textContent = "From reusable rockets to autonomous recovery systems, we're building the infrastructure for humanity's space future."
  header.appendChild(p)

  inner.appendChild(header)

  // Grid of cards
  const grid = document.createElement("div")
  grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"

  const cardsData = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-2 2m0 0l-2 2m2-2l2 2m0 0v7m0 0h7m-7 0l2-2m0 0l2-2m-2 2l-2-2" />
             </svg>`,
      title: "Falcon-Class Rockets",
      description: "Reusable heavy-lift vehicles designed for reliability and cost efficiency",
      features: ["70-ton payload capacity", "95% reusability rate", "Autonomous landing system"]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l1 6h14l1-6h1" />
             </svg>`,
      title: "Autonomous Drone Ships",
      description: "AI-powered recovery platforms for safe rocket landings at sea",
      features: ["GPS precision landing", "Weather-adaptive positioning", "99% recovery success rate"]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      title: "Advanced Satellites",
      description: "Next-generation communication satellites for global connectivity",
      features: ["10-year operational life", "High-throughput capacity", "Low-latency communication"]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V9" />
             </svg>`,
      title: "ISP Services",
      description: "Satellite-based internet providing global high-speed connectivity",
      features: ["1Gbps+ speeds", "Global coverage", "Enterprise solutions"]
    }
  ]

  cardsData.forEach(c => grid.appendChild(createCard(c)))
  inner.appendChild(grid)
  container.appendChild(inner)

  return container
}

define("Technologies", Technologies)
