var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema =  mongoose.Schema;

module.exports = () => {

  var userSchema =  new Schema({
    local: {
      username: {type: String},
      password: {type: String},
      email: {type: String},
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
      created: {
        type: Date,
        default: Date.now
      }
    },
    google: {
      id: String,
      token: String,
      email: String,
      name: String
    },
  });

  userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
  };

  userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
  };

  return mongoose.model('Users', userSchema);
};
