import formatColours from '../../utilities/colours.mjs'
import { normaliseScores } from '../../utilities/math.mjs'

export function generateChartData (teamMember) {
  const capabilityScores = []
  for (const value of Object.values(teamMember.capabilityScores)) {
    capabilityScores.push(value)
  }
  const normalisedScores = normaliseScores(capabilityScores)
  const capabilityLayers = generateChartLayers(normalisedScores) // Generate layers based on scores
  return {
    capabilityScores: normalisedScores, // Return the original scores
    capabilityLayers // Return the generated layers
  }
}

function generateChartLayers (scores) {
  const layers = [] // Initialize an empty array for layers
  for (let i = 0; i < 5; i++) { // Iterate 5 times to create 5 layers 1 for each coloured segment
    const layerData = i === 0 ? scores : mapScoresToLayers(scores, i) // Use original scores for the first layer, transformed scores for others
    layers.unshift({ // Add the new layer to the beginning of the layers array
      data: layerData, // Set the layer data
      backgroundColor: formatColours(layerData) // Set the background color using formatColours function
    })
  }
  return layers // Return the array of layers
}

function mapScoresToLayers (scores, layerIndex) {
  return scores.map(score => { // Map each score in the array
    let newValue = score - 2 * layerIndex // Subtract twice the layer index from the score
    newValue = Math.max(newValue, 0) // Ensure the new value is not negative
    if (newValue % 2 !== 0) newValue += 1 // If the new value is odd, increase it by 1 to make it even
    return newValue // Return the transformed score
  })
}
