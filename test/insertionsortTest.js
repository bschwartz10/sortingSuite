const assert = require('chai').assert
const insertionSort = require('../insertionsort')

describe('insertionSort function', function() {
  it('sorts an array of elements by its values', function() {
    assert.deepEqual(insertionSort([4, 2, 11, 14, 1]), [1, 2, 4, 11, 14])
  })
})
