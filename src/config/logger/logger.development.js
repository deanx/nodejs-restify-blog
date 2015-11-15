const colors = require('colors');

const logger = function(config) {
  this.log = function(message, level) {
    level = level || 'INFO';
    console.log(level.red, '::'.red, message);
  };
  return this;
};

module.exports = logger;
