'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/NodeBlogPostsApp';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-NodeBlogPostsApp';
exports.PORT = process.env.PORT || 8080;

//app name on heroku: guarded-scrubland-84208
