const postsModel = require('../../model/posts');

const defaultCallback = require('./routerUtils').defaultCallback;

const router = function(server) {
  server.get('/posts', function(req, res, next) {
    postsModel.fetchAll(function(err, results) {
      defaultCallback(err, results, res, next);
    });
  });

  server.get('/posts/pages/:page', function(req, res,next) {
    postsModel.fetchPageList(req.params.page, req.params.limit, function(err, results) {
      defaultCallback(err, results, res, next);
    });
  });

  server.post('/posts', function(req, res, next) {
    postsModel.insertPost(req.body, function(err, results) {
      defaultCallback(err, results.insertedIds, res, next);
    });

  });
};

module.exports = router;
