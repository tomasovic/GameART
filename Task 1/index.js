import {COLOR, METHODS, operations, SORT} from './utils/consts/index.js'
import {sortingArrayReturnUniqueValues} from './utils/helpers/sortingArrayReturnUniqueValues.js'
import {logResults} from './utils/helpers/logResults.js'
import {usingMap} from './utils/usingMap.js'
import {usingFilter} from './utils/usingFilter.js'
import {useReduce} from './utils/usingReduce.js'

const args = process.argv.slice(2)

// Validate input
if (args.length === 0 || args.some(isNaN)) {
  console.error('Please provide a list of numbers.')
  process.exit(1)
}

const numbers = args.map(Number)
console.log('🚀 \u001b[32m Original Array:', numbers.toString())

logResults(METHODS.MAP, COLOR.RED, operations, numbers, usingMap)
logResults(METHODS.FILTER, COLOR.GREEN, operations, numbers, usingFilter)
logResults(METHODS.REDUCE, COLOR.BLUE, operations, numbers, useReduce)

// Using better solution for unique and sorted
console.log('\n \u001b[33m --- Using better solution for unique and sorted ---')
console.log('Unique and Sorted Numbers ASC:', sortingArrayReturnUniqueValues.uniqueAndSortedBetter(numbers, SORT.ASC).toString())

