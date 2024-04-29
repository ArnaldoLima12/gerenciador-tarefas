const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const Task = require('../controllers/TaskController');
const Team = require('../controllers/TeamController');
const auth = require('../middlewares/auth');


/**ROTAS PADRÃO*/
Router.get('/', auth, Home.index);
Router.get('/logout', Home.logout);


/**ROTAS DE TAREFAS*/
Router.get('/tarefas', Task.index);


/**ROTAS DE EQUIPES*/
Router.get('/equipes', Team.index);
Router.post('/equipes/create-user', Team.createUser);


module.exports = Router;