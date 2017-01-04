'use strict';

var supertest = require('supertest')
  , mocha     = require('mocha')
  , expect    = require('chai').expect
  , app       = require('../../config/express')();

var request = supertest(app);

var myPost = {

};

describe('Routes Feeds', () => {
  it('shold return a list of feeds', (done) => {
    request.get('/api/v1/feeds').status(200).end((err, res) => {
      expect(res.body[0]).to.be.eql(myPost);
      done(err);
    });
  });
});
