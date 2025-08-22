import { define } from "../roqvue.js"

// Utility to create a button
function createButton({ text, type = "primary", onClick }) {
  const btn = document.createElement("button")
  btn.textContent = text
  btn.className =
    type === "primary"
      ? "flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-8 py-4 text-lg transition"
      : "flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg px-8 py-4 text-lg transition"
  if (onClick) btn.addEventListener("click", onClick)
  return btn
}

// Main CTA component
export function CTASection() {
  const section = document.createElement("section")
  section.className = "py-20 bg-gray-900"

  const inner = document.createElement("div")
  inner.className = "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"

  const h2 = document.createElement("h2")
  h2.className = "text-3xl md:text-4xl font-bold text-white mb-6"
  h2.textContent = "Ready to Launch Your Mission?"

  const p = document.createElement("p")
  p.className = "text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
  p.textContent =
    "Contact our mission planning team to discuss your launch requirements and get a custom quote."

  const btnContainer = document.createElement("div")
  btnContainer.className = "flex flex-col sm:flex-row gap-4 justify-center"

  const requestBtn = createButton({
    text: "Request Launch Quote",
    type: "primary",
    onClick: () => alert("Request Launch Quote clicked")
  })

  const downloadBtn = createButton({
    text: "Download Mission Guide",
    type: "secondary",
    onClick: () => alert("Download Mission Guide clicked")
  })

  btnContainer.appendChild(requestBtn)
  btnContainer.appendChild(downloadBtn)

  inner.appendChild(h2)
  inner.appendChild(p)
  inner.appendChild(btnContainer)
  section.appendChild(inner)

  return section
}

define("CTASection", CTASection)
