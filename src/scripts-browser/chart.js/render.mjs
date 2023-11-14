import teamMembers from '../../data/team-members.json'
import { initialiseChart } from './initialise.mjs'
import { buildChartData, buildChartConfig, buildCombinedChartData } from './build.mjs'

export function renderSingleChart (data, title) {
  const chartData = buildChartData(data) // Create chart data for the teamMember
  const config = buildChartConfig(chartData, title) // Create chart config for the teamMember
  return initialiseChart(`chart-${data.id}`, config) // Initialize and return the chart
}

export function renderAllCharts () {
  teamMembers.forEach(teamMember => renderSingleChart(teamMember, `Team member: ${teamMember.id}`)) // Render a chart for each teamMember
  const combined = buildCombinedChartData()
  renderSingleChart(combined, 'Team: Combined data')
}

export default renderAllCharts
