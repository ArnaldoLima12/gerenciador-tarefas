const express = require('express');
const path = require('node:path');
const handle = require('./configs/handlebars.js');
const App = express();
const port = 8000;

/**CONFIGURAÇÃO DE ELEMENTOS ESTÁTICOS*/
App.use(express.static(path.join(__dirname, 'frontend')));

/**PERMISSÃO PARA ENVIO DE FORMULARIOS*/
App.use(express.urlencoded({extended: true}));

/**CONFIGURAÇÕES GERAIS DAS VIEWS*/
handle(App);

/**IMPORTAÇÃO DE ROTAS*/
const loginRouters = require('./routers/login.js');
const homeRouters = require('./routers/home.js');

App.use('/', loginRouters);
App.use('/home', homeRouters)

module.exports = {App, port};