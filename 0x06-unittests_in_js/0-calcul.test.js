const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when rounding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when rounding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when rounding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when rounding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle zero correctly', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle positive and negative mix correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, 3.6), 3);
  });
});
