let assert = require('assert');
let a2o = require('../index')

describe('a2o', function() {
  describe('()', function() {
    it('should return an empty object with an empty array', function() {
      assert.deepEqual(a2o([]), {});
      assert.deepEqual(a2o(), {});
    });

    it('should return keys and values when a valid array is passed', function() {
      assert.deepEqual(a2o(['a', 23, 'hello', 'hella', 3, 4]), {a: 23, hello: 'hella', 3: 4});
    });

    it('should not add the last key if theres no value for it', function() {
      assert.deepEqual(a2o(['a', 23, 'hello']), {a: 23});
    });
  });
});
