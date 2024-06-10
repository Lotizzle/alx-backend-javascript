// 6-payment_token.test.js

const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with {data: "Successful response from the API"} when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch(done);
  });
});
