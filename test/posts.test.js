'use strict';
const assert = require('chai').assert;
const request = require('request');
describe('When I access posts page', function() {
  const baseURL = 'http://' + config.host + ':' + config.serverPort + '/posts';
  describe(' and try to fetch last posts', function() {
    let resp;
    before(function(done) {
      request.get(baseURL, function(error, response) {
        resp = response;
        done();
      });
    });
    it('should return success (200)', function() {
      assert.equal(200, resp.statusCode);
    });
  });
});
