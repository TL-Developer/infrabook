var mongoose = require('mongoose');

module.exports = () => {

  var schema = mongoose.Schema({
    profile: {
      name: {type: String},
      displayName: {type: String},
      photoProfile: {type: String},
      phones: [
        {
          tel: [{type: String}],
          cel: [{type: String}]
        }
      ],
      address: {
        lagradouro: {type: String},
        cep: {type: String},
        neighborhood: {type: String},
        city: {type: String}
      },
      album: [
        {
          title: {type: String},
          image: {type: String}
        }
      ]
    },
    feeds: [
      {
        description: {type: String},
        image: {type: String}
      }
    ]
  });

  return mongoose.model('Users', schema);

};
