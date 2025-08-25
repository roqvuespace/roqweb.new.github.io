import { define } from "../roqvue.js"

// Utility: badge
function createBadge(text, color = "indigo") {
  const span = document.createElement("span")
  span.className = `inline-block px-3 py-1 text-sm font-medium rounded-full bg-${color}-500/10 text-${color}-500`
  span.textContent = text
  return span
}

// Utility: card builder
function createScheduleCard({ name, category, date, developed, uses, payload, status }) {
  const card = document.createElement("div")
  card.className =
    "group bg-gray-800 text-white rounded-xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg duration-300"

  const content = document.createElement("div")
  content.className = "p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center"

  const pieceInfo = document.createElement("div")
  pieceInfo.className = "md:col-span-2"
  const h3 = document.createElement("h3")
  h3.className = "font-semibold text-lg"
  h3.textContent = name
  const p = document.createElement("p")
  p.className = "text-sm text-gray-400"
  p.textContent = category
  pieceInfo.appendChild(h3)
  pieceInfo.appendChild(p)

  const dateInfo = document.createElement("div")
  dateInfo.className = "text-center"
  dateInfo.innerHTML = `
    <div class="font-medium text-white">${uses}</div>
    <div class="text-sm text-gray-400">${developed}</div>
  `

//   const vehicleBadge = document.createElement("div")
//   vehicleBadge.className = "text-center"
//   vehicleBadge.appendChild(createBadge(vehicle, "indigo"))

  const payloadInfo = document.createElement("div")
  payloadInfo.className = "text-center"
  payloadInfo.innerHTML = `<div class="text-sm font-medium text-white">${payload}</div>`

  const statusBadge = document.createElement("div")
  statusBadge.className = "text-center"
  
  const statusColors = {
    active: "green",
    maintenance: "orange",
    inactive: "red",
  };

  const statusColor = statusColors[status] || "gray"; // gray as default
  statusBadge.appendChild(createBadge(status, statusColor))

  content.appendChild(pieceInfo)
  content.appendChild(dateInfo)
  //content.appendChild(vehicleBadge)
  content.appendChild(payloadInfo)
  content.appendChild(statusBadge)

  card.appendChild(content)
  return card
}

export function LaunchSchedule({ upcomingLaunches, pastMissions }) {
  const container = document.createElement("section")
  container.className = "py-20 bg-gray-900"

  const inner = document.createElement("div")
  inner.className = "max-w-7xl mx-auto px-6 lg:px-8"

  // Header
  const header = document.createElement("div")
  header.className = "text-center mb-16"
  const h2 = document.createElement("h2")
  h2.className = "text-4xl md:text-5xl font-bold text-white mb-4"
  h2.textContent = "Infrastructure Pieces"
  const p = document.createElement("p")
  p.className = "text-lg text-gray-400 max-w-2xl mx-auto"
  p.textContent = "Stay updated with our current and past infrastructure."
  header.appendChild(h2)
  header.appendChild(p)
  inner.appendChild(header)

  // Tabs
  const tabs = document.createElement("div")
  tabs.className = "flex justify-center mb-8 space-x-4"

  const upcomingBtn = document.createElement("button")
  upcomingBtn.textContent = "Current Infrastructure"
  upcomingBtn.className = "px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
  upcomingBtn.dataset.tab = "current"

  const pastBtn = document.createElement("button")
  pastBtn.textContent = "Past Infrastructure"
  pastBtn.className = "px-4 py-2 font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600"
  pastBtn.dataset.tab = "past"

  tabs.appendChild(upcomingBtn)
  tabs.appendChild(pastBtn)
  inner.appendChild(tabs)

  // Cards container
  const cardsContainer = document.createElement("div")
  cardsContainer.className = "space-y-4"

  function renderCards(type) {
    cardsContainer.innerHTML = ""
    const data = type === "current" ? upcomingLaunches : pastMissions
    data.forEach(item => cardsContainer.appendChild(createScheduleCard(item)))
  }

  // Initial render
  renderCards("current")

  // Tab switch logic
  upcomingBtn.addEventListener("click", () => {
    renderCards("current")
    upcomingBtn.classList.add("bg-indigo-600")
    pastBtn.classList.remove("bg-gray-600")
  })
  pastBtn.addEventListener("click", () => {
    renderCards("past")
    pastBtn.classList.add("bg-gray-600")
    upcomingBtn.classList.remove("bg-indigo-600")
  })

  inner.appendChild(cardsContainer)
  container.appendChild(inner)
  return container
}

define("LaunchSchedule", LaunchSchedule)
