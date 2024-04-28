const session = require('express-session');

const startSession = app =>
{
    app.use(session(
        
        {
            secret: 'Projeto Faculdade',
            resave: true,
            saveUninitialized: true,
            cookie: {secure: false, maxAge: 24 * 60 * 60 * 1000},
        }
    ))
}

module.exports = startSession;