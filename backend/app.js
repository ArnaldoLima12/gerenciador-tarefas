const express = require('express');
const {STATICS} = require('./configs/constants.js');
const handle = require('./configs/handlebars.js');
const startSession = require('./configs/session.js')
const conect = require('./configs/database.js');
const App = express();
const port = 8000;

/**CONFIGURAÇÃO DE ELEMENTOS ESTÁTICOS*/
App.use(express.static(STATICS));

/**PERMISSÃO PARA ENVIO DE FORMULARIOS*/
App.use(express.urlencoded({extended: true}));

/**CONFIGURAÇÕES GERAIS DAS VIEWS*/
handle(App);

/**CONFIGURAÇÕES DE SESSÃO*/
startSession(App);

/**CONEXÃO COM BANCO DE DADOS*/
conect();

/**IMPORTAÇÃO DE ROTAS*/
const loginRouters = require('./routers/login.js');
const homeRouters = require('./routers/home.js');

App.use('/', loginRouters);
App.use('/home', homeRouters)

module.exports = {App, port};