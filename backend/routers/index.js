const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const Task = require('../controllers/TaskController');
const Team = require('../controllers/TeamController');
const {auth} = require('../middlewares/auth');


/**ROTAS PADRÃO*/
Router.get('/', auth(), Home.index);
Router.get('/logout', Home.logout);


/**ROTAS DE TAREFAS*/
Router.get('/tasks', auth(true), Task.index);


/**ROTAS DE EQUIPES*/
Router.get('/teams', auth(true), Team.index);
Router.post('/teams/create-user', auth(true), Team.createUser);
Router.post('/teams/create-team', auth(true), Team.createTeam);


module.exports = Router;