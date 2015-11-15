const homeRouter = require('./home');
const postsRouter = require('./posts');

const router = function(server) {
  postsRouter(server);
  homeRouter(server);
};

module.exports = router;
