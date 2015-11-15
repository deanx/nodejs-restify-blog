const utils = {
  requestAssign: function(error, response, body) {
    return {
      'error': error,
      'response': response,
      'body': body,
    };
  },
};

module.exports = utils;
