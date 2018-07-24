let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('../LiveChatNatura/Config/db');


    const app = express();
    
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => { console.log('Conectado ...') },
        err => { console.log('Erro ao conectar. Erro: ' + err) }

    );

    const livechatRoutes = require('./routes/livechat.route');

    app.use(bodyParser.json());
    app.use(cors);
    app.use('/livechats', livechatRoutes);
    
    const port = process.env.PORT || 4000;


    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });