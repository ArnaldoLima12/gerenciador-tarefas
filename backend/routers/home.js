const Router = require('express').Router();
const Home = require('../controllers/HomeController');
const auth = require('../middlewares/auth');

Router.get('/', auth, Home.index)

module.exports = Router;