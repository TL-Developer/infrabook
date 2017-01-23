module.exports = (app) => {

  var controller = {}
    , UsersModel = app.models.users
    , UsersSignModel = app.models.userSign
    , AlbunsModel = app.models.albuns
    , FeedsModel = app.models.feeds;

  // CADASTRANDO MOCKS
  function cadastrarMocks(){

    var user = {
      user: 'tiago.jlima@yahoo.com.br',
      displayName: 'Tiago Lima',
      photoProfile: 'public/images/users/tiago-lima/perfil.png',
      address: {
        lagradouro: 'Borboleta amarela, 57',
        cep: '08081570',
        neighborhood: 'Jd. helena',
        city: 'São Paulo',
        phones: [
          {
            tel: ['22-1111-1111', '22-1111-1111'],
            cel: ['22-1111-1111', '22-1111-1111']
          }
        ]
      }
    };


    var album = {
      ownerUser: 'tiago.jlima@yahoo.com.br',
      title: 'titulo da imagem',
      images: ['public/images/users/tiago-lima/album/1.png'],
      likes: 0,
      whoLikes: ['tiago lima']
    };


    var feed = {
      ownerUser: 'tiago.jlima@yahoo.com.br',
      title: 'Titulo da Noticia',
      message: 'Mensagem do post aqui',
      images: ['public/images/users/tiago-lima/feeds/1.png'],
      likes: 0,
      whoLikes: ['tiago lima'],
      comments: [
        {
          userCommented: 'tiago lima',
          message: 'muita legal essa noticia',
          likes: 0
        }
      ]
    };

    // CRIANDO ÚNICO USUARIO
    UsersModel.create(user).then(function(data){
      console.log('Cadastrado com sucesso ' + data);
    }, function(err){
      console.log(err);
    });

    /// CRIANDO ÚNICO ALBUM
    AlbunsModel.create(album).then(function(data){
      console.log('Cadastrado com sucesso ' + data);
    }, function(err){
      console.log(err);
    });

    // CRIANDO ÚNICO FEED
    FeedsModel.create(feed).then(function(data){
      console.log('Cadastrado com sucesso ' + data);
    }, function(err){
      console.log(err);
    });

    FeedsModel.create(feed).then(function(data){
      console.log('Cadastrado com sucesso ' + data);
    }, function(err){
      console.log(err);
    });
  };
  // cadastrarMocks();

  // GET TODOS USUARIOS
  controller.getAllUsers = (req, res) => {
    UsersModel.find().then((allUsers) => {
      res.status(200).json(allUsers);
    });
  };

  // GET TODOS USUARIOS
  controller.getAllUsersSign = (req, res) => {
    UsersSignModel.find().then((allUsers) => {
      res.status(200).json(allUsers);
    });
  };

  // GET TODOS FEEDS DE TODOS UM USUARIOS
  controller.getAllFeeds = (req, res) => {
    FeedsModel.find().then((allFeeds) => {
      console.log(allFeeds)
      res.status(200).json([
        {
          user: req.user,
          feeds: allFeeds
        }
      ]);
    });
  };

  // GET TODOS ALBUNS DE UM USUARIO
  controller.getAllAlbuns = (req, res) => {
    AlbunsModel.findOne().then((allAlbuns) => {
      res.status(200).json({allAlbuns});
    });
  };

  return controller;

};
