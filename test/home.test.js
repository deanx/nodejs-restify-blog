'use strict';
require('./index.js');
const app = require('../app.js');
const assert = require('chai').assert;
const request = require('request');
const retorno = {};
function requestAssign(error, response, body) {
  retorno.error = error;
  retorno.response = response;
  retorno.body = body;
}

describe('When I go to the home page', function() {
  const baseURL = 'http://' + config.host + ':' + config.serverPort;

  describe(' and I just try to open it', function() {
    before(function(done) {
      app.listen(config.serverPort, function() {
      });
      done();
    });

    before(function(done) {
      request.get(baseURL, function(error, response, body) {
        requestAssign(error, response, body);
        done();
      });
    });
    it('shoud give a simple success (200)', function() {
      assert.equal(200, retorno.response.statusCode);
    });
    it('should show a message blog', function() {
      assert.equal('{"message":"blog!"}', retorno.body);
    });
  });
});
