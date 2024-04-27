const Router = require('express').Router();
const login = require('../controllers/LoginController.js');

/**Rota de login*/
Router.get('/', login.index);


module.exports = Router;