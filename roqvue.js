const componentRegistry = new Map()

export function define(name, component) {
  componentRegistry.set(name, component)
}

export function R(strings, ...values) {
  const html = strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "")
  const template = document.createElement("template")
  template.innerHTML = html.trim()
  return parseElement(template.content.firstChild)
}

function parseElement(node) {
  if (!node) return document.createDocumentFragment()
  if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent)

  const tag = node.tagName
  const Comp = componentRegistry.get(tag)

  const props = {}
  for (let attr of node.attributes) props[attr.name] = attr.value

  const children = Array.from(node.childNodes).map(parseElement)

  if (Comp) return Comp({ ...props, children })
  else {
    const el = document.createElement(tag.toLowerCase())
    children.forEach(c => el.appendChild(c))
    for (let key in props) el.setAttribute(key, props[key])
    return el
  }
}

export function render(component, container) {
  container.appendChild(component())
}