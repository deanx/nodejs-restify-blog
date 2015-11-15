'use strict';

const env = process.env.NODE_ENV || 'development';

const restify = require('restify');

const config = require('./config/' + env + '.env');

require('./config/logger.js')(config);

require('./config/connection').mongo(config.mongodbURL);

const server = restify.createServer({
  name: 'Blog API',
  version: '1.0.0',
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

require('./config/routes/router.js')(server);

if (!module.parent) {
  server.listen(config.serverPort, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
}
module.exports = server;
