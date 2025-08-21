import { define, R } from "../roqvue.js"

export function Header({ title, subtitle, children }) {
  const container = document.createElement("header")
  container.className = "relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-12 rounded-b-3xl shadow-lg flex flex-col items-center text-center"

  // Main title
  const h1 = document.createElement("h1")
  h1.className = "text-6xl sm:text-7xl font-extrabold mb-4 drop-shadow-lg"
  h1.textContent = title
  container.appendChild(h1)

  // Subtitle
  if (subtitle) {
    const sub = document.createElement("p")
    sub.className = "text-xl sm:text-2xl opacity-90 mb-6"
    sub.textContent = subtitle
    container.appendChild(sub)
  }

  // Append children (e.g., buttons, links)
  children.forEach(c => container.appendChild(c))

  // Example interactive button
  const button = document.createElement("button")
  button.className = "bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300 ease-in-out"
  button.textContent = "Get Started"
  button.addEventListener("click", () => alert("Welcome aboard!"))
  container.appendChild(button)

  return container
}

define("Header", Header)
