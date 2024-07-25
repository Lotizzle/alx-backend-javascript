import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -4 when rounding -1.4 and -2.6', function() {
      expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    });

    it('should return 0 when rounding 0 and 0', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1 when rounding -1.4 and -2.6', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -2.6)).to.equal(2);
    });

    it('should return 0 when rounding 0 and 0', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return 1 when rounding -1.4 and -1.4', function() {
      expect(calculateNumber('DIVIDE', -1.4, -1.4)).to.equal(1);
    });

    it('should return Error when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 0 when dividing 0 by any number', function() {
      expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    });
  });

  it('should throw an error for invalid operation type', function() {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
  });
});
