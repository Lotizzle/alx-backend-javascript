const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when rounding 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4 when rounding -1.4 and -2.6', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });

    it('should return 0 when rounding 0 and 0', function() {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when rounding 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 when rounding -1.4 and -2.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.6), 2);
    });

    it('should return 0 when rounding 0 and 0', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when rounding 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return 1 when rounding -1.4 and -1.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -1.4), 1);
    });

    it('should return Error when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0 when dividing 0 by any number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
    });
  });

  it('should throw an error for invalid operation type', function() {
    assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid operation type/);
  });
});
