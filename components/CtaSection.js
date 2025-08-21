// components/CtaSection.js
import { define } from "../roqvue.js"

export function CtaSection({ 
  title = "Ready to Shape the Future of Space?", 
  subtitle = "Join us in pioneering the next generation of rockets, satellites, and interstellar technology.", 
  buttons = [] 
}) {
  const section = document.createElement("section")
  section.className = "py-20 bg-gray-900" // dark background, same style as Technologies

  const inner = document.createElement("div")
  inner.className = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"

  // Title
  const h2 = document.createElement("h2")
  h2.className = "text-4xl md:text-5xl font-bold text-white mb-6"
  h2.textContent = title
  inner.appendChild(h2)

  // Subtitle
  const p = document.createElement("p")
  p.className = "text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
  p.textContent = subtitle
  inner.appendChild(p)

  // Buttons
  const btnContainer = document.createElement("div")
  btnContainer.className = "flex flex-col sm:flex-row justify-center gap-4"

  buttons.forEach(btn => {
    const button = document.createElement("button")
    button.textContent = btn.label
    button.className = btn.variant === "outline"
      ? "px-6 py-3 rounded-xl border border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white transition"
      : "px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
    button.addEventListener("click", btn.onClick || (() => {}))
    btnContainer.appendChild(button)
  })

  inner.appendChild(btnContainer)
  section.appendChild(inner)

  return section
}

define("CtaSection", CtaSection)
