const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const Task = require('../controllers/TaskController');
const Project = require('../controllers/ProjectController');
const {auth} = require('../middlewares/auth');


/**ROTAS PADRÃO*/
Router.get('/', auth, Home.index);
Router.get('/logout', Home.logout);

/**ROTAS DE PROJETOS*/
Router.get('/project/content/:projeto', auth, Project.index)
Router.post('/project/create-project', auth, Project.createProject);
Router.post('/project/create-task', auth, Project.createTask);


/**ROTAS DE TAREFAS*/
Router.get('/project/task-load/:identifier', auth, Task.load);


module.exports = Router;