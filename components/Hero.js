import { define, R } from "../roqvue.js"

export function Hero({ title, children }) {
  const container = document.createElement("header")
  container.className = "border p-6 rounded-lg bg-gray-100 shadow-lg p-6 rounded-lg"

  const h1 = document.createElement("h1")
  h1.className = "text-9xl font-bold mb-4 text-gray-700"
  h1.textContent = title
  container.appendChild(h1)

  children.forEach(c => container.appendChild(c))

  const button = document.createElement("button")
  button.className = "mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
  button.textContent = "Learn More"
  button.addEventListener("click", () => alert(`You clicked "${title}"!`))
  container.appendChild(button)

  return container
}

define("Hero", Hero)
