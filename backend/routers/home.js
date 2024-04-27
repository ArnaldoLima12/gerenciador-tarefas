const Router = require('express').Router();


Router.get('/', (req, res) =>
{
    res.send('Pagina home');
})

module.exports = Router;