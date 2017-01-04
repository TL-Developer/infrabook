'use strict';

var supertest = require('supertest')
  , mocha     = require('mocha')
  , expect    = require('chai').expect
  , app       = require('../../config/express')();

var request = supertest(app);


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

describe('Routes', () => {

  describe('GET /users', () => {

    it('shold return a list of users', (done) => {
      request.get('/users').expect(200).end((err, res) => {
        expect(res.body).to.be.eql(users[0]);
        done(err);
      });
    });

  });

  describe('GET /feeds', () => {

    it('shold return a list of all feeds', (done) => {
      request.get('/feeds').expect(200).end((err, res) => {
        expect(res.body).to.be.eql(users[0].feeds);
        done(err);
      });
    });

  });

  describe('GET /users/feeds', () => {

    it('shold return a user with your list of feeds', (done) => {
      request.get('/users/feeds').expect(200).end((err, res) => {
        expect(res.body).to.be.eql(users[0].feeds);
        done(err);
      });
    });

  });
});
