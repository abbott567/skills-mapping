import hexToRgba from 'hex-to-rgba'

function formatColours (dataset, opacity = 1) {
  const colours = [] // Initialize an empty array to store the formatted colours
  for (const stat of dataset) { // Iterate over each statistic in the dataset
    // If the statistic is 2 or less, assign a specific colour
    if (stat <= 2) colours.push(hexToRgba('#dc3f2c', opacity))
    // If the statistic is 4 or less (and more than 2), assign a different colour
    else if (stat <= 4) colours.push(hexToRgba('#efa33b', opacity))
    // If the statistic is 6 or less (and more than 4), assign another colour
    else if (stat <= 6) colours.push(hexToRgba('#f9e53e', opacity))
    // If the statistic is 8 or less (and more than 6), assign a different colour
    else if (stat <= 8) colours.push(hexToRgba('#89c057', opacity))
    // If the statistic is 10 or less (and more than 8), assign a final colour
    else if (stat <= 10) colours.push(hexToRgba('#6f4689', opacity))
  }

  return colours // Return the array of formatted colours
}

// Export the formatColours function as the default export from this module
export default formatColours
