import jetpack from 'fs-jetpack'

export function getCompiledCSS () {
  const css = jetpack.read('dist/css/style.css')
  return css
}

export function getCompiledScripts () {
  const js = jetpack.read('dist/scripts/bundle.min.js')
  return js
}

export function toCamelCase (str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}
