export function normaliseScores (capabilityScores) {
  const normaliseScores = []
  for (let i = 0; i < capabilityScores.length; i++) {
    normaliseScores.push(roundIfNotWhole(capabilityScores[i]))
  }
  return normaliseScores
}

export function roundIfNotWhole (number) {
  // Check if the number is not a whole number
  if (number % 1 !== 0) {
    // Round to the nearest whole number
    return Math.floor(number)
  }
  // Return the number as is if it's already whole
  return number
}
