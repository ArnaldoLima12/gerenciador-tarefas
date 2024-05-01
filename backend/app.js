const express = require('express');
const {STATICS, GENERATEPATH} = require('./configs/constants.js');
const handle = require('./configs/handlebars.js');
const startSession = require('./configs/session.js')
const conect = require('./configs/database.js');
const App = express();
const port = 8000;

/**CONFIGURAÇÃO DE ELEMENTOS ESTÁTICOS*/
App.use(express.static(STATICS));


App.use(express.json());
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
const indexRouters = require('./routers/index.js');

App.use('/', loginRouters);
App.use('/home', indexRouters)
App.use((req, res, next) => {
    res.render('error', {title: '404', layout: GENERATEPATH('other')})
});

module.exports = {App, port};