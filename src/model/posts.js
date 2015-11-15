posts = {};

posts.fetchAll = function(callback) {
  db.collection('posts').find({},{_id:0}).sort({_id: -1}).toArray(callback);
};

posts.fetchPageList = function(page,limit, callback) {
  db.collection('posts').find({},{_id:0,text:0}).skip((page-1)*limit).limit(parseInt(limit)).toArray(callback);
};

posts.insertPost = function(post, callback) {
  db.collection('posts').insert(post, callback);
};

module.exports = posts;
