const assert  = require('chai').assert
const bubbleSort = require('../bubblesort')

describe('bubbleSort functionality', function() {
  context('bubbleSort function', function() {
    it('sorts an array of integers', function() {
      assert.deepEqual(bubbleSort([4, 2, 11, 14, 1]), [1, 2, 4, 11, 14])
    });
  });
});
