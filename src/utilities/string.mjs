export function toCamelCase (str) {
  return str
    // Replace special characters with a space
    .replace(/[^a-zA-Z0-9]/g, ' ')
    // Remove any leading or trailing spaces
    .trim()
    // Convert the string to lower case
    .toLowerCase()
    // Split the string into words
    .split(' ')
    // Convert the first character of each word to upper case (except the first word)
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    // Join all the words into a single string
    .join('')
}
