const express = require('express');
const app = express();
const livechatRoutes = express.Router();

const ConsumidorSite = require('../models/ConsumidorSite');

livechatRoutes.route('/add').post(function(req, res) {
    let consumidor = new ConsumidorSite(req.body);
    consumidor.save()
        .then(game => {
            res.status(200).json({'consumidor' : 'Consumidor adicionado com sucesso.'});
        })
        .catch(err => {
            res.status(400).send('Não foi possível salvar.');
        })
});

livechatRoutes.route('/').get(function(req, res) {
    ConsumidorSite.find( function(err, consumidores) {
        if (err) {
            console.log(err);
        } else {
            res.json(consumidores);
        }
    });
});

livechatRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    ConsumidorSite.findById(id, function(err, consumidor) {
        if (err) {
            console.log(err);
        } else {
            res.json(consumidor);
        }
    });
});

livechatRoutes.route('/update/:id').post(function(req, res) {
    let id = req.params.id;
    ConsumidorSite.findById(id, function(err, consumidor) {
        if (!consumidor) {
            return next(new Error('Registro não encontrado.'));
        } else {
            consumidor.Nome = req.body.Nome;
            consumidor.Email = req.body.Email;
            consumidor.Telefone = req.body.Telefone;
            consumidor.CPF = req.body.CPF;

            consumidor.save()
                .then(consum => {
                    res.json('Registro Atualisado.');
                })
                .catch(err =>{
                    res.status(400).send('Não foi possível atualizar o registro.')
                });
        }
    });
});

livechatRoutes.route('/delete/:id').get(function(req, res) {
    let id = req.params.id;
    ConsumidorSite.findById({ _id : id}, function(err, consumidor) {
        if (err) {
            res.json(err);
        } else {
            res.json('Registro removido com sucesso.');
        }
    });
});
