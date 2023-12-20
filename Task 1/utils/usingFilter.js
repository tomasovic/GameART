import {SORT} from './consts/index.js'

/**
 * Processes an array to first remove duplicate elements and then sort the remaining elements either in descending or ascending order.
 * The function performs two passes: first to identify unique elements, and second to sort these elements.
 * By default, the function sorts in descending order.
 * ⚠️Warning - normally it is done with Set, sort
 *
 * @param {Array} arr - The array to be processed. It should contain elements that can be compared numerically.
 * @param {string} [sortDirection='DESC'] - Optional. Specifies the sorting direction. Defaults to 'DESC' for descending order. Use 'ASC' for ascending order.
 * @returns {Array} A new array containing the unique elements from the input array, sorted as per the specified direction.
 */
export const uniqueAndSorted = (arr, sortDirection = SORT.DESC) => {
  let uniqueNumbers = []
  let sortedNumbers = []

  arr.filter(num => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num)
      return true
    }
    return false
  })

  if (uniqueNumbers.length > 0) {
    sortedNumbers.push(uniqueNumbers[0])
  }

  uniqueNumbers.slice(1).forEach(num => {
    let index = sortedNumbers.findIndex(sortedNum =>
      sortDirection === SORT.DESC ? num > sortedNum : num < sortedNum
    )
    index === -1 ? sortedNumbers.push(num) : sortedNumbers.splice(index, 0, num)
  })

  return sortedNumbers
}

/**
 * Multiplies each element in a given array of numbers by a specified factor and returns a new array containing these multiplied values.
 * ⚠️ Warning - normally it is done with map
 *
 * @param {number[]} arr - An array of numbers to be multiplied.
 * @param {number} [factor=2] - Optional. The factor by which each element in the array is multiplied. Defaults to 2.
 * @returns {number[]} A new array with each original element multiplied by the given factor.
 */
export const factorNumbersBy = (arr, factor = 2) => {
  let multiplied = []

  arr.filter(num => {
    multiplied.push(num * factor)
    return true
  })

  return multiplied
}

/**
 * Calculates the sum of all numbers in a given array.
 * ⚠️Warning - normally it is done with reduce
 *
 * @param {number[]} arr - An array of numbers to be summed.
 * @returns {number} The sum of all numbers in the array.
 */
export const sumAllNumbers = (arr) => {
  let sum = 0
  arr.filter(num => {
    sum += num
    return true
  })

  return sum
}

/**
 * Calculates the sum of all numbers in a given array that are divisible by a specified divisor.
 * If the divisor is zero, logs an error and returns 0.
 * ⚠️Warning - normally it is done with reduce
 *
 * @param {number[]} arr - An array of numbers to be evaluated.
 * @param {number} [divisor=3] - Optional. The divisor used to determine if a number should be included in the sum. Defaults to 3.
 * @returns {number} The sum of numbers divisible by the divisor. Returns 0 if the divisor is 0.
 */
export const sumDivisibleBy = (arr, divisor = 3) => {
  if (divisor === 0) {
    return 0
  }

  let sum = 0
  arr.filter(num => {
    if (num % divisor === 0) {
      sum += num
    }
    return true
  })

  return sum
}

/**
 * Filters an array of numbers, returning a new array containing only the odd numbers.
 *
 * @param {number[]} arr - An array of numbers to be filtered.
 * @returns {number[]} A new array consisting solely of the odd numbers from the original array.
 */
export const oddNumbersOnly = (arr) => {
  return arr.filter(num => num % 2 !== 0)
}

export const usingFilter = {
  uniqueAndSorted,
  factorNumbersBy,
  sumAllNumbers,
  sumDivisibleBy,
  oddNumbersOnly
}
