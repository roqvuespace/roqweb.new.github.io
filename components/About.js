import { define } from "../roqvue.js"

export function About({ 
  title = "About Roqvue", 
  text = "Roqvue is dedicated to building advanced space technologies including reusable rockets, autonomous drone ships, and next-generation satellites. Our mission is to make space accessible, reliable, and sustainable for all of humanity.", 
  image = "https://via.placeholder.com/500x300" 
}) {
  const section = document.createElement("section")
  section.className = "py-20 bg-gray-900" // dark background

  const inner = document.createElement("div")
  inner.className = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"

  // Left text container
  const textDiv = document.createElement("div")

  const h2 = document.createElement("h2")
  h2.className = "text-3xl md:text-4xl font-bold text-white mb-4"
  h2.textContent = title
  textDiv.appendChild(h2)

  const p = document.createElement("p")
  p.className = "text-lg text-gray-300"
  p.textContent = text
  textDiv.appendChild(p)

  inner.appendChild(textDiv)

  // Right image
  const img = document.createElement("img")
  img.src = image
  img.alt = "About Roqvue"
  img.className = "rounded-xl shadow-lg"
  inner.appendChild(img)

  section.appendChild(inner)
  return section
}

define("About", About)
