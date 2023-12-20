import {SORT} from '../consts/index.js'

/**
 * Creates a sorted array from the unique elements of the given array.
 * This function uses a Set to filter out duplicates and then sorts the result in either descending or ascending order.
 * By default, it sorts in descending order as defined by the SORT.DESC constant.
 *
 * @param {Array} arr - The array to be processed. It can contain any elements that are comparable using standard JavaScript comparison operators.
 * @param {string} [sortDirection=SORT.DESC] - Optional. The direction in which to sort the array. Defaults to SORT.DESC for descending order. Use SORT.ASC for ascending order.
 * @returns {Array} A new array containing the unique, sorted elements from the input array.
 */
const uniqueAndSortedBetter = (arr, sortDirection = SORT.DESC) => {
  let uniqueNumbers = Array.from(new Set(arr))

  uniqueNumbers.sort((a, b) => {
    return sortDirection === SORT.DESC ? b - a : a - b
  })

  return uniqueNumbers
}

export const sortingArrayReturnUniqueValues = {
  uniqueAndSortedBetter
}
