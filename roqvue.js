const componentRegistry = new Map()

export function define(name, component) {
  componentRegistry.set(name, component)
}

// JSX-like function
export function R(tag, props = {}, ...children) {
  const Comp = componentRegistry.get(tag)
  if (Comp) {
    return Comp({ ...props, children })
  } else {
    const el = document.createElement(tag)
    children.forEach(c => {
      if (typeof c === 'string') el.appendChild(document.createTextNode(c))
      else el.appendChild(c)
    })
    for (let key in props) el.setAttribute(key, props[key])
    return el
  }
}

export function render(component, container) {
  container.appendChild(component())
}
