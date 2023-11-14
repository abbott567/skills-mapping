import capabilities from '../../data/capabilities.json'
import teamMembers from '../../data/team-members.json'
import baseConfig from './config.mjs'
import { generateChartData } from './generate.mjs'
import { toCamelCase } from '../../utilities/string.mjs'

export function buildChartConfig (data, title) {
  const config = { ...baseConfig } // Clone the base config to avoid mutations
  config.data = data // Set the data for the chart
  if (title) {
    config.options.plugins.title.text = title // Configure chart title
  }
  return config // Return the new chart configuration
}

export function buildCombinedChartData () {
  const capabilityScores = []
  for (const value of Object.values(capabilities)) {
    const capability = toCamelCase(value)
    teamMembers.forEach(teamMember => {
      capabilityScores.push(teamMember.capabilityScores[capability])
    })
  }
  const combined = {
    id: 'combined', // teamMember's ID
    capabilityScores // Dataset for the chart
  }
  return combined
}

export function buildChartData (teamMember) {
  return {
    id: teamMember.id, // teamMember's ID
    labels: capabilities, // Set of capabilities as labels
    datasets: generateChartData(teamMember).capabilityLayers // Dataset for the chart
  }
}
