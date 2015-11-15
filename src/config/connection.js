const dbConnection = function(dbURL) {
  GLOBAL.db = GLOBAL.db || require('mongoskin').db(dbURL);
};

exports.mongo = dbConnection;
