const logger = function(config) {
  const env = process.env.NODE_ENV || 'development';
  GLOBAL.logger = GLOBAL.logger ||  require('./logger/logger.' + env)(config);
};

module.exports = logger;
