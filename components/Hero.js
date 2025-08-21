import { define, R } from "../roqvue.js"

export function Header({ title, subtitle, badgeText, buttons = [] }) {
  const section = document.createElement("section")
  section.className = "relative min-h-screen flex items-center justify-center overflow-hidden"

  // Gradient overlay
  const gradient = document.createElement("div")
  gradient.className = "absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
  section.appendChild(gradient)

  // Background image
  const bgImg = document.createElement("img")
  bgImg.src = "../static/rocket-launch-starry-space.png" 
  bgImg.alt = "Rocket Launch"
  bgImg.className = "absolute inset-0 w-full h-full object-cover opacity-20"
  section.appendChild(bgImg)

  // Star container
  const starContainer = document.createElement("div")
  starContainer.className = "absolute inset-0 pointer-events-none overflow-hidden"

  // Generate stars
  const numStars = 50
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div")
    const size = Math.random() * 2 + 1
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.backgroundColor = "white"
    star.style.borderRadius = "50%"
    star.style.position = "absolute"
    star.style.top = `${Math.random() * 100}%`
    star.style.left = `${Math.random() * 100}%`
    star.style.opacity = Math.random()
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`
    starContainer.appendChild(star)
  }

  section.appendChild(starContainer)

  // Add keyframes for twinkle animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.1; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
      100% { opacity: 0.1; transform: scale(0.8); }
    }
  `
  document.head.appendChild(style)

  // Content container
  const content = document.createElement("div")
  content.className = "relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center"

  // Badge with animation
  if (badgeText) {
    const badge = document.createElement("div")
    badge.className = "mb-6 bg-indigo-600/10 text-indigo-600 border border-indigo-600/20 px-4 py-1 rounded-full font-semibold transform opacity-0 translate-y-6 transition-all duration-700 hover:scale-105"
    badge.textContent = badgeText
    content.appendChild(badge)
    setTimeout(() => badge.classList.remove("opacity-0", "translate-y-6"), 100)
  }

  // Title with fade-in
  const h1 = document.createElement("h1")
  h1.className = "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-0 translate-y-6 transition-all duration-700 delay-200"
  h1.innerHTML = title
  content.appendChild(h1)
  setTimeout(() => h1.classList.remove("opacity-0", "translate-y-6"), 200)

  // Subtitle with staggered fade-in
  if (subtitle) {
    const p = document.createElement("p")
    p.className = "text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-6 transition-all duration-700 delay-400"
    p.textContent = subtitle
    content.appendChild(p)
    setTimeout(() => p.classList.remove("opacity-0", "translate-y-6"), 400)
  }

  // Buttons container
  if (buttons.length) {
    const btnContainer = document.createElement("div")
    btnContainer.className = "flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-6 transition-all duration-700 delay-600"
    buttons.forEach(b => {
      const btn = document.createElement("button")
      btn.className = `${b.variant === "outline" ? "border border-white bg-transparent text-white" : "bg-indigo-600 text-white"} font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105`
      btn.textContent = b.label
      if (b.onClick) btn.addEventListener("click", b.onClick)
      btnContainer.appendChild(btn)
    })
    content.appendChild(btnContainer)
    setTimeout(() => btnContainer.classList.remove("opacity-0", "translate-y-6"), 600)
  }

  section.appendChild(content)
  return section
}

define("Header", Header)
