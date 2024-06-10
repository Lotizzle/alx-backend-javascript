// api.test.js

const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let server;

  before((done) => {
    server = app.listen(7865, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should return status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
  });

  it('should return the correct result', async () => {
    const res = await request(app).get('/');
    expect(res.text).to.equal('Welcome to the payment system');
  });
});
