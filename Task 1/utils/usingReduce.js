import {SORT} from './consts/index.js'

/**
 * Processes an array to first remove duplicate elements and then sort the remaining elements in either descending or ascending order.
 * This function uses the `reduce` method to build a new array that satisfies both uniqueness and the specified sort order.
 * By default, the function sorts in descending order as defined by the SORT.DESC constant.
 *
 * @param {Array} arr - The array to be processed. It can contain any elements that are comparable using standard JavaScript comparison operators.
 * @param {string} [sortDirection=SORT.DESC] - Optional. Specifies the sorting direction. Defaults to SORT.DESC for descending order. Use SORT.ASC for ascending order.
 * @returns {Array} A new array containing the unique, sorted elements from the input array.
 */
const uniqueAndSorted = (arr, sortDirection = SORT.DESC) => {
  return arr.reduce((acc, num) => {
    if (!acc.includes(num)) {
      let index = acc.findIndex(el => sortDirection === SORT.DESC ? el < num : el > num)
      if (index === -1) acc.push(num)
      else acc.splice(index, 0, num)
    }

    return acc
  }, [])
}

/**
 * Multiplies each element in a given array of numbers by a specified factor and returns a new array containing these multiplied values.
 * The function uses the `reduce` method to accumulate the results.
 *
 * @param {number[]} arr - An array of numbers to be multiplied.
 * @param {number} [factor=2] - Optional. The factor by which each element in the array is multiplied. Defaults to 2.
 * @returns {number[]} A new array with each original element multiplied by the given factor.
 */
const factorNumbersBy = (arr, factor = 2) => {
  return arr.reduce((acc, num) => {
    acc.push(num * factor)

    return acc
  }, [])
}

/**
 * Calculates the sum of all numbers in a given array.
 * The function uses the `reduce` method to accumulate the sum of the array elements.
 *
 * @param {number[]} arr - An array of numbers to be summed.
 * @returns {number} The sum of all numbers in the array.
 */
const sumAllNumbers = arr => {
  return arr.reduce((acc, num) => acc + num, 0)
}

/**
 * Calculates the sum of all numbers in a given array that are divisible by a specified divisor.
 * If the divisor is zero, logs an error and returns 0.
 * The function uses the `reduce` method to accumulate the sum of numbers that meet the divisibility condition.
 *
 * @param {number[]} arr - An array of numbers to be evaluated.
 * @param {number} [divisor=3] - Optional. The divisor used to determine if a number should be included in the sum. Defaults to 3. Cannot be zero.
 * @returns {number} The sum of numbers divisible by the divisor. Returns 0 if the divisor is 0.
 */
const sumDivisibleBy = (arr, divisor = 3) => {
  if (divisor === 0) {
    return 0
  }

  return arr.reduce((acc, num) => {
    if (num % divisor === 0) acc += num

    return acc
  }, 0)
}

/**
 * Filters an array of numbers, returning a new array containing only the odd numbers.
 * The function uses the `reduce` method to build a new array consisting of only the odd numbers from the original array.
 *
 * @param {number[]} arr - An array of numbers to be filtered.
 * @returns {number[]} A new array consisting solely of the odd numbers from the original array.
 */
const oddNumbersOnly = arr => {
  return arr.reduce((acc, num) => {
    if (num % 2 !== 0) acc.push(num)

    return acc
  }, [])
}

export const useReduce = {
  uniqueAndSorted,
  factorNumbersBy,
  sumAllNumbers,
  sumDivisibleBy,
  oddNumbersOnly
}
