const router = function(server) {
  server.get('/', function(request, response, next) {
    response.send({'message': 'blog!'});
    next();
  });
};

module.exports = router;
