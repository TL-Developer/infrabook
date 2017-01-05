var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

module.exports = () => {

  var feedsSchema =  new Schema({
    ownerUser: {type: String},
    title: {type: String},
    message: {type: String},
    images: [
      {type: String}
    ],
    likes: {type: Number},
    whoLikes: [{type: String}],
    comments: [
      {
        userCommented: {type: String},
        message: {type: String},
        likes: {type: Number},
        created: {
          type: Date,
          default: Date.now
        }
      }
    ],
    created: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Feeds', feedsSchema);
};
