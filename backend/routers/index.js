const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const Task = require('../controllers/TaskController');
const Project = require('../controllers/ProjectController');
const {auth} = require('../middlewares/auth');


/**ROTAS PADRÃO*/
Router.get('/', auth(), Home.index);
Router.get('/logout', Home.logout);


/**ROTAS DE TAREFAS*/
Router.get('/tasks', auth(true), Task.index);


/**ROTAS DE PROJETOS*/
Router.get('/project/:projeto', auth(true), Project.index)
Router.post('/project/create-project', auth(true), Project.createProject);


module.exports = Router;