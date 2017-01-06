var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

module.exports = () => {

  var userSchema =  new Schema({
    user: {type: String},
    displayName: {type: String},
    photoProfile: {type: String},
    address: {
      lagradouro: {type: String},
      cep: {type: String},
      neighborhood: {type: String},
      city: {type: String},
      phones: [
        {
          tel: [{type: String}],
          cel: [{type: String}]
        }
      ]
    },
    albuns: [{ type: Schema.Types.ObjectId, ref: 'Albuns' }],
    feeds: [{ type: Schema.Types.ObjectId, ref: 'Feeds' }],
    created: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Users', userSchema);
};
