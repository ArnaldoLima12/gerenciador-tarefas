const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const Task = require('../controllers/TaskController');
const Team = require('../controllers/TeamController');
const auth = require('../middlewares/auth');


/**ROTAS PADRÃO*/
Router.get('/', auth, Home.index);
Router.get('/logout', Home.logout);


/**ROTAS DE TAREFAS*/
Router.get('/tarefas', auth, Task.index);


/**ROTAS DE EQUIPES*/
Router.get('/equipes', auth, Team.index);
Router.post('/equipes/create-user', auth, Team.createUser);
Router.post('/equipes/create-team', auth, Team.createTeam);


module.exports = Router;