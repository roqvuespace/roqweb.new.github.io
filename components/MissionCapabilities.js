import { define } from "../roqvue.js"

// Utility to create an icon wrapper
function createIconWrapper(svg) {
  const wrapper = document.createElement("div")
  wrapper.className = "mx-auto mb-4 p-3 bg-indigo-500/10 rounded-full w-fit flex items-center justify-center"
  wrapper.innerHTML = svg
  return wrapper
}

// Utility to create a feature list
function createFeatureList(features) {
  const ul = document.createElement("ul")
  ul.className = "space-y-2 text-sm text-gray-300"
  features.forEach(f => {
    const li = document.createElement("li")
    li.textContent = `• ${f}`
    ul.appendChild(li)
  })
  return ul
}

// Utility to create a single card
function createCapabilityCard({ icon, title, description, features }) {
  const card = document.createElement("div")
  card.className = "bg-gray-800 text-white rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:-translate-y-2"

  card.appendChild(createIconWrapper(icon))

  const h3 = document.createElement("h3")
  h3.className = "text-xl font-bold mb-2"
  h3.textContent = title
  card.appendChild(h3)

  const desc = document.createElement("p")
  desc.className = "text-gray-300 mb-4"
  desc.textContent = description
  card.appendChild(desc)

  const ul = createFeatureList(features)
  card.appendChild(ul)

  return card
}

// Main component
export function MissionCapabilities() {
  const container = document.createElement("section")
  container.className = "py-20 bg-gray-900"

  const inner = document.createElement("div")
  inner.className = "max-w-7xl mx-auto px-6 lg:px-8"

  // Header
  const header = document.createElement("div")
  header.className = "text-center mb-16"

  const h2 = document.createElement("h2")
  h2.className = "text-4xl md:text-5xl font-bold text-white mb-6"
  h2.textContent = "Mission Capabilities"

  const p = document.createElement("p")
  p.className = "text-lg text-gray-400 max-w-2xl mx-auto"
  p.textContent = "Advanced capabilities that set our launch programs apart from the competition."

  header.appendChild(h2)
  header.appendChild(p)
  inner.appendChild(header)

  // Grid
  const grid = document.createElement("div")
  grid.className = "grid grid-cols-1 md:grid-cols-3 gap-8"

  const capabilities = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      title: "Rapid Response",
      description: "Launch readiness in as little as 30 days for urgent missions",
      features: [
        "Streamlined integration process",
        "Dedicated mission teams",
        "Emergency launch capability"
      ]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"/></svg>`,
      title: "Precision Deployment",
      description: "Accurate orbital insertion with minimal deviation",
      features: [
        "±1km orbital accuracy",
        "Multiple deployment sequences",
        "Real-time trajectory monitoring"
      ]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M4 11h16M4 19h16"/></svg>`,
      title: "Mission Planning",
      description: "Comprehensive mission support from concept to completion",
      features: [
        "End-to-end mission design",
        "Regulatory compliance support",
        "Post-launch mission operations"
      ]
    }
  ]

  capabilities.forEach(c => grid.appendChild(createCapabilityCard(c)))
  inner.appendChild(grid)
  container.appendChild(inner)

  return container
}

define("MissionCapabilities", MissionCapabilities)
