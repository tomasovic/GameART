import {usingMap} from '../usingMap.js'
import {describe, expect, it} from '@jest/globals'

describe('usingMap', () => {
  describe('uniqueAndSorted', () => {
    it('should return unique and sorted numbers in descending order by default', () => {
      const result = usingMap.uniqueAndSorted([4, 2, 2, 8, 3, 3, 1])
      expect(result).toEqual([8, 4, 3, 2, 1])
    })

    it('should return unique and sorted numbers in ascending order when specified', () => {
      const result = usingMap.uniqueAndSorted([4, 2, 2, 8, 3, 3, 1], 'ASC')
      expect(result).toEqual([1, 2, 3, 4, 8])
    })

    it('should return an empty array when input is empty', () => {
      const result = usingMap.uniqueAndSorted([])
      expect(result).toEqual([])
    })
  })

  describe('factorNumbersBy', () => {
    it('should return numbers multiplied by a factor', () => {
      const result = usingMap.factorNumbersBy([1, 2, 3], 3)
      expect(result).toEqual([3, 6, 9])
    })

    it('should return numbers multiplied by 2 when no factor is specified', () => {
      const result = usingMap.factorNumbersBy([1, 2, 3])
      expect(result).toEqual([2, 4, 6])
    })
  })

  describe('sumAllNumbers', () => {
    it('should return the sum of all numbers', () => {
      const result = usingMap.sumAllNumbers([1, 2, 3])
      expect(result).toEqual(6)
    })

    it('should return 0 when input is empty', () => {
      const result = usingMap.sumAllNumbers([])
      expect(result).toEqual(0)
    })
  })

  describe('sumDivisibleBy', () => {
    it('should return the sum of numbers divisible by a divisor', () => {
      const result = usingMap.sumDivisibleBy([1, 2, 3, 4, 5, 6], 2)
      expect(result).toEqual(12)
    })

    it('should return 0 when divisor is 0', () => {
      const result = usingMap.sumDivisibleBy([1, 2, 3, 4, 5, 6], 0)
      expect(result).toBe(0)
    })
  })

  describe('oddNumbersOnly', () => {
    it('should return only odd numbers', () => {
      const result = usingMap.oddNumbersOnly([1, 2, 3, 4, 5, 6])
      expect(result).toEqual([1, 3, 5])
    })

    it('should return an empty array when there are no odd numbers', () => {
      const result = usingMap.oddNumbersOnly([2, 4, 6])
      expect(result).toEqual([])
    })
  })
})
