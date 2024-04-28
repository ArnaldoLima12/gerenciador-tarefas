const Router = require('express').Router();
const login = require('../controllers/LoginController.js');

/**Rota de login*/
Router.get('/', login.index);
Router.post('/auth', login.auth);


module.exports = Router;