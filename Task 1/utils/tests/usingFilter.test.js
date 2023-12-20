import {describe, expect, it} from '@jest/globals'
import {usingFilter} from '../usingFilter.js'

describe('usingFilter', () => {
  describe('uniqueAndSorted', () => {
    it('returns unique and sorted numbers in descending order by default', () => {
      const result = usingFilter.uniqueAndSorted([4, 2, 2, 8, 3, 3, 1])
      expect(result).toEqual([8, 4, 3, 2, 1])
    })

    it('returns unique and sorted numbers in ascending order when specified', () => {
      const result = usingFilter.uniqueAndSorted([4, 2, 2, 8, 3, 3, 1], 'ASC')
      expect(result).toEqual([1, 2, 3, 4, 8])
    })

    it('returns an empty array when input is empty', () => {
      const result = usingFilter.uniqueAndSorted([])
      expect(result).toEqual([])
    })
  })

  describe('factorNumbersBy', () => {
    it('returns numbers multiplied by a factor', () => {
      const result = usingFilter.factorNumbersBy([1, 2, 3], 3)
      expect(result).toEqual([3, 6, 9])
    })

    it('returns numbers multiplied by 2 when no factor is specified', () => {
      const result = usingFilter.factorNumbersBy([1, 2, 3])
      expect(result).toEqual([2, 4, 6])
    })
  })

  describe('sumAllNumbers', () => {
    it('returns the sum of all numbers', () => {
      const result = usingFilter.sumAllNumbers([1, 2, 3])
      expect(result).toEqual(6)
    })

    it('returns 0 when input is empty', () => {
      const result = usingFilter.sumAllNumbers([])
      expect(result).toEqual(0)
    })
  })

  describe('sumDivisibleBy', () => {
    it('returns the sum of numbers divisible by a divisor', () => {
      const result = usingFilter.sumDivisibleBy([1, 2, 3, 4, 5, 6], 2)
      expect(result).toEqual(12)
    })

    it('returns 0 when divisor is 0', () => {
      const result = usingFilter.sumDivisibleBy([1, 2, 3, 4, 5, 6], 0)
      expect(result).toEqual(0)
    })
  })

  describe('oddNumbersOnly', () => {
    it('returns only odd numbers', () => {
      const result = usingFilter.oddNumbersOnly([1, 2, 3, 4, 5, 6])
      expect(result).toEqual([1, 3, 5])
    })

    it('returns an empty array when there are no odd numbers', () => {
      const result = usingFilter.oddNumbersOnly([2, 4, 6])
      expect(result).toEqual([])
    })
  })
})
