const {DATABASE} = require('./constants');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const optionsMongo = {
    mongoUrl: DATABASE,
    dbName: 'tarefas',
    collectionName: 'sessions',
    autoRemove: 'interval',
    autoRemoveInterval: 1,
}

const startSession = app =>
{
    app.use(session(
        
        {
            secret: 'Projeto Faculdade',
            resave: false,
            saveUninitialized: true,
            store: MongoStore.create(optionsMongo),
            cookie: {secure: false, maxAge: 24 * 60 * 60 * 1000},
        }
    ))
}

module.exports = startSession;