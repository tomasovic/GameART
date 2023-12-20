/**
 * Logs the results of various operations.
 *
 * @param {string} title - The title of the operation.
 * @param {string} colorCode - The color code for the console log.
 * @param {Array} operations - An array of operations to be performed.
 * @param {Array} numbers - An array of numbers on which operations are performed.
 * @param {Object} handler - An object containing methods for operations.
 */
export const logResults = (title, colorCode, operations, numbers, handler) => {
  console.log(`\n \u001b[${colorCode}m --- Using ${title} ---`)
  operations.forEach(operation => {
    console.log(`${operation.description}:`, handler[operation.method](numbers).toString())
  })
}
