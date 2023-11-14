import { renderAllCharts } from './render.mjs'

import Chart from 'chart.js/auto'

export function init () {
  if ('querySelector' in document) {
    renderAllCharts()
  }
}

export function initialiseChart (contextId, config) {
  const ctx = document.getElementById(contextId) // Get the canvas context by ID
  return new Chart(ctx, config) // Initialize and return a new Chart
}

export default { init }
