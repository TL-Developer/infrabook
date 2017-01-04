var users = [
  {
    profile: {
      name: 'tiago.jlima',
      displayName: 'Tiago Lima',
      photoProfile: 'public/images/users/tiago-lima/perfil.png',
      phones: [
        {
          tel: ['22-1111-1111', '22-1111-1111'],
          cel: ['22-1111-1111', '22-1111-1111']
        }
      ],
      address: {
        lagradouro: 'Borboleta amarela, 57',
        cep: '08081570',
        neighborhood: 'Jd. helena',
        city: 'São Paulo'
      },
      album: [
        {
          title: 'titulo da imagem',
          image: 'public/images/users/tiago-lima/album/1.png'
        }
      ]
    },
    feeds: [
      {
        description: 'Mensagem do post aqui',
        image: 'public/images/users/tiago-lima/feeds/1.png'
      }
    ]
  }
];


module.exports = (app) => {
  return users;
};
