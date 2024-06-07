// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });

        it('should return 6 when inputs are 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });

        it('should return 0 when inputs are 0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -3 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });

        it('should return -2 when inputs are 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
        });

        it('should return 0 when inputs are 0 and 0', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return 0.25 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7).toFixed(2), '0.25');
        });

        it('should return 0.5 when inputs are 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7).toFixed(1), '0.5');
        });

        it('should return "Error" when the rounded second input is 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return "Error" when both inputs are 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
        });
    });

    it('should throw an error for invalid operation type', () => {
        assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
});
