import { define } from "../roqvue.js"

// Utility: icon wrapper
function createIcon(svg) {
  const wrapper = document.createElement("div")
  wrapper.className = "p-4 bg-indigo-500/10 rounded-full flex items-center justify-center"
  wrapper.innerHTML = svg
  return wrapper
}

// Utility: feature item with check icon
function createFeatureItem(text) {
  const li = document.createElement("li")
  li.className = "flex items-center space-x-2 text-base text-gray-300"

  const icon = document.createElement("span")
  icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>`
  li.appendChild(icon)

  const span = document.createElement("span")
  span.textContent = text
  li.appendChild(span)

  return li
}

// Utility: card builder
function createCard({ icon, title, description, price, capacity, missions, features }) {
  const card = document.createElement("div")
  card.className =
    "group bg-gray-800 text-white rounded-2xl overflow-hidden flex flex-col transition transform hover:-translate-y-3 hover:shadow-2xl duration-300"

  // Header
  const header = document.createElement("div")
  header.className = "p-10 flex items-center space-x-6"
  header.appendChild(createIcon(icon))

  const textWrap = document.createElement("div")
  const h3 = document.createElement("h3")
  h3.className = "text-2xl font-semibold"
  h3.textContent = title
  textWrap.appendChild(h3)

  const desc = document.createElement("p")
  desc.className = "text-base text-gray-400 mt-1"
  desc.textContent = description
  textWrap.appendChild(desc)

  header.appendChild(textWrap)
  card.appendChild(header)

  // Stats
  const stats = document.createElement("div")
  stats.className = "grid grid-cols-3 gap-6 px-10 pb-8"

  const statData = [
    { label: "Price", value: price },
    { label: "Capacity", value: capacity },
    { label: "Missions", value: missions }
  ]

  statData.forEach(stat => {
    const box = document.createElement("div")
    box.className = "text-center"
    box.innerHTML = `
      <div class="text-2xl font-bold text-indigo-500">${stat.value}</div>
      <div class="text-sm text-gray-400">${stat.label}</div>
    `
    stats.appendChild(box)
  })

  card.appendChild(stats)

  // Features
  const ul = document.createElement("ul")
  ul.className = "space-y-3 px-10 pb-8"
  features.forEach(f => ul.appendChild(createFeatureItem(f)))
  card.appendChild(ul)

  // Button
  const btn = document.createElement("button")
  btn.className =
    "m-10 w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-lg py-3 px-6 flex items-center justify-center text-base font-medium"
  btn.innerHTML = `
    Learn More
    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  `
  card.appendChild(btn)

  return card
}

export function LaunchPrograms() {
  const container = document.createElement("section")
  container.className = "py-24 bg-gray-900"

  const inner = document.createElement("div")
  inner.className = "max-w-7xl mx-auto px-6 lg:px-8"

  // Header
  const header = document.createElement("div")
  header.className = "text-center mb-20"

  const h2 = document.createElement("h2")
  h2.className = "text-4xl md:text-5xl font-bold text-white mb-6"
  h2.textContent = "Our Launch Programs"
  header.appendChild(h2)

  const p = document.createElement("p")
  p.className = "text-xl text-gray-400 max-w-3xl mx-auto"
  p.textContent =
    "Tailored launch solutions for every mission requirement, from commercial deployments to deep space exploration."
  header.appendChild(p)

  inner.appendChild(header)

  // Grid
  const grid = document.createElement("div")
  grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"

  const cardsData = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-2 2m0 0l-2 2m2-2l2 2m0 0v7m0 0h7m-7 0l2-2m0 0l2-2m-2 2l-2-2" />
             </svg>`,
      title: "Commercial Missions",
      description: "Dedicated launches for commercial satellites and payloads",
      price: "$62M",
      capacity: "4,000 kg",
      missions: "0",
      features: [
        "Dedicated launch vehicle",
        "Custom mission profile",
        "Priority scheduling",
        "Mission insurance"
      ]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l1 6h14l1-6h1" />
             </svg>`,
      title: "Autonomous Drone Ships",
      description: "AI-powered recovery platforms for safe rocket landings at sea",
      price: "N/A",
      capacity: "Supports heavy boosters",
      missions: "120",
      features: [
        "GPS precision landing",
        "Weather-adaptive positioning",
        "99% recovery success rate"
      ]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
             </svg>`,
      title: "Advanced Satellites",
      description: "Next-generation communication satellites for global connectivity",
      price: "$150M",
      capacity: "Varies per mission",
      missions: "54",
      features: [
        "10-year operational life",
        "High-throughput capacity",
        "Low-latency communication"
      ]
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V9" />
             </svg>`,
      title: "ISP Services",
      description: "Satellite-based internet providing global high-speed connectivity",
      price: "$99/mo",
      capacity: "1Gbps+ speeds",
      missions: "Global coverage",
      features: [
        "Global availability",
        "Enterprise solutions",
        "Low-latency service"
      ]
    }
  ]

  cardsData.forEach(c => grid.appendChild(createCard(c)))
  inner.appendChild(grid)
  container.appendChild(inner)

  return container
}

define("LaunchPrograms", LaunchPrograms)
