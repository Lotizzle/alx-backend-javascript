// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 5 when inputs are 1.2 and 3.7', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });

        it('should return 6 when inputs are 1.5 and 3.7', () => {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });

        it('should return 0 when inputs are 0 and 0', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return -3 when inputs are 1.2 and 3.7', () => {
            expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
        });

        it('should return -2 when inputs are 1.5 and 3.7', () => {
            expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
        });

        it('should return 0 when inputs are 0 and 0', () => {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.1);
        });

        it('should return 0.25 when inputs are 1.2 and 3.7', () => {
            expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.be.closeTo(0.25, 0.1);
        });

        it('should return 0.5 when inputs are 1.5 and 3.7', () => {
            expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.be.closeTo(0.5, 0.1);
        });

        it('should return "Error" when the rounded second input is 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return "Error" when both inputs are 0', () => {
            expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
        });
    });

    it('should throw an error for invalid operation type', () => {
        expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
});
