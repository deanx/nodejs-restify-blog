routerUtils = {};

routerUtils.defaultCallback = function(err, result, res, next) {
  next.ifError(err);
  res.send(result);
  next();
};

module.exports = routerUtils;
