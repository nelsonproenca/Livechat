const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConsumidorSite = new Schema({
    Nome: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Telefone: {
        type: String,
        require: true
    },
    CPF: {
        type: String,
        require: true
    } 
},{
    collection: Livechats
});

module.exports = mongoose.model('ConsumidorSite', ConsumidorSite);
