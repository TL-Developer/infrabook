var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema =  mongoose.Schema;

module.exports = () => {

  var userSignSchema =  new Schema({
    local: {
      username: String,
      password: String
    },
    google: {
      id: String,
      token: String,
      email: String,
      name: String
    },
  });

  userSignSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
  };

  userSignSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
  };

  return mongoose.model('userSign', userSignSchema);
};
