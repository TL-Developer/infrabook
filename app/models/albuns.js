var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

module.exports = () => {

  var albumSchema =  new Schema({
    ownerUser: {type: String},
    title: {type: String},
    images: [
      {type: String}
    ],
    likes: {type: Number},
    whoLikes: [{type: String}],
    created: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Albuns', albumSchema);
};
