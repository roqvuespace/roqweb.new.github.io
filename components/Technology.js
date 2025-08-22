import { define } from "../roqvue.js"

// Data
const rocketSpecs = [
  { name: "Height", value: "55 m", description: "" },
  { name: "Diameter", value: "3.7 m", description: "" },
  { name: "Mass", value: "220,000 kg", description: "" },
  { name: "Payload to LEO", value: "4,000 kg", description: "" },
]

const droneShipSpecs = [
  { name: "Length", value: "91 m", description: "300 ft" },
  { name: "Width", value: "52 m", description: "170 ft" },
  { name: "Landing Accuracy", value: "±2 m", description: "GPS precision" },
  { name: "Sea State Capability", value: "6", description: "Significant wave height 4-6m" },
  { name: "Positioning System", value: "DP3", description: "Dynamic positioning class 3" },
  { name: "Recovery Success", value: "99.2%", description: "Mission success rate" },
]

const satelliteSpecs = [
  { name: "Mass", value: "260 kg", description: "573 lb" },
  { name: "Power", value: "4.6 kW", description: "Solar array output" },
  { name: "Throughput", value: "20 Gbps", description: "Per satellite" },
  { name: "Coverage", value: "1,000 km", description: "Diameter footprint" },
  { name: "Orbital Altitude", value: "550 km", description: "Low Earth Orbit" },
  { name: "Operational Life", value: "10+ years", description: "Design lifetime" },
]

const ispSpecs = [
  { name: "Download Speed", value: "1 Gbps+", description: "Peak throughput" },
  { name: "Upload Speed", value: "100 Mbps+", description: "Peak throughput" },
  { name: "Latency", value: "<20 ms", description: "Round-trip time" },
  { name: "Coverage", value: "Global", description: "Worldwide service" },
  { name: "Availability", value: "99.9%", description: "Service uptime" },
  { name: "Constellation Size", value: "4,000+", description: "Active satellites" },
]

// Utility to create a card
function createCard({ icon, title, description, features }) {
  const card = document.createElement("div")
  card.className = "group hover:shadow-lg transition-all duration-300 bg-gray-800 text-white rounded-xl p-6 text-center"

  if (icon) {
    const iconWrapper = document.createElement("div")
    iconWrapper.className = "mx-auto mb-4 p-3 bg-indigo-100 rounded-full w-fit"
    iconWrapper.innerHTML = icon
    card.appendChild(iconWrapper)
  }

  const h3 = document.createElement("h3")
  h3.className = "text-xl font-bold mb-2"
  h3.textContent = title
  card.appendChild(h3)

  if (description) {
    const desc = document.createElement("p")
    desc.className = "text-sm text-gray-300 mb-4"
    desc.textContent = description
    card.appendChild(desc)
  }

  if (features) {
    const ul = document.createElement("ul")
    ul.className = "space-y-1 text-sm text-gray-400"
    features.forEach(f => {
      const li = document.createElement("li")
      li.textContent = `• ${f}`
      ul.appendChild(li)
    })
    card.appendChild(ul)
  }

  return card
}

// Utility to create a specs grid
function createSpecsGrid(specs) {
  const grid = document.createElement("div")
  grid.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
  specs.forEach(spec => {
    const card = document.createElement("div")
    card.className = "p-4 bg-gray-800 text-white rounded-lg"
    card.innerHTML = `
      <div class="text-2xl font-bold text-indigo-500 mb-1">${spec.value}</div>
      <div class="font-medium mb-1">${spec.name}</div>
      <div class="text-sm text-gray-400">${spec.description}</div>
    `
    grid.appendChild(card)
  })
  return grid
}

// Main Technology Page component
export function TechnologyPage() {
  const container = document.createElement("div")
  container.className = "bg-gray-900 text-white"

  // Hero Section
  const hero = document.createElement("section")
  hero.className = "relative py-20 text-center px-4 sm:px-6 lg:px-8"
  hero.innerHTML = `
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Our Technology</h1>
    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
      Cutting-edge aerospace technology designed for reliability, efficiency, and the future of space exploration.
    </p>
  `
  container.appendChild(hero)

  // Tabs container
  const tabsContainer = document.createElement("div")
  tabsContainer.className = "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

  const tabsList = document.createElement("div")
  tabsList.className = "flex space-x-4 mb-8"
  const tabButtons = ["Raven - Rocket", "Drone Ships", "Satellites", "ISP Services"]
  const tabContents = [rocketSpecs, droneShipSpecs, satelliteSpecs, ispSpecs]

  const tabContentContainer = document.createElement("div")

  tabButtons.forEach((tab, i) => {
    const btn = document.createElement("button")
    btn.textContent = tab
    btn.className = "px-4 py-2 bg-gray-700 rounded hover:bg-indigo-600 transition text-white"
    btn.addEventListener("click", () => {
      tabContentContainer.innerHTML = ""
      tabContentContainer.appendChild(createSpecsGrid(tabContents[i]))
    })
    tabsList.appendChild(btn)
  })

  // Load first tab by default
  tabContentContainer.appendChild(createSpecsGrid(tabContents[0]))

  tabsContainer.appendChild(tabsList)
  tabsContainer.appendChild(tabContentContainer)
  container.appendChild(tabsContainer)

  // CTA Section
  const cta = document.createElement("section")
  cta.className = "py-20 text-center px-4 sm:px-6 lg:px-8"
  cta.innerHTML = `
    <h2 class="text-3xl md:text-4xl font-bold mb-6">Interested in Our Technology?</h2>
    <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
      Learn more about how our advanced space technologies can support your mission requirements.
    </p>
  `
  const btnContainer = document.createElement("div")
  btnContainer.className = "flex flex-col sm:flex-row gap-4 justify-center"

  const contactBtn = document.createElement("button")
  contactBtn.className = "px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold transition"
  contactBtn.textContent = "Contact Our Engineers"
  btnContainer.appendChild(contactBtn)

  const downloadBtn = document.createElement("button")
  downloadBtn.className = "px-8 py-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded font-semibold transition"
  downloadBtn.textContent = "Download Technical Specs"
  btnContainer.appendChild(downloadBtn)

  cta.appendChild(btnContainer)
  container.appendChild(cta)

  return container
}

define("TechnologyPage", TechnologyPage)
