'use strict';

const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  
	title: {type: String, required: true},
    content: {type: String, required: true},
    author: {
    	firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    }

});

blogSchema.methods.serialize = function() {

  return {
    title: this.title,
    content: this.content,
    author: this.author.firstName + " " + this.author.lastName,
    created: this._id
  };
}





const BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = {BlogPost};