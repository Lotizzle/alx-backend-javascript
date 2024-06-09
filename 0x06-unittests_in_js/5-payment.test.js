// 5-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
	consoleSpy.restore();
    });

    it('should log the total when called with 100 and 30', () => {
        sendPaymentRequestToApi(100, 30);

	expect(consoleSpy.calledOnce).to.be.true;
	expect(consoleSpy.calledWithExactly('The total is: 130')).to.be.true;
    });

    it('should log the total when called with 10 and 20', () => {
        sendPaymentRequestToApi(10, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 30')).to.be.true;
    });
});
